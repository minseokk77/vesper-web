"use client";
import { useState, type CSSProperties } from "react";
import { AudioHeader, AudioFooter, Arrow } from "../components/AudioShell";
import { audioProducts } from "../audio-products";
import styles from "../components/audio.module.css";

function LowPassDiagram({ frequency }: { frequency: number }) {
  const points = Array.from({ length: 101 }, (_, i) => {
    const hz = 20 * Math.pow(20, i / 100);
    const db = -10 * Math.log10(1 + Math.pow(hz / frequency, 8));
    return `${50 + i * 4.4},${60 + Math.min(48, -db) * 3.7}`;
  }).join(" ");
  return (
    <svg
      className={styles.filterChart}
      viewBox="0 0 540 290"
      role="img"
      aria-label={`${frequency} Hz 로우패스 필터의 개념 응답 곡선`}
    >
      <g stroke="currentColor" opacity=".12">
        <path d="M50 60H490M50 120H490M50 180H490M50 240H490M50 40V240M190 40V240M330 40V240M490 40V240" />
      </g>
      <g fill="currentColor" className={styles.chartLabels}>
        <text x="12" y="64">
          0 dB
        </text>
        <text x="10" y="243">
          −48
        </text>
        <text x="50" y="270">
          20 Hz
        </text>
        <text x="175" y="270">
          50
        </text>
        <text x="317" y="270">
          130
        </text>
        <text x="465" y="270">
          400 Hz
        </text>
      </g>
      <polyline
        points={points}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
      />
      <text x="65" y="105" fill="var(--accent)" className={styles.chartLabels}>
        LOW FREQUENCIES PASS
      </text>
    </svg>
  );
}

