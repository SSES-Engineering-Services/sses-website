import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  GraduationCap,
  HardHat,
  Layers3,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import PageContainer from "../components/common/PageContainer";
import { services } from "../data/services";

/* =========================================================
   SERVICE ICONS
========================================================= */

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

/* =========================================================
   FALLBACK SERVICE IMAGES
========================================================= */

const serviceImages = {
  "shef-management-solutions":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85",

  "audits-inspection":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=85",

  "training-certifications":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=85",

  "engineering-services":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85",

  "ppe-material-equipment-supplies":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2200&q=85",

  "environment-waste-management":
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2200&q=85",

  "industrial-insurance-claim-settlement":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=85",

  "manpower-solutions":
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=85",
};

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? "bg-orange-400" : "bg-orange-500"
        }`}
      />

      <span
        className={`text-[10px] font-extrabold uppercase tracking-[0.22em] ${
          light ? "text-orange-300" : "text-orange-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   TECHNICAL GRID
========================================================= */

function TechnicalGrid({ dark = false }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        dark ? "opacity-[0.08]" : "opacity-[0.05]"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 ${
          dark ? "text-white" : "text-navy-950"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

/* =========================================================
   CORNER MARKERS
========================================================= */

function CornerMarkers({ light = false }) {
  const lineColor = light
    ? "bg-white/30"
    : "bg-navy-950/20";

  return (
    <>
      <span
        className={`absolute left-0 top-0 h-px w-10 ${lineColor}`}
        aria-hidden="true"
      />

      <span
        className={`absolute left-0 top-0 h-10 w-px ${lineColor}`}
        aria-hidden="true"
      />

      <span
        className={`absolute bottom-0 right-0 h-px w-10 ${lineColor}`}
        aria-hidden="true"
      />

      <span
        className={`absolute bottom-0 right-0 h-10 w-px ${lineColor}`}
        aria-hidden="true"
      />
    </>
  );
}

/* =========================================================
   SERVICE DETAIL
========================================================= */

function ServiceDetail() {
  const { serviceSlug } = useParams();
  const heroRef = useRef(null);

  const service = services.find(
    (item) => item.id === serviceSlug
  );

  /* -------------------------------------------------------
     Scroll to top when changing service
  ------------------------------------------------------- */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [serviceSlug]);

  /* -------------------------------------------------------
     Hero scroll animation
  ------------------------------------------------------- */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1.25]
  );

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroContentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  /* -------------------------------------------------------
     Service not found
  ------------------------------------------------------- */

  if (!service) {
    return (
      <section className="min-h-[70vh] bg-slate-50 py-24">
        <PageContainer>
          <div className="relative max-w-2xl overflow-hidden border border-slate-200 bg-white p-8 sm:p-12">
            <CornerMarkers />

            <Eyebrow>Service not found</Eyebrow>

            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
              The service you are looking for does not
              exist.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              The requested service may have been moved or
              is no longer available.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 bg-navy-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </div>
        </PageContainer>
      </section>
    );
  }

  const Icon =
    serviceIcons[service.id] || BriefcaseBusiness;

  const currentIndex = services.findIndex(
    (item) => item.id === service.id
  );

  const nextService =
    services[(currentIndex + 1) % services.length];

  const previousService =
    services[
      (currentIndex - 1 + services.length) %
        services.length
    ];

  const heroImage =
    service.image || serviceImages[service.id];

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="relative min-h-[610px] overflow-hidden bg-navy-950 text-white sm:min-h-[680px] lg:min-h-[760px]"
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: heroImageScale,
            y: heroImageY,
          }}
        >
          {heroImage ? (
            <img
              src={heroImage}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-navy-950" />
          )}

          <div className="absolute inset-0 bg-navy-950/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </motion.div>

        <TechnicalGrid dark />

        {/* Giant service number */}
        <motion.div
          className="pointer-events-none absolute -right-4 top-20 select-none font-display text-[120px] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:-right-8 sm:top-24 sm:text-[300px] lg:text-[430px]"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 1],
              ["0%", "22%"]
            ),
          }}
        >
          {service.number}
        </motion.div>

        {/* Scan line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-orange-400/60"
          animate={{
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <PageContainer className="relative z-10">
          <motion.div
            style={{
              y: heroContentY,
              opacity: heroOpacity,
            }}
            className="flex min-h-[610px] flex-col justify-end pb-14 pt-28 sm:min-h-[680px] sm:pb-20 sm:pt-32 lg:min-h-[760px] lg:pb-28"
          >
            {/* Back */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition group-hover:border-orange-400 group-hover:bg-orange-500">
                  <ArrowLeft size={15} />
                </span>

                All Services
              </Link>
            </motion.div>

            {/* Main content */}
            <div className="mt-10 max-w-6xl sm:mt-14">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">
                    Service {service.number}
                  </span>

                  <span className="h-px w-16 bg-white/20" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    SSES / Capability
                  </span>
                </div>
              </motion.div>

              {/* Icon */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
                className="mt-7 flex h-16 w-16 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="text-orange-400"
                />
              </motion.div>

              {/* Title */}
              <div className="mt-8 overflow-hidden">
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[88px]"
                >
                  {service.detailTitle ||
                    service.title}
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                }}
                className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {service.description}
              </motion.p>

              {/* Technical metadata */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6"
              >
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Division
                  </span>

                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                    S.H.E.F. / Engineering
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Delivery
                  </span>

                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                    Project Specific
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Status
                  </span>

                  <span className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Active Capability
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </PageContainer>

        {/* Bottom progress */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-orange-500"
          style={{
            width: useTransform(
              scrollYProgress,
              [0, 1],
              ["0%", "100%"]
            ),
          }}
        />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <TechnicalGrid dark />

        <PageContainer className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <Eyebrow light>
                SSES capability
              </Eyebrow>

              <div className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
                Service / {service.number}
              </div>
            </motion.div>

            <motion.div
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h2 className="max-w-5xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Professional support built around the
                realities of{" "}
                <span className="text-orange-400">
                  demanding projects.
                </span>
              </h2>

              <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300">
                {service.detailDescription ||
                  service.description}
              </p>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          SERVICE SCOPE — DARK TECHNICAL MATRIX
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
        <TechnicalGrid dark />

        {/* Giant background number */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute -right-10 top-8 select-none font-display text-[220px] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[320px] lg:text-[460px]"
        >
          {service.number}
        </motion.div>

        <PageContainer className="relative z-10">
          {/* Header */}
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
            }}
            className="mb-14 border-b border-white/10 pb-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow light>
                  Service scope
                </Eyebrow>

                <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  What this capability covers.
                </h2>
              </div>

              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                <span>SSES</span>

                <span className="h-3 w-px bg-white/15" />

                <span>Scope Matrix</span>

                <span className="h-3 w-px bg-white/15" />

                <span>{service.number}</span>
              </div>
            </div>
          </motion.div>

          {/* Matrix */}
          <div className="grid gap-14 lg:grid-cols-[0.68fr_1.32fr]">
            {/* LEFT INFORMATION */}
            <div>
              <div className="lg:sticky lg:top-28">
                {/* Icon */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.65,
                    type: "spring",
                    stiffness: 150,
                    damping: 14,
                  }}
                  className="flex h-16 w-16 items-center justify-center border border-white/15 bg-white/[0.03]"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.4}
                    className="text-orange-400"
                  />
                </motion.div>

                {/* Capability */}
                <motion.div
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
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="mt-7"
                >
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400">
                    Capability {service.number}
                  </div>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                    Our scope is structured around the
                    practical requirements of industrial,
                    infrastructure and project environments.
                  </p>
                </motion.div>

                {/* Scope counter */}
                <motion.div
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
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="mt-10 flex items-end gap-4"
                >
                  <span className="font-display text-6xl font-black leading-none text-white">
                    {service.items?.length || 0}
                  </span>

                  <span className="pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Scope areas
                  </span>
                </motion.div>

                {/* Status */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                  }}
                  className="mt-10 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25"
                >
                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.15, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-orange-500"
                  />

                  Capability system active
                </motion.div>
              </div>
            </div>

            {/* RIGHT SCOPE MATRIX */}
            <div className="relative">
              {/* Timeline */}
              <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10" />

              <div>
                {service.items?.length > 0 ? (
                  service.items.map((item, index) => (
                    <motion.div
                      key={`${item}-${index}`}
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
                        amount: 0.05,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative border-b border-white/10 py-6 pl-12 sm:py-7"
                    >
                      {/* Hover surface */}
                      <motion.div
                        className="absolute inset-0 origin-left bg-white/[0.035]"
                        initial={{
                          scaleX: 0,
                        }}
                        whileHover={{
                          scaleX: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      />

                      {/* Timeline node */}
                      <motion.div
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.35,
                          delay:
                            index * 0.07 + 0.15,
                          type: "spring",
                          stiffness: 220,
                          damping: 15,
                        }}
                        className="absolute left-0 top-7 z-10 flex h-8 w-8 items-center justify-center border border-white/20 bg-navy-950 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-500"
                      >
                        <CheckCircle2
                          size={15}
                          strokeWidth={1.7}
                          className="text-white/50 transition-colors duration-300 group-hover:text-white"
                        />
                      </motion.div>

                      {/* Scope content */}
                      <div className="relative flex items-center justify-between gap-6">
                        <div className="flex min-w-0 items-start gap-5">
                          <span className="pt-1 text-[11px] font-extrabold tracking-[0.18em] text-white/25">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          {/* INCREASED SCOPE AREA TEXT */}
                          <span className="text-[22px] font-bold leading-9 text-white/85 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-[24px] lg:text-[26px]">
                            {item}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="hidden shrink-0 sm:block">
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -8,
                            }}
                            whileHover={{
                              opacity: 1,
                              x: 0,
                            }}
                            className="text-orange-400"
                          >
                            <ArrowRight size={18} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Orange indicator */}
                      <motion.span
                        initial={{
                          scaleY: 0,
                        }}
                        whileHover={{
                          scaleY: 1,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-orange-500"
                      />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
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
                    }}
                    className="border border-white/10 bg-white/[0.03] p-8"
                  >
                    <p className="text-sm leading-7 text-slate-400">
                      Contact SSES for a detailed scope
                      aligned with your project requirements.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Bottom marker */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
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
                  delay: 0.4,
                }}
                className="mt-8 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25"
              >
                <span className="h-px w-8 bg-white/15" />

                <span>
                  {String(
                    service.items?.length || 0
                  ).padStart(2, "0")}{" "}
                  / Scope areas defined
                </span>
              </motion.div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          CAPABILITY SYSTEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
        <PageContainer>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
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
              }}
            >
              <Eyebrow light>
                How we support
              </Eyebrow>

              <h2 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Capability meets
                <span className="block text-orange-400">
                  execution.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                We structure our involvement around the
                project requirement, from understanding the
                challenge to supporting practical execution.
              </p>
            </motion.div>

            {/* Process */}
            <div className="relative">
              {/* Connecting line */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-5 right-5 top-6 hidden h-px origin-left bg-white/10 md:block"
              />

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Assess",
                    text: "Understand the project, operational environment and specific requirements.",
                    icon: ClipboardCheck,
                  },
                  {
                    number: "02",
                    title: "Structure",
                    text: "Develop an appropriate technical, safety or engineering approach.",
                    icon: Layers3,
                  },
                  {
                    number: "03",
                    title: "Support",
                    text: "Work alongside project teams through implementation and ongoing requirements.",
                    icon: Factory,
                  },
                ].map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
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
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.12,
                      }}
                      className="group relative"
                    >
                      {/* Node */}
                      <motion.div
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay:
                            index * 0.12 + 0.15,
                          type: "spring",
                          stiffness: 180,
                        }}
                        className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/15 bg-black transition duration-300 group-hover:border-orange-400 group-hover:bg-orange-500"
                      >
                        <StepIcon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      <div className="mt-7">
                        <span className="text-[10px] font-extrabold tracking-[0.18em] text-orange-400">
                          {step.number}
                        </span>

                        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-400">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
        <TechnicalGrid dark />

        {/* Animated orbital ring */}
        <motion.div
          className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-orange-500/10"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-white/5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <PageContainer className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.div
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
                duration: 0.8,
              }}
            >
              <Eyebrow light>
                Start a conversation
              </Eyebrow>

              <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Need this capability for your{" "}
                <span className="text-orange-400">
                  project?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
                Tell us about your project requirements and
                let our team understand where SSES can
                support you.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
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
                delay: 0.15,
              }}
              className="lg:justify-self-end"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-orange-500 px-7 py-5 text-sm font-extrabold text-white transition hover:bg-orange-600"
              >
                Talk to SSES

                <span className="flex h-7 w-7 items-center justify-center bg-white/15 transition group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          PREVIOUS / NEXT SERVICE
      ===================================================== */}

      <section className="border-t border-slate-200 bg-slate-50">
        <PageContainer>
          <div className="grid md:grid-cols-2">
            {/* Previous */}
            <Link
              to={`/services/${previousService.id}`}
              className="group border-b border-slate-200 py-10 md:border-b-0 md:border-r md:pr-10 lg:py-14"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Previous service
                </span>

                <ArrowLeft
                  size={18}
                  className="text-slate-400 transition group-hover:-translate-x-1 group-hover:text-orange-500"
                />
              </div>

              <div className="mt-5 text-xs font-bold tracking-[0.15em] text-orange-600">
                {previousService.number}
              </div>

              <h3 className="mt-2 max-w-md font-display text-2xl font-extrabold tracking-tight text-navy-950 transition group-hover:text-orange-600 sm:text-3xl">
                {previousService.title}
              </h3>
            </Link>

            {/* Next */}
            <Link
              to={`/services/${nextService.id}`}
              className="group py-10 md:pl-10 lg:py-14"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Next service
                </span>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-500"
                />
              </div>

              <div className="mt-5 text-xs font-bold tracking-[0.15em] text-orange-600">
                {nextService.number}
              </div>

              <h3 className="mt-2 max-w-md font-display text-2xl font-extrabold tracking-tight text-navy-950 transition group-hover:text-orange-600 sm:text-3xl">
                {nextService.title}
              </h3>
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}

export default ServiceDetail;