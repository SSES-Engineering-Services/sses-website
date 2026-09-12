import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import PageContainer from "../components/common/PageContainer";
import CareerForm from "../components/forms/CareerForm";

const benefits = [
  {
    icon: Wrench,
    number: "01",
    title: "Work on Real Projects",
    description:
      "Contribute to engineering, industrial, safety and infrastructure projects with practical responsibilities.",
  },
  {
    icon: Users,
    number: "02",
    title: "Learn From Professionals",
    description:
      "Work alongside experienced professionals and gain exposure to real operational environments.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Safety-Driven Culture",
    description:
      "Be part of a team that values responsible work, practical safety and professional standards.",
  },
];

const opportunities = [
  "Engineering & Technical Services",
  "Safety, Health, Environment & Fire",
  "Industrial Operations & Projects",
  "Training, Inspection & Auditing",
  "Manpower & Project Support",
];

const applicationSteps = [
  {
    number: "01",
    title: "Share Your Profile",
    description:
      "Send us your CV and a brief introduction about your experience or area of interest.",
  },
  {
    number: "02",
    title: "We Review Your Details",
    description:
      "Our team reviews your profile based on current and upcoming project requirements.",
  },
  {
    number: "03",
    title: "Connect With SSES",
    description:
      "If your profile matches a suitable opportunity, our team will contact you for the next steps.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Careers() {
  const scrollToApplication = () => {
    document.getElementById("career-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        {/* Technical grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[52px_52px]" />
        </div>

        {/* Moving technical words */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <motion.div
            animate={{
              x: ["0%", "-35%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-[18%] flex whitespace-nowrap"
          >
            <span className="mr-16 font-display text-[clamp(5rem,12vw,12rem)] font-extrabold tracking-[-0.07em] text-white/[0.025]">
              ENGINEERING
            </span>

            <span className="mr-16 font-display text-[clamp(5rem,12vw,12rem)] font-extrabold tracking-[-0.07em] text-white/[0.025]">
              SAFETY
            </span>

            <span className="mr-16 font-display text-[clamp(5rem,12vw,12rem)] font-extrabold tracking-[-0.07em] text-white/[0.025]">
              ENVIRONMENT
            </span>

            <span className="mr-16 font-display text-[clamp(5rem,12vw,12rem)] font-extrabold tracking-[-0.07em] text-white/[0.025]">
              PROJECTS
            </span>
          </motion.div>

          <motion.div
            animate={{
              x: ["-35%", "0%"],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[8%] left-0 flex whitespace-nowrap"
          >
            <span className="mr-16 font-mono text-[clamp(3rem,7vw,7rem)] font-bold tracking-[0.08em] text-orange-400/[0.035]">
              RESPONSIBILITY
            </span>

            <span className="mr-16 font-mono text-[clamp(3rem,7vw,7rem)] font-bold tracking-[0.08em] text-orange-400/[0.035]">
              EXPERIENCE
            </span>

            <span className="mr-16 font-mono text-[clamp(3rem,7vw,7rem)] font-bold tracking-[0.08em] text-orange-400/[0.035]">
              EXPERTISE
            </span>
          </motion.div>
        </div>

        {/* Ambient moving shapes */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 border border-orange-500/20"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-40 left-[8%] h-96 w-96 rounded-full border border-white/10"
        />

        {/* Vertical technical marker */}
        <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
          <span className="h-16 w-px bg-white/10" />

          <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 [writing-mode:vertical-rl]">
            SSES / CAREERS
          </span>

          <span className="h-16 w-px bg-white/10" />
        </div>

        <PageContainer className="relative">
          <div className="grid min-h-[590px] items-center gap-12 py-16 sm:min-h-[650px] sm:gap-14 sm:py-20 lg:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10"
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400"
              >
                <motion.span
                  animate={{
                    width: ["20px", "42px", "20px"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-px bg-orange-400"
                />

                Careers at SSES
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,7vw,6.8rem)] font-extrabold leading-[0.91] tracking-[-0.045em]"
              >
                Build meaningful
                <br />
                <span className="relative inline-block text-orange-400">
                  work.
                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-400"
                  />
                </span>
                <br />
                Build a safer future.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base font-medium leading-8 text-slate-300 sm:text-lg"
              >
                Join a team working across engineering, industrial operations,
                safety, environment and infrastructure projects.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={scrollToApplication}
                  className="group inline-flex items-center justify-center gap-3 bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Submit Your Profile

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    <ArrowDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </span>
                </button>

                <a
                  href="#opportunities"
                  className="group inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-navy-950"
                >
                  Explore Opportunities

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-navy-950/10">
                    <ArrowDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </span>
                </a>
              </motion.div>

              {/* Hero metadata */}
              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6"
              >
                {[
                  "Engineering",
                  "S.H.E.F.",
                  "Infrastructure",
                  "Operations",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45"
                  >
                    <span className="font-mono text-orange-400">
                      0{index + 1}
                    </span>

                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* =====================================================
                HERO TECHNICAL VISUAL
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[540px]"
            >
              {/* Orbiting system */}
              <div className="pointer-events-none absolute -inset-8 hidden sm:block">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-white/[0.07]"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(242,140,40,0.7)]"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 42,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border border-orange-400/10"
                />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-16 rounded-full border border-dashed border-white/[0.06]"
                />
              </div>

              {/* Technical floating labels */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 top-10 z-20 hidden border border-white/10 bg-navy-950/80 px-3 py-2 backdrop-blur-md sm:block"
              >
                <p className="font-mono text-[8px] tracking-[0.2em] text-white/40">
                  FIELD / 01
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  Engineering
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 bottom-20 z-20 hidden border border-white/10 bg-navy-950/80 px-3 py-2 backdrop-blur-md sm:block"
              >
                <p className="font-mono text-[8px] tracking-[0.2em] text-white/40">
                  FIELD / 02
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-400">
                  Safety
                </p>
              </motion.div>

              {/* Main panel */}
              <div className="relative border border-white/15 bg-white/[0.045] p-5 backdrop-blur-md sm:p-7">
                {/* Scan line */}
                <motion.div
                  animate={{
                    y: ["0%", "100%", "0%"],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent"
                />

                {/* Corner marks */}
                <div className="pointer-events-none absolute -left-px -top-px h-12 w-12 border-l border-t border-orange-400/60" />
                <div className="pointer-events-none absolute -bottom-px -right-px h-12 w-12 border-b border-r border-orange-400/60" />

                <div className="flex items-start justify-between">
                  <motion.div
                    animate={{
                      rotate: [0, 8, 0, -8, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center bg-orange-500 text-white"
                  >
                    <BriefcaseBusiness size={25} />
                  </motion.div>

                  <div className="text-right">
                    <p className="font-mono text-[8px] tracking-[0.25em] text-white/30">
                      SYSTEM / CAREERS
                    </p>

                    <div className="mt-2 flex items-center justify-end gap-2">
                      <motion.span
                        animate={{
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-orange-400"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                        SSES Careers
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="max-w-md font-display text-2xl font-bold leading-tight sm:text-3xl">
                    Your expertise can help create stronger, safer and more
                    responsible operations.
                  </p>
                </div>

                {/* Technical divider */}
                <div className="relative mt-10 h-px bg-white/10">
                  <motion.span
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-px w-16 bg-orange-400"
                  />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.2em] text-white/30">
                      DISCIPLINE / 01
                    </p>

                    <p className="mt-3 text-xl font-extrabold text-orange-400">
                      Engineering
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Technical expertise
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[8px] tracking-[0.2em] text-white/30">
                      DISCIPLINE / 02
                    </p>

                    <p className="mt-3 text-xl font-extrabold text-orange-400">
                      S.H.E.F.
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Safety-driven work
                    </p>
                  </div>
                </div>

                {/* Technical coordinates */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
                    22.3072° N
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
                    73.1812° E
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Outer accent bracket */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.8, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 h-20 w-20 border-b border-l border-orange-500/70"
              />
            </motion.div>
          </div>
        </PageContainer>

        {/* Hero bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"
        >
          <span className="font-mono text-[8px] tracking-[0.25em] text-white/35">
            SCROLL TO EXPLORE
          </span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15"
          >
            <ArrowDown size={12} className="text-white/60" />
          </motion.span>
        </motion.div>
      </section>

      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-100">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(8,26,43,0.045),transparent_65%)]" />

        <PageContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid gap-8 py-12 md:grid-cols-[0.7fr_1.3fr] md:items-center"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-600">
                Work With Purpose
              </span>
            </div>

            <p className="max-w-4xl font-display text-2xl font-bold leading-relaxed text-navy-950 sm:text-3xl">
              At SSES, we believe technical expertise becomes more valuable
              when it is applied to real challenges, real projects and real
              operational environments.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      {/* =========================================================
          WHY SSES
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-900 py-18 text-white lg:py-22">
        <div className="pointer-events-none absolute right-[-8%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/[0.035]" />

        <PageContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
              <motion.span
                animate={{
                  width: ["20px", "36px", "20px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-px bg-orange-400"
              />

              Why Work With SSES
            </div>

            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Build experience that
              <span className="text-orange-400"> matters.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden bg-navy-900 p-7 transition-colors duration-500 hover:bg-navy-800 lg:p-9"
                >
                  {/* Hover light sweep */}
                  <motion.div
                    animate={{
                      x: ["-120%", "180%"],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 1.5,
                    }}
                    className="pointer-events-none absolute inset-y-0 w-24 skew-x-[-20deg] bg-white/[0.025]"
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <Icon size={27} className="text-orange-400" />
                    </motion.div>

                    <span className="font-mono text-sm font-bold text-white/30">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="relative z-10 mt-12 font-display text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="relative z-10 mt-4 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>

                  <div className="relative z-10 mt-8 h-px overflow-hidden bg-white/10">
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.7,
                      }}
                      className="h-px w-1/3 bg-orange-400"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          OPPORTUNITIES
      ========================================================= */}
      <section
        id="opportunities"
        className="border-y border-slate-200 bg-slate-50 py-18 lg:py-22"
      >
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-600">
                Opportunities
              </span>

              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy-950">
                Where can you
                <br />
                contribute?
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                We welcome professionals and emerging talent across multiple
                technical and project-oriented areas.
              </p>

              <div className="mt-8 hidden h-px w-20 bg-orange-500 lg:block" />
            </motion.div>

            <div className="border-t border-slate-300">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-slate-300 py-6"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-orange-500/70"
                  />

                  <div className="relative z-10 flex items-center gap-5">
                    <span className="font-mono text-sm font-extrabold text-orange-600">
                      0{index + 1}
                    </span>

                    <h3 className="font-display text-xl font-bold text-navy-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                      {opportunity}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="relative z-10 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          LARGE STATEMENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-950 py-18 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[80px_80px]" />
        </div>

        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[10rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[15rem] lg:text-[18rem]"
        >
          SSES
        </motion.div>

        <PageContainer className="relative">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-400" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
                More Than A Position
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Good work creates
              <span className="text-orange-400"> real impact.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              From engineering support to safety management and industrial
              project execution, the work we do contributes to stronger
              operations and safer working environments.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      {/* =========================================================
          APPLICATION PROCESS
      ========================================================= */}
      <section className="bg-slate-100 py-18 lg:py-22">
        <PageContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-600">
              How It Works
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-navy-950">
              A simple way to
              <span className="text-orange-600"> connect.</span>
            </h2>
          </motion.div>

          <div className="relative mt-12 grid gap-0 border border-slate-300 md:grid-cols-3">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[52px] hidden h-px bg-slate-300 md:block" />

            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative border-b border-slate-300 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold text-slate-300">
                    {step.number}
                  </span>

                  <motion.span
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="h-2.5 w-2.5 rounded-full border border-orange-500 bg-slate-100"
                  />
                </div>

                <h3 className="mt-8 font-display text-xl font-bold text-navy-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          APPLICATION
      ========================================================= */}
      <section
        id="career-application"
        className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-18 lg:py-24"
      >
        {/* Ambient glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-orange-400/[0.05]"
        />

        <PageContainer className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Application Intro */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-orange-400" />

                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-400">
                  Open Application
                </span>
              </div>

              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Bring your
                <br />
                expertise to
                <span className="text-orange-400"> SSES.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
                Even if there is no currently advertised role that exactly
                matches your profile, you can share your details with us for
                future opportunities.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Attach your CV or relevant professional document",
                  "Share your area of expertise",
                  "Our team will review your profile",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />

                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 hidden border-l border-orange-400/40 pl-4 sm:block">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                  APPLICATION STATUS
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-orange-400"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                    Open for profiles
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative border border-white/10 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
            >
              {/* Form corner detail */}
              <div className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r border-t border-orange-500/50" />

              <div className="mb-7 flex items-center gap-3 border-b border-slate-200 pb-6">
                <div className="flex h-11 w-11 items-center justify-center bg-slate-100 text-navy-950">
                  <FileText size={21} />
                </div>

                <div>
                  <h3 className="font-display text-xl font-extrabold text-navy-950">
                    Submit Your Profile
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Share your CV or professional document.
                  </p>
                </div>
              </div>

              <CareerForm />
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

export default Careers;