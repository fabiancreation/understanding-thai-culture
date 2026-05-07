import Eyebrow from "../primitives/Eyebrow";
import Reveal from "../primitives/Reveal";
import { series } from "@/lib/copy";

export default function Series() {
  return (
    <section id="series" className="paper-warm py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow>{series.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="t-title mt-5">{series.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-sub mt-6 max-w-[640px]">{series.sub}</p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-x-10">
          {series.books.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.08}>
              <article className="border-t border-[var(--ink)] pt-7 pb-2 md:pb-0 md:border-r md:last:border-r-0 md:pr-10 md:-mr-10 h-full flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="t-meta">{book.volume}</span>
                  <span
                    className="t-meta"
                    style={{ color: "var(--indigo)" }}
                  >
                    · {book.status}
                  </span>
                </div>
                <h3
                  className="font-serif font-bold mt-5 leading-[1.1] tracking-[-0.012em]"
                  style={{
                    fontSize: "clamp(24px, 2.4vw, 30px)",
                    color: "var(--ink)",
                  }}
                >
                  {book.title}
                </h3>
                <p className="t-body mt-4 max-w-[34ch] flex-1">
                  {book.description}
                </p>
                <a href={book.cta.href} className="link-quiet mt-6 self-start">
                  {book.cta.label} <span aria-hidden>↗</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
