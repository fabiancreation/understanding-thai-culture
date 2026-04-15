export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Books />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-warm-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-semibold text-deep-900">
          Understanding Thai Culture
        </a>
        <nav className="hidden sm:flex gap-8 text-sm font-medium text-warm-700">
          <a href="#books" className="hover:text-gold-600 transition-colors">
            Books
          </a>
          <a href="#about" className="hover:text-gold-600 transition-colors">
            About
          </a>
          <a
            href="#newsletter"
            className="hover:text-gold-600 transition-colors"
          >
            Stay Updated
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-deep-900 text-warm-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-950/80 via-deep-900/60 to-deep-800/90" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,_var(--color-gold-500)_0%,_transparent_50%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
        <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-6">
          A Book Series by Fabian Arndt
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
          Understanding
          <br />
          <span className="text-gold-400">Thai Culture</span>
        </h1>
        <p className="text-lg sm:text-xl text-warm-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Four books that decode Thailand beyond the travel guides. Written for
          travelers, digital nomads, expats, and anyone who wants to truly
          understand this country.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#books"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-500 text-deep-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Explore the Books
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-warm-500/30 text-warm-200 font-medium rounded-lg hover:border-gold-500/50 hover:text-gold-300 transition-colors"
          >
            About the Author
          </a>
        </div>
      </div>
    </section>
  );
}

const books = [
  {
    title: "Understanding Thai Culture",
    subtitle: "The Foundation",
    description:
      "The comprehensive introduction to Thai culture. From the wai to the monarchy, from Buddhism to social hierarchies. Everything you need to avoid the most common cultural pitfalls and start understanding how Thais think.",
    status: "Coming Soon",
    color: "gold",
  },
  {
    title: "55 Facts About Bangkok",
    subtitle: "The City Decoded",
    description:
      "55 cultural phenomena that explain Bangkok and Thai culture through the lens of the capital. Short, vivid chapters you can read in any order. Each one reveals something you probably didn't know.",
    status: "Coming Soon",
    color: "amber",
  },
  {
    title: "The Shape of Bangkok",
    subtitle: "History Through Neighborhoods",
    description:
      "How Bangkok works, explained through the history and character of its neighborhoods. From the royal island of Rattanakosin to the skyscrapers of Sathorn. Every district tells a piece of Thailand's story.",
    status: "In Progress",
    color: "orange",
  },
  {
    title: "Understanding Chiang Mai",
    subtitle: "The North Decoded",
    description:
      "A million rice fields and the city they built. Chiang Mai is Thailand's second city and a digital nomad hotspot. But it's also the heart of Lanna culture, with its own language, traditions, and way of life.",
    status: "In Progress",
    color: "teal",
  },
];

function Books() {
  return (
    <section id="books" className="py-24 sm:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-medium tracking-widest uppercase mb-4">
            The Series
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-deep-900 mb-6">
            Four Books, One Mission
          </h2>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto">
            Each book stands on its own, but together they form the most
            comprehensive guide to understanding Thailand written by a Western
            author living in the country.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({
  title,
  subtitle,
  description,
  status,
}: {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  color: string;
}) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-warm-200 hover:border-gold-300 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <span className="text-gold-600 text-xs font-semibold tracking-widest uppercase">
          {subtitle}
        </span>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            status === "Coming Soon"
              ? "bg-gold-100 text-gold-700"
              : "bg-warm-200 text-warm-700"
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className="font-serif text-2xl font-bold text-deep-900 mb-3 group-hover:text-gold-700 transition-colors">
        {title}
      </h3>
      <p className="text-warm-600 leading-relaxed">{description}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-warm-100/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-gold-600 text-sm font-medium tracking-widest uppercase mb-4">
              About the Author
            </p>
            <h2 className="font-serif text-4xl font-bold text-deep-900 mb-6">
              Fabian Arndt
            </h2>
            <div className="space-y-4 text-warm-700 leading-relaxed text-lg">
              <p>
                I&apos;ve been living in Thailand for eight years, the last three
                in Chiang Mai. I studied cultural studies and sociology, which
                gave me the framework to look at Thai culture with both empathy
                and analytical rigor.
              </p>
              <p>
                This project started from countless conversations with Thai
                friends who kept telling me the same thing: foreigners don&apos;t
                understand the basics. They mean well, but they step on toes they
                don&apos;t even know exist.
              </p>
              <p>
                I built a community of 6,000+ followers on Threads and
                Instagram. Many of them are Thais who say my writing helps them
                understand their own culture in new ways. That feedback keeps me
                going.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-warm-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-deep-900 mb-6">
                By the Numbers
              </h3>
              <div className="space-y-5">
                <Stat label="Years in Thailand" value="8" />
                <Stat label="Years in Chiang Mai" value="3" />
                <Stat label="Books in the series" value="4" />
                <Stat label="Social media followers" value="6,000+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-warm-100 pb-3">
      <span className="text-warm-600 text-sm">{label}</span>
      <span className="font-serif text-2xl font-bold text-gold-600">
        {value}
      </span>
    </div>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-deep-900 text-warm-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-4">
          Stay Updated
        </p>
        <h2 className="font-serif text-4xl font-bold mb-6">
          Get Notified When Books Launch
        </h2>
        <p className="text-warm-400 text-lg mb-10 leading-relaxed">
          Join the list to receive updates on book releases, exclusive excerpts,
          and stories about Thai culture that don&apos;t make it into the books.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3.5 rounded-lg bg-deep-800 border border-warm-700/30 text-warm-100 placeholder:text-warm-600 focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button className="px-6 py-3.5 bg-gold-500 text-deep-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors whitespace-nowrap">
            Notify Me
          </button>
        </div>
        <p className="text-warm-600 text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep-950 text-warm-500 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-warm-300 font-semibold">
            Understanding Thai Culture
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fabian Arndt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
