<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { i18n } from '$lib/i18n/index.svelte';

  let downloadUrl = $state('https://github.com/minseokk77/vesper-dsp/releases/latest');
  let version = $state('');
  let totalDownloads = $state(0);
  let changelog: { version: string; date: string; body: string }[] = $state([]);

  onMount(async () => {
    try {
      // 최신 릴리즈 다운로드 URL 및 버전
      const res = await fetch('https://api.github.com/repos/minseokk77/vesper-dsp/releases?per_page=5');
      const releases = await res.json();

      if (releases.length > 0) {
        const latest = releases[0];
        version = latest.tag_name ?? '';
        const asset = latest.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.endsWith('.exe') && !a.name.endsWith('.sig')
        );
        if (asset) downloadUrl = asset.browser_download_url;

        // 누적 다운로드 수 합산
        totalDownloads = releases.reduce((sum: number, rel: { assets: { download_count: number }[] }) =>
          sum + rel.assets.reduce((s: number, a: { download_count: number }) => s + (a.download_count || 0), 0), 0
        );

        // 체인지로그 (최근 3개)
        changelog = releases.slice(0, 3).map((r: { tag_name: string; published_at: string; body: string }) => ({
          version: r.tag_name,
          date: new Date(r.published_at).toLocaleDateString('ko-KR'),
          body: (r.body || '').split('\n').filter((l: string) => l.trim()).slice(0, 4).join('\n')
        }));
      }
    } catch {
      // 폴백 유지
    }
  });
</script>

<svelte:head>
  <title>Vesper DSP - {i18n.t.dspDetail.title}</title>
</svelte:head>

<section class="pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
  <!-- Header -->
  <div class="text-center space-y-4">
    <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter text-[#f5f5f7]">Vesper DSP</h1>
    <p class="text-xl text-[#86868b] tracking-tight">{i18n.t.dspDetail.title}</p>
  </div>

  <!-- Stats Row -->
  <div class="grid grid-cols-3 gap-4">
    <!-- 다운로드 카운터 -->
    <div class="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
      <div class="text-3xl font-bold text-indigo-400 mb-1">{totalDownloads > 0 ? totalDownloads.toLocaleString() : '—'}</div>
      <div class="text-xs text-[#86868b]">{i18n.t.dspDetail.totalDownloads}</div>
    </div>
    <!-- 버전 -->
    <div class="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
      <div class="text-3xl font-bold text-[#f5f5f7] mb-1">{version || '—'}</div>
      <div class="text-xs text-[#86868b]">Latest Version</div>
    </div>
    <!-- 플랫폼 -->
    <div class="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
      <div class="text-3xl font-bold text-[#f5f5f7] mb-1">x64</div>
      <div class="text-xs text-[#86868b]">Windows 10+</div>
    </div>
  </div>

  <!-- Intro -->
  <div class="text-lg md:text-xl text-[#86868b] font-medium leading-relaxed text-center max-w-3xl mx-auto tracking-tight">
    {i18n.t.dspDetail.intro}
  </div>

  <!-- Features Detail -->
  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px]">
      <h3 class="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-4">{i18n.t.dspDetail.box1Title}</h3>
      <p class="text-[#86868b] leading-relaxed font-medium text-[17px]">{i18n.t.dspDetail.box1Desc}</p>
    </div>
    <div class="p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[60px]">
      <h3 class="text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-4">{i18n.t.dspDetail.box2Title}</h3>
      <p class="text-[#86868b] leading-relaxed font-medium text-[17px]">{i18n.t.dspDetail.box2Desc}</p>
    </div>
  </div>

  <!-- System Requirements -->
  <div class="p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
    <h3 class="text-xl font-semibold text-[#f5f5f7] mb-6">{i18n.t.dspDetail.sysReqTitle}</h3>
    <div class="flex flex-wrap gap-3">
      {#each [['OS', 'Windows 10/11'], ['Architecture', 'x64 (64-bit)'], ['RAM', '4GB+'], ['Runtime', 'VB-Cable (Auto)'], ['Language', 'Rust']] as [label, value]}
        <span class="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-[#f5f5f7]">
          <span class="text-[#86868b]">{label}:</span> {value}
        </span>
      {/each}
    </div>
  </div>

  <!-- Changelog -->
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-[#f5f5f7]">{i18n.t.dspDetail.changelogTitle}</h3>
    {#if changelog.length === 0}
      <p class="text-[#86868b] text-sm">{i18n.t.dspDetail.changelogEmpty}</p>
    {:else}
      {#each changelog as entry}
        <div class="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
          <div class="flex items-center justify-between mb-3">
            <span class="text-indigo-400 font-semibold">{entry.version}</span>
            <span class="text-[#86868b] text-xs">{entry.date}</span>
          </div>
          <pre class="text-[#86868b] text-sm leading-relaxed whitespace-pre-wrap font-sans">{entry.body}</pre>
        </div>
      {/each}
    {/if}
  </div>

  <!-- Download -->
  <div class="flex flex-col items-center gap-3 pt-4">
    <a href={downloadUrl} download class="px-10 py-4 rounded-full bg-[#f5f5f7] text-black font-semibold text-[15px] tracking-wide hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {i18n.t.dspDetail.downloadBtn}
    </a>
    {#if version}
      <span class="text-xs text-[#86868b]">{version} · <a href="{base}/guide" class="underline hover:text-white transition-colors">{i18n.t.nav.guide}</a></span>
    {/if}
  </div>
</section>
