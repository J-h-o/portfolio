import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { localizePath } from "@/content/i18n";

export function BrandLogo({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link href={localizePath(locale)} aria-label={locale === "el" ? "Αρχική σελίδα Allushi" : "Allushi home"}>
      <Image
        className="brand-logo"
        src={inverse ? "/brand/allushi-wordmark-white.png" : "/brand/allushi-wordmark-black.png"}
        alt="Allushi — Software, AI, Systems"
        width={2172}
        height={724}
        priority
        sizes="166px"
      />
    </Link>
  );
}
