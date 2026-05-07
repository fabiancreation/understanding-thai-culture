import Eyebrow from "../primitives/Eyebrow";
import Reveal from "../primitives/Reveal";
import { passage } from "@/lib/copy";

export default function Passage() {
  return (
    <section id="read" className="py-24 md:py-32">
      <div className="max-w-[760px] mx-auto px-6 md:px-10">
        <Reveal>
          <Eyebrow>{passage.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <p
            className="font-serif font-normal mt-8 md:mt-10 text-[var(--ink)] text-wrap-pretty"
            style={{
              fontSize: "clamp(20px, 1.8vw, 23px)",
              lineHeight: 1.6,
            }}
          >
            {passage.body}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="t-meta mt-10 md:mt-12">{passage.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
