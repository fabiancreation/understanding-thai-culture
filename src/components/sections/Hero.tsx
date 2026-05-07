import Eyebrow from "../primitives/Eyebrow";
import Reveal from "../primitives/Reveal";
import Button from "../primitives/Button";
import { hero } from "@/lib/copy";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[88px] pb-[120px] md:pt-[140px] md:pb-[180px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="max-w-[920px]">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-display mt-6 md:mt-8">{hero.title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="t-sub mt-7 md:mt-9 max-w-[680px]">{hero.sub}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="quiet">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
