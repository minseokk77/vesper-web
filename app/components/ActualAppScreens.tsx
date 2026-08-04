"use client";

import type { Language } from "../content";

function SelectField({ value }: { value: string }) {
  return (
    <div className="app-select">
      <span>{value}</span>
      <i aria-hidden="true">⌄</i>
    </div>
  );
}

function WindowActions({ signal = false }: { signal?: boolean }) {
  return (
    <div className="app-window-actions" aria-hidden="true">
      <span className="app-action-glyph">⚙</span>
      {signal && <span className="app-action-glyph app-signal-glyph">▥</span>}
      <span className="app-window-dot" />
      <span className="app-window-dot" />
    </div>
  );
}

function OutputActions() {
  return (
    <span className="app-output-actions" aria-hidden="true">
      <i className="app-output-signal">▥</i>
      <i className="app-output-settings">⚙</i>
      <i className="app-output-power">⏻</i>
    </span>
  );
}

export function ActualAppScreens({
  language,
  product,
}: {
  language: Language;
  product: string;
}) {
  const isKorean = language === "ko";

  return (
    <div
      className="actual-apps"
      aria-label={
        isKorean
          ? `Vesper ${product === "dsp" ? "DSP" : "Woofer"} 실제 앱 화면`
          : `Actual Vesper ${product === "dsp" ? "DSP" : "Woofer"} application screen`
      }
    >
      <figure className="actual-app actual-app-dsp" hidden={product !== "dsp"}>
        <div className="app-ui app-ui-dsp">
          <div className="app-titlebar">
            <h3>
              Vesper <span>|</span> DSP
            </h3>
            <div className="app-status active">
              <i />
              ACTIVE
            </div>
            <WindowActions signal />
          </div>

          <div className="app-fields">
            <label>
              INPUT SOURCE
              <SelectField value="기본 입력 장치" />
            </label>
            <label>
              OUTPUT DEVICE
              <SelectField value="기본 출력 장치" />
            </label>
          </div>

          <section className="app-panel">
            <h4>
              <span className="app-blue">▥</span> DSP 엔진 설정
            </h4>
            <div className="app-setting">
              <div>
                <strong>샘플 레이트 변환</strong>
                <small>출력 샘플 속도 관리 방법</small>
              </div>
              <SelectField value="최대 PCM 레이트 우선" />
            </div>
            <div className="app-setting">
              <strong>리샘플링 필터</strong>
              <SelectField value="정확한 최소 단계" />
            </div>
            <div className="app-setting separated">
              <strong>DSD ▶ PCM 필터</strong>
              <SelectField value="권장함 (30kHz Low-pass)" />
            </div>
            <div className="app-setting">
              <strong>DSD ▶ PCM 게인</strong>
              <SelectField value="+6.0 dB" />
            </div>
          </section>

          <section className="app-panel app-auto-eq">
            <h4 className="app-blue">
              자동 EQ <small>[이어폰] 모델 데이터베이스</small>
              <b aria-hidden="true">↯</b>
            </h4>
            <div className="app-search">
              <span>영문 모델명 통합 검색 (스피커/이어폰)</span>
              <b>검색</b>
            </div>
          </section>

          <section className="app-range">
            <div>
              <span>HEADROOM</span>
              <strong>−3.0 <small>dB</small></strong>
            </div>
            <i style={{ "--range": "74%" } as any} />
            <label className="app-checkbox">
              <i>✓</i> 클리핑 감지
            </label>
          </section>
          <div className="app-button-row">
            <button className="app-engine-button" type="button">STOP ENGINE</button>
            <button className="app-mute-button" type="button">MUTE</button>
          </div>
        </div>
      </figure>

      <figure className="actual-app actual-app-woofer" hidden={product !== "woofer"}>
        <div className="app-ui app-ui-woofer">
          <div className="app-titlebar">
            <h3>
              Vesper <span>|</span> Woofer
            </h3>
            <div className="app-status active">
              <i />
              ACTIVE
            </div>
            <WindowActions signal />
          </div>

          <div className="device-status">
            <i>⏻</i>
            <div>
              <strong>Scarlett 4i4 USB</strong>
              <small>Device Active</small>
            </div>
            <div>
              <strong>48000 Hz</strong>
              <small>Sample Rate</small>
            </div>
          </div>

          <div className="app-presets">
            <div><strong>Sub</strong><br />120Hz</div>
            <div><strong>Main</strong><br />Full</div>
            <div><strong>LFE</strong><br />Only</div>
            <div><b>LFE</b></div>
          </div>

          <section className="app-panel">
            <div className="woofer-fields">
              <label className="app-output-label">
                OUTPUT 1-2 (Main Speakers)
                <OutputActions />
              </label>
              <div className="app-output-field">
                <SelectField value="Analogue 1 + 2" />
              </div>
            </div>

            <div className="woofer-fields">
              <label className="app-output-label">
                OUTPUT 3-4 (Subwoofer)
                <OutputActions />
              </label>
              <div className="app-output-field">
                <SelectField value="Analogue 3 + 4" />
              </div>
            </div>

            <div className="app-crossover">
              <div>
                <span>Crossover Frequency</span>
                <span className="app-slope-label">4th Order L-R (24dB/oct)</span>
                <SelectField value="80 Hz" />
              </div>
              <div className="app-setting app-lowpass">
                <strong>Subwoofer Lowpass</strong>
                <SelectField value="120 Hz" />
              </div>
            </div>
          </section>

          <section className="app-range">
            <div>
              <span>SUBWOOFER DELAY</span>
              <strong>12.4 <small>ms</small></strong>
            </div>
            <i style={{ "--range": "32%" } as any} />
          </section>
          <div className="app-button-row">
            <button className="app-engine-button danger" type="button">STOP ENGINE</button>
          </div>
        </div>
      </figure>

      <figure className="actual-app actual-app-harness" hidden={product !== "harness"}>
        <div className="app-ui app-ui-harness">
          <div className="app-titlebar">
            <h3>
              Vesper <span>|</span> Harness
            </h3>
            <div className="app-status active">
              <i />
              AGENT
            </div>
            <WindowActions signal />
          </div>

          <div className="terminal-log">
            <p><span className="text-emerald-400">➜</span>  ~ agy start vesper-harness</p>
            <p className="text-emerald-300">Vesper Harness initialized.</p>
            <p>Loading subagents... [ok]</p>
            <p>Injecting dynamic skills... [ok]</p>
            <p>Scanning contextual graph...</p>
            <div className="terminal-loading">
              <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
            </div>
          </div>
          <div className="terminal-actions mt-auto">
            <button className="app-engine-button" style={{ borderColor: 'rgba(52, 211, 153, 0.3)', background: 'rgba(52, 211, 153, 0.1)', color: '#34d399' }} type="button">VIEW GRAPH</button>
          </div>
        </div>
      </figure>
    </div>
  );
}
