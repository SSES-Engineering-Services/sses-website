import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  HardHat,
  Recycle,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import PageContainer from "../components/common/PageContainer";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import ClientsCarousel from "../components/home/ClientsCarousel";

import { siteData } from "../data/siteData";
import { services } from "../data/services";
import projects from "../data/projects";

const serviceIcons = {
  "shef-management-solutions": ShieldCheck,
  "audits-inspection": ClipboardCheck,
  "training-certifications": GraduationCap,
  "engineering-services": Wrench,
  "ppe-material-equipment-supplies": HardHat,
  "environment-waste-management": Recycle,
  "industrial-insurance-claim-settlement": FileCheck2,
  "manpower-solutions": Users,
};

const industries = [
  {
  title: "Oil & Gas",
  image: "/images/home/industries/oil-gas.jpg",
},
  {
    title: "Power & Energy",
    image: "/images/home/industries/power-energy.jpg",
  },
  {
    title: "Infrastructure",
    image: "/images/home/industries/infrastructure.jpg",
  },
  {
    title: "Manufacturing",
    image: "/images/home/industries/manufacturing.jpg",
  },
  {
    title: "Railways",
    image: "/images/home/industries/railways.jpg",
  },
];

const whyChoose = [
  {
    number: "01",
    title: "Client-Focused Solutions",
    description:
      "We understand business requirements and provide high-quality and cost-effective professional solutions.",
  },
  {
    number: "02",
    title: "Close Project Cooperation",
    description:
      "We work closely with project and plant teams to develop practical safety procedures and implementation strategies.",
  },
  {
    number: "03",
    title: "Quality Project Execution",
    description:
      "Our skilled engineering team follows structured specifications and project management principles.",
  },
  {
    number: "04",
    title: "Experienced Professional Support",
    description:
      "Highly qualified professionals bring experience from Government, PSU, project and industrial environments.",
  },
];

/* =========================================================
   SMALL TECHNICAL COMPONENTS
========================================================= */

