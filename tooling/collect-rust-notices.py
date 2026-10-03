import json, sys, tomllib, urllib.request, tarfile, io
from pathlib import Path
source=Path(sys.argv[1])
rows=json.loads(Path('app/open-source/inventory.json').read_text())
rows=[r for r in rows if r['ecosystem']!='cargo']
notices=[]
registries=list((Path.home()/'.cargo/registry/src').iterdir())
for scope in ['dsp','woofer']:
 root=source/scope/'src-tauri'
 manifest=tomllib.loads((root/'Cargo.toml').read_text())
 lock=tomllib.loads((root/'Cargo.lock').read_text())['package']
 own=next(p for p in lock if p['name']==f'vesper-{scope}')
 direct=dict(manifest['dependencies'])
 direct.update(manifest.get('build-dependencies',{}))
 for target in manifest.get('target',{}).values(): direct.update(target.get('dependencies',{}))
 for name in sorted(direct):
  ref=next(d for d in own['dependencies'] if d.split()[0]==name)
  parts=ref.split()
  choices=[p for p in lock if p['name']==name]
  resolved=next(p for p in choices if len(parts)<2 or p['version']==parts[1])
  package_dir=next((reg/f"{name}-{resolved['version']}" for reg in registries if (reg/f"{name}-{resolved['version']}"/'Cargo.toml').exists()),None)
  if package_dir is None:
   url=f"https://static.crates.io/crates/{name}/{name}-{resolved['version']}.crate"
   with urllib.request.urlopen(url, timeout=20) as response: archive=tarfile.open(fileobj=io.BytesIO(response.read()),mode='r:gz')
   pkg=tomllib.loads(archive.extractfile(f"{name}-{resolved['version']}/Cargo.toml").read().decode())['package']
   for member in archive.getmembers():
    filename=Path(member.name).name
    if member.isfile() and filename.lower().startswith(('license','licence','notice','copying')):
     notices.append(f"""
===== {scope} / {name} {resolved['version']} / {filename} =====
"""+archive.extractfile(member).read().decode(errors='replace'))
  else:
   pkg=tomllib.loads((package_dir/'Cargo.toml').read_text())['package']
  rows.append(dict(scope=scope.upper() if scope=='dsp' else 'Woofer',ecosystem='cargo',name=name,version=resolved['version'],license=pkg.get('license','SEE LICENSE FILE'),url=pkg.get('repository',f'https://crates.io/crates/{name}').removesuffix('.git'),kind='development' if name in manifest.get('build-dependencies',{}) else 'runtime'))
  for f in (package_dir.iterdir() if package_dir else []):
   if f.is_file() and f.name.lower().startswith(('license','licence','notice','copying')):
    notices.append(f"\n===== {scope} / {name} {resolved['version']} / {f.name} =====\n"+f.read_text(errors='replace'))
for target in ['app/open-source/inventory.json','public/open-source-inventory.json']:
 Path(target).write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
with Path('public/third-party-notices.txt').open('a',encoding='utf8') as f: f.write('\n'.join(notices))
print(f'Total direct dependency entries: {len(rows)}')
