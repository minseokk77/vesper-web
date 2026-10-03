import type { Metadata } from "next";
import WooferExperience from "./experience";
export const metadata: Metadata = {
  title: "Vesper Woofer | 저음도, 같은 순간에.",
  description:
    "메인 출력과 서브우퍼를 한 입력에서 연결하세요. Vesper Woofer의 로우패스 필터와 메인 출력 딜레이로 저음역과 타이밍을 조절합니다.",
  alternates: { canonical: "/woofer" },
  openGraph: {
    title: "Vesper Woofer | 저음도, 같은 순간에.",
    description: "두 개의 출력. 하나의 음악. Windows 오디오를 내 환경에 맞게.",
    url: "/woofer",
    images: [
      {
        url: "/woofer-social.png",
        width: 1200,
        height: 630,
        alt: "Vesper Woofer의 메인 출력과 서브우퍼 분기 개념도",
      },
    ],
  },
};
export default function WooferPage() {
  return <WooferExperience />;
}
