import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  MoveUpRight,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

import PageContainer from "../components/common/PageContainer";
import { services } from "../data/services";

const serviceIcons = {
  "shef-management-solutions": ShieldCheck,
  "audits-inspection": ClipboardCheck,
  "training-certifications": GraduationCap,
  "engineering-services": Wrench,
  "ppe-material-equipment-supplies": HardHat,
  "environment-waste-management": BriefcaseBusiness,
  "industrial-insurance-claim-settlement": ShieldCheck,
  "manpower-solutions": Users,
};

const serviceImages = {
  "shef-management-solutions":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=85",

  "audits-inspection":
    "https://images.unsplash.com/photo-1581093458791-9d42e3c1c5c1?auto=format&fit=crop&w=1800&q=85",

  "training-certifications":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85",

  "engineering-services":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",

  "ppe-material-equipment-supplies":
    "https://images.unsplash.com/photo-1584467735871-2c7c5c0c7a2f?auto=format&fit=crop&w=1800&q=85",

  "environment-waste-management":
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=85",

  "industrial-insurance-claim-settlement":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",

  "manpower-solutions":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-7 ${
          light ? "bg-orange-500" : "bg-orange-600"
        }`}
      />

      <span
        className={`font-mono text-[10px] font-bold uppercase tracking-[0.24em] ${
          light ? "text-orange-400" : "text-orange-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function TechnicalGrid({ dark = true }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        dark ? "opacity-[0.07]" : "opacity-[0.05]"
      }`}
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}

function CornerMarker({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 ${className}`}
    >
      <span className="absolute left-0 top-0 h-px w-5 bg-current" />
      <span className="absolute left-0 top-0 h-5 w-px bg-current" />
    </span>
  );
}

