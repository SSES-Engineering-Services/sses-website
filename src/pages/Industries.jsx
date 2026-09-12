import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Factory,
  Flame,
  Handshake,
  HardHat,
  Landmark,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import industrialHero from "../assets/images/industries/industrial-hero.png";
import maarkssFire from "../assets/images/industries/maarkss-fire.png";

/* =========================================================
   DATA
========================================================= */

const industries = [
  {
    title: "Industrial Projects",
    description:
      "Safety, engineering and compliance support for complex industrial project environments.",
    icon: Factory,
  },
  {
    title: "Infrastructure Development",
    description:
      "Integrated SHEF and engineering support across large-scale infrastructure development.",
    icon: Building2,
  },
  {
    title: "Power & Energy",
    description:
      "Specialized safety and technical solutions for power generation and energy facilities.",
    icon: Zap,
  },
  {
    title: "Construction & Maintenance",
    description:
      "Site safety, inspection and manpower support for construction and maintenance operations.",
    icon: HardHat,
  },
  {
    title: "Government & PSU",
    description:
      "Professional compliance, engineering and safety services for government organizations and PSUs.",
    icon: Landmark,
  },
  {
    title: "Private Organizations",
    description:
      "Practical safety and engineering solutions tailored to private-sector operations.",
    icon: Users,
  },
];

const supportAreas = [
  {
    title: "S.H.E.F. Management",
    description:
      "End-to-end safety, health and environmental management systems.",
    icon: ShieldCheck,
  },
  {
    title: "Audits & Inspection",
    description:
      "Detailed audits and inspections to identify risks and strengthen compliance.",
    icon: ClipboardCheck,
  },
  {
    title: "Engineering Support",
    description:
      "Technical and engineering expertise for complex industrial challenges.",
    icon: Wrench,
  },
  {
    title: "Professional Manpower",
    description:
      "Skilled manpower and workforce management for critical operations.",
    icon: Users,
  },
];

/* =========================================================
   HERO LABELS
========================================================= */

const heroLabels = [
  {
    label: "INDUSTRIAL PROJECTS",
    start: 0.08,
    peak: 0.2,
    end: 0.32,
    side: "left",
  },
  {
    label: "POWER & ENERGY",
    start: 0.24,
    peak: 0.36,
    end: 0.48,
    side: "right",
  },
  {
    label: "INFRASTRUCTURE",
    start: 0.4,
    peak: 0.52,
    end: 0.64,
    side: "left",
  },
  {
    label: "MANUFACTURING",
    start: 0.56,
    peak: 0.68,
    end: 0.8,
    side: "right",
  },
  {
    label: "ENGINEERING & SAFETY",
    start: 0.72,
    peak: 0.84,
    end: 0.96,
    side: "left",
  },
];

/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    if (!window.particlesJS) {
      console.warn("particles.js is not available.");
      return;
    }

    const containerId = `sses-particles-${Math.random()
      .toString(36)
      .slice(2, 9)}`;

    container.id = containerId;

    window.particlesJS(containerId, {
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 1000,
          },
        },

        color: {
          value: "#FFFFFF",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 0.68,
          random: true,
          anim: {
            enable: false,
          },
        },

        size: {
          value: 2.2,
          random: true,
          anim: {
            enable: false,
          },
        },

        line_linked: {
          enable: true,
          distance: 145,
          color: "#FFFFFF",
          opacity: 0.26,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
          },
        },
      },

      interactivity: {
        detect_on: "canvas",

        events: {
          onhover: {
            enable: false,
            mode: "grab",
          },

          onclick: {
            enable: false,
            mode: "push",
          },

          resize: true,
        },

        modes: {
          grab: {
            distance: 160,
            line_linked: {
              opacity: 0.5,
            },
          },

          push: {
            particles_nb: 2,
          },
        },
      },

      retina_detect: true,
    });

    return () => {
      const canvas = container.querySelector("canvas");

      if (canvas) {
        canvas.remove();
      }

      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}

