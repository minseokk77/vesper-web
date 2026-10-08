"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../components/audio.module.css";
import { AudioHeader } from "../components/AudioShell";
import { audioProducts } from "../audio-products";

type Mode = "cable" | "direct";
const release = "https://github.com/minseokk77/vesper-dsp/releases/latest";
const stages = [
  {
    title: "오디오 입력",
    subtitle: "재생 중인 소리를 받아옵니다.",
    detail: "입력 장치의 샘플 형식",
    tag: "IN",
  },
  {
    title: "연산 정밀도",
    subtitle: "DSP 연산에 사용할 형식으로 변환합니다.",
    detail: "입력 형식 → 64-bit Float",
    tag: "64",
  },
  {
    title: "DSP 처리",
    subtitle: "EQ로 음색을 조절하고 헤드룸을 확보합니다.",
    detail: "EQ · 헤드룸 · 클리핑 감지",
    tag: "EQ",
  },
  {
    title: "리샘플링",
    subtitle: "입력과 출력의 샘플레이트를 맞춥니다.",
    detail: "레이트가 같으면 변환 생략",
    tag: "SRC",
  },
  {
    title: "출력 형식",
    subtitle: "장치가 받는 형식으로 마지막 변환을 합니다.",
    detail: "64-bit Float → 출력 형식",
    tag: "OUT",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Mark() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6 16 27 28 6M10 6l6 11 6-11"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function SignalPlate({ mode }: { mode: Mode }) {
  const labels =
    mode === "cable"
      ? ["Windows 앱", "가상 케이블", "Vesper DSP", "출력 장치"]
      : ["Windows 앱", "장치 처리 경로", "출력 장치"];
  return (
    <figure
      className={styles.plate}
      aria-label={`${mode === "cable" ? "가상 케이블" : "Direct DAC"} 연결 방식의 개념도`}
    >
      <div className={styles.plateHead}>
        <span>VESPER / SIGNAL ROUTING</span>
        <span className={styles.plateIndex}>FIG. 01</span>
      </div>
      <div className={styles.disc} aria-hidden="true">
        <div className={styles.discRing} />
        <div className={styles.discInner}>
          <span>DSP</span>
          <small>YOUR SOUND, REFINED.</small>
        </div>
        <svg viewBox="0 0 400 240" className={styles.wave}>
          <path d="M0 120h64l6-4 6 8 8-26 9 44 10-67 10 90 10-118 12 144 12-158 12 162 12-145 12 119 10-88 10 61 9-38 8 24 7-16 6 8h86" />
        </svg>
        <span className={styles.discTick}>INPUT</span>
        <span className={styles.discTickRight}>OUTPUT</span>
      </div>
      <div className={styles.platePath}>
        {labels.map((label, i) => (
          <div className={styles.pathItem} key={label}>
            <span className={styles.pathDot}>{i + 1}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <figcaption>
        연결 방식 개념도 <span>실제 형식은 장치와 설정에 따라 달라집니다.</span>
      </figcaption>
    </figure>
  );
}

export default function Experience({ version }: { version: string }) {
  const [mode, setMode] = useState<Mode>("cable");
  const [activeStage, setActiveStage] = useState(2);
  return (
    <div className={styles.site}>
      <a href="#dsp-content" className={styles.skip}>
        본문으로 이동
      </a>
      <AudioHeader
        product="DSP"
        links={[
          ["#signal", "Signal Path"],
          ["#controls", "Sound Controls"],
          ["#gaming", "Gaming Mode"],
          ["#start", "Getting Started"],
        ]}
      />
      <main id="dsp-content">
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>WINDOWS AUDIO, UNDER YOUR CONTROL.</span>
            <span>
              VERSION {version} <i />
            </span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>음악을 듣고, 게임을 즐기는 당신에게.</p>
              <h1>
                소리의 경로를,
                <br />내 손으로.
              </h1>
              <p className={styles.intro}>
                헤드폰부터 스피커까지.
                <br />
                EQ, 헤드룸, 리샘플링을 한 곳에서 조절하는
                <br className={styles.desktopBreak} /> Windows 오디오 유틸리티,
                Vesper DSP.
              </p>
              <div className={styles.heroActions}>
                <a
                  href={audioProducts.dsp.download}
                  className={styles.download}
                >
                  Windows용 다운로드 <Arrow diagonal />
                </a>
                <a href="#signal" className={styles.textLink}>
                  소리의 경로 살펴보기 <span>↓</span>
                </a>
              </div>
              <p className={styles.requirements}>
                Windows x64 <span>·</span> 무료 다운로드 <span>·</span> v
                {version}
              </p>
            </div>
            <SignalPlate mode={mode} />
          </div>
          <div className={styles.heroBottom}>
            <span>음색을 조절하고. 출력 형식을 선택하고. 경로를 확인하고.</span>
            <span>
              01 — 05 <span aria-hidden="true">↓</span>
            </span>
          </div>
        </section>

        <section id="signal" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / SIGNAL PATH</p>
            <div>
              <h2>
                소리가 지나가는 길,
                <br />
                눈으로 확인하세요.
              </h2>
              <p>
                설정 이름만으로는 부족하니까.
                <br />
                입력부터 출력까지, 각 단계가 하는 일을 펼쳐봅니다.
              </p>
            </div>
          </div>
          <div className={styles.signalDiagram}>
            <div className={styles.signalTop}>
              <span>가상 케이블 DSP 처리 경로</span>
              <span>단계를 선택해 살펴보세요.</span>
            </div>
            <div className={styles.stages} aria-label="신호 처리 단계">
              {stages.map((stage, i) => (
                <button
                  key={stage.title}
                  type="button"
                  className={`${styles.stage} ${activeStage === i ? styles.selected : ""}`}
                  aria-pressed={activeStage === i}
                  onClick={() => setActiveStage(i)}
                >
                  <span className={styles.stageNumber}>0{i + 1}</span>
                  <span className={styles.stageNode}>{stage.tag}</span>
                  <strong>{stage.title}</strong>
                  <small>{stage.detail}</small>
                </button>
              ))}
            </div>
            <div className={styles.stageDetail} aria-live="polite">
              <span>0{activeStage + 1}</span>
              <div>
                <strong>{stages[activeStage].title}</strong>
                <p>{stages[activeStage].subtitle}</p>
              </div>
              <span className={styles.detailTag}>SIGNAL PATH</span>
            </div>
          </div>
          <p className={styles.footnote}>
            64-bit는 내부 연산 정밀도입니다. 출력 비트 깊이와 샘플레이트는
            선택한 장치 및 연결 방식에 따라 달라집니다.
          </p>
        </section>

        <section
          id="controls"
          className={`${styles.section} ${styles.controls}`}
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>02 / MAKE IT YOURS</p>
            <div>
              <h2>
                작은 조절이 만드는
                <br />
                나에게 맞는 소리.
              </h2>
              <p>
                많은 설정을 켜기보다,
                <br />
                필요한 부분을 하나씩 바꿔보세요.
              </p>
            </div>
          </div>
          <div className={styles.controlRows}>
            <article className={styles.controlRow}>
              <div className={styles.controlCopy}>
                <span className={styles.controlNumber}>A</span>
                <h3>
                  EQ.
                  <br />
                  음색의 균형을 잡다.
                </h3>
                <p>
                  모델에 맞는 AutoEQ 프로필을 찾아 적용하거나, 파라메트릭 EQ로
                  주파수·게인·Q를 직접 조절하세요.
                </p>
                <span className={styles.smallLabel}>
                  AUTOEQ + PARAMETRIC EQ
                </span>
              </div>
              <figure className={styles.eqFigure}>
                <div className={styles.figureLabel}>
                  <span>FREQUENCY RESPONSE</span>
                  <span>EQ 조절 개념도</span>
                </div>
                <svg
                  viewBox="0 0 640 210"
                  role="img"
                  aria-label="주파수 대역을 선택적으로 올리거나 내리는 EQ 개념 곡선"
                >
                  <g className={styles.gridLines}>
                    <path d="M20 30h600M20 80h600M20 130h600M20 180h600M100 20v170M220 20v170M340 20v170M460 20v170M580 20v170" />
                  </g>
                  <path className={styles.eqBaseline} d="M20 105h600" />
                  <path
                    className={styles.eqCurve}
                    d="M20 105C55 105 65 48 110 48S160 118 215 118 270 105 310 105 345 151 390 151 448 72 485 72 550 105 620 105"
                  />
                  <circle cx="110" cy="48" r="5" />
                  <circle cx="390" cy="151" r="5" />
                  <circle cx="485" cy="72" r="5" />
                </svg>
                <div className={styles.eqAxis}>
                  <span>LOW / 저음</span>
                  <span>MID / 중음</span>
                  <span>HIGH / 고음</span>
                </div>
                <figcaption>
                  측정 데이터가 아닌 EQ 동작 설명용 곡선입니다.
                </figcaption>
              </figure>
            </article>
            <article className={styles.controlRow}>
              <div className={styles.controlCopy}>
                <span className={styles.controlNumber}>B</span>
                <h3>
                  헤드룸.
                  <br />
                  소리에 여유를 남기다.
                </h3>
                <p>
                  EQ로 커진 신호가 출력 한계를 넘지 않도록, 전체 게인을 낮춰
                  여유를 확보하세요. 클리핑 감지로 넘치는 신호도 확인할 수
                  있습니다.
                </p>
                <span className={styles.smallLabel}>
                  HEADROOM + CLIPPING DETECTION
                </span>
              </div>
              <figure className={styles.headroomFigure}>
                <div className={styles.figureLabel}>
                  <span>SIGNAL LEVEL</span>
                  <span>헤드룸 개념도</span>
                </div>
                <div className={styles.meterLabels}>
                  <span>출력 한계</span>
                  <span>여유 공간</span>
                </div>
                <div className={styles.meter}>
                  <div className={styles.meterSpace}>HEADROOM</div>
                  <div className={styles.meterBars}>
                    {[
                      32, 48, 38, 65, 50, 76, 60, 84, 68, 54, 72, 61, 79, 57,
                      44, 67, 53, 70, 49, 34,
                    ].map((height, i) => (
                      <i key={i} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <figcaption>
                  신호를 낮춰 확보하는 여유를 설명한 그림입니다.
                </figcaption>
              </figure>
            </article>
          </div>
        </section>

        <section className={styles.connectionSection}>
          <div className={styles.connectionHeading}>
            <p className={styles.eyebrow}>03 / FIND YOUR ROUTE</p>
            <h2>
              내 환경에 맞는
              <br />
              연결부터.
            </h2>
            <p>
              음악, 게임, 영상.
              <br />
              사용하는 장치와 연결 방식에 맞춰 시작하세요.
            </p>
          </div>
          <div className={styles.connectionBody}>
            <div
              className={styles.modeSwitch}
              role="group"
              aria-label="연결 방식 선택"
            >
              <button
                type="button"
                aria-pressed={mode === "cable"}
                onClick={() => setMode("cable")}
              >
                게이밍 모드
              </button>
              <button
                type="button"
                aria-pressed={mode === "direct"}
                onClick={() => setMode("direct")}
              >
                Hi-Fi 직결
              </button>
            </div>
            <div className={styles.routeTrack}>
              {(mode === "cable"
                ? ["게임 / 재생 앱", "가상 케이블", "Vesper DSP", "DAC / 스피커"]
                : ["재생 앱", "Windows 장치 처리", "DAC / 스피커"]
              ).map((item, i) => (
                <div key={item}>
                  <span>0{i + 1}</span>
                  <strong>{item}</strong>
                  {i < (mode === "cable" ? 3 : 2) && <Arrow />}
                </div>
              ))}
            </div>
            <div className={styles.routeDescription} aria-live="polite">
              <h3>
                {mode === "cable"
                  ? "게임 소리를 DSP로 전달하세요."
                  : "출력 장치의 처리 경로를 사용하세요."}
              </h3>
              <p>
                {mode === "cable"
                  ? "게임의 출력 장치를 가상 케이블로, Vesper의 입력을 같은 케이블로 선택하세요. EQ와 헤드룸을 거친 소리는 Vesper에서 선택한 실제 DAC나 헤드폰으로 전달됩니다."
                  : "Hi-Fi 직결은 가상 케이블 없이 출력 장치의 APO에서 DSP를 적용합니다. 장치의 APO 설치와 활성화 상태를 확인하고, 실제 처리 여부는 Signal Path에서 확인하세요."}
              </p>
            </div>
            <p className={styles.routeNote}>
              {mode === "cable"
                ? "가상 케이블은 별도로 설치해야 합니다. 출력 샘플레이트와 리샘플링 필터는 게이밍 모드에서 설정할 수 있습니다."
                : "직결 모드의 출력 샘플레이트는 Windows 장치 설정을 따릅니다. 장치에서 APO가 정상 활성화되어야 합니다."}
            </p>
          </div>
        </section>

        <section id="gaming" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>04 / GAMING MODE</p>
            <div>
              <h2>
                게임 소리도,
                <br />내 장치에 맞게.
              </h2>
              <p>
                게임의 소리를 가상 케이블로 받아 조절합니다.
                <br />헤드폰의 음색과 듣기 편한 균형을 찾아보세요.
              </p>
            </div>
          </div>
          <ol className={styles.setupSteps} aria-label="게이밍 모드 설정 순서">
            <li>
              <span>01</span>
              <h3>게임 출력을 연결하세요.</h3>
              <p>
                VB-Cable 또는 Hi-Fi Cable을 설치하고, 게임의 오디오 출력 장치를
                가상 케이블로 선택하세요. 게임에 장치 선택이 없다면 Windows
                볼륨 믹서에서 해당 앱의 출력을 설정하세요.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>게이밍 모드를 켜세요.</h3>
              <p>
                Vesper의 입력은 같은 가상 케이블로, 출력은 실제 DAC나 헤드폰으로
                선택하세요. ENGAGE DSP를 누르면 연결한 게임 소리의 처리가 시작됩니다.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>소리의 균형을 맞추세요.</h3>
              <p>
                내 헤드폰의 Auto EQ 프로필과 헤드룸을 설정하세요. EQ로 커진
                신호는 클리핑 감지로 확인하고, 입력부터 출력까지의 처리 상태는
                Signal Path에서 살펴보세요.
              </p>
            </li>
          </ol>
        </section>

        <section id="start" className={`${styles.section} ${styles.start}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>05 / A QUIETER DESKTOP</p>
            <div>
              <h2>
                설정은 한 번.
                <br />
                그다음은 소리에 집중.
              </h2>
              <p>
                Windows 시작 시 창을 띄우지 않고 실행합니다.
                <br />
                필요할 때 트레이에서 다시 여세요.
              </p>
            </div>
          </div>
          <ol className={styles.setupSteps}>
            <li>
              <span>01</span>
              <h3>설치하기</h3>
              <p>Windows x64 설치 파일을 내려받아 실행하세요.</p>
            </li>
            <li>
              <span>02</span>
              <h3>경로 선택하기</h3>
              <p>
                입력과 출력 장치를 고르고, 원하는 EQ와 샘플레이트를 설정하세요.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>백그라운드로 두기</h3>
              <p>
                환경설정에서 자동 시작을 켜세요. 창을 숨겨도 앱은 트레이에
                남습니다.
              </p>
            </li>
          </ol>
          <div className={styles.faq}>
            <h3>시작 전에 알아두세요.</h3>
            <div>
              <details>
                <summary>
                  높은 샘플레이트가 항상 더 좋은 소리인가요?<span>+</span>
                </summary>
                <p>
                  그렇지 않습니다. 출력 장치가 지원하는 형식과 사용 환경에 맞춰
                  선택하세요. 입력과 출력 레이트가 같으면 리샘플링을 생략합니다.
                </p>
              </details>
              <details>
                <summary>
                  다운로드와 업데이트는 어디에서 하나요?<span>+</span>
                </summary>
                <p>
                  설치 파일과 변경 내역은 공개 GitHub 릴리즈에서 제공합니다.
                  앱의 환경설정에서도 업데이트를 확인할 수 있습니다.
                </p>
                <a href={release}>릴리즈 확인하기 ↗</a>
              </details>
              <details>
                <summary>
                  가상 케이블 없이 사용할 수 있나요?<span>+</span>
                </summary>
                <p>
                  Direct DAC 경로는 출력 장치에 APO가 설치되고 정상 활성화되어야
                  합니다. 호환성을 확인할 수 없다면 가상 케이블 경로로
                  설정하세요.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className={styles.final}>
          <div>
            <p className={styles.eyebrow}>LESS GUESSWORK. MORE LISTENING.</p>
            <h2>
              이제, 당신의
              <br />
              <em>소리를 찾을 차례.</em>
            </h2>
          </div>
          <div>
            <a href={audioProducts.dsp.download} className={styles.download}>
              Vesper DSP 다운로드 <Arrow diagonal />
            </a>
            <p>Windows x64 · v{version}</p>
            <a className={styles.releaseLink} href={release}>
              변경 내역 보기 ↗
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/" className={styles.brand}>
          <Mark />
          vesper
        </Link>
        <p>소리의 경로를, 내 손으로.</p>
        <div>
          <a href={release}>
            GitHub Releases <Arrow diagonal />
          </a>
          <Link href="/open-source">
            Open Source <Arrow diagonal />
          </Link>
          <a href="#dsp-content">맨 위로 ↑</a>
        </div>
      </footer>
    </div>
  );
}
