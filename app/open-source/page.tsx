import type { Metadata } from "next";
import { AudioHeader, AudioFooter, Arrow } from "../components/AudioShell";
import shared from "../components/audio.module.css";
import styles from "./page.module.css";
import inventory from "./inventory.json";

export const metadata: Metadata = {
  title: "Vesper | Open Source & Credits",
  description:
    "Vesper DSP, Woofer와 웹사이트가 사용하는 오픈소스 라이브러리, 라이선스와 EQ 데이터 출처를 안내합니다.",
  alternates: { canonical: "/open-source" },
};

export default function OpenSourcePage() {
  return (
    <div className={shared.site}>
      <a href="#main-content" className={shared.skip}>
        본문으로 이동
      </a>
      <AudioHeader
        links={[
          ["#libraries", "Libraries"],
          ["#data", "Data & Fonts"],
          ["#notices", "Notices"],
        ]}
      />
      <main id="main-content" className={styles.main}>
        <div className={styles.heading}>
          <p className={shared.eyebrow}>OPEN SOURCE / ACKNOWLEDGEMENTS</p>
          <h1>함께 만든 기반.</h1>
          <p>
            Vesper는 여러 오픈소스 프로젝트 위에서 만들어졌습니다.
            <br />
            라이브러리와 도구를 만든 기여자들에게 감사드립니다.
          </p>
        </div>
        <section id="libraries" className={styles.section}>
          <h2>Libraries & Tools</h2>
          <p className={styles.description}>
            현재 프로젝트에서 직접 선언한 의존성과 개발 도구입니다. Rust는
            Cargo.lock, npm은 설치된 패키지와 잠금파일의 버전을 기준으로
            확인했습니다. 플랫폼별·간접 의존성을 포함한 배포 바이너리 전체
            목록은 아닙니다.
          </p>
          {["DSP", "Woofer", "Website"].map((scope) => (
            <details
              className={styles.group}
              key={scope}
              open={scope === "DSP"}
            >
              <summary>
                <span>Vesper {scope === "Website" ? "Web" : scope}</span>
                <span>
                  {inventory.filter((item) => item.scope === scope).length}{" "}
                  dependencies <b>+</b>
                </span>
              </summary>
              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <span>PROJECT / VERSION</span>
                  <span>LICENSE</span>
                  <span>USAGE</span>
                  <span>SOURCE</span>
                </div>
                {inventory
                  .filter((item) => item.scope === scope)
                  .map((item) => (
                    <div
                      className={styles.row}
                      key={`${item.ecosystem}-${item.name}`}
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <span>
                          {item.version} · {item.ecosystem}
                        </span>
                      </div>
                      <span className={styles.license}>{item.license}</span>
                      <span>
                        {item.kind === "development"
                          ? "개발·빌드"
                          : "앱·실행 기반"}
                      </span>
                      <a href={item.url}>
                        프로젝트 <Arrow diagonal />
                      </a>
                    </div>
                  ))}
              </div>
            </details>
          ))}
        </section>
        <section id="data" className={styles.section}>
          <h2>Data & Fonts</h2>
          <div className={styles.credit}>
            <span>01 / EQ DATA</span>
            <div>
              <h3>OPRA</h3>
              <p>
                헤드폰·이어폰 EQ 프로필 검색과 다운로드에 사용하는 데이터
                출처입니다. 프로젝트 기여자와 각 프로필에 표기된 제작자를 출처로
                인정합니다.
              </p>
              <p>
                데이터: CC BY-SA 4.0 · 코드: MIT. Vesper는 프로필을 읽어 앱의 EQ
                밴드 형식으로 적용하며 원본 데이터는 이 웹사이트에 재배포하지
                않습니다.
              </p>
              <a href="https://github.com/opra-project/OPRA">
                OPRA 프로젝트 ↗
              </a>
              <a href="https://github.com/opra-project/OPRA/blob/main/LICENSE.md">
                라이선스 원문 ↗
              </a>
            </div>
          </div>
          <div className={styles.credit}>
            <span>02 / SPEAKER EQ</span>
            <div>
              <h3>Spinorama</h3>
              <p>
                스피커용 EQ 프로필을 가져오는 출처입니다. Pierre Aubert와
                프로젝트 기여자, 각 측정·프로필의 원 제작자에게 출처가 있습니다.
              </p>
              <p>
                저장소 코드: GPL-3.0. 측정 자료와 프로필의 사용 조건은 원본의
                출처·권리 표기를 확인하세요. Vesper는 외부 프로필을 불러와
                적용하며 이 사이트에 해당 데이터를 재배포하지 않습니다.
              </p>
              <a href="https://github.com/pierreaubert/spinorama">
                Spinorama 프로젝트 ↗
              </a>
              <a href="https://github.com/pierreaubert/spinorama/blob/develop/LICENSE">
                저장소 라이선스 ↗
              </a>
            </div>
          </div>
          <div className={styles.credit}>
            <span>03 / TYPOGRAPHY</span>
            <div>
              <h3>Geist & Geist Mono</h3>
              <p>
                웹사이트의 본문과 기술 표기에 사용한 서체입니다. Vercel과 서체
                기여자들이 제공하며 SIL Open Font License 1.1을 따릅니다.
                운영체제 기본 대체 서체는 별도로 배포하지 않습니다.
              </p>
              <a href="https://github.com/vercel/geist-font">
                Geist 프로젝트 ↗
              </a>
              <a href="https://github.com/vercel/geist-font/blob/main/LICENSE.txt">
                OFL 원문 ↗
              </a>
            </div>
          </div>
        </section>
        <section id="notices" className={styles.section}>
          <h2>License Notices</h2>
          <p className={styles.description}>
            아래 파일은 직접 의존성의 목록과 확보한 라이선스 원문입니다. 각
            프로젝트의 저작권과 사용 조건은 해당 라이선스에 따릅니다. 이 안내는
            Vesper 자체의 이용약관이나 배포 파일 전체의 라이선스 준수 확인서를
            대신하지 않습니다.
          </p>
          <div className={styles.noticeLinks}>
            <a href="/open-source-inventory.json" download>
              의존성 목록 JSON <Arrow diagonal />
            </a>
            <a href="/third-party-notices.txt" download>
              라이선스 원문 TXT <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <AudioFooter />
    </div>
  );
}
