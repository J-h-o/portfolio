"use client";

import { useEffect, useState } from "react";

// Self-hosted booking page (allushi-infra: stack/booking.py). It reports its height via postMessage.
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://book.joanisallushi.com";
const BOOKING_ORIGIN = new URL(BOOKING_URL).origin;

export function BookingEmbed({ locale, title }: { locale: string; title: string }) {
  const [height, setHeight] = useState(680);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== BOOKING_ORIGIN || event.data?.type !== "allushi-book-height") return;
      setHeight(Math.max(480, Math.ceil(Number(event.data.height) || 0)));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      className="booking-frame"
      src={`${BOOKING_ORIGIN}/?lang=${locale}&theme=light&embed=1`}
      title={title}
      style={{ height }}
    />
  );
}