function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const heroImageX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const heroImageY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.22]
  );

  const heroImageYScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroTitleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (isMobile) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isMobile, mouseX, mouseY]);

  const active = services[activeService];

  const ActiveIcon =
    serviceIcons[active?.id] || BriefcaseBusiness;

  return (
    <main className="overflow-hidden bg-navy-950">
      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}

      <section
        ref={heroRef}
        className="relative min-h-[88vh] overflow-hidden bg-black text-white"
      >
        {/* Background image */}

        <motion.div
          className="absolute inset-[-8%]"
          style={{
            x: isMobile ? 0 : heroImageX,
            y: isMobile ? heroImageYScroll : heroImageY,
            scale: heroImageScale,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=90"
            alt="Industrial engineering environment"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark cinematic overlays */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/65 to-black/20" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/35" />

        <TechnicalGrid />

        {/* Scanline */}

        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-px bg-orange-500/50"
          animate={{
            top: ["10%", "90%", "10%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Technical coordinates */}

        <div className="absolute right-6 top-28 hidden font-mono text-[9px] uppercase tracking-[0.25em] text-white/35 lg:block">
          <div>23.0225° N</div>
          <div>72.5714° E</div>

          <div className="mt-2 text-orange-500/70">
            SYS / 08
          </div>
        </div>

        <PageContainer className="relative z-10 flex min-h-[88vh] items-end pb-14 pt-28 lg:pb-16 lg:pt-24">
          <motion.div
            style={{
              y: heroTitleY,
              opacity: heroOpacity,
            }}
            className="w-full"
          >
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px]">
              {/* LEFT */}

              <div>
                <Eyebrow light>
                  Professional capabilities
                </Eyebrow>

                <div className="relative mt-6">
                  <span className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[19vw] font-black leading-none tracking-[-0.09em] text-white/[0.035] lg:-left-4 lg:-top-20">
                    08
                  </span>

                  <h1 className="relative max-w-6xl font-display text-[16vw] font-black leading-[0.78] tracking-[-0.075em] sm:text-[13vw] lg:text-[10.5rem]">
                    <span className="block overflow-hidden">
                      <motion.span
                        initial={{
                          y: "110%",
                        }}
                        animate={{
                          y: 0,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.15,
                          ease: [0.77, 0, 0.175, 1],
                        }}
                        className="block"
                      >
                        SERVICES
                      </motion.span>
                    </span>
                  </h1>
                </div>

                <div className="mt-8 max-w-2xl overflow-hidden">
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-base font-medium leading-7 text-slate-300 sm:text-lg"
                  >
                    Engineering, safety, health, environment,
                    fire, training, auditing and operational
                    support — structured around the demands of
                    real projects.
                  </motion.p>
                </div>
              </div>

              {/* RIGHT CAPABILITY MATRIX */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                className="hidden border-l border-white/15 pl-7 lg:block"
              >
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  SSES / CAPABILITY MATRIX
                </div>

                <div className="mt-5 space-y-3">
                  {services.slice(0, 4).map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between border-b border-white/10 pb-2 text-xs"
                    >
                      <span className="text-white/70">
                        {service.title}
                      </span>

                      <span className="font-mono text-white/30">
                        {service.number}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* HERO FOOTER */}

            <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-5 lg:mt-14">
              <div className="flex items-center gap-5">
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
                >
                  <ArrowDownRight size={16} />
                </motion.div>

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  Explore capabilities
                </span>
              </div>

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 sm:block">
                Scroll / 01 — 08
              </span>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-36">
        <TechnicalGrid />

        <PageContainer className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.5fr] lg:gap-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <Eyebrow light>
                One integrated capability
              </Eyebrow>

              <div className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                SSES / SERVICES / 2026
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
                One partner across the
                <span className="text-white/35">
                  {" "}
                  entire operational spectrum.
                </span>
              </h2>

              <p className="mt-9 max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
                SSES brings engineering, safety, environmental,
                fire, training and operational capabilities
                together so clients can address complex project
                requirements through one coordinated professional
                framework.
              </p>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          SERVICE DIRECTORY
      ========================================================= */}

      <section
        ref={servicesRef}
        className="relative bg-black py-20 text-white lg:py-28"
      >
        <PageContainer>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* LEFT */}

            <div>
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
              >
                <Eyebrow light>
                  Capability directory
                </Eyebrow>

                <h2 className="mt-7 max-w-xl font-display text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  Built around
                  <span className="block text-white/35">
                    the work.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-base font-medium leading-7 text-slate-400">
                  Explore the eight core areas through which SSES
                  supports industrial, infrastructure and
                  organizational requirements.
                </p>
              </motion.div>

              {/* DESKTOP IMAGE PANEL */}

              <div className="relative mt-10 block lg:sticky lg:top-28 lg:mt-14">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900 sm:aspect-[4/3]">
                  <CornerMarker className="-left-px -top-px text-orange-500" />

                  <motion.div
                    key={active.id}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                      clipPath: "inset(0 0 0 100%)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      clipPath: "inset(0 0 0 0%)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={serviceImages[active.id]}
                      alt={active.title}
                      className="h-full w-full object-cover grayscale-[20%]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-black/10" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-400">
                          Active capability
                        </div>

                        <div className="mt-2 font-display text-2xl font-bold tracking-tight">
                          {active.title}
                        </div>
                      </div>

                      <div className="font-mono text-4xl font-bold text-white/20">
                        {active.number}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                  <span>
                    Visual reference / capability
                  </span>

                  <span>
                    {String(activeService + 1).padStart(
                      2,
                      "0"
                    )}{" "}
                    / 08
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SERVICE LIST */}

            <div className="border-t border-white/15">
              {services.map((service, index) => {
                const Icon =
                  serviceIcons[service.id] ||
                  BriefcaseBusiness;

                const isActive =
                  index === activeService;

                return (
                  <motion.div
                    key={service.id}
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
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() =>
                      setActiveService(index)
                    }
                    onFocus={() =>
                      setActiveService(index)
                    }
                    className="group border-b border-white/10"
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="block py-7 outline-none sm:py-8"
                    >
                      <div className="flex items-start gap-5">
                        {/* NUMBER */}

                        <div className="w-9 shrink-0 pt-1 font-mono text-[11px] font-bold tracking-[0.1em] text-white/25 transition-colors duration-500 group-hover:text-orange-500">
                          {service.number}
                        </div>

                        {/* MAIN */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-5">
                            <div className="flex items-center gap-4">
                              {/* ICON */}

                              <motion.div
                                animate={
                                  isActive
                                    ? {
                                        rotate: [0, -8, 0],
                                        scale: [1, 1.12, 1],
                                      }
                                    : {
                                        rotate: 0,
                                        scale: 1,
                                      }
                                }
                                transition={{
                                  duration: 0.5,
                                }}
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                  isActive
                                    ? "border-orange-500 bg-orange-500 text-white"
                                    : "border-white/10 text-white/35"
                                }`}
                              >
                                <Icon
                                  size={17}
                                  strokeWidth={1.6}
                                />
                              </motion.div>

                              {/* TITLE */}

                              <h3
                                className={`font-display text-xl font-bold tracking-[-0.025em] transition-all duration-500 sm:text-2xl lg:text-3xl ${
                                  isActive
                                    ? "translate-x-1 text-white"
                                    : "text-white/55"
                                }`}
                              >
                                {service.title}
                              </h3>
                            </div>

                            {/* ARROW */}

                            <motion.div
                              animate={{
                                rotate: isActive ? 0 : -45,
                                x: isActive ? 0 : -3,
                              }}
                              transition={{
                                duration: 0.4,
                              }}
                              className={`mt-1 shrink-0 ${
                                isActive
                                  ? "text-orange-500"
                                  : "text-white/20"
                              }`}
                            >
                              <MoveUpRight size={20} />
                            </motion.div>
                          </div>

                          {/* DESCRIPTION */}

                          <motion.div
                            initial={false}
                            animate={{
                              height:
                                isActive || isMobile
                                  ? "auto"
                                  : 0,
                              opacity:
                                isActive || isMobile
                                  ? 1
                                  : 0,
                            }}
                            transition={{
                              duration: 0.45,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="max-w-xl pl-14 pt-4">
                              <p className="text-base font-medium leading-7 text-slate-400 sm:text-[17px]">
                                {service.description}
                              </p>

                              <div className="mt-5 flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
                                Explore service

                                <ArrowRight size={13} />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          CUSTOMIZED SOLUTIONS
      ========================================================= */}

      <section className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-36">
        <TechnicalGrid />

        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-white/[0.04]"
        />

        <PageContainer className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <Eyebrow light>
                Beyond the standard
              </Eyebrow>

              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                Custom / Outsourcing / Integrated
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <h2 className="font-display text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Requirements
                <span className="block text-white/30">
                  rarely fit a box.
                </span>
              </h2>

              <p className="mt-9 max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
                Alongside our core service capabilities, SSES can
                develop customized outsourcing and support
                arrangements around the specific requirements of
                a client, project or organization.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  "Customized outsourcing",
                  "Project-specific support",
                  "Integrated SHEF packages",
                  "Operational assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-base font-medium text-white/65"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange-500/50 text-orange-500">
                      <Check size={11} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section className="relative bg-white py-24 lg:py-32">
        <PageContainer>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <Eyebrow>How we work</Eyebrow>

              <h2 className="mt-7 font-display text-5xl font-black leading-[0.95] tracking-[-0.06em] text-navy-950 sm:text-6xl lg:text-7xl">
                Structured
                <span className="block text-navy-950/25">
                  from day one.
                </span>
              </h2>
            </motion.div>

            <div>
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "We begin by understanding the project, operational environment, risks and specific client requirements.",
                },
                {
                  number: "02",
                  title: "Engineer",
                  text: "Our multidisciplinary capabilities are structured into a practical approach aligned with the project's actual needs.",
                },
                {
                  number: "03",
                  title: "Execute",
                  text: "Implementation is supported through professional teams, documentation, reporting and continuous coordination.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: 35,
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
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-t border-navy-950/15 py-8 last:border-b"
                >
                  <div className="grid gap-5 sm:grid-cols-[70px_180px_1fr] sm:items-start">
                    <span className="font-mono text-xs font-bold text-orange-600">
                      {step.number}
                    </span>

                    <h3 className="font-display text-2xl font-black tracking-tight text-navy-950">
                      {step.title}
                    </h3>

                    <p className="max-w-xl text-base font-medium leading-7 text-slate-500">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-black py-28 text-white lg:py-40">
        <TechnicalGrid />

        <PageContainer className="relative">
          <div className="relative border border-white/10 p-8 sm:p-12 lg:p-20">
            <CornerMarker className="-left-px -top-px text-orange-500" />

            <CornerMarker className="-right-px -top-px rotate-90 text-orange-500" />

            <CornerMarker className="-bottom-px -left-px -rotate-90 text-orange-500" />

            <CornerMarker className="-bottom-px -right-px rotate-180 text-orange-500" />

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-5xl"
            >
              <Eyebrow light>
                Start a conversation
              </Eyebrow>

              <h2 className="mt-8 font-display text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-[7rem]">
                Have a complex
                <span className="block text-white/30">
                  requirement?
                </span>
              </h2>

              <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-lg text-base font-medium leading-7 text-slate-400 sm:text-lg">
                  Tell us what you are working on. Our team can
                  help identify the right combination of
                  engineering, safety and operational
                  capabilities.
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center gap-4 border border-orange-500 bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
                >
                  Talk to SSES

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-navy-950 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

export default Services;