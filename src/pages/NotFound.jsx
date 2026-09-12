import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  SearchX,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageContainer from "../components/common/PageContainer";

function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-navy-950/10" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-orange-500/20" />

        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />
      </div>

      <PageContainer className="relative z-10">
        <section className="flex min-h-[calc(100vh-88px)] items-center py-20">
          <div className="grid w-full gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            {/* Left Content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-600">
                  Error 404
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
                This page has
                <span className="block text-orange-500">
                  gone missing.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                The page you are looking for may have been moved,
                renamed or is no longer available. Let's get you
                back to the right place.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                {/* Home */}
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-navy-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-navy-900"
                >
                  <Home size={18} />

                  Back to Home

                  <ArrowUpRight size={17} />
                </Link>

                {/* Back */}
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-navy-950 transition hover:border-navy-950 hover:bg-slate-50"
                >
                  <ArrowLeft size={18} />

                  Go Back
                </button>
              </div>
            </motion.div>


            {/* Right Visual */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="relative"
            >
              <div className="relative flex aspect-square items-center justify-center border border-slate-200 bg-white shadow-xl">

                {/* Large 404 */}
                <span className="select-none font-display text-[110px] font-extrabold leading-none tracking-tighter text-navy-950 sm:text-[150px]">
                  4
                  <span className="text-orange-500">
                    0
                  </span>
                  4
                </span>

                {/* Center Icon */}
                <div className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 sm:h-24 sm:w-24">
                  <SearchX
                    size={38}
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              {/* Small label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-navy-950 px-6 py-3 text-center text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
                SSES Engineering Services LLP
              </div>
            </motion.div>

          </div>
        </section>
      </PageContainer>
    </main>
  );
}

export default NotFound;