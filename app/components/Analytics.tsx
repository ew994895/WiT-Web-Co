"use client";

import { useEffect } from "react";

function sendEvent(event: string) {
  const body = JSON.stringify({ event, path: window.location.pathname });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  });
}

export function Analytics() {
  useEffect(() => {
    sendEvent("page_view");

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      const trackedEvent = target?.dataset.track;
      if (trackedEvent) sendEvent(trackedEvent);
    }

    function handleCustomEvent(event: Event) {
      const trackedEvent = (event as CustomEvent<{ event?: string }>).detail?.event;
      if (trackedEvent) sendEvent(trackedEvent);
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("wit:track", handleCustomEvent);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("wit:track", handleCustomEvent);
    };
  }, []);

  return null;
}
