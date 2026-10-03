import type { Metadata } from "next";
import { audioProducts } from "../audio-products";
import Experience from "./experience";

export const metadata: Metadata = {
  title: "Vesper DSP | 소리의 경로를, 내 손으로.",
  description:
    "Windows 오디오를 위한 Vesper DSP. EQ, 헤드룸, 리샘플링과 Signal Path로 내 장치에 맞는 소리의 경로를 설정하세요.",
  alternates: { canonical: "/dsp" },
  openGraph: {
    title: "Vesper DSP | 소리의 경로를, 내 손으로.",
    description: "입력부터 출력까지. Windows 오디오를 직접 조율하세요.",
    url: "/dsp",
    images: [
      {
        url: "/dsp-social.png",
        width: 1200,
        height: 630,
        alt: "Vesper DSP의 입력, 처리, 출력 신호 경로",
      },
    ],
  },
};

export default function DspPage() {
  return <Experience version={audioProducts.dsp.version} />;
}
