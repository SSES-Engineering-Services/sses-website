import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Layers3,
  MoveRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="overflow-hidden bg-slate-50 text-navy-950">
      {/* Hero */}
      <section className="relative min-h-[78vh] overflow-hidden bg-navy-950">
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[70px_70px]" />
        </div>

        {/* Technical circles */}
        <div
          className="pointer-events-none absolute -right-40 top-20 h-130 w-130 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-20 top-40 h-90 w-90 rounded-full border border-white/10"
          aria-hidden="true"
        />

        {/* Moving technical line */}
        <div
          className="contact-line pointer-events-none absolute left-0 top-[38%] h-px w-full bg-linear-to-r from-transparent via-orange-400/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Main copy */}
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="h-px w-10 bg-orange-500"
                  aria-hidden="true"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400 sm:text-sm">
                  Contact SSES
                </span>
              </div>

              <h1 className="font-display text-[44px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[76px]">
                Engineering starts
                <span className="block text-slate-300">
                  with a conversation.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-[18px] font-medium leading-8 text-slate-300 sm:text-[20px] sm:leading-9">
                Tell us what you are working on. Whether it involves
                engineering, safety, inspection, consultancy or technical
                support, start the conversation with SSES.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#enquiry"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-orange-500 px-7 py-3 text-[17px] font-extrabold text-white transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#081A2B]"
                >
                  Start an Enquiry

                  <ArrowDown
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>

                <Link
                  to="/projects"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 py-3 text-[17px] font-extrabold text-white transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#081A2B]"
                >
                  View Our Projects

                  <ArrowUpRight
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Technical visual */}
            <div className="relative mx-auto hidden w-full max-w-107.5 lg:block">
              <div className="contact-technical-visual relative aspect-square">
                {/* Outer frame */}
                <div className="absolute inset-8 border border-white/15" />

                {/* Inner frame */}
                <div className="absolute inset-20 border border-orange-400/30" />

                {/* Corner markers */}
                <span className="absolute left-8 top-8 h-5 w-5 border-l-2 border-t-2 border-orange-400" />
                <span className="absolute right-8 top-8 h-5 w-5 border-r-2 border-t-2 border-orange-400" />
                <span className="absolute bottom-8 left-8 h-5 w-5 border-b-2 border-l-2 border-orange-400" />
                <span className="absolute bottom-8 right-8 h-5 w-5 border-b-2 border-r-2 border-orange-400" />

                {/* Rotating ring */}
                <div className="contact-ring absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

                {/* SSES center */}
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-orange-400/50 bg-navy-950 shadow-[0_0_60px_rgba(242,140,40,0.12)]">
                  <div className="text-center">
                    <p className="font-display text-4xl font-extrabold tracking-[0.12em] text-white">
                      SSES
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                      Engineering
                    </p>
                  </div>
                </div>

                {/* Technical labels */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-navy-950 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Technical
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-navy-950 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Safety
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-navy-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Consultancy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Strip */}
      <section className="border-b border-slate-200 bg-[#E9EFF4]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
          {/* Engineering */}
          <div className="flex items-center gap-4 border-b border-slate-200 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <Layers3
              size={27}
              strokeWidth={1.7}
              className="shrink-0 text-navy-950"
              aria-hidden="true"
            />

            <div>
              <p className="text-[16px] font-extrabold text-navy-950 sm:text-[17px]">
                Engineering
              </p>

              <p className="mt-1 text-[14px] font-medium text-slate-700 sm:text-[15px]">
                Technical support
              </p>
            </div>
          </div>

          {/* Safety */}
          <div className="flex items-center gap-4 border-b border-slate-200 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <ShieldCheck
              size={27}
              strokeWidth={1.7}
              className="shrink-0 text-navy-950"
              aria-hidden="true"
            />

            <div>
              <p className="text-[16px] font-extrabold text-navy-950 sm:text-[17px]">
                Safety &amp; S.H.E.F.
              </p>

              <p className="mt-1 text-[14px] font-medium text-slate-700 sm:text-[15px]">
                Risk &amp; compliance
              </p>
            </div>
          </div>

          {/* Consultancy */}
          <div className="flex items-center gap-4 px-5 py-7 sm:px-8">
            <Compass
              size={27}
              strokeWidth={1.7}
              className="shrink-0 text-navy-950"
              aria-hidden="true"
            />

            <div>
              <p className="text-[16px] font-extrabold text-navy-950 sm:text-[17px]">
                Consultancy
              </p>

              <p className="mt-1 text-[14px] font-medium text-slate-700 sm:text-[15px]">
                Project-focused solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section
        id="enquiry"
        className="bg-white"
        aria-labelledby="enquiry-heading"
      >
        <div className="mx-auto max-w-250 px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span
              className="h-px w-8 bg-orange-500"
              aria-hidden="true"
            />

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">
              Start Here
            </span>

            <span
              className="h-px w-8 bg-orange-500"
              aria-hidden="true"
            />
          </div>

          <h2
            id="enquiry-heading"
            className="font-display text-[36px] font-extrabold leading-tight tracking-tight text-navy-950 sm:text-5xl lg:text-6xl"
          >
            Ready to discuss your requirement?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[18px] font-medium leading-8 text-slate-700 sm:text-[19px] sm:leading-9">
            Tell us what you are working on and share your requirement
            with the SSES team. We will get back to you with the right
            direction for your project.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#footer-contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-navy-950 px-7 py-3 text-[17px] font-extrabold text-white transition-all duration-300 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-950 focus:ring-offset-2"
            >
              Start an Enquiry

              <MoveRight
                size={21}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Animation */}
      <style>{`
        @keyframes contact-line-move {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes contact-ring-rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .contact-line {
          animation: contact-line-move 8s ease-in-out infinite;
        }

        .contact-ring {
          animation: contact-ring-rotate 24s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-line,
          .contact-ring {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

export default Contact;