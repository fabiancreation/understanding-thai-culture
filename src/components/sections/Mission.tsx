import Reveal from "../primitives/Reveal";
import { mission } from "@/lib/copy";

export default function Mission() {
  return (
    <section id="about" className="paper-warm py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <hr
            role="presentation"
            aria-hidden
            className="border-0"
            style={{
              background: "var(--ink)",
              height: 1,
              width: 48,
              margin: 0,
            }}
          />
          <Reveal>
            <p className="t-body-large mt-10 md:mt-12">{mission.body}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="t-meta mt-8 md:mt-10">{mission.attribution}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
