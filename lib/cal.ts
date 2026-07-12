export type CalEmbedConfig = {
  calLink: string;
  calOrigin: "https://cal.com" | "https://cal.eu";
  embedJsUrl: string;
};

const origins = {
  "cal.com": "https://cal.com",
  "www.cal.com": "https://cal.com",
  "cal.eu": "https://cal.eu",
  "www.cal.eu": "https://cal.eu",
} as const;

export function parseCalLink(value?: string): CalEmbedConfig | undefined {
  const input = value?.trim();
  if (!input) return undefined;

  if (input.startsWith("http://") || input.startsWith("https://")) {
    try {
      const url = new URL(input);
      const calOrigin = origins[url.hostname as keyof typeof origins];
      if (!calOrigin) return undefined;
      const path = url.pathname.replace(/^\/+|\/+$/g, "");
      return path ? { calLink: path, calOrigin, embedJsUrl: `${calOrigin}/embed/embed.js` } : undefined;
    } catch {
      return undefined;
    }
  }

  const path = input.split(/[?#]/, 1)[0]?.replace(/^\/+|\/+$/g, "");
  return path ? { calLink: path, calOrigin: "https://cal.com", embedJsUrl: "https://cal.com/embed/embed.js" } : undefined;
}

export function normalizeCalLink(value?: string) {
  return parseCalLink(value)?.calLink;
}