export default function WooferExperience() {
  const [frequency, setFrequency] = useState(100);
  const [aligned, setAligned] = useState(false);
  const product = audioProducts.woofer;
  return (
    <div className={styles.site}>
      <a href="#main-content" className={styles.skip}>
        본문으로 이동
      </a>
      <AudioHeader
        product="Woofer"
        links={[
          ["#routing", "Signal Routing"],
          ["#controls", "Bass & Timing"],
          ["#start", "Getting Started"],
        ]}
      />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>TWO OUTPUTS. ONE PIECE OF MUSIC.</span>
            <span>
              VERSION {product.version} <i />
            </span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>메인 출력에, 저음을 더할 때.</p>
              <h1>
                저음도,
                <br />
                같은 순간에.
              </h1>
              <p className={styles.intro}>
                헤드폰과 서브우퍼, 서로 다른 두 출력.
                <br />
                저음역을 고르고 메인 출력의 타이밍을 조절하는
                <br />
                Windows 오디오 유틸리티, Vesper Woofer.
              </p>
              <div className={styles.heroActions}>
                <a href={product.download} className={styles.download}>
                  Windows용 다운로드 <Arrow diagonal />
                </a>
                <a href="#routing" className={styles.textLink}>
                  연결 방식 살펴보기 ↓
                </a>
              </div>
              <p className={styles.requirements}>
                Windows x64 <span>·</span> 무료 다운로드 <span>·</span> v
                {product.version}
              </p>
            </div>
            <figure
              className={`${styles.plate} ${styles.wooferPlate}`}
              aria-label="가상 케이블 입력을 메인 출력과 서브우퍼로 나누는 개념도"
            >
              <div className={styles.plateHead}>
                <span>VESPER / DUAL OUTPUT ROUTING</span>
                <span>FIG. 01</span>
              </div>
              <div className={styles.wooferSchematic}>
                <div className={styles.sourceNode}>
                  <span>W</span>
                  <small>ONE INPUT</small>
                </div>
                <div className={styles.branchLine} />
                <div className={styles.outputNodes}>
                  <div>
                    <span
                      className={styles.headphoneSymbol}
                      aria-hidden="true"
                    />
                    <strong>MAIN</strong>
                    <small>DELAY → OUTPUT</small>
                  </div>
                  <div>
                    <span className={styles.speakerSymbol} aria-hidden="true">
                      <i />
                    </span>
                    <strong>SUB</strong>
                    <small>LOW-PASS → OUTPUT</small>
                  </div>
                </div>
              </div>
              <figcaption>
                하나의 입력, 두 개의 출력.
                <span>연결과 처리 순서를 설명하는 개념도입니다.</span>
              </figcaption>
            </figure>
          </div>
          <div className={styles.heroBottom}>
            <span>저음역은 필터로. 타이밍은 딜레이로.</span>
            <span>01 — 03 ↓</span>
          </div>
        </section>
        <section id="routing" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / SIGNAL ROUTING</p>
            <div>
              <h2>
                음악은 하나.
                <br />
                출력은 두 갈래.
              </h2>
              <p>
                가상 케이블로 받은 소리를
                <br />
                메인 출력과 서브우퍼에 각각 전달합니다.
              </p>
            </div>
          </div>
          <div className={styles.splitDiagram}>
            <div className={styles.splitInput}>
              <span>INPUT</span>
              <strong>재생 앱 → 가상 케이블 → Woofer</strong>
            </div>
            <div className={styles.splitOutputs}>
              <div>
                <span>01 / MAIN OUTPUT</span>
                <h3>헤드폰 / 메인 출력</h3>
                <p>딜레이를 조절해 메인 출력의 시점을 늦춥니다.</p>
              </div>
              <div>
                <span>02 / SUB OUTPUT</span>
                <h3>서브우퍼</h3>
                <p>로우패스 필터로 저음역을 선택해 전달합니다.</p>
              </div>
            </div>
          </div>
          <p className={styles.footnote}>
            서브우퍼를 자동으로 측정하거나 동기화하지 않습니다. 장치마다 다른
            지연을 직접 확인하고 조절하세요.
          </p>
        </section>
        <section
          id="controls"
          className={`${styles.section} ${styles.controls}`}
        >
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>02 / BASS & TIMING</p>
            <div>
              <h2>
                어떤 저음을,
                <br />
                언제 들을지.
              </h2>
              <p>
                필터와 딜레이가 하는 일을
                <br />두 개의 도해로 살펴보세요.
              </p>
            </div>
          </div>
          <div className={styles.wooferControlRow}>
            <div className={styles.featureCopy}>
              <span className={styles.eyebrow}>A / LOW-PASS FILTER</span>
              <h3>
                저음만,
                <br />
                우퍼 쪽으로.
              </h3>
              <p>
                40–200 Hz 범위에서 기준 주파수를 선택하고, 12 또는 24 dB/Octave
                기울기를 설정합니다. 기준보다 높은 주파수는 점차 줄어듭니다.
              </p>
              <label
                className={styles.frequencyControl}
                htmlFor="demo-frequency"
              >
                <span>도해의 기준 주파수</span>
                <output htmlFor="demo-frequency">{frequency} Hz</output>
              </label>
              <input
                id="demo-frequency"
                className={styles.demoSlider}
                style={
                  {
                    "--slider-progress": `${((frequency - 40) / 160) * 100}%`,
                  } as CSSProperties
                }
                type="range"
                min="40"
                max="200"
                step="5"
                value={frequency}
                onChange={(event) => setFrequency(Number(event.target.value))}
              />
              <div className={styles.sliderScale} aria-hidden="true">
                <span>40</span>
                <span>80</span>
                <span>120</span>
                <span>160</span>
                <span>200 Hz</span>
              </div>
              <p className={styles.footnote}>
                슬라이더는 설명용 도해만 바꿉니다. 실제 앱 설정에는 영향을 주지
                않습니다.
              </p>
            </div>
            <figure className={styles.lightFigure}>
              <div className={styles.figureHeader}>
                <span>LOW-PASS RESPONSE</span>
                <span>24 dB/Octave · 개념도</span>
              </div>
              <LowPassDiagram frequency={frequency} />
              <figcaption>
                설정에 따른 저음 필터의 개념 응답입니다. 장치 측정 데이터가
                아닙니다.
              </figcaption>
            </figure>
          </div>
          <div className={styles.wooferControlRow}>
            <div className={styles.featureCopy}>
              <span className={styles.eyebrow}>B / MAIN OUTPUT DELAY</span>
              <h3>
                먼저 오는 소리를,
                <br />
                조금 늦추세요.
              </h3>
              <p>
                서브우퍼 쪽 소리가 늦게 들린다면 메인 출력에 딜레이를 더해 도착
                시점을 맞춰보세요. 실제 보정값은 사용하는 장치와 환경에서
                확인해야 합니다.
              </p>
              <div
                className={styles.modeSwitch}
                role="group"
                aria-label="타이밍 도해 상태"
              >
                <button
                  type="button"
                  aria-pressed={!aligned}
                  onClick={() => setAligned(false)}
                >
                  보정 전
                </button>
                <button
                  type="button"
                  aria-pressed={aligned}
                  onClick={() => setAligned(true)}
                >
                  메인 딜레이 적용
                </button>
              </div>
            </div>
            <figure className={styles.lightFigure}>
              <div className={styles.figureHeader}>
                <span>ARRIVAL TIME</span>
                <span>타이밍 개념도</span>
              </div>
              <div
                className={styles.timeline}
                aria-label={
                  aligned
                    ? "메인과 서브우퍼 도착 시점이 일치하는 예시"
                    : "메인이 서브우퍼보다 먼저 도착하는 예시"
                }
              >
                <div>
                  <span>MAIN</span>
                  <div>
                    <i
                      className={
                        aligned ? styles.delayedPulse : styles.earlyPulse
                      }
                    />
                  </div>
                </div>
                <div>
                  <span>SUB</span>
                  <div>
                    <i className={styles.delayedPulse} />
                  </div>
                </div>
                <p aria-live="polite">
                  {aligned
                    ? "메인 출력을 늦춰 두 도착 시점을 맞춥니다."
                    : "두 출력 장치의 지연은 서로 다를 수 있습니다."}
                </p>
              </div>
              <figcaption>
                동작 원리 설명용 예시입니다. 자동 측정·보정 결과가 아닙니다.
              </figcaption>
            </figure>
          </div>
        </section>
        <section id="start" className={`${styles.section} ${styles.start}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>03 / GETTING STARTED</p>
            <div>
              <h2>
                연결부터,
                <br />
                하나씩 맞춰보세요.
              </h2>
              <p>
                메인 출력과 서브우퍼를 준비하고,
                <br />
                작은 볼륨에서 연결을 확인하세요.
              </p>
            </div>
          </div>
          <ol className={styles.setupSteps}>
            <li>
              <span>01</span>
              <h3>입력 연결하기</h3>
              <p>
                가상 케이블을 별도로 설치하고, 재생 앱의 출력과 Woofer의 입력을
                해당 케이블로 선택합니다.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>두 출력 선택하기</h3>
              <p>
                메인 출력과 실제 서브우퍼 출력 장치를 각각 선택합니다.
                서브우퍼에 연결된 오디오 출력이 필요합니다.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>필터와 딜레이 조절하기</h3>
              <p>
                저음 필터의 주파수와 기울기를 고르고, 메인 출력 딜레이를 조금씩
                조절해 타이밍을 확인합니다.
              </p>
            </li>
          </ol>
          <div className={styles.faq}>
            <h3>시작 전에 알아두세요.</h3>
            <div>
              <details>
                <summary>
                  DSP와 Woofer를 함께 설치해야 하나요?<span>+</span>
                </summary>
                <p>
                  각각 독립적인 도구입니다. 음색과 형식 조절은 DSP, 메인 출력과
                  서브우퍼 연결은 Woofer에서 시작하세요.
                </p>
              </details>
              <details>
                <summary>
                  서브우퍼가 자동으로 보정되나요?<span>+</span>
                </summary>
                <p>
                  아니요. 자동 실내 측정이나 지연 측정 기능이 아닙니다. 연결한
                  장치의 동작을 확인하며 필터와 메인 딜레이를 직접 조절합니다.
                </p>
              </details>
              <details>
                <summary>
                  업데이트 내역은 어디서 보나요?<span>+</span>
                </summary>
                <p>
                  공개 릴리즈에서 버전별 변경 내역과 설치 파일을 확인할 수
                  있습니다.
                </p>
                <a href={product.release}>Woofer 릴리즈 확인하기 ↗</a>
              </details>
            </div>
          </div>
        </section>
        <section className={styles.final}>
          <div>
            <p className={styles.eyebrow}>YOUR MUSIC. YOUR SETUP.</p>
            <h2>
              두 개의 출력으로,
              <br />
              하나의 음악을.
            </h2>
          </div>
          <div>
            <a href={product.download} className={styles.download}>
              Vesper Woofer 다운로드 <Arrow diagonal />
            </a>
            <p>Windows x64 · v{product.version}</p>
            <a href={product.release} className={styles.releaseLink}>
              변경 내역 보기 ↗
            </a>
          </div>
        </section>
      </main>
      <AudioFooter />
    </div>
  );
}
