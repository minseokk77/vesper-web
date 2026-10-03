"use client";

import { useSyncExternalStore } from "react";
import styles from "./audio.module.css";

const key = "vesper-audio-theme";

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== key && event.key !== null) return;
    document.documentElement.dataset.audioTheme =
      event.newValue === "dark" ? "dark" : "light";
    onChange();
  }
  window.addEventListener(key, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(key, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function AudioTheme() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.audioTheme === "dark",
    () => false,
  );
  function toggle() {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.audioTheme = theme;
    try {
      localStorage.setItem(key, theme);
    } catch {
      /* Keep switching available when storage is blocked. */
    }
    window.dispatchEvent(new Event(key));
  }
  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "라이트 테마로 전환" : "다크 테마로 전환"}
      title={dark ? "Light theme" : "Dark theme"}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20.5 14a8.5 8.5 0 0 1-10.5-10.5A8.5 8.5 0 1 0 20.5 14Z" />
        )}
      </svg>
    </button>
  );
}
