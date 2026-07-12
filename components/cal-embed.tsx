"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import type { CalEmbedConfig } from "@/lib/cal";

const Cal = dynamic(() => import("@calcom/embed-react"), {
  ssr: false,
  loading: () => null,
});

export function CalEmbed({ calLink, calOrigin, embedJsUrl }: CalEmbedConfig) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: "allushi-booking", embedJsUrl });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#15b572" },
          dark: { "cal-brand": "#2ece8b" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [embedJsUrl]);

  return (
    <Cal
      namespace="allushi-booking"
      calLink={calLink}
      calOrigin={calOrigin}
      embedJsUrl={embedJsUrl}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
