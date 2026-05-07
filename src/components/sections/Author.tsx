import Image from "next/image";
import Eyebrow from "../primitives/Eyebrow";
import Reveal from "../primitives/Reveal";
import Rule from "../primitives/Rule";
import { author } from "@/lib/copy";

export default function Author() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <Rule variant="soft" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-16 md:mt-20 items-start">
          <div className="md:col-span-4">
            <Reveal>
              <div
                className="relative w-full max-w-[280px] mx-auto md:mx-0 aspect-square overflow-hidden paper-warm"
                style={{ borderRadius: 2 }}
              >
                <Image
                  src="/portrait-placeholder.svg"
                  alt={author.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 280px, 280px"
                  className="object-cover grayscale"
                  priority={false}
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8 max-w-[640px]">
            <Reveal>
              <Eyebrow>{author.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="t-title mt-5">{author.name}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="t-body mt-6">{author.bio}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