/* =========================================================
   HERO TECHNICAL GRID
========================================================= */

function HeroTechnicalGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-5 overflow-hidden opacity-30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        animate={{
          y: ["-10%", "10%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function IndustriesHero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.78, 1],
    ["42vw", "72vw", "100vw"]
  );

  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.78, 1],
    ["46vh", "78vh", "100vh"]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.78, 1],
    [18, 8, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.78, 1],
    [1.16, 1.1, 1.07, 1]
  );

  const imageBrightness = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.82, 0.96, 1, 0.92]
  );

  const imageContrast = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.05, 1]
  );

  const imageSaturation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.78, 0.92, 1]
  );

  const scanlineY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "120%"]
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-[2400px]
        bg-black
        sm:h-[3200px]
        lg:h-[4600px]
      "
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <ParticleBackground />

        <HeroTechnicalGrid />

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-1">
          <div className="absolute inset-0 bg-black/15" />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[100vw] w-screen -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-700/5 blur-[120px] sm:h-[80vw] sm:w-[80vw]"
          />
        </div>

        {/* Main image */}
        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            borderRadius: imageRadius,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            -translate-x-1/2
            -translate-y-1/2
            overflow-hidden
            will-change-[width,height,transform]
          "
        >
          <motion.img
            src={industrialHero}
            alt="Industrial engineering and safety environment"
            style={{
              scale: imageScale,
              filter: useTransform(
                [imageBrightness, imageContrast, imageSaturation],
                ([brightness, contrast, saturation]) =>
                  `brightness(${brightness}) contrast(${contrast}) saturate(${saturation})`
              ),
            }}
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/20" />

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          {/* Image edge vignette */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]" />

          {/* Moving technical scanline */}
          <motion.div
            style={{
              y: scanlineY,
            }}
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-orange-400/50 to-transparent shadow-[0_0_18px_rgba(242,140,40,0.35)]"
          />

          {/* Subtle horizontal technical marks */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute left-[8%] top-[28%] h-px w-24 bg-white/25 sm:w-36" />
            <div className="absolute right-[8%] top-[64%] h-px w-20 bg-white/20 sm:w-32" />
            <div className="absolute left-[18%] bottom-[18%] h-px w-16 bg-orange-400/40 sm:w-24" />
          </div>
        </motion.div>

        {/* Flowing industry typography */}
        {heroLabels.map((item, index) => (
          <SupportingLabel
            key={item.label}
            {...item}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Edge gradients */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-linear-to-t from-black via-black/45 to-transparent sm:h-48" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 bg-linear-to-b from-black/75 to-transparent sm:h-32" />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-linear-to-r from-black/55 to-transparent sm:w-24 lg:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-linear-to-l from-black/55 to-transparent sm:w-24 lg:w-32" />

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-5 top-6 z-40 sm:left-8 sm:top-8 lg:left-16 lg:top-9"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-[10px] sm:tracking-[0.28em]">
            SSES / Industries
          </span>
        </motion.div>

        {/* Technical corner marker */}
        <div className="pointer-events-none absolute right-5 top-6 z-40 flex items-center gap-2 sm:right-8 sm:top-8 lg:right-16 lg:top-9">
          <motion.span
            animate={{
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-orange-400"
          />

          <span className="font-mono text-[8px] tracking-[0.18em] text-white/35">
            FIELD / 01
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8 sm:gap-3">
          <motion.div
            animate={{
              scaleY: [0.55, 1, 0.55],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-7 w-px origin-top bg-linear-to-b from-transparent via-white/55 to-transparent sm:h-10"
          />

          <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.24em] text-white/45 sm:text-[9px] sm:tracking-[0.3em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SUPPORTING LABEL
========================================================= */

function SupportingLabel({
  label,
  index,
  start,
  peak,
  end,
  side,
  scrollYProgress,
}) {
  const isLeft = side === "left";

  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.04),
      start,
      peak,
      Math.min(1, end - 0.02),
      end,
    ],
    [0, 0.72, 1, 0.72, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, peak, end],
    ["100vh", "0vh", "-105vh"]
  );

  const x = useTransform(
    scrollYProgress,
    [start, peak, end],
    isLeft
      ? ["-12vw", "0vw", "7vw"]
      : ["12vw", "0vw", "-7vw"]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, peak, end],
    [0.76, 1, 0.8]
  );

  const rotate = useTransform(
    scrollYProgress,
    [start, peak, end],
    isLeft ? [-4, 0, 2] : [4, 0, -2]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        x,
        scale,
        rotate,
      }}
      className={`pointer-events-none absolute top-1/2 z-20 w-max max-w-[88vw] ${
        isLeft
          ? "left-[5vw] sm:left-[7vw] lg:left-[10vw]"
          : "right-[5vw] sm:right-[7vw] lg:right-[10vw]"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-orange-400/70 sm:text-[10px] sm:tracking-[0.18em]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-[clamp(1rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-0.035em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.65)]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   NAVY INTRO
========================================================= */

function IndustriesIntro() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-32">
      {/* Moving technical line */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-linear-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 sm:mb-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-[10px] sm:tracking-[0.28em]">
                SSES / Industries
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Built for demanding environments.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-3xl text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg">
              SSES delivers integrated safety, health, environment, fire and
              engineering solutions across industrial, infrastructure,
              energy, construction, government and private-sector
              environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRY REACH
========================================================= */

function IndustryReach() {
  return (
    <section className="relative overflow-hidden bg-[#F3F0EA] py-20 sm:py-24 lg:py-32">
      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.11]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,26,43,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(8,26,43,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Moving grid marker */}
      <motion.div
        animate={{
          y: ["-20%", "120%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[15%] top-0 hidden h-24 w-px bg-linear-to-b from-transparent via-orange-500/20 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:gap-8 md:mb-14 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-3 sm:mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-600 sm:text-[10px] sm:tracking-[0.28em]">
                Industry Reach
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-navy-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Expertise across
              <br className="hidden sm:block" /> complex environments.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md text-[14px] leading-6 text-slate-600 sm:text-sm sm:leading-7"
          >
            Our multidisciplinary teams support organizations where safety,
            engineering and operational performance matter most.
          </motion.p>
        </div>

        {/* Industry grid */}
        <div className="grid overflow-hidden border border-[#D5D0C7] bg-[#D5D0C7] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -5,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden bg-[#E9E5DD] p-6 transition-colors duration-500 sm:p-7 lg:p-8 lg:hover:bg-navy-950"
              >
                {/* Hover sweep */}
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-orange-500"
                />

                {/* Technical corner */}
                <div className="pointer-events-none absolute right-0 top-0 h-10 w-10 opacity-30 transition-opacity duration-300 group-hover:opacity-70">
                  <div className="absolute right-3 top-3 h-px w-5 bg-orange-500" />
                  <div className="absolute right-3 top-3 h-5 w-px bg-orange-500" />
                </div>

                <div className="mb-9 flex items-start justify-between sm:mb-10 lg:mb-12">
                  <motion.div
                    whileHover={{
                      rotate: -4,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-11 w-11 items-center justify-center border border-orange-500/30 bg-orange-500/5 transition-colors duration-300 group-hover:border-orange-500/50 group-hover:bg-orange-500 lg:h-12 lg:w-12"
                  >
                    <Icon className="h-5 w-5 text-orange-500 transition-colors duration-300 group-hover:text-white" />
                  </motion.div>

                  <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-slate-400 transition-colors group-hover:text-white/30 sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 transition-colors duration-300 group-hover:text-white sm:text-xl">
                  {industry.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/60 sm:mt-4 sm:text-sm sm:leading-7">
                  {industry.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-500 opacity-100 transition-all duration-300 sm:mt-8 lg:opacity-0 lg:group-hover:opacity-100">
                  Explore capability

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOW WE SUPPORT
========================================================= */

function HowWeSupport() {
  return (
    <section className="relative overflow-hidden bg-[#E8EEF1] py-20 sm:py-24 lg:py-32">
      {/* Subtle horizontal lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,26,43,0.08) 1px, transparent 1px)",
            backgroundSize: "100% 56px",
          }}
        />
      </div>

      {/* Moving technical beam */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-linear-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">
          {/* Left content */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-3 sm:mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-600 sm:text-[10px] sm:tracking-[0.28em]">
                How We Support
              </span>
            </div>

            <h2 className="max-w-md text-3xl font-bold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl md:text-5xl">
              Practical expertise where it matters.
            </h2>

            <p className="mt-5 max-w-md text-[14px] leading-6 text-slate-600 sm:mt-6 sm:text-sm sm:leading-7">
              From strategic planning to field-level execution, our
              specialists work alongside project teams to solve real
              operational challenges.
            </p>
          </motion.div>

          {/* Support list */}
          <div className="divide-y divide-[#C8D1D6] border-y border-[#C8D1D6]">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid gap-4 border-l border-transparent py-6 pl-4 transition-all duration-300 sm:gap-6 sm:py-7 sm:pl-5 md:grid-cols-[70px_1fr_40px] md:items-center md:py-8 lg:hover:border-orange-500"
                >
                  {/* Technical activation line */}
                  <motion.span
                    initial={{
                      scaleY: 0,
                    }}
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08 + 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-[-1px] top-0 h-full w-px origin-top bg-orange-500"
                  />

                  <div className="flex h-11 w-11 items-center justify-center border border-orange-500/30 bg-white/70 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 sm:h-12 sm:w-12">
                    <motion.div
                      whileHover={{
                        rotate: -5,
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Icon className="h-5 w-5 text-orange-500 transition-colors group-hover:text-white" />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-navy-950 sm:text-xl">
                      {area.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-[14px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                      {area.description}
                    </p>
                  </div>

                  <ArrowRight className="hidden h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:translate-x-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ASSOCIATE VENTURES
========================================================= */

function AssociateVentures() {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dialRef = useRef(null);

  const MIN_ROTATION = -60;
  const MAX_ROTATION = 60;

  const getAngle = (clientX, clientY) => {
    if (!dialRef.current) return 0;

    const rect = dialRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
      Math.atan2(clientY - centerY, clientX - centerX) *
      (180 / Math.PI)
    );
  };

  const handlePointerDown = (event) => {
    event.preventDefault();

    setDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);

    let previousAngle = getAngle(event.clientX, event.clientY);

    const handlePointerMove = (moveEvent) => {
      const currentAngle = getAngle(
        moveEvent.clientX,
        moveEvent.clientY
      );

      let delta = currentAngle - previousAngle;

      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      setRotation((current) =>
        Math.max(
          MIN_ROTATION,
          Math.min(MAX_ROTATION, current + delta)
        )
      );

      previousAngle = currentAngle;
    };

    const handlePointerUp = () => {
      setDragging(false);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  const dividerTop = 50 + rotation * 0.42;
  const dividerBottom = 50 - rotation * 0.42;

  const maarkssClip = `polygon(
    0 0,
    ${dividerTop}% 0,
    ${dividerBottom}% 100%,
    0 100%
  )`;

  const rvaClip = `polygon(
    ${dividerTop}% 0,
    100% 0,
    100% 100%,
    ${dividerBottom}% 100%
  )`;

  const dividerCenter = (dividerTop + dividerBottom) / 2;

  return (
    <section className="relative overflow-hidden bg-[#05080C]">
      {/* =====================================================
          DESKTOP / TABLET ROTARY EXPERIENCE
      ===================================================== */}

      <div className="relative hidden min-h-170 overflow-hidden lg:block">
        {/* MAARKSS */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            clipPath: maarkssClip,
          }}
          transition={{
            duration: dragging ? 0 : 0.18,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${maarkssFire})`,
            }}
            animate={{
              scale: dragging ? 1.015 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-black/20" />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,140,40,0.08),transparent_35%)]" />

          <div className="relative z-10 flex min-h-170 items-center px-12 py-20 xl:px-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(242,140,40,0)",
                      "0 0 24px rgba(242,140,40,0.16)",
                      "0 0 0 rgba(242,140,40,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-400/40 bg-black/30 backdrop-blur-md"
                >
                  <Flame className="h-5 w-5 text-orange-400" />
                </motion.div>

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Associate Venture
                </span>
              </div>

              <h3 className="text-5xl font-semibold tracking-tight text-white xl:text-6xl">
                MAARKSS
              </h3>

              <p className="mt-4 text-xl font-medium text-white/90">
                Advanced Fire Safety Technology
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
                Advanced fire protection technologies and engineered safety
                solutions designed for demanding industrial and commercial
                environments.
              </p>

              <a
                href="https://www.maarkss.com/products"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-400"
              >
                Explore MAARKSS
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* RVA */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            clipPath: rvaClip,
          }}
          transition={{
            duration: dragging ? 0 : 0.18,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85)",
            }}
            animate={{
              scale: dragging ? 1.015 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-linear-to-l from-black/85 via-black/45 to-black/20" />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(70,120,160,0.08),transparent_35%)]" />

          <div className="relative z-10 flex min-h-170 items-center justify-end px-12 py-20 text-right xl:px-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-xl"
            >
              <div className="mb-6 flex items-center justify-end gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Associate Venture
                </span>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255,255,255,0)",
                      "0 0 24px rgba(255,255,255,0.08)",
                      "0 0 0 rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md"
                >
                  <Building2 className="h-5 w-5 text-white" />
                </motion.div>
              </div>

              <h3 className="text-5xl font-semibold tracking-tight text-white xl:text-6xl">
                RVA
              </h3>

              <p className="mt-4 text-xl font-medium text-white/90">
                Infrastructure & Civil Engineering
              </p>

              <p className="mt-5 ml-auto max-w-lg text-sm leading-7 text-white/65">
                Engineering and infrastructure expertise supporting complex
                development, construction and civil engineering requirements.
              </p>

              <a
                href="https://www.rvainfratech.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-orange-400"
              >
                Explore RVA
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Rotary regulator */}
        <div
          ref={dialRef}
          className="absolute z-50"
          style={{
            left: `${dividerCenter}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.button
            type="button"
            aria-label="Rotate associate ventures divider"
            onPointerDown={handlePointerDown}
            className={[
              "group relative flex h-32 w-32 touch-none items-center justify-center rounded-full",
              "border border-white/20 bg-black/65 backdrop-blur-xl",
              "shadow-2xl",
              "cursor-grab active:cursor-grabbing",
              dragging
                ? "border-orange-400/70"
                : "hover:border-orange-400/50",
            ].join(" ")}
            animate={{
              rotate: rotation,
              scale: dragging ? 1.08 : 1,
            }}
            transition={{
              rotate: {
                duration: dragging ? 0 : 0.2,
                ease: "easeOut",
              },
              scale: {
                duration: 0.2,
              },
            }}
          >
            <motion.div
              animate={{
                rotate: -rotation,
              }}
              transition={{
                duration: dragging ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="absolute inset-3 rounded-full border border-white/10"
            />

            <div className="absolute inset-5 rounded-full border border-white/10" />

            <motion.div
              animate={{
                opacity: dragging ? 1 : [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: dragging ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-2 h-5 w-px -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(242,140,40,0.8)]"
            />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-navy-950/95 shadow-inner">
              <Handshake className="h-8 w-8 text-white transition-colors group-hover:text-orange-400" />
            </div>
          </motion.button>

          <div className="pointer-events-none absolute left-1/2 top-full mt-5 -translate-x-1/2 whitespace-nowrap">
            <motion.span
              animate={{
                opacity: dragging ? 0.8 : [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: dragging ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40"
            >
              Drag to rotate
            </motion.span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE VERSION
      ===================================================== */}

      <div className="lg:hidden">
        {/* MAARKSS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative min-h-130 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${maarkssFire})`,
            }}
            initial={{
              scale: 1.08,
              filter: "brightness(0.72) contrast(1.08) saturate(0.82)",
            }}
            whileInView={{
              scale: 1,
              filter: "brightness(0.9) contrast(1.05) saturate(0.95)",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/20" />

          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-linear-to-r from-transparent via-orange-400/30 to-transparent" />

          <div className="relative z-10 flex min-h-130 items-end px-6 py-10 sm:px-8 sm:py-12">
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
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/40 bg-black/30 backdrop-blur-md">
                  <Flame className="h-4 w-4 text-orange-400" />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Associate Venture
                </span>
              </div>

              <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                MAARKSS
              </h3>

              <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">
                Advanced Fire Safety Technology
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                Advanced fire protection technologies and engineered safety
                solutions designed for demanding industrial and commercial
                environments.
              </p>

              <a
                href="https://www.maarkss.com/products"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white"
              >
                Explore MAARKSS
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile divider control */}
        <div className="relative flex h-20 items-center justify-center bg-[#05080C]">
          <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-white/10" />

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-navy-950 shadow-xl"
          >
            <Handshake className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        {/* RVA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative min-h-130 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85)",
            }}
            initial={{
              scale: 1.08,
              filter: "brightness(0.7) contrast(1.08) saturate(0.82)",
            }}
            whileInView={{
              scale: 1,
              filter: "brightness(0.9) contrast(1.05) saturate(0.95)",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/20" />

          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10 flex min-h-130 items-end px-6 py-10 text-right sm:px-8 sm:py-12">
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
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <div className="mb-5 flex items-center justify-end gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Associate Venture
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
              </div>

              <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                RVA
              </h3>

              <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">
                Infrastructure & Civil Engineering
              </p>

              <p className="mt-4 ml-auto max-w-xl text-sm leading-6 text-white/65">
                Engineering and infrastructure expertise supporting complex
                development, construction and civil engineering requirements.
              </p>

              <a
                href="https://www.rvainfratech.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white"
              >
                Explore RVA
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function CollaborationCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      {/* Very subtle atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-100 w-100 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[130px] sm:block"
      />

      {/* Light sweep */}
      <motion.div
        animate={{
          x: ["-120%", "140%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-[18%] skew-x-[-18deg] bg-linear-to-r from-transparent via-white/[0.025] to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 sm:gap-8 md:flex-row md:items-center md:justify-between">
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <div className="mb-3 sm:mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-400 sm:text-[10px] sm:tracking-[0.28em]">
                Strategic Collaboration
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build safer, stronger operations with SSES.
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-6 text-white/60 sm:text-base sm:leading-7">
              Partner with SSES for practical, reliable and result-driven
              engineering, safety and compliance solutions.
            </p>
          </motion.div>

          <motion.a
            href="/contact"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            whileHover={{
              y: -2,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative inline-flex w-full shrink-0 items-center justify-center gap-4 overflow-hidden bg-orange-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-orange-600 sm:w-auto"
          >
            <span className="relative z-10">Talk to Our Experts</span>

            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

            <motion.span
              initial={{
                x: "-120%",
              }}
              whileHover={{
                x: "120%",
              }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg] bg-white/10"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Industries() {
  return (
    <main className="overflow-x-clip">
      <IndustriesHero />

      <IndustriesIntro />

      <IndustryReach />

      <HowWeSupport />

      <AssociateVentures />

      <CollaborationCTA />
    </main>
  );
}