import Link from "next/link";
import { AudioTheme } from "./AudioTheme";
import styles from "./audio.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
export function Mark() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6 16 27 28 6M10 6l6 11 6-11"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}
export function AudioHeader({
  product,
  links,
}: {
  product?: string;
  links?: [string, string][];
}) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Vesper 홈">
        <Mark />
        <span>
          vesper
          {product && <span className={styles.brandSuffix}> / {product}</span>}
        </span>
      </Link>
      <nav aria-label="페이지 메뉴">
        {(
          links ?? [
            ["/#products", "Our Tools"],
            ["/#approach", "Our Approach"],
            ["/#start", "Getting Started"],
          ]
        ).map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className={styles.headerActions}>
        <div className={styles.productNav}>
          <Link
            href="/dsp"
            aria-current={product === "DSP" ? "page" : undefined}
          >
            DSP
          </Link>
          <Link href="/eq" aria-current={product === "EQ" ? "page" : undefined}>EQ</Link>
          <Link
            href="/woofer"
            aria-current={product === "Woofer" ? "page" : undefined}
          >
            Woofer
          </Link>
        </div>
        <AudioTheme />
      </div>
    </header>
  );
}
export function AudioFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.footerBrand}>
        <Mark />
        vesper
      </Link>
      <p>음악을 듣는 당신에게.</p>
      <div>
        <Link href="/dsp">
          DSP <Arrow diagonal />
        </Link>
        <Link href="/eq">EQ <Arrow diagonal /></Link>
        <Link href="/woofer">
          Woofer <Arrow diagonal />
        </Link>
        <Link href="/open-source">
          Open Source <Arrow diagonal />
        </Link>
        <a href="#main-content">맨 위로 ↑</a>
      </div>
    </footer>
  );
}
