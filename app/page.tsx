import type { Metadata } from "next";
import Link from "next/link";
import { AudioHeader, AudioFooter, Arrow } from "./components/AudioShell";
import styles from "./components/audio.module.css";

export const metadata: Metadata = {
  title: "Vesper | 음악을 듣는 당신에게.",
  description:
    "음색을 조절하는 Vesper DSP, 직접 밴드를 조절하는 Vesper EQ, 메인 출력과 서브우퍼를 연결하는 Vesper Woofer. 내 환경에 맞게 Windows 오디오를 조율하세요.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className={styles.site}>
      <a href="#main-content" className={styles.skip}>
        본문으로 이동
      </a>
      <AudioHeader />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>SMALL TOOLS. A MORE PERSONAL SOUND.</span>
            <span>
              VESPER / WINDOWS AUDIO <i />
            </span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>음악을 듣는 당신에게.</p>
              <h1>
                좋아하는 음악을,
                <br />내 환경에 맞게.
              </h1>
              <p className={styles.intro}>
                책상 위의 헤드폰부터 방 안의 서브우퍼까지.
                <br />
                음색과 연결을 직접 조율하는
                <br />
                Windows 오디오 도구, Vesper.
              </p>
              <div className={styles.heroActions}>
                <a href="#products" className={styles.download}>
                  세 가지 도구 살펴보기 <Arrow />
                </a>
                <a href="#approach" className={styles.textLink}>
                  어떻게 다른가요? ↓
                </a>
              </div>
              <p className={styles.requirements}>
                Windows x64 <span>·</span> 무료 다운로드
              </p>
            </div>
            <figure
              className={`${styles.plate} ${styles.collectionPlate}`}
              aria-label="DSP는 신호 경로를, EQ는 음색을, Woofer는 출력 연결을 조절하는 개념도"
            >
              <div className={styles.plateHead}>
                <span>VESPER / THE AUDIO COLLECTION</span>
                <span>FIG. 01</span>
              </div>
              <div className={styles.collectionDiscs}>
                <div className={styles.collectionDisc}>
                  <span>DSP</span>
                  <small>TONE & SIGNAL</small>
                </div>
                <div className={styles.collectionDisc}>
                  <span>EQ</span>
                  <small>YOUR CURVE</small>
                </div>
                <div className={styles.collectionDisc}>
                  <span>W</span>
                  <small>BASS & TIMING</small>
                </div>
              </div>
              <div className={styles.collectionLegend}>
                <span>01 / 음색과 신호 경로</span>
                <span>02 / 직접 그리는 음색</span>
                <span>03 / 저음과 출력 타이밍</span>
              </div>
              <figcaption>
                같은 음악. 서로 다른 조절.
                <span>각 도구는 독립적으로 사용합니다.</span>
              </figcaption>
            </figure>
          </div>
          <div className={styles.heroBottom}>
            <span>더 많은 장비보다, 지금의 장비에 맞는 설정부터.</span>
            <span>01 — 03 ↓</span>
          </div>
        </section>
        <section id="products" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / OUR TOOLS</p>
            <div>
              <h2>
                필요한 조절을,
                <br />
                골라서 시작하세요.
              </h2>
              <p>
                신호 경로를 조절하려면 DSP.
                <br />
                음색을 직접 다듬으려면 EQ.
                <br />
                메인 출력에 서브우퍼를 더한다면 Woofer.
              </p>
            </div>
          </div>
          <div className={styles.productRows}>
            <Link href="/dsp" className={styles.productRow}>
              <div className={styles.productNumber}>01</div>
              <div>
                <span className={styles.eyebrow}>TONE & SIGNAL</span>
                <h3>
                  Vesper <em>DSP</em>
                </h3>
                <p>
                  EQ, 헤드룸, 리샘플링.
                  <br />
                  입력에서 출력까지 소리의 경로를 조절하세요.
                </p>
                <span className={styles.productTags}>
                  AUTOEQ / PARAMETRIC EQ / SIGNAL PATH
                </span>
              </div>
              <div className={styles.miniDiagram} aria-hidden="true">
                <span>IN</span>
                <i />
                <span>EQ</span>
                <i />
                <span>OUT</span>
              </div>
              <span className={styles.productOpen}>
                살펴보기 <Arrow diagonal />
              </span>
            </Link>
            <Link href="/eq" className={styles.productRow}><div className={styles.productNumber}>02</div><div><span className={styles.eyebrow}>YOUR CURVE. YOUR CALL.</span><h3>Vesper <em>EQ</em></h3><p>가로로 넓은 파라메트릭 EQ.<br/>AutoEQ와 별도로, 내가 원하는 음색을 더하세요.</p><span className={styles.productTags}>FREQUENCY / GAIN / Q / DSP LINK</span></div><div className={styles.miniDiagram} aria-hidden="true"><span>Hz</span><i/><span>dB</span><i/><span>Q</span></div><span className={styles.productOpen}>살펴보기 <Arrow diagonal/></span></Link>
            <Link href="/woofer" className={styles.productRow}>
              <div className={styles.productNumber}>03</div>
              <div>
                <span className={styles.eyebrow}>BASS & TIMING</span>
                <h3>
                  Vesper <em>Woofer</em>
                </h3>
                <p>
                  메인 출력과 서브우퍼를 한 입력에서.
                  <br />
                  저음역과 출력 타이밍을 직접 맞추세요.
                </p>
                <span className={styles.productTags}>
                  DUAL OUTPUT / LOW-PASS FILTER / DELAY
                </span>
              </div>
              <div className={styles.miniSplit} aria-hidden="true">
                <span>IN</span>
                <div>
                  <span>MAIN</span>
                  <span>SUB</span>
                </div>
              </div>
              <span className={styles.productOpen}>
                살펴보기 <Arrow diagonal />
              </span>
            </Link>
          </div>
        </section>
        <section id="approach" className={styles.connectionSection}>
          <div className={styles.connectionCopy}>
            <p className={styles.eyebrow}>02 / OUR APPROACH</p>
            <h2>
              소리를 바꾸기 전에,
              <br />
              경로부터 이해합니다.
            </h2>
            <p>
              설정 이름을 나열하는 대신,
              <br />
              어디에서 무엇이 바뀌는지 확인하세요.
            </p>
          </div>
          <div className={styles.connectionBody}>
            <div className={styles.principle}>
              <span>01</span>
              <div>
                <h3>입력과 출력을 분명하게.</h3>
                <p>
                  재생 앱, 가상 케이블, 실제 출력 장치. 소리가 지나가는 연결을
                  먼저 정합니다.
                </p>
              </div>
            </div>
            <div className={styles.principle}>
              <span>02</span>
              <div>
                <h3>내 장비에 필요한 만큼.</h3>
                <p>
                  EQ와 출력 형식, 저음 필터와 딜레이. 사용하는 장치에 맞게
                  하나씩 조절합니다.
                </p>
              </div>
            </div>
            <div className={styles.principle}>
              <span>03</span>
              <div>
                <h3>다이어그램은 설명을 위해.</h3>
                <p>
                  사이트의 도해는 동작 개념을 보여줍니다. 실제 응답과 지연은
                  장치와 설정에 따라 달라집니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="start" className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>03 / GETTING STARTED</p>
            <div>
              <h2>
                오늘의 음악,
                <br />
                지금의 장비로.
              </h2>
              <p>
                각 제품 페이지에서 연결 방법과
                <br />
                Windows 설치 파일을 확인하세요.
              </p>
            </div>
          </div>
          <div className={styles.homeDownloads}>
            <Link href="/dsp" className={styles.download}>
              Vesper DSP <Arrow diagonal />
            </Link>
            <Link href="/woofer" className={styles.download}>
              Vesper Woofer <Arrow diagonal />
            </Link>
          </div>
          <p className={styles.footnote}>
            가상 케이블은 별도 설치가 필요합니다. 지원 형식은 연결한 장치와
            Windows 오디오 설정에 따라 달라집니다.
          </p>
        </section>
      </main>
      <AudioFooter />
    </div>
  );
}
