"use client";

import { useState } from "react";
import Eyebrow from "../primitives/Eyebrow";
import Reveal from "../primitives/Reveal";
import Rule from "../primitives/Rule";
import { leadMagnet } from "@/lib/copy";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setState("error");
      return;
    }
    setState("submitting");
    // TODO: wire to MailerLite endpoint when API key + group id land in env.
    // For now, simulate success so the form is usable in preview.
    if (typeof window !== "undefined") {
      console.info("[lead-magnet] capture pending wiring:", email);
    }
    setTimeout(() => {
      setState("ok");
      setEmail("");
    }, 400);
  }

  return (
    <section id="subscribe" className="py-24 md:py-32">
      <Rule variant="soft" />
      <div className="paper-warm">
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <Reveal>
            <Eyebrow>{leadMagnet.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="t-title mt-5 md:mt-7">{leadMagnet.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-body mt-6 md:mt-8 max-w-[560px] mx-auto">
              {leadMagnet.body}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <form
              onSubmit={onSubmit}
              className="mt-10 max-w-[480px] mx-auto"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="lm-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="lm-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  placeholder={leadMagnet.emailPlaceholder}
                  aria-describedby="lm-privacy"
                  aria-invalid={state === "error"}
                  className="field flex-1"
                />
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="btn-primary"
                >
                  {state === "submitting" ? "Sending" : leadMagnet.submitLabel}
                </button>
              </div>
              <p
                id="lm-privacy"
                className="t-meta mt-4"
                aria-live="polite"
              >
                {state === "error"
                  ? "Please enter a valid email address."
                  : state === "ok"
                    ? "Check your inbox to confirm. Then look for the first email."
                    : leadMagnet.privacy}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
      <Rule variant="soft" />
    </section>
  );
}
