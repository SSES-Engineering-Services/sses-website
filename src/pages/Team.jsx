import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  FileText,
  GraduationCap,
  X,
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

import PageContainer from "../components/common/PageContainer";
import ProjectPdfViewer from "../components/projects/ProjectPdfViewer";

import {
  founder,
  directors,
  members,
  keyPersonnel,
} from "../data/team";

/*
|--------------------------------------------------------------------------
| TEAM WORD FIELD
|--------------------------------------------------------------------------
|
| Typography-led opening visual.
|
| Strong words:
| - TEAM
| - TOGETHER
| - EVERYONE
| - ACHIEVES
| - MORE
| - EXPERIENCE
| - EXPERTISE
| - COLLABORATION
| - LEADERSHIP
|
| Supporting words:
| - Engineering
| - Safety
| - Fire
| - Environment
| - Infrastructure
| - Projects
| - Training
| - Auditing
| - Quality
| - Management
|
| Positions are intentionally designed rather than randomly generated.
|--------------------------------------------------------------------------
*/

const wordField = [
  {
    word: "TOGETHER",
    x: "8%",
    y: "17%",
    size: "text-3xl sm:text-5xl lg:text-7xl",
    weight: "font-black",
    opacity: "opacity-95",
    rotate: -2,
    accent: true,
    drift: 28,
    scale: 1.08,
    scaleDown: 0.96,
    duration: 13,
    delay: 0,
  },
  {
    word: "ENGINEERING",
    x: "30%",
    y: "10%",
    size: "text-sm sm:text-base lg:text-xl",
    weight: "font-semibold",
    opacity: "opacity-35",
    rotate: 3,
    drift: -22,
    scale: 1.04,
    scaleDown: 0.97,
    duration: 15,
    delay: 1,
  },
  {
    word: "SAFETY",
    x: "61%",
    y: "14%",
    size: "text-lg sm:text-2xl lg:text-4xl",
    weight: "font-bold",
    opacity: "opacity-60",
    rotate: -3,
    drift: 25,
    scale: 1.06,
    scaleDown: 0.96,
    duration: 14,
    delay: 0.8,
  },
  {
    word: "EXPERIENCE",
    x: "76%",
    y: "30%",
    size: "text-2xl sm:text-4xl lg:text-6xl",
    weight: "font-black",
    opacity: "opacity-85",
    rotate: 2,
    drift: -27,
    scale: 1.07,
    scaleDown: 0.95,
    duration: 17,
    delay: 1.5,
  },
  {
    word: "FIRE",
    x: "3%",
    y: "39%",
    size: "text-xl sm:text-3xl lg:text-5xl",
    weight: "font-bold",
    opacity: "opacity-50",
    rotate: -5,
    drift: 24,
    scale: 1.05,
    scaleDown: 0.96,
    duration: 13,
    delay: 0.4,
  },
  {
    word: "EVERYONE",
    x: "27%",
    y: "35%",
    size: "text-3xl sm:text-5xl lg:text-7xl",
    weight: "font-black",
    opacity: "opacity-100",
    rotate: 1,
    drift: -25,
    scale: 1.09,
    scaleDown: 0.95,
    duration: 16,
    delay: 0.3,
  },
  {
    word: "PROJECTS",
    x: "67%",
    y: "45%",
    size: "text-sm sm:text-lg lg:text-2xl",
    weight: "font-semibold",
    opacity: "opacity-35",
    rotate: -2,
    drift: 19,
    scale: 1.05,
    scaleDown: 0.97,
    duration: 11,
    delay: 1.1,
  },
  {
    word: "LEADERSHIP",
    x: "80%",
    y: "56%",
    size: "text-xl sm:text-3xl lg:text-5xl",
    weight: "font-black",
    opacity: "opacity-75",
    rotate: 4,
    drift: -24,
    scale: 1.07,
    scaleDown: 0.95,
    duration: 18,
    delay: 0.7,
  },
  {
    word: "ACHIEVES",
    x: "9%",
    y: "59%",
    size: "text-3xl sm:text-5xl lg:text-7xl",
    weight: "font-black",
    opacity: "opacity-95",
    rotate: -2,
    drift: 23,
    scale: 1.08,
    scaleDown: 0.95,
    duration: 15,
    delay: 0.6,
  },
  {
    word: "ENVIRONMENT",
    x: "42%",
    y: "55%",
    size: "text-sm sm:text-base lg:text-xl",
    weight: "font-medium",
    opacity: "opacity-30",
    rotate: 3,
    drift: -20,
    scale: 1.04,
    scaleDown: 0.97,
    duration: 13,
    delay: 1.7,
  },
  {
    word: "EXPERTISE",
    x: "48%",
    y: "72%",
    size: "text-2xl sm:text-4xl lg:text-6xl",
    weight: "font-black",
    opacity: "opacity-85",
    rotate: -1,
    drift: 26,
    scale: 1.07,
    scaleDown: 0.95,
    duration: 19,
    delay: 0.9,
  },
  {
    word: "MORE",
    x: "74%",
    y: "75%",
    size: "text-4xl sm:text-6xl lg:text-8xl",
    weight: "font-black",
    opacity: "opacity-100",
    rotate: 2,
    drift: -28,
    scale: 1.1,
    scaleDown: 0.94,
    duration: 16,
    delay: 0.2,
  },
  {
    word: "INFRASTRUCTURE",
    x: "4%",
    y: "80%",
    size: "text-sm sm:text-base lg:text-xl",
    weight: "font-semibold",
    opacity: "opacity-30",
    rotate: 4,
    drift: 18,
    scale: 1.04,
    scaleDown: 0.97,
    duration: 14,
    delay: 1.2,
  },
  {
    word: "COLLABORATION",
    x: "24%",
    y: "84%",
    size: "text-lg sm:text-2xl lg:text-4xl",
    weight: "font-bold",
    opacity: "opacity-60",
    rotate: -3,
    drift: -23,
    scale: 1.06,
    scaleDown: 0.96,
    duration: 17,
    delay: 1,
  },
  {
    word: "QUALITY",
    x: "66%",
    y: "91%",
    size: "text-sm sm:text-base lg:text-xl",
    weight: "font-semibold",
    opacity: "opacity-30",
    rotate: 2,
    drift: 20,
    scale: 1.04,
    scaleDown: 0.97,
    duration: 12,
    delay: 1.8,
  },
  {
    word: "MANAGEMENT",
    x: "87%",
    y: "82%",
    size: "text-xs sm:text-sm lg:text-lg",
    weight: "font-medium",
    opacity: "opacity-25",
    rotate: -4,
    drift: -17,
    scale: 1.03,
    scaleDown: 0.97,
    duration: 15,
    delay: 1.4,
  },
  {
    word: "TRAINING",
    x: "15%",
    y: "69%",
    size: "text-xs sm:text-sm lg:text-lg",
    weight: "font-medium",
    opacity: "opacity-25",
    rotate: 5,
    drift: 16,
    scale: 1.03,
    scaleDown: 0.97,
    duration: 13,
    delay: 1.6,
  },
  {
    word: "AUDITING",
    x: "54%",
    y: "27%",
    size: "text-xs sm:text-sm lg:text-lg",
    weight: "font-medium",
    opacity: "opacity-25",
    rotate: -4,
    drift: -19,
    scale: 1.03,
    scaleDown: 0.97,
    duration: 14,
    delay: 0.5,
  },
];

