import type { Metadata } from "next";
import EqExperience from "./experience";
export const metadata: Metadata = {title:"Vesper EQ | 내 소리를, 직접 그리다.",description:"가로로 넓은 파라메트릭 EQ. 주파수·게인·Q를 조절하고, DSP에 연결해 AutoEQ와 별도로 나만의 음색을 더하세요.",alternates:{canonical:"/eq"}};
export default function EqPage(){return <EqExperience/>;}
