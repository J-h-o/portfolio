import type { ReactNode } from "react";

export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`tag${dark ? " tag-dark" : ""}`}>{children}</span>;
}
