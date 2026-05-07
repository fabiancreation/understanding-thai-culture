import Reveal from "../primitives/Reveal";
import Rule from "../primitives/Rule";
import Button from "../primitives/Button";
import { cornerstone } from "@/lib/copy";

export default function Cornerstone() {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Rule variant="soft" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-16 md:mt-20">
          <div className="md:col-span-5">
            <Reveal>
              <CoverPlaceholder />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p
                className="t-eyebrow"
                style={{ color: "var(--gold)" }}
              >
                {cornerstone.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="t-title mt-5 md:mt-7">{cornerstone.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="t-body mt-6 md:mt-8 max-w-[560px]">
                {cornerstone.sub}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="t-meta mt-8">{cornerstone.meta}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Button href={cornerstone.primaryCta.href} variant="primary">
                  {cornerstone.primaryCta.label}
                </Button>
                <Button href={cornerstone.secondaryCta.href} variant="quiet">
                  {cornerstone.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverPlaceholder() {
  return (
    <div
      aria-label="Book cover placeholder"
      className="relative aspect-[5/7] w-full max-w-[360px] mx-auto md:mx-0 paper-warm border border-[var(--rule)] flex flex-col justify-between p-7"
      style={{ borderRadius: 2 }}
    >
      <p className="t-meta" style={{ color: "var(--gold)" }}>
        {cornerstone.coverEyebrow}
      </p>
      <div>
        <p
          className="font-serif font-bold text-[clamp(28px,4vw,36px)] leading-[1.05] tracking-[-0.012em]"
          style={{ color: "var(--ink)" }}
        >
          {cornerstone.coverTitle.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
        <div
          className="mt-6 h-px w-12"
          style={{ background: "var(--ink)" }}
          aria-hidden
        />
        <p
          className="mt-5 font-sans text-[12px] tracking-[0.18em] uppercase"
          style={{ color: "var(--charcoal)" }}
        >
          {cornerstone.coverByline}
        </p>
      </div>
    </div>
  );
}
