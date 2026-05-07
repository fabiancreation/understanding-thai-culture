import Rule from "../primitives/Rule";
import { footer } from "@/lib/copy";

export default function Footer() {
  return (
    <footer className="paper-warm">
      <Rule variant="soft" />
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <p className="font-serif text-[20px] md:text-[22px] tracking-[-0.012em] text-[var(--ink)]">
              {footer.wordmark}
            </p>
            <p className="t-meta mt-3 max-w-[380px]">{footer.tagline}</p>
          </div>
          <nav className="md:col-span-3 flex flex-col gap-2.5">
            {footer.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...("external" in l && l.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="t-meta hover:text-[var(--ink)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="md:col-span-3 flex flex-col gap-2.5">
            {footer.legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="t-meta hover:text-[var(--ink)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <p className="t-meta mt-2">{footer.copyright}</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