/*
|--------------------------------------------------------------------------
| SECTION HEADING
|--------------------------------------------------------------------------
*/

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-orange-500" />

        <span
          className={`text-[11px] font-extrabold uppercase tracking-[0.18em] ${
            light ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={`mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| PROFILE VISUAL
|--------------------------------------------------------------------------
*/

function ProfileVisual({
  person,
  size = "large",
  dark = false,
}) {
  const sizeClasses =
    size === "large"
      ? "aspect-[3/4] w-52 sm:w-60 lg:w-64"
      : "aspect-[3/4] w-28 sm:w-32";

  if (person.image) {
    return (
      <div
        className={`${sizeClasses} shrink-0 overflow-hidden border ${
          dark
            ? "border-white/15 bg-white/5"
            : "border-slate-200 bg-slate-100"
        }`}
      >
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} flex shrink-0 items-center justify-center border ${
        dark
          ? "border-white/15 bg-white/4"
          : "border-slate-200 bg-navy-950"
      }`}
    >
      <span
        className={`font-display font-black ${
          size === "large" ? "text-5xl" : "text-2xl"
        } text-orange-500`}
      >
        {person.initials ||
          person.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 3)}
      </span>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| PORTFOLIO BUTTON
|--------------------------------------------------------------------------
*/

function PortfolioButton({
  person,
  onOpen,
  light = false,
}) {
  if (!person.portfolioPdf) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(person)}
      className={`group mt-7 inline-flex items-center gap-3 border px-4 py-3 text-sm font-bold transition ${
        light
          ? "border-white/20 text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          : "border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white"
      }`}
    >
      <FileText size={17} />

      <span>View Professional Profile</span>

      <MoveUpRight
        size={15}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </button>
  );
}

/*
|--------------------------------------------------------------------------
| PORTFOLIO MODAL
|--------------------------------------------------------------------------
*/

function PortfolioModal({
  person,
  onClose,
}) {
  useEffect(() => {
    if (!person) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [person, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-navy-950/95 p-3 backdrop-blur-sm sm:p-6 lg:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex h-[92dvh] w-[calc(100vw-24px)] max-w-7xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[94vh] sm:w-full"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-600">
                  Professional Portfolio
                </span>

                <h3 className="mt-1 font-display text-xl font-extrabold text-navy-950 sm:text-2xl">
                  {person.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center border border-slate-200 text-navy-950 transition hover:bg-navy-950 hover:text-white"
                aria-label="Close portfolio"
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-slate-100">
              <ProjectPdfViewer
                file={person.portfolioPdf}
                title={`${person.name} Professional Portfolio`}
                fill
              />
            </div>

            <div className="border-t border-slate-200 px-5 py-3 text-center sm:px-7">
              <p className="text-xs text-slate-500">
                Professional profile document is provided
                for viewing purposes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
|--------------------------------------------------------------------------
| KINETIC WORD FIELD
|--------------------------------------------------------------------------
*/

function KineticWordField() {
  return (
    <section className="relative h-[72vh] min-h-130 overflow-hidden bg-[#050C14] text-white sm:h-[78vh] sm:min-h-155">
      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine radial atmosphere */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/4 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small technical labels */}
      <div className="absolute left-5 top-6 z-20 sm:left-8 lg:left-12 lg:top-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
          SSES / PEOPLE / 01
        </span>
      </div>

      <div className="absolute right-5 top-6 z-20 sm:right-8 lg:right-12 lg:top-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
          COLLECTIVE CAPABILITY
        </span>
      </div>

      {/* Slowly breathing word-field layer */}
      <motion.div
        className="absolute inset-[-7%]"
        animate={{
          scale: [1, 1.025, 1],
          x: [0, 8, 0],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {wordField.map((item, index) => (
          <motion.div
            key={`${item.word}-${index}`}
            className={`absolute select-none whitespace-nowrap ${
              item.size
            } ${item.weight} ${item.opacity} ${
              item.accent
                ? "text-orange-500"
                : "text-white"
            }`}
            style={{
              left: item.x,
              top: item.y,
              rotate: item.rotate,
              willChange:
                "transform, opacity",
            }}
            animate={{
              x: [
                0,
                item.drift * 1.2,
                item.drift * -0.7,
                0,
              ],
              y: [
                0,
                item.drift * -0.75,
                item.drift * 0.8,
                0,
              ],
              scale: [
                1,
                item.scale,
                item.scaleDown,
                1,
              ],
              rotate: [
                item.rotate,
                item.rotate + 1.6,
                item.rotate - 1.2,
                item.rotate,
              ],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.word}
          </motion.div>
        ))}
      </motion.div>

      {/* Central philosophy */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="relative text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-[#050C14]/75 backdrop-blur-sm sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          >
            <div>
              <div className="font-display text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl">
                TEAM
              </div>

              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-[10px]">
                Collective strength
              </div>
            </div>
          </motion.div>

          {/* Rotating orbit */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-5 rounded-full border border-dashed border-white/10"
          />
        </motion.div>
      </div>

      {/* Bottom message */}
      <div className="absolute bottom-6 left-5 z-20 max-w-sm sm:left-8 lg:bottom-10 lg:left-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
          Collective capability
        </p>

        <p className="mt-2 text-sm leading-6 text-white/55">
          Different disciplines. Shared responsibility.
          One collective capability.
        </p>
      </div>

      <div className="absolute bottom-7 right-5 z-20 sm:right-8 lg:bottom-10 lg:right-12">
        <div className="flex items-center gap-3 text-white/35">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
            Scroll
          </span>

          <ArrowDownRight size={16} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#050C14] to-transparent" />
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| TEAM PHILOSOPHY
|--------------------------------------------------------------------------
*/

function TeamPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <PageContainer>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Circular typography */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-80 w-80 sm:h-90 sm:w-90 lg:h-107.5 lg:w-107.5">

              {/* Outer technical ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 48,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-navy-950/10"
              />

              {/* Secondary outer ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 72,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-navy-950/6"
              />

              {/* Inner orange ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-10 rounded-full border border-orange-500/25"
              />

              {/* Circular text */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-1"
              >
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full overflow-visible"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="teamCirclePath"
                      d="
                        M 200,200
                        m -168,0
                        a 168,168 0 1,1 336,0
                        a 168,168 0 1,1 -336,0
                      "
                    />
                  </defs>

                  <text
                    fill="currentColor"
                    className="text-navy-950"
                    fontSize="14"
                    fontWeight="900"
                    letterSpacing="6"
                  >
                    <textPath
                      href="#teamCirclePath"
                      startOffset="0%"
                    >
                      TOGETHER • EVERYONE • ACHIEVES • MORE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Secondary text ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 55,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-13.5"
              >
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full overflow-visible"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="teamInnerCirclePath"
                      d="
                        M 200,200
                        m -145,0
                        a 145,145 0 1,1 290,0
                        a 145,145 0 1,1 -290,0
                      "
                    />
                  </defs>

                  <text
                    fill="currentColor"
                    className="text-navy-950/30"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="4"
                  >
                    <textPath
                      href="#teamInnerCirclePath"
                      startOffset="0%"
                    >
                      SSES • PEOPLE • EXPERIENCE • EXPERTISE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.025, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative text-center"
                >
                  <div className="font-display text-6xl font-black leading-none tracking-[-0.07em] text-navy-950 sm:text-7xl lg:text-[5.5rem]">
                    ONE
                  </div>

                  <div className="font-display text-6xl font-black leading-none tracking-[-0.07em] text-orange-500 sm:text-7xl lg:text-[5.5rem]">
                    TEAM
                  </div>

                  <div className="mx-auto mt-6 h-px w-14 bg-navy-950/20" />

                  <span className="mt-4 block text-[9px] font-extrabold uppercase tracking-[0.24em] text-navy-950/50">
                    Many disciplines
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-600">
                Team Philosophy
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-7xl">
              Different expertise.
              <span className="block text-orange-500">
                One direction.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              SSES brings together professionals with
              experience across engineering, industrial
              safety, fire management, environment,
              infrastructure and major project environments.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The strength of the organisation comes from
              combining specialist knowledge with practical
              project experience — creating a team capable of
              supporting complex requirements from planning
              through execution.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Experience"],
                ["02", "Expertise"],
                ["03", "Collaboration"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-t border-navy-950/15 pt-4"
                >
                  <span className="text-xs font-black text-orange-500">
                    {number}
                  </span>

                  <p className="mt-2 font-display text-lg font-extrabold text-navy-950">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| HERO
|--------------------------------------------------------------------------
*/

function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(242,140,40,0.10),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(46,113,168,0.12),transparent_32%)]" />

      <div className="absolute right-[-15%] top-[-35%] h-162.5 w-162.5 rounded-full border border-white/4" />

      <div className="absolute bottom-[-30%] left-[-10%] h-137.5 w-137.5 rounded-full border border-orange-500/6" />

      <PageContainer className="relative z-10">
        <div className="grid min-h-[72vh] items-center gap-12 py-24 lg:grid-cols-[1fr_auto] lg:py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange-400">
                People behind the projects
              </span>
            </div>

            <h1 className="mt-7 font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[9rem]">
              OUR
              <span className="block text-orange-500">
                TEAM.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              Experienced professionals working across
              engineering, safety, fire, environment,
              infrastructure and complex industrial
              projects.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              <span>Engineering</span>
              <span>Safety</span>
              <span>Fire</span>
              <span>Environment</span>
              <span>Projects</span>
            </div>
          </motion.div>

          {/* Hero index */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="hidden lg:block"
          >
            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/10">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border border-dashed border-orange-500/30"
              >
                {/* Orbiting orange marker */}
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />
              </motion.div>

              <div className="text-center">
                <span className="block text-5xl font-black text-white">
                  01
                </span>

                <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                  Collective
                  <br />
                  Capability
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| FOUNDER
|--------------------------------------------------------------------------
*/

function FounderSection({
  onOpenPortfolio,
}) {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24 lg:py-32">
      <PageContainer>
        <SectionHeading
          eyebrow="Our Foundation"
          title="Leadership begins with experience."
          description="The professional foundation and guiding vision behind SSES."
        />

        <motion.article
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div className="relative overflow-hidden bg-navy-950 p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-22.5 -top-22.5 h-64 w-64 rounded-full border border-white/6" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400">
                  Founder
                </span>

                <div className="mt-8">
                  <ProfileVisual
                    person={founder}
                    size="large"
                    dark
                  />
                </div>

                <span className="mt-9 block text-xs font-extrabold uppercase tracking-[0.16em] text-orange-400">
                  {founder.role}
                </span>

                <h3 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
                  {founder.name}
                </h3>
              </div>

              <div className="mt-12 flex items-end justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  SSES / FOUNDATION
                </span>

                <Award
                  size={42}
                  strokeWidth={1.2}
                  className="text-orange-500/40"
                />
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600">
              Professional Background
            </span>

            <p className="mt-6 text-lg leading-8 text-navy-950">
              {founder.education}
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {founder.description}
            </p>

            <div className="mt-9 border-l-2 border-orange-500 pl-6">
              <p className="text-sm leading-7 text-slate-600">
                {founder.legacy}
              </p>
            </div>

            <PortfolioButton
              person={founder}
              onOpen={onOpenPortfolio}
            />
          </div>
        </motion.article>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| DIRECTORS
|--------------------------------------------------------------------------
*/

function DirectorsSection({
  onOpenPortfolio,
}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <PageContainer>
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership with multidisciplinary experience."
          description="Senior leadership supported by experience across industrial, infrastructure, engineering and project environments."
        />

        <div className="mt-16 space-y-8">
          {directors.map((person, index) => {
            const Icon =
              person.icon || BriefcaseBusiness;

            return (
              <motion.article
                key={person.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group grid overflow-hidden border border-slate-200 bg-slate-50 lg:grid-cols-[260px_1fr_auto]"
              >
                <div className="relative flex items-center justify-center bg-navy-950 p-8">
                  <div className="absolute left-5 top-5 text-[10px] font-black tracking-[0.2em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <ProfileVisual
                    person={person}
                    size="large"
                    dark
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <Icon
                      size={19}
                      className="text-orange-600"
                      strokeWidth={1.7}
                    />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-600">
                      {person.role}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
                    {person.name}
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm font-bold leading-7 text-navy-950">
                    {person.experience}
                  </p>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                    {person.description}
                  </p>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                    {person.organizations}
                  </p>

                  <div className="mt-7 border-t border-slate-200 pt-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-600">
                      Qualifications & Expertise
                    </span>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                      {person.qualifications}
                    </p>
                  </div>

                  <PortfolioButton
                    person={person}
                    onOpen={onOpenPortfolio}
                  />
                </div>

                <div className="hidden items-end justify-end p-8 lg:flex">
                  <ArrowUpRight
                    size={26}
                    className="text-navy-950/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| MEMBERS
|--------------------------------------------------------------------------
*/

function MembersSection({
  onOpenPortfolio,
}) {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24 lg:py-32">
      <PageContainer>
        <SectionHeading
          eyebrow="Specialist Leadership"
          title="People with specialist knowledge."
          description="Senior professionals supporting technical, industrial safety, training and fire safety requirements."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          {members.map((person, index) => {
            const Icon =
              person.icon || BriefcaseBusiness;

            return (
              <motion.article
                key={person.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative bg-white p-7 sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <ProfileVisual
                    person={person}
                    size="small"
                  />

                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className="text-orange-600"
                      strokeWidth={1.7}
                    />

                    <span className="text-[10px] font-black tracking-[0.15em] text-navy-950/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <h3 className="mt-7 font-display text-2xl font-black tracking-tight text-navy-950">
                  {person.name}
                </h3>

                <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-600">
                  {person.role}
                </span>

                <p className="mt-5 text-sm font-bold leading-7 text-navy-950">
                  {person.experience}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {person.description}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {person.organizations}
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {person.qualifications}
                  </p>
                </div>

                <PortfolioButton
                  person={person}
                  onOpen={onOpenPortfolio}
                />
              </motion.article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PROFESSIONAL NETWORK CIRCULAR VISUAL
|--------------------------------------------------------------------------
|
| This belongs ONLY inside the Professional Network / Key Personnel
| section.
|
| Layout:
|
| LEFT
| ├── Professional Network
| ├── Depth beyond leadership.
| ├── Description
| └── Circular technical visual
|
| RIGHT
| └── 2-column professional cards
|
|--------------------------------------------------------------------------
*/

function ProfessionalNetworkVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative mt-14 flex w-full items-center justify-center overflow-hidden"
    >
      <div className="relative aspect-square w-full max-w-107.5">

        {/* Soft technical atmosphere */}
        <div className="pointer-events-none absolute inset-[18%] rounded-full bg-orange-500/2.5 blur-3xl" />

        {/* Outer static engineering boundary */}
        <div className="absolute inset-2 rounded-full border border-navy-950/[0.07]" />

        {/* Outer rotating dashed ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-5 rounded-full border border-dashed border-navy-950/15"
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />
        </motion.div>

        {/* Orange technical orbit */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-12 rounded-full border border-orange-500/20"
        >
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500" />
        </motion.div>

        {/* Circular typography */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 500 500"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path
                id="professionalNetworkOuterPath"
                d="
                  M 250,250
                  m -194,0
                  a 194,194 0 1,1 388,0
                  a 194,194 0 1,1 -388,0
                "
              />
            </defs>

            <text
              fill="currentColor"
              className="text-navy-950"
              fontSize="14"
              fontWeight="900"
              letterSpacing="7"
            >
              <textPath
                href="#professionalNetworkOuterPath"
                startOffset="0%"
              >
                SSES • PROFESSIONAL NETWORK • EXPERIENCE • EXPERTISE •
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Inner reverse typography */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 52,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-12"
        >
          <svg
            viewBox="0 0 500 500"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path
                id="professionalNetworkInnerPath"
                d="
                  M 250,250
                  m -165,0
                  a 165,165 0 1,1 330,0
                  a 165,165 0 1,1 -330,0
                "
              />
            </defs>

            <text
              fill="currentColor"
              className="text-navy-950/30"
              fontSize="9"
              fontWeight="800"
              letterSpacing="5"
            >
              <textPath
                href="#professionalNetworkInnerPath"
                startOffset="0%"
              >
                ENGINEERING • SAFETY • FIRE • ENVIRONMENT • PROJECTS •
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Central SVG engineering graphic */}
        <div className="absolute inset-22 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-full w-full items-center justify-center rounded-full border border-navy-950/10 bg-slate-50"
          >
            {/* SVG technical drawing */}
            <svg
              viewBox="0 0 220 220"
              className="h-[72%] w-[72%]"
              aria-hidden="true"
            >
              {/* Outer engineering circle */}
              <circle
                cx="110"
                cy="110"
                r="76"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-navy-950/15"
              />

              {/* Inner circle */}
              <circle
                cx="110"
                cy="110"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 5"
                className="text-orange-500/50"
              />

              {/* Structural verticals */}
              <path
                d="M70 142 L70 78 L110 48 L150 78 L150 142"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-navy-950"
              />

              {/* Roof / structure */}
              <path
                d="M62 82 L110 42 L158 82"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-navy-950"
              />

              {/* Central tower */}
              <path
                d="M96 142 L96 84 L110 68 L124 84 L124 142"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-navy-950"
              />

              {/* Horizontal engineering lines */}
              <path
                d="M70 98 H150 M70 116 H150 M70 132 H150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-navy-950/50"
              />

              {/* Orange central signal */}
              <circle
                cx="110"
                cy="104"
                r="7"
                fill="currentColor"
                className="text-orange-500"
              />

              <circle
                cx="110"
                cy="104"
                r="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-orange-500/30"
              />

              {/* Crosshair */}
              <path
                d="M110 26 V58 M110 162 V194 M26 110 H58 M162 110 H194"
                stroke="currentColor"
                strokeWidth="1"
                className="text-navy-950/25"
              />
            </svg>

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mt-20 text-center">
                <span className="block font-display text-2xl font-black tracking-tighter text-navy-950">
                  SSES
                </span>

                <span className="mt-1 block text-[7px] font-extrabold uppercase tracking-[0.2em] text-orange-600">
                  Technical network
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical corner markers */}
        <span className="absolute left-[18%] top-[24%] h-1.5 w-1.5 bg-navy-950/30" />
        <span className="absolute right-[18%] top-[30%] h-1.5 w-1.5 bg-orange-500" />
        <span className="absolute bottom-[23%] left-[28%] h-1.5 w-1.5 bg-navy-950/30" />
        <span className="absolute bottom-[18%] right-[27%] h-1.5 w-1.5 bg-orange-500/60" />

        {/* Technical caption */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
          <span className="text-[8px] font-black uppercase tracking-[0.22em] text-navy-950/35">
            PEOPLE • KNOWLEDGE • EXECUTION
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| KEY PERSONNEL
|--------------------------------------------------------------------------
*/

function KeyPersonnelSection({
  onOpenPortfolio,
}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <PageContainer>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          {/* ============================================================
              LEFT — PROFESSIONAL NETWORK INTRO + CIRCULAR VISUAL
          ============================================================ */}

          <div>
            <SectionHeading
              eyebrow="Professional Network"
              title="Depth beyond leadership."
              description="Experienced professionals supporting safety management, infrastructure, engineering and industrial project requirements."
            />

            {/* Circular visual stays BELOW the heading + description */}
            <ProfessionalNetworkVisual />
          </div>

          {/* ============================================================
              RIGHT — PROFESSIONAL NETWORK CARDS
          ============================================================ */}

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
            {keyPersonnel.map((person, index) => {
              const Icon =
                person.icon || BriefcaseBusiness;

              return (
                <motion.article
                  key={person.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <ProfileVisual
                      person={person}
                      size="small"
                    />

                    <span className="text-[10px] font-black tracking-[0.15em] text-navy-950/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Icon
                      size={18}
                      className="text-orange-600"
                      strokeWidth={1.7}
                    />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-orange-600">
                      Professional
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-black text-navy-950">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-sm font-bold leading-7 text-navy-950">
                    {person.experience}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {person.description}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-5">
                    <div className="flex items-start gap-3">
                      <GraduationCap
                        size={17}
                        className="mt-1 shrink-0 text-orange-600"
                      />

                      <p className="text-sm leading-7 text-slate-600">
                        {person.qualifications}
                      </p>
                    </div>
                  </div>

                  <PortfolioButton
                    person={person}
                    onOpen={onOpenPortfolio}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| EXPERTISE STRIP
|--------------------------------------------------------------------------
*/

function ExpertiseSection() {
  const expertise = useMemo(
    () => [
      "Engineering",
      "Industrial Safety",
      "Fire Management",
      "Environment",
      "Infrastructure",
      "Construction",
      "Railways",
      "Oil & Gas",
      "Power",
      "Training",
      "Auditing",
      "Project Management",
    ],
    []
  );

  return (
    <section className="overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <PageContainer>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            eyebrow="Multidisciplinary Experience"
            title="Experience that travels across sectors."
            description="SSES combines specialist disciplines to support complex industrial and infrastructure requirements."
            light
          />

          <div className="grid grid-cols-2 border-l border-white/10 sm:grid-cols-3">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group border-b border-r border-t border-white/10 px-5 py-6 sm:px-7 sm:py-8"
              >
                <span className="text-[9px] font-black tracking-[0.18em] text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 font-display text-lg font-bold text-white transition group-hover:text-orange-400 sm:text-xl">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| CTA
|--------------------------------------------------------------------------
*/

function TeamCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-37.5 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full border border-navy-950/4" />

      <PageContainer>
        <motion.div
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
            amount: 0.2,
          }}
          className="relative grid gap-10 border-y border-navy-950/10 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:py-16"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-600">
                SSES Expertise
              </span>
            </div>

            <h2 className="mt-5 max-w-4xl font-display text-4xl font-black leading-tight tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
              Complex projects need
              <span className="text-orange-500">
                {" "}
                experienced people.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              Our multidisciplinary team brings together
              professional experience across engineering,
              industrial safety, fire management,
              infrastructure, construction and major project
              environments.
            </p>
          </div>

          <div className="flex h-20 w-20 items-center justify-center border border-navy-950 bg-navy-950 text-orange-500">
            <Building2
              size={32}
              strokeWidth={1.4}
            />
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| TEAM PAGE
|--------------------------------------------------------------------------
*/

function Team() {
  const [selectedPortfolio, setSelectedPortfolio] =
    useState(null);

  const openPortfolio = (person) => {
    setSelectedPortfolio(person);
  };

  const closePortfolio = () => {
    setSelectedPortfolio(null);
  };

  return (
    <>
      {/* ================================================================
          01 — KINETIC WORD ART / PRE-HERO
      ================================================================= */}

      <KineticWordField />

      {/* ================================================================
          02 — TEAM HERO
      ================================================================= */}

      <TeamHero />

      {/* ================================================================
          03 — TEAM PHILOSOPHY
      ================================================================= */}

      <TeamPhilosophy />

      {/* ================================================================
          04 — FOUNDER
      ================================================================= */}

      <FounderSection
        onOpenPortfolio={openPortfolio}
      />

      {/* ================================================================
          05 — DIRECTORS
      ================================================================= */}

      <DirectorsSection
        onOpenPortfolio={openPortfolio}
      />

      {/* ================================================================
          06 — MEMBERS / SPECIALISTS
      ================================================================= */}

      <MembersSection
        onOpenPortfolio={openPortfolio}
      />

      {/* ================================================================
          07 — KEY PERSONNEL / PROFESSIONAL NETWORK
      ================================================================= */}

      <KeyPersonnelSection
        onOpenPortfolio={openPortfolio}
      />

      {/* ================================================================
          08 — MULTIDISCIPLINARY EXPERTISE
      ================================================================= */}

      <ExpertiseSection />

      {/* ================================================================
          09 — FINAL CTA
      ================================================================= */}

      <TeamCTA />

      {/* ================================================================
          10 — PROFESSIONAL PORTFOLIO VIEWER
      ================================================================= */}

      <PortfolioModal
        person={selectedPortfolio}
        onClose={closePortfolio}
      />
    </>
  );
}

export default Team;