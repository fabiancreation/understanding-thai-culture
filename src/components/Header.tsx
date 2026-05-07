import Rule from "./primitives/Rule";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-[17px] tracking-[-0.01em] text-[var(--ink)] no-underline"
        >
          Understanding Thai Culture
        </a>
        <nav className="flex items-center gap-6 md:gap-9">
          <a
            href="#book"
            className="t-meta hover:text-[var(--ink)] transition-colors"
          >
            The book
          </a>
          <a
            href="#series"
            className="t-meta hover:text-[var(--ink)] transition-colors hidden sm:inline"
          >
            The series
          </a>
          <a
            href="#read"
            className="t-meta hover:text-[var(--ink)] transition-colors hidden sm:inline"
          >
            Read
          </a>
          <a
            href="#subscribe"
            className="t-meta hover:text-[var(--ink)] transition-colors"
          >
            Subscribe
          </a>
        </nav>
      </div>
      <Rule variant="soft" />
    </header>
  );
}
