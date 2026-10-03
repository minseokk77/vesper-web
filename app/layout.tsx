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
  title: "Vesper | 음악을 듣는 당신에게.",
  description:
    "음색을 조절하는 Vesper DSP, 메인 출력과 서브우퍼를 연결하는 Vesper Woofer. Windows 오디오를 내 환경에 맞게 조율하세요.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Vesper | Windows Audio, Under Your Control.",
    description:
      "EQ, 헤드룸, 리샘플링부터 서브우퍼 필터와 딜레이까지. 내 환경에 맞는 Windows 오디오 도구.",
    type: "website",
    locale: "ko_KR",
    siteName: "Vesper",
    images: [
      {
        url: "/audio-social.png",
        width: 1200,
        height: 630,
        alt: "Vesper DSP와 Woofer 오디오 도구",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesper | Windows Audio, Under Your Control.",
    description:
      "EQ, 헤드룸, 리샘플링부터 서브우퍼 필터와 딜레이까지. 내 환경에 맞는 Windows 오디오 도구.",
    images: ["/audio-social.png"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.dataset.audioTheme = localStorage.getItem("vesper-audio-theme") === "dark" ? "dark" : "light"; } catch { document.documentElement.dataset.audioTheme = "light"; }`,
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
