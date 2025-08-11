"use client";

import { useEffect } from "react";

export default function useRegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);
}
