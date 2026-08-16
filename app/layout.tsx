import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vesper.minseok.online"),
  title: "Vesper | 정밀 오디오부터 자율 AI 엔지니어링까지",
  description:
    "시스템 전역 음향 보정(DSP), 서브우퍼 타임 얼라인먼트(Woofer), 5-Stage 자율 AI 코딩 파이프라인(Harness)을 아우르는 차세대 소프트웨어 에코시스템.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Vesper | Precision Audio & Autonomous AI Ecosystem",
    description:
      "시스템 전역 오디오 DSP부터 5-Stage 자율 AI 코딩 파이프라인까지. 고성능 소프트웨어 에코시스템 Vesper.",
    type: "website",
    locale: "ko_KR",
    siteName: "Vesper",
    images: [
      {
        url: "/og.png",
        width: 1280,
        height: 720,
        alt: "Vesper 소프트웨어 에코시스템 (오디오 DSP, AI 개발 파이프라인, 시스템 도구)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesper | Precision Audio & Autonomous AI Ecosystem",
    description:
      "시스템 전역 오디오 DSP부터 5-Stage 자율 AI 코딩 파이프라인까지. 고성능 소프트웨어 에코시스템 Vesper.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