function TechnicalGrid({ dark = true, opacity = 0.08 }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${
        dark ? "text-white" : "text-navy-950"
      }`}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(currentColor 1px, transparent 1px),
          linear-gradient(90deg, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function TechnicalCorners({ dark = true }) {
  const color = dark ? "border-white/20" : "border-navy-950/15";

  return (
    <>
      <span
        className={`pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t ${color}`}
      />

      <span
        className={`pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t ${color}`}
      />

      <span
        className={`pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l ${color}`}
      />

      <span
        className={`pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r ${color}`}
      />
    </>
  );
}

function FloatingTechnicalLabel({ children, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute hidden font-mono text-[9px] uppercase tracking-[0.24em] text-white/35 lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FallingFragment({
  delay = 0,
  left = "50%",
  height = 40,
}) {
  return (
    <motion.span
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: ["-10vh", "115vh"],
        opacity: [0, 0.7, 0.3, 0],
      }}
      transition={{
        duration: 9 + delay,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="pointer-events-none absolute top-0 w-px bg-linear-to-b from-transparent via-orange-500/50 to-transparent"
      style={{
        left,
        height,
      }}
    />
  );
}

function SignalLine({ className = "" }) {
  return (
    <motion.div
      initial={{
        scaleX: 0,
      }}
      whileInView={{
        scaleX: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`h-px origin-left bg-orange-500 ${className}`}
    />
  );
}

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  const heroRef = useRef(null);
  const aboutImageRef = useRef(null);
  const heroParticlesRef = useRef(null);

  /* =========================================================
     HERO PARTICLES
  ========================================================= */

  useEffect(() => {
    let particlesContainer;

    const initializeParticles = async () => {
      try {
        await loadSlim(tsParticles);

        particlesContainer = await tsParticles.load({
          id: "hero-particles",

          options: {
            fullScreen: {
              enable: false,
            },

            fpsLimit: 60,

            detectRetina: true,

            background: {
              color: {
                value: "transparent",
              },
            },

            particles: {
              number: {
                value: 38,

                density: {
                  enable: true,
                  width: 1200,
                  height: 700,
                },
              },

              color: {
                value: "#F28C28",
              },

              opacity: {
                value: {
                  min: 0.06,
                  max: 0.25,
                },
              },

              size: {
                value: {
                  min: 1,
                  max: 2.5,
                },
              },

              links: {
                enable: true,
                distance: 180,
                color: "#F28C28",
                opacity: 0.14,
                width: 1,
              },

              move: {
                enable: true,
                speed: 0.35,
                direction: "none",

                outModes: {
                  default: "out",
                },
              },
            },

            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },

                resize: {
                  enable: true,
                },
              },

              modes: {
                grab: {
                  distance: 170,

                  links: {
                    opacity: 0.35,
                  },
                },
              },
            },
          },
        });
      } catch (error) {
        console.error(
          "Particles initialization error:",
          error
        );
      }
    };

    initializeParticles();

    return () => {
      if (particlesContainer) {
        particlesContainer.destroy();
      }
    };
  }, []);

  /* =========================================================
     HERO SCROLL PHYSICS
  ========================================================= */

  const {
    scrollYProgress: heroProgress,
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(
    heroProgress,
    [0, 1],
    [1, 1.16]
  );

  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const heroTextY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "26%"]
  );

  const heroTextOpacity = useTransform(
    heroProgress,
    [0, 0.72],
    [1, 0]
  );

  const heroNumberY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "25%"]
  );

  /* =========================================================
     ABOUT IMAGE PARALLAX
  ========================================================= */

  const {
    scrollYProgress: aboutProgress,
  } = useScroll({
    target: aboutImageRef,
    offset: ["start end", "end start"],
  });

  const aboutImageY = useTransform(
    aboutProgress,
    [0, 1],
    ["-8%", "8%"]
  );

  /* =========================================================
     MOUSE PHYSICS
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 18,
    mass: 0.7,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 18,
    mass: 0.7,
  });

  const technicalX = useTransform(
    smoothMouseX,
    [-1, 1],
    [-14, 14]
  );

  const technicalY = useTransform(
    smoothMouseY,
    [-1, 1],
    [-9, 9]
  );

  const handleHeroMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      ((event.clientY - rect.top) / rect.height) * 2 - 1;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetHeroMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={resetHeroMouse}
        className="relative isolate min-h-180 overflow-hidden bg-black text-white lg:min-h-212.5"
      >
        {/* Industrial image */}
        <motion.div
          style={{
            scale: heroImageScale,
            y: heroImageY,
          }}
          className="absolute inset-[-6%]"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/home/hero.jpg')",
                
            }}
          />
        </motion.div>

        {/* Heavy dark treatment */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-navy-950/90 to-navy-950/35" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-navy-950/35" />

        {/* Technical grid */}
        <TechnicalGrid opacity={0.1} />

        {/* Horizontal scanning beam */}
        <motion.div
          initial={{
            x: "-120%",
          }}
          animate={{
            x: "220%",
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 top-[28%] h-px w-[40%] bg-linear-to-r from-transparent via-orange-500/70 to-transparent"
        />

        {/* Falling technical fragments */}
        <FallingFragment
          delay={0}
          left="13%"
          height={55}
        />

        <FallingFragment
          delay={2.5}
          left="28%"
          height={85}
        />

        <FallingFragment
          delay={4}
          left="61%"
          height={60}
        />

        <FallingFragment
          delay={1.4}
          left="78%"
          height={90}
        />

        <FallingFragment
          delay={5.5}
          left="91%"
          height={45}
        />

        {/* Particles */}
        <div
          id="hero-particles"
          ref={heroParticlesRef}
          className="pointer-events-none absolute inset-0 z-5 h-full w-full"
        />

        {/* Technical labels */}
        <FloatingTechnicalLabel className="right-7 top-28">
          SSES / ENGINEERING / 01
        </FloatingTechnicalLabel>

        <FloatingTechnicalLabel className="bottom-24 left-7">
          SYSTEM / FIELD / ACTIVE
        </FloatingTechnicalLabel>

        <div className="pointer-events-none absolute bottom-10 left-6 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 lg:block">
          22.3072° N / 73.1812° E
        </div>

        {/* Technical radar */}
        <motion.div
          style={{
            x: technicalX,
            y: technicalY,
          }}
          className="pointer-events-none absolute right-[12%] top-[22%] hidden h-36 w-36 lg:block"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />

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
          />

          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-orange-500" />

          <span className="absolute left-1/2 -top-4.25 -translate-x-1/2 font-mono text-[8px] text-white/30">
            01
          </span>

          <span className="absolute -bottom-4.25 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/30">
            SSES
          </span>
        </motion.div>

        <PageContainer className="relative z-10">
          <motion.div
            style={{
              y: heroTextY,
              opacity: heroTextOpacity,
            }}
            className="flex min-h-180 items-center py-24 lg:min-h-212.5"
          >
            <div className="max-w-6xl">
              {/* Eyebrow */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="mb-7 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/65"
              >
                <SignalLine className="w-10" />

                {siteData.hero.eyebrow}

                <span className="font-mono text-white/25">
                  / 01
                </span>
              </motion.div>

              {/* Hero title */}
              <h1 className="max-w-6xl font-display text-[3.5rem] font-extrabold leading-[0.86] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.8rem]">
                {siteData.hero.title.map(
                  (line, index) => (
                    <motion.span
                      key={`${line}-${index}`}
                      initial={{
                        opacity: 0,
                        y: 65,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.13,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={
                        index === 2
                          ? "relative block text-orange-500"
                          : "relative block"
                      }
                    >
                      {line}
                    </motion.span>
                  )
                )}
              </h1>

              {/* Description */}
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
                  delay: 0.72,
                }}
                className="mt-9 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
              >
                {siteData.hero.description}
              </motion.p>

              {/* CTA */}
              <motion.div
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
                  delay: 0.88,
                }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Button href="#services">
                  Explore Our Services
                  <ArrowRight size={17} />
                </Button>

                <Button
                  href="#contact"
                  variant="secondary"
                >
                  Contact Us
                </Button>
              </motion.div>

              {/* Discipline rail */}
              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: "100%",
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.05,
                }}
                className="mt-14 max-w-4xl border-t border-white/15 pt-5"
              >
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  <span>Engineering</span>
                  <span>Safety</span>
                  <span>Environment</span>
                  <span>Fire</span>
                  <span>Industrial Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </PageContainer>

        {/* Giant background number */}
        <motion.div
          style={{
            y: heroNumberY,
          }}
          className="pointer-events-none absolute -bottom-28 -right-4 font-display text-[15rem] font-extrabold leading-none tracking-[-0.09em] text-white/2.5 sm:text-[22rem] lg:text-[32rem]"
        >
          01
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 right-7 z-20 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 lg:flex"
        >
          <span>Scroll to explore</span>

          <span className="h-8 w-px bg-orange-500/60" />
        </motion.div>

        <TechnicalCorners />
      </section>

      {/* =====================================================
          SERVICE MARQUEE + DIRECTORY
      ===================================================== */}

      <section
        id="service-strip"
        className="relative overflow-hidden bg-black text-white"
      >
        {/* THIN SERVICE MARQUEE */}
        <div className="overflow-hidden border-b border-white/10 bg-black">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max whitespace-nowrap"
          >
            {[...services, ...services].map(
              (service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex items-center gap-5 px-7 py-3"
                >
                  <span className="font-mono text-[9px] text-orange-500">
                    {service.number}
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                    {service.title}
                  </span>

                  <span className="text-white/20">
                    /
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>

        <PageContainer>
          <div className="flex items-center justify-between border-b border-white/10 py-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-orange-500" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/55">
                SSES Capabilities
              </span>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 sm:block">
              08 Professional Disciplines
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.id] ||
                BriefcaseBusiness;

              return (
                <motion.a
                  key={service.id}
                  href={`/services/${service.id}`}
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
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    backgroundColor:
                      "rgba(255,255,255,0.055)",
                  }}
                  className="group relative flex min-h-36 flex-col justify-between border-r border-white/10 px-4 py-6 transition-colors md:min-h-40"
                >
                  <motion.span
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06 + 0.2,
                    }}
                    className="absolute left-4 right-4 top-0 h-px origin-left bg-orange-500"
                  />

                  <div className="flex items-start justify-between">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-white/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-orange-500"
                    />

                    <span className="font-mono text-[9px] text-white/20">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold leading-5 text-white/70 transition-colors group-hover:text-white">
                      {service.title}
                    </span>

                    <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Explore
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          ABOUT / TECHNICAL EXPERTISE
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
        <TechnicalGrid opacity={0.085} />

        <PageContainer>
          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <motion.div
              ref={aboutImageRef}
              initial={{
                opacity: 0,
                x: -45,
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
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden"
            >
              <TechnicalCorners />

              <div className="absolute left-0 top-0 z-20 border border-white/15 bg-black/60 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45 backdrop-blur">
                SSES / FIELD CAPABILITY
              </div>

              <motion.img
                style={{
                  y: aboutImageY,
                  scale: 1.12,
                }}
                src="/images/home/about.jpg"
                alt="Industrial engineering facility"
                className="h-105 w-full object-cover lg:h-130"
              />

              <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">
                <p className="max-w-sm text-sm font-semibold leading-6 text-white">
                  {siteData.about.imageCaption}
                </p>
              </div>

              <span className="absolute bottom-5 right-6 font-display text-7xl font-extrabold text-white/10">
                01
              </span>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{
                opacity: 0,
                x: 45,
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
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-orange-500">
                <SignalLine className="w-8" />

                {siteData.about.eyebrow}
              </div>

              <h2 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technical expertise.
                <span className="block text-orange-500">
                  Practical solutions.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-white/65">
                {siteData.about.description}
              </p>

              <Button
                href="/about"
                variant="outline"
                className="mt-8 border-white/20 text-white hover:border-orange-500 hover:bg-orange-500"
              >
                Learn More
                <ArrowRight size={16} />
              </Button>

              {/* Discipline blocks */}
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4">
                {[
                  "Safety",
                  "Engineering",
                  "Environment",
                  "Fire",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <span className="font-mono text-[9px] text-orange-500">
                      0{index + 1}
                    </span>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          TYPOGRAPHIC STATEMENT — BLACK
      ===================================================== */}

      <section className="relative overflow-hidden bg-black py-28 text-white lg:py-40">
        <TechnicalGrid opacity={0.045} />

        <PageContainer>
          <motion.div
            initial={{
              opacity: 0,
              y: 55,
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
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={{
                x: ["0%", "-3%", "0%"],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-10 -top-24 font-display text-[9rem] font-extrabold leading-none tracking-[-0.08em] text-white/2.5 sm:text-[14rem] lg:text-[22rem]"
            >
              SSES
            </motion.div>

            <div className="relative max-w-6xl">
              <div className="mb-7 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-orange-500">
                <SignalLine className="w-8" />

                One integrated partner
              </div>

              <h2 className="font-display text-5xl font-extrabold leading-[0.88] tracking-[-0.055em] text-white sm:text-6xl lg:text-[7.5rem]">
                One partner.
                <br />
                Multiple
                <span className="text-orange-500">
                  {" "}
                  capabilities.
                </span>
              </h2>

              <div className="mt-12 grid max-w-3xl gap-8 border-t border-white/10 pt-7 sm:grid-cols-3">
                {[
                  [
                    "01",
                    "Assess",
                    "Understand the requirement.",
                  ],
                  [
                    "02",
                    "Structure",
                    "Build the right solution.",
                  ],
                  [
                    "03",
                    "Execute",
                    "Support implementation.",
                  ],
                ].map(
                  (
                    [number, title, description],
                    index
                  ) => (
                    <motion.div
                      key={number}
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
                        duration: 0.55,
                        delay: index * 0.12,
                      }}
                    >
                      <span className="font-mono text-[9px] text-orange-500">
                        {number}
                      </span>

                      <h3 className="mt-3 font-display text-lg font-extrabold">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/45">
                        {description}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* =====================================================
          WHAT WE DO — NAVY
      ===================================================== */}

      <section
        id="services"
        className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32"
      >
        <TechnicalGrid opacity={0.07} />

        <PageContainer>
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="What We Do"
              description="Integrated professional solutions across Safety, Health, Environment, Fire, engineering, auditing, training and industrial support requirements."
              light
            />

            <motion.a
              whileHover={{
                x: 6,
              }}
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-500"
            >
              View All Services
              <ArrowRight size={17} />
            </motion.a>
          </div>

          {/* =================================================
              WHITE SERVICE CARDS
          ================================================= */}

          <div className="relative mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.id] ||
                BriefcaseBusiness;

              return (
                <motion.article
                  key={service.id}
                  initial={{
                    opacity: 0,
                    y: 45,
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
                    duration: 0.65,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-97.5
                    flex-col
                    overflow-hidden
                    bg-white
                    p-8
                    text-black
                    sm:p-9
                    lg:p-10
                  "
                >
                  {/* Subtle hover surface */}
                  <motion.div
                    initial={{
                      scaleY: 0,
                    }}
                    whileHover={{
                      scaleY: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      origin-bottom
                      bg-navy-950/[0.035]
                    "
                  />

                  {/* Orange activation edge */}
                  <motion.div
                    initial={{
                      scaleY: 0,
                    }}
                    whileHover={{
                      scaleY: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-1
                      origin-bottom
                      bg-orange-500
                    "
                  />

                  {/* Top orange line */}
                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay:
                        index * 0.07 + 0.15,
                    }}
                    className="
                      absolute
                      left-8
                      right-8
                      top-0
                      h-0.5
                      origin-left
                      bg-orange-500
                    "
                  />

                  {/* Icon + number */}
                  <div className="relative z-10 flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        rotate: -6,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 16,
                      }}
                    >
                      <Icon
                        size={34}
                        strokeWidth={1.8}
                        className="
                          text-navy-950
                          transition-colors
                          duration-300
                          group-hover:text-orange-500
                        "
                      />
                    </motion.div>

                    <span className="font-mono text-sm font-bold text-orange-600">
                      {service.number}
                    </span>
                  </div>

                  {/* Large readable title */}
                  <h3
                    className="
                      relative
                      z-10
                      mt-9
                      font-display
                      text-[24px]
                      font-extrabold
                      leading-[1.15]
                      tracking-[-0.02em]
                      text-black
                      sm:text-[26px]
                      lg:text-[28px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Large readable description */}
                  <p
                    className="
                      relative
                      z-10
                      mt-5
                      text-[17px]
                      font-medium
                      leading-[1.65]
                      text-navy-800
                      sm:text-[18px]
                    "
                  >
                    {service.description}
                  </p>

                  {/* Service points */}
                  {service.items?.length > 0 && (
                    <ul
                      className="
                        relative
                        z-10
                        mt-7
                        space-y-3
                        text-[15px]
                        font-medium
                        leading-6
                        text-navy-800
                      "
                    >
                      {service.items
                        .slice(0, 3)
                        .map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange-500" />

                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  )}

                  {/* Learn more */}
                  <a
                    href={`/services/${service.id}`}
                    className="
                      relative
                      z-10
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-8
                      text-[15px]
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      text-navy-950
                      transition-colors
                      duration-300
                      hover:text-orange-600
                    "
                  >
                    Learn More

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.2}
                    />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
    INDUSTRIES
===================================================== */}

<section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
  <TechnicalGrid opacity={0.055} />

  <PageContainer>
    <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <SectionHeading
        eyebrow="Industries"
        title="Industries We Serve"
        description="Supporting industrial and infrastructure environments with practical technical expertise."
        light
      />

      <motion.a
        whileHover={{ x: 6 }}
        href="/industries"
        className="inline-flex items-center gap-2 text-sm font-bold text-orange-500"
      >
        View All Industries
        <ArrowRight size={17} />
      </motion.a>
    </div>

    {/* Industry Cards */}
    <div className="relative mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {industries.map((industry, index) => (
        <motion.article
          key={industry.title}
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden border border-white/10 bg-black"
        >
          {/* FIXED IMAGE FRAME */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <motion.img
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              src={industry.image}
              alt={industry.title}
              className="absolute inset-0 block h-full w-full object-cover"
              loading="lazy"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Number */}
            <span className="absolute right-5 top-5 font-mono text-[10px] text-white/50">
              0{index + 1}
            </span>
          </div>

          {/* CONTENT */}
          <div className="relative min-h-37.5 bg-black p-6">
            <BriefcaseBusiness
              size={23}
              strokeWidth={1.8}
              className="mb-5 text-orange-500"
            />

            <h3 className="font-display text-2xl font-bold text-white">
              {industry.title}
            </h3>

            <motion.div
              initial={{
                width: 32,
              }}
              whileHover={{
                width: 80,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mt-4 h-px bg-orange-500"
            />
          </div>
        </motion.article>
      ))}
    </div>
  </PageContainer>
</section>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <div className="bg-black">
        <ClientsCarousel />
      </div>

      {/* =====================================================
          WHY CHOOSE SSES
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <PageContainer>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
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
                duration: 0.75,
              }}
            >
              <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-orange-600">
                <SignalLine className="w-8" />

                Why Choose SSES
              </div>

              <h2 className="mt-6 max-w-xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] text-navy-950 sm:text-6xl">
                Experience,
                <br />
                commitment &
                <br />
                <span className="text-orange-500">
                  execution.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-[16px] leading-8 text-slate-700">
                With a strong focus on providing
                outstanding services to our clients, our
                priority is to understand business
                requirements and provide high-quality and
                cost-effective professional solutions.
              </p>
            </motion.div>

            <div className="border-t border-slate-200">
              {whyChoose.map((item, index) => (
                <motion.article
                  key={item.number}
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
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[70px_0.9fr_1.1fr] sm:items-start"
                >
                  <motion.span
                    whileHover={{
                      x: 4,
                    }}
                    className="font-mono text-xs font-bold text-orange-600"
                  >
                    {item.number}
                  </motion.span>

                  <h3 className="font-display text-xl font-extrabold tracking-tight text-navy-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          EXECUTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy-950 py-10 lg:py-16">
        <TechnicalGrid opacity={0.08} />

        <PageContainer>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden border border-white/10 bg-black px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16"
          >
            <TechnicalCorners />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-orange-500">
                  <SignalLine className="w-8" />

                  Our Approach
                </div>

                <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                  From assessment
                  <span className="text-orange-500">
                    {" "}
                    to execution.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-sm leading-7 text-white/55">
                  SSES combines technical assessment,
                  structured planning and practical
                  implementation support to help clients
                  address complex project requirements.
                </p>

                <div className="mt-7 flex flex-wrap gap-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                  <span>Assess</span>
                  <span>Structure</span>
                  <span>Execute</span>
                  <span>Support</span>
                </div>
              </div>
            </div>

            {/* Animated structural line */}
            <div className="relative mt-14 hidden h-px bg-white/10 md:block">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 top-0 h-px bg-orange-500"
              />

              <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 border border-orange-500 bg-black" />

              <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 border border-orange-500 bg-black" />

              <div className="absolute left-2/3 top-1/2 h-3 w-3 -translate-y-1/2 border border-orange-500 bg-black" />

              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 border border-orange-500 bg-black" />
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* =====================================================
          FEATURED PROJECTS — FROM projects.js
      ===================================================== */}

      <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
        <TechnicalGrid opacity={0.045} />

        <PageContainer>
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Work in Action"
              description="A selection of project environments where our technical expertise can support industrial and infrastructure requirements."
              light
            />

            <motion.a
              whileHover={{
                x: 6,
              }}
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-500"
            >
              View All Projects
              <ArrowRight size={17} />
            </motion.a>
          </div>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map(
              (project, index) => {
                const projectSlug =
                  project.slug ||
                  project.id;

                const projectImage =
                  project.image ||
                  project.coverImage ||
                  project.images?.[0];

                return (
                  <motion.article
                    key={
                      project.id ||
                      project.slug ||
                      project.title
                    }
                    initial={{
                      opacity: 0,
                      y: 45,
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
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group overflow-hidden border border-white/10 bg-navy-950"
                  >
                    {/* Project image */}
                    <div className="relative h-60 overflow-hidden">
                      {projectImage ? (
                        <motion.img
                          whileHover={{
                            scale: 1.07,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          src={projectImage}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-navy-900">
                          <BriefcaseBusiness
                            size={42}
                            strokeWidth={1.3}
                            className="text-white/25"
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />

                      <span className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
                        PROJECT / 0{index + 1}
                      </span>
                    </div>

                    {/* Project content */}
                    <div className="p-7">
                      {project.category && (
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-orange-500">
                          {project.category}
                        </p>
                      )}

                      <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-white">
                        {project.title}
                      </h3>

                      {project.location && (
                        <p className="mt-3 text-sm font-medium text-white/50">
                          {project.location}
                        </p>
                      )}

                      <a
                        href={`/projects/${projectSlug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-500 transition-colors duration-300 hover:text-orange-400"
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </motion.article>
                );
              }
            )}
          </div>
        </PageContainer>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-navy-950 py-28 text-white lg:py-36"
      >
        <TechnicalGrid opacity={0.08} />

        {/* Slow technical orbit */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] lg:block"
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-orange-500/50" />
        </motion.div>

        <motion.div
          animate={{
            x: ["0%", "-5%", "0%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[7rem] font-extrabold tracking-[-0.08em] text-white/2.5 sm:text-[12rem] lg:text-[18rem]"
        >
          SSES
        </motion.div>

        <PageContainer>
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative mx-auto max-w-5xl text-center"
          >
            <div className="flex items-center justify-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-orange-500">
              <SignalLine className="w-8" />

              Let's work together

              <SignalLine className="w-8" />
            </div>

            <h2 className="mt-7 font-display text-5xl font-extrabold leading-[0.88] tracking-tighter sm:text-6xl lg:text-8xl">
              Let's build
              <br />

              <span className="text-orange-500">
                safer.
              </span>{" "}
              Better.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Tell us about your project, operational
              requirements or technical challenge. Our team
              can help identify the right professional
              capability for your needs.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact">
                Talk to SSES
                <ArrowUpRight size={17} />
              </Button>

              <Button
                href="/services"
                variant="secondary"
              >
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              <span>Engineering</span>
              <span>Safety</span>
              <span>Environment</span>
              <span>Fire</span>
              <span>Infrastructure</span>
            </div>
          </motion.div>
        </PageContainer>

        <TechnicalCorners />
      </section>
    </>
  );
};

export default Home;