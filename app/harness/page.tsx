"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function HarnessPage() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/minseokk77/vesper-harness");
  const [version, setVersion] = useState("0.1.0-alpha");
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [changelog, setChangelog] = useState<{ version: string; date: string; body: string }[]>([]);
  const [openChangelog, setOpenChangelog] = useState(-1);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pnpm add vesper-harness");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    async function fetchReleases() {
      try {
        const res = await fetch("https://api.github.com/repos/minseokk77/vesper-harness/releases?per_page=5");
        const releases = await res.json();

        if (releases.length > 0) {
          const latest = releases[0];
          setVersion(latest.tag_name ?? "");
          const asset = latest.assets?.find(
            (a: { name: string; browser_download_url: string }) =>
              a.name.endsWith(".exe") && !a.name.endsWith(".sig")
          );
          if (asset) setDownloadUrl(asset.browser_download_url);

          const total = releases.reduce(
            (sum: number, rel: { assets: { download_count: number }[] }) =>
              sum +
              rel.assets.reduce(
                (s: number, a: { download_count: number }) => s + (a.download_count || 0),
                0
              ),
            0
          );
          setTotalDownloads(total);

          const cl = releases.slice(0, 3).map((r: { tag_name: string; published_at: string; body: string | null }) => ({
            version: r.tag_name,
            date: new Date(r.published_at).toLocaleDateString("ko-KR"),
            body: (r.body || "")
              .split("\n")
              .filter((l: string) => l.trim())
              .slice(0, 4)
              .join("\n"),
          }));
          setChangelog(cl);
        } else {
          setChangelog([{
            version: "0.1.0-alpha",
            date: new Date().toLocaleDateString("ko-KR"),
            body: "초기 파이프라인 개념 증명 완료.\nAider 및 SWE-agent 연동 기반 구축.\n몰입형 터미널 UI 목업 적용."
          }]);
        }
      } catch {
        setChangelog([{
          version: "0.1.0-alpha",
          date: new Date().toLocaleDateString("ko-KR"),
          body: "초기 파이프라인 개념 증명 완료.\nAider 및 SWE-agent 연동 기반 구축.\n몰입형 터미널 UI 목업 적용."
        }]);
      }
    }
    fetchReleases();
  }, []);

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <Navbar />
      </div>

      <main className="pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#f5f5f7]">Vesper Harness</h1>
          <p className="text-xl text-[#86868b] tracking-tight">5-Stage 자율 AI 코딩 파이프라인</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">
              {totalDownloads > 0 ? totalDownloads.toLocaleString() : "—"}
            </div>
            <div className="text-xs text-[#86868b]">누적 사용(호출) 수</div>
          </div>
          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
            <div className="text-3xl font-bold text-[#f5f5f7] mb-1">{version || "—"}</div>
            <div className="text-xs text-[#86868b]">최신 파이프라인 버전</div>
          </div>
          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-center">
            <div className="text-3xl font-bold text-[#f5f5f7] mb-1">All</div>
            <div className="text-xs text-[#86868b]">플랫폼 및 에디터</div>
          </div>
        </div>

        <div className="text-lg md:text-xl text-[#86868b] font-medium leading-relaxed text-center max-w-3xl mx-auto tracking-tight">
          Sprocket, Aider, SWE-agent 등 다중 에이전트를 조율합니다.
          코드 컨텍스트를 파악하고 검증까지 완벽하게 자율 실행합니다.
        </div>

        <div className="space-y-6 pt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#f5f5f7] mb-3">Sprocket 통합 에이전트</h2>
            <p className="text-[#86868b]">하드웨어 설계와 코드 작성을 아우르는 경량 에이전트</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">하드웨어 & 소프트웨어 설계</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                하드웨어 설계와 코드 작성을 같이 수행합니다. 회로도를 React로 직접 그리고, BOM(자재명세서)과 상세 조립 지침까지 자동으로 만들어냅니다.
              </p>
            </div>
            <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">지능형 컨텍스트 및 자율 구매</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                모든 작업에서 웹의 최상급 컨텍스트를 끌어와 붙입니다. 지시하면 어떤 웹사이트에서든 부품이나 SaaS 구독을 스스로 알아서 구매합니다.
              </p>
            </div>
            <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] md:col-span-2">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">어디서든 동일한 크로스 플랫폼</h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                복잡한 설치 과정 없이 <code className="bg-black/30 px-2 py-1 rounded text-emerald-300">npx spikonado/sprocket</code> 명령어 한 줄로 브라우저에서 바로 실행됩니다. 브라우저, CLI, 데스크톱 앱 어느 쪽을 쓰더라도 기능과 성능의 차이가 전혀 없습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#f5f5f7]">최근 업데이트</h3>
          {changelog.length === 0 ? (
            <p className="text-[#86868b] text-sm">로딩 중...</p>
          ) : (
            changelog.map((entry, idx) => (
              <button
                key={idx}
                onClick={() => setOpenChangelog(openChangelog === idx ? -1 : idx)}
                className="w-full p-5 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[60px] text-left hover:bg-white/[0.04] transition-all duration-300 block"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-semibold">{entry.version}</span>
                    <span className="text-[#86868b] text-xs">{entry.date}</span>
                  </div>
                  <span className={`text-[#86868b] text-lg transition-transform duration-300 shrink-0 ${openChangelog === idx ? "rotate-45" : ""}`}>
                    +
                  </span>
                </div>
                {openChangelog === idx && (
                  <pre className="mt-4 text-[#86868b] text-sm leading-relaxed whitespace-pre-wrap font-sans border-t border-white/[0.06] pt-4">
                    {entry.body}
                  </pre>
                )}
              </button>
            ))
          )}
        </div>

        <div className="flex flex-col items-center gap-3 pt-4">
          <button
            onClick={handleCopy}
            className="px-8 py-4 rounded-full bg-[#f5f5f7] font-mono font-semibold text-[15px] tracking-wide hover:scale-105 active:scale-95 transition-transform flex items-center gap-3"
            style={{ color: '#000000' }}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                복사 완료
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                pnpm add vesper-harness
              </>
            )}
          </button>
          {version && <span className="text-xs text-[#86868b]">{version}</span>}
        </div>
      </main>
      <Footer />
    </>
  );
}
