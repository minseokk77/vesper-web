"use client";
import { audioProducts } from "../audio-products";
import { useState } from "react";
import Link from "next/link";
import { AudioHeader, AudioFooter, Arrow } from "../components/AudioShell";
import shared from "../components/audio.module.css";
import styles from "./eq.module.css";
const examples=[{label:"저음에 온기",frequency:100,gain:4,q:.7},{label:"중역을 가볍게",frequency:1000,gain:-4,q:1.4},{label:"고역에 선명함",frequency:5000,gain:3,q:1}];
function peakResponse(frequency:number,gain:number,q:number,hz:number){
 const rate=48000,w=2*Math.PI*frequency/rate,c=Math.cos(w),alpha=Math.sin(w)/(2*q),A=10**(gain/40);
 const b0=1+alpha*A,b1=-2*c,b2=1-alpha*A,a0=1+alpha/A,a1=-2*c,a2=1-alpha/A;
 const t=2*Math.PI*hz/rate,ct=Math.cos(t),st=Math.sin(t),ct2=Math.cos(2*t),st2=Math.sin(2*t);
 return 10*Math.log10(((b0+b1*ct+b2*ct2)**2+(b1*st+b2*st2)**2)/((a0+a1*ct+a2*ct2)**2+(a1*st+a2*st2)**2));
}
export default function EqExperience(){
 const [example,setExample]=useState(0),[bypass,setBypass]=useState(false),[linked,setLinked]=useState(true);
 const band=examples[example];
 const points=Array.from({length:241},(_,i)=>{const hz=20*1000**(i/240);return `${(60+i*3.75).toFixed(3)},${(170-(bypass?0:peakResponse(band.frequency,band.gain,band.q,hz))*17).toFixed(3)}`;}).join(" ");
 return <div className={shared.site}>
 <a href="#main-content" className={shared.skip}>본문으로 이동</a>
 <AudioHeader product="EQ" links={[["#tone","Tone Study"],["#connection","DSP Link"],["#start","Getting Started"]]}/>
 <main id="main-content"><section className={shared.hero}>
 <div className={shared.heroMeta}><span>YOUR CURVE. YOUR CALL.</span><span>VESPER EQ / DESKTOP CLIENT <i/></span></div>
 <div className={styles.heroHeading}><div className={shared.heroCopy}><p className={shared.eyebrow}>내 소리를, 직접 그리다.</p><h1>작은 조절이,<br/>음색을 바꿉니다.</h1></div><div><p className={shared.intro}>주파수와 게인, 그리고 Q.<br/>가로로 넓은 화면에서 곡선과 수치를 함께 보며<br/>좋아하는 소리를 직접 조절하는 Vesper EQ.</p><div className={shared.heroActions}><a href={audioProducts.eq.download} className={shared.download}>Vesper EQ 다운로드 <Arrow diagonal/></a><a href="#start" className={shared.textLink}>배포 안내 ↓</a></div><p className={shared.requirements}>Windows x64 <span>·</span> 독립 EQ 클라이언트 <span>·</span> v{audioProducts.eq.version}</p></div></div>
 <figure id="tone" className={styles.study}>
 <div className={shared.plateHead}><span>VESPER / TONE STUDY</span><span>FIG. 01 · INTERACTIVE</span></div>
 <div className={styles.studyHeading}><h2>한 밴드의 변화.</h2><button type="button" aria-pressed={bypass} onClick={()=>setBypass(!bypass)}>{bypass?"EQ 우회 중":"EQ 적용 예시"}<span className={bypass?styles.off:styles.on}/></button></div>
 <svg viewBox="0 0 1020 335" role="img" aria-label={`${band.frequency} Hz, ${bypass?0:band.gain} dB, Q ${band.q}의 계산된 Peak 필터 응답`}>
 <g fill="none" stroke="currentColor" opacity=".15"><path d="M60 34V286H960M60 102H960M60 170H960M60 238H960M270 34V286M480 34V286M690 34V286M900 34V286"/></g>
 <g fill="currentColor" className={styles.labels}><text x="8" y="106">+4 dB</text><text x="13" y="174">0 dB</text><text x="8" y="242">−4 dB</text><text x="60" y="317">20 Hz</text><text x="260" y="317">100</text><text x="470" y="317">500</text><text x="680" y="317">2k</text><text x="880" y="317">10k</text><text x="936" y="317">20k</text></g>
 <path d="M60 170H960" stroke="currentColor" opacity=".35" strokeDasharray="5 6"/><polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="3"/>
 <circle cx={60+Math.log10(band.frequency/20)/3*900} cy={170-(bypass?0:band.gain)*17} r="6" fill="var(--accent)" stroke="var(--surface)" strokeWidth="3"/>
 </svg>
 <div className={styles.studyControls}><div className={styles.examples} role="group" aria-label="EQ 응답 예시">{examples.map((item,i)=><button type="button" key={item.label} aria-pressed={i===example} onClick={()=>{setExample(i);setBypass(false);}}>{item.label}</button>)}</div><dl><div><dt>FREQUENCY</dt><dd>{band.frequency.toLocaleString("ko-KR")} <small>Hz</small></dd></div><div><dt>GAIN</dt><dd>{band.gain>0?"+":""}{band.gain} <small>dB</small></dd></div><div><dt>Q</dt><dd>{band.q.toFixed(1)}</dd></div></dl></div>
 <figcaption>Peak 필터의 계산 응답 · 48 kHz 기준<span>사용법을 보여주는 예시입니다. 이 페이지에서는 실제 소리를 처리하지 않습니다.</span></figcaption>
 </figure><div className={shared.heroBottom}><span>곡선을 보고, 수치를 확인하고, 내 취향으로.</span><span>01 — 03 ↓</span></div></section>

 <section className={shared.section}><div className={shared.sectionHeading}><p className={shared.eyebrow}>01 / THREE CONTROLS</p><div><h2>어디를, 얼마나,<br/>얼마나 넓게.</h2><p>같은 게인도 주파수와 Q에 따라 다르게 들립니다.<br/>그래프와 밴드 표를 함께 보면서 조절하세요.</p></div></div>
 <div className={styles.details}>{[["Hz","주파수","바꾸고 싶은 음역을 고릅니다. 저역의 무게감부터 고역의 선명함까지."],["dB","게인","해당 음역을 올리거나 낮춥니다. 프리앰프로 전체 레벨을 조절할 수도 있습니다."],["Q","조절 범위","높은 Q는 좁게, 낮은 Q는 넓게. 주변 음역에 영향을 주는 폭을 정합니다."]].map(([unit,title,description])=><article key={unit}><span>{unit}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 <div className={styles.formatNote}><p>Peak · Low / High Shelf · Low / High Pass · Band Pass · Notch</p><p>최대 32개 밴드 편집 · 개별 우회 · 프리셋 저장 · JSON 및 기본 Equalizer APO 텍스트 가져오기</p></div></section>
 <section id="connection" className={shared.connectionSection}><div className={shared.connectionCopy}><p className={shared.eyebrow}>02 / DSP LINK</p><h2>앱은 따로.<br/>처리는 함께.</h2><p>EQ는 AutoEQ를 대체하지 않습니다.<br/>장비 보정 위에 내 취향을 더하는 별도 설정입니다.</p><div className={styles.connectionSwitch} role="group" aria-label="EQ 연결 방식"><button aria-pressed={linked} onClick={()=>setLinked(true)}>DSP 연결</button><button aria-pressed={!linked} onClick={()=>setLinked(false)}>EQ 단독</button></div></div>
 <div className={styles.connectionBody}><p className={styles.connectionLabel}>{linked?"EQ CLIENT → 설정 전달 → VESPER DSP":"EQ CLIENT → 자체 처리 → 출력 장치"}</p><ol className={styles.route}>{(linked?[["AutoEQ","장비 보정"],["Vesper EQ","사용자 음색"],["Output","하나의 DSP 경로"]]:[["Windows","재생 소리"],["Vesper EQ","사용자 음색"],["Output","선택한 장치"]]).map(([title,sub],i)=><li key={title}><span>0{i+1}</span><strong>{title}</strong><small>{sub}</small></li>)}</ol><p>{linked?"두 앱을 함께 실행하면 EQ 설정이 DSP에 전달됩니다. Signal Path에서 연결을 확인하고, EQ 창은 DSP에서 열 수 있습니다. 연결 중에는 EQ 트레이 아이콘이 숨겨집니다.":"DSP 없이도 EQ 클라이언트로 출력 장치를 선택하고 처리할 수 있습니다. 처음에는 해당 출력 장치의 APO 등록과 Windows 권한 승인이 필요합니다."}</p><p className={styles.routingNote}>DSP 연결 시 AutoEQ와 사용자 EQ가 전체 32개 처리 밴드 한도를 나눠 사용합니다. 남은 한도는 EQ 앱에 표시됩니다.</p><Link href="/dsp" className={shared.textLink}>Vesper DSP 살펴보기 <Arrow diagonal/></Link></div></section>
 <section id="start" className={shared.section}><div className={shared.sectionHeading}><p className={shared.eyebrow}>03 / GETTING STARTED</p><div><h2>EQ를 여는 두 가지 방법.</h2><p>단독으로 시작하거나, DSP에 연결해서 사용하세요.</p></div></div><div className={styles.startSteps}><article><span>01 / STANDALONE</span><h3>EQ 앱에서 시작.</h3><p>출력 장치를 선택하고 APO를 등록한 뒤 ENGAGE EQ를 누릅니다. 밴드를 조절하고 내 설정을 프리셋으로 저장하세요.</p></article><article><span>02 / WITH DSP</span><h3>DSP에서 EQ 열기.</h3><p>두 앱을 실행하고 DSP 연결 상태를 확인합니다. AutoEQ 설정은 DSP에, 사용자 밴드는 EQ에 각각 보관됩니다. 재생 제어는 DSP에서 합니다.</p></article></div><div className={styles.releaseNotice}><div><span>WINDOWS x64 · v{audioProducts.eq.version}</span><h3>내 취향으로, 시작하세요.</h3><p>설치 파일에 APO가 포함됩니다. 처음 사용할 때 출력 장치의 등록과 Windows 권한 승인이 필요합니다.</p></div><div className={styles.releaseActions}><a href={audioProducts.eq.download} className={shared.download}>Vesper EQ 다운로드 <Arrow diagonal/></a><a href={audioProducts.eq.release} className={shared.textLink}>변경 내역 보기 ↗</a></div></div></section>
 </main><AudioFooter/></div>;
}
