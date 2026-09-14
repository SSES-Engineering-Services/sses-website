import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectFootprint from "../components/projects/ProjectFootprint";

/* =========================================================
   ANIMATION PRESETS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   PROJECT HERO PARTICLES
========================================================= */

const projectParticlesConfig = {
  particles: {
    number: {
      value: 55,
      density: {
        enable: true,
        value_area: 1000,
      },
    },

    color: {
      value: "#FFFFFF",
    },

    opacity: {
      value: 0.45,
      random: true,

      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.15,
        sync: false,
      },
    },

    size: {
      value: 2,
      random: true,
    },

    line_linked: {
      enable: true,
      distance: 145,
      color: "#FFFFFF",
      opacity: 0.16,
      width: 1,
    },

    move: {
      enable: true,
      speed: 0.45,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      onclick: {
        enable: false,
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 180,

        line_linked: {
          opacity: 0.3,
        },
      },
    },
  },

  retina_detect: true,
};

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const isCompleted = project.status === "completed";

  return (
    <motion.article
      variants={fadeUp}
      className="group relative"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block"
      >
        <div className="relative overflow-hidden bg-[#081A2B]">
          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="relative aspect-[16/10] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={imageReveal}
            />

            {/* CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081A2B] via-[#081A2B]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
            />

            {/* =================================================
                PROJECT NUMBER
            ================================================= */}

            <div className="absolute left-5 top-5 flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-white/60" />
            </div>

            {/* =================================================
                STATUS
            ================================================= */}

            <div className="absolute right-5 top-5">
              <span
                className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md ${
                  isCompleted
                    ? "border-white/40 bg-[#081A2B]/70 text-white"
                    : "border-orange-400/60 bg-orange-500 text-white"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 size={12} />
                ) : (
                  <Clock3 size={12} />
                )}

                {isCompleted ? "Completed" : "Ongoing"}
              </span>
            </div>

            {/* =================================================
                IMAGE CONTENT
            ================================================= */}

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2 text-white">
                <MapPin size={13} />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  {project.location}
                </span>
              </div>

              <h3 className="max-w-2xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                {project.title}
              </h3>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {project.category}
                </span>

                <motion.span
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#081A2B]/40 text-white backdrop-blur-md"
                  whileHover={{
                    scale: 1.08,
                    rotate: 45,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BELOW-CARD METADATA
        ================================================= */}

        <div className="flex items-center justify-between border-b border-[#C9D3DC] py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#24384B]">
              {project.client || "SSES Project"}
            </p>

            <p className="mt-1 max-w-2xl text-sm font-medium leading-6 text-[#3E5368]">
              {project.shortDescription}
            </p>
          </div>

          <span className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[#081A2B] transition-transform duration-300 group-hover:translate-x-1 sm:block">
            View Project
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function Projects() {
  const [filter, setFilter] = useState("all");

  /* =======================================================
     PARTICLE INITIALIZATION
  ======================================================= */

 useEffect(() => {
  const containerId = "projects-hero-particles";

  const initializeParticles = () => {
    const container = document.getElementById(
      containerId
    );

    if (!container) return;

    if (!window.particlesJS) {
      console.warn(
        "particles.js is not loaded. Make sure /public/particles.js exists and is included in index.html."
      );

      return;
    }

    /*
     * React Strict Mode can run effects twice
     * during development.
     *
     * Prevent particles.js from initializing
     * more than once on the same container.
     */
    const existingCanvas =
      container.querySelector("canvas");

    if (existingCanvas) {
      return;
    }

    window.particlesJS(
      containerId,
      projectParticlesConfig
    );
  };

  /*
   * Wait one frame so the hero container definitely
   * exists before particles.js tries to access it.
   */
  const frame = requestAnimationFrame(
    initializeParticles
  );

  /*
   * Do NOT manually destroy pJSDom here.
   *
   * The old particles.js library can set pJSDom to null
   * internally, which causes cleanup errors with React 18/19
   * Strict Mode.
   *
   * React will remove the particle canvas naturally when
   * the Projects page unmounts.
   */
  return () => {
    cancelAnimationFrame(frame);
  };
}, []);

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.status === filter
    );
  }, [filter]);

  /* =======================================================
     PROJECT COUNTS
  ======================================================= */

  const completedCount = projects.filter(
    (project) => project.status === "completed"
  ).length;

  const ongoingCount = projects.filter(
    (project) => project.status === "ongoing"
  ).length;

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[70svh] overflow-hidden bg-[#050B11] text-white md:min-h-[92vh]">

        {/* ===================================================
            BACKGROUND IMAGE
        =================================================== */}

        <motion.div
          className="absolute inset-0 z-0"
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={
              projects[0]?.image ||
              "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=85"
            }
            alt="SSES engineering project"
            className="h-full w-full object-cover opacity-55"
          />
        </motion.div>

        {/* ===================================================
            DARK CINEMATIC GRADIENT
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#050B11] via-[#050B11]/75 to-transparent" />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#050B11] via-transparent to-[#050B11]/30" />

        {/* ===================================================
            TECHNICAL GRID
        =================================================== */}

        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ===================================================
            PARTICLE FIELD
        =================================================== */}

        <div
          id="projects-hero-particles"
          className="pointer-events-none absolute inset-0 z-[3]"
        />

        {/* ===================================================
            PARTICLE VISIBILITY VIGNETTE
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-r from-[#050B11]/25 via-transparent to-transparent" />

        {/* ===================================================
            TECHNICAL CORNER MARKERS
        =================================================== */}

        <div className="pointer-events-none absolute left-6 top-24 z-[5] hidden h-20 w-20 border-l border-t border-white/20 md:block" />

        <div className="pointer-events-none absolute right-6 top-24 z-[5] hidden h-20 w-20 border-r border-t border-white/20 md:block" />

        <div className="pointer-events-none absolute bottom-24 left-6 z-[5] hidden h-20 w-20 border-b border-l border-white/20 md:block" />

        <div className="pointer-events-none absolute bottom-24 right-6 z-[5] hidden h-20 w-20 border-b border-r border-white/20 md:block" />

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div className="relative z-10 flex min-h-[70svh] items-start pt-28 md:min-h-[92vh] md:items-end md:pt-0">

  <div className="mx-auto w-full max-w-[1600px] px-4 pb-12 sm:px-6 sm:pb-20 md:px-10 lg:px-14 lg:pb-24">

            <div className="max-w-5xl">

              {/* EYEBROW */}

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
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mb-7 flex items-center gap-4"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.22em] text-white">
                  SSES / PROJECTS
                </span>

                <span className="h-px w-16 bg-white/60" />
              </motion.div>

              {/* TITLE */}

              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[clamp(3.25rem,15vw,10rem)] font-bold leading-[0.84] tracking-[-0.06em]"
                >
                  PROJECTS
                </motion.h1>

              </div>

              {/* DESCRIPTION */}

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
                  delay: 0.65,
                }}
                className="mt-8 max-w-2xl"
              >
                <p className="text-base font-medium leading-7 text-white md:text-lg md:leading-8">
                  Engineering, safety and consultancy solutions
                  delivered across complex infrastructure,
                  industrial and development environments.
                </p>
              </motion.div>

              {/* =================================================
                  STATS
              ================================================= */}

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
                  delay: 0.8,
                }}
                className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
              >

                {/* TOTAL */}

                <div>
                  <p className="font-display text-3xl font-bold">
                    {projects.length}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Total Projects
                  </p>
                </div>

                {/* COMPLETED */}

                <div>
                  <p className="font-display text-3xl font-bold">
                    {completedCount}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Completed
                  </p>
                </div>

                {/* ONGOING */}

                <div>
                  <p className="font-display text-3xl font-bold">
                    {ongoingCount}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Ongoing
                  </p>
                </div>

              </motion.div>

            </div>
          </div>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
          className="absolute bottom-8 right-8 z-10 hidden items-center gap-4 md:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50"
          >
            <ArrowRight
              size={15}
              className="rotate-90"
            />
          </motion.div>
        </motion.div>

      </section>
      {/* =====================================================
    PROJECT FOOTPRINT
===================================================== */}

<ProjectFootprint projects={projects} />

      {/* =====================================================
          PROJECT INDEX
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex flex-col gap-8 border-b border-[#C9D3DC] pb-8 lg:flex-row lg:items-end lg:justify-between">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
            >

              <div className="flex items-center gap-3">

                <Building2
                  size={16}
                  className="text-orange-600"
                />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#24384B]">
                  Project Portfolio
                </span>

              </div>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#081A2B] md:text-6xl">
                Selected work across{" "}
                <span className="text-[#3E5368]">
                  industries.
                </span>
              </h2>

            </motion.div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="flex flex-wrap items-center gap-2">

              <SlidersHorizontal
                size={15}
                className="mr-2 text-[#24384B]"
              />

              {[
                {
                  value: "all",
                  label: "All Projects",
                },
                {
                  value: "completed",
                  label: "Completed",
                },
                {
                  value: "ongoing",
                  label: "Ongoing",
                },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() =>
                    setFilter(item.value)
                  }
                  className={`relative px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                    filter === item.value
                      ? "bg-[#081A2B] text-white"
                      : "bg-[#E8EEF1] text-[#24384B] hover:bg-[#D6E0E6] hover:text-[#081A2B]"
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </div>

          </div>

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2"
          >

            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              )
            )}

          </motion.div>

          {/* EMPTY STATE */}

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">

              <p className="text-sm font-medium text-[#24384B]">
                No projects found in this category.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="bg-[#081A2B] text-white">

        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
            >

              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-white">
                01 / APPROACH
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
                Built around
                <br />
                <span className="text-white">
                  real-world requirements.
                </span>
              </h2>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="max-w-3xl"
            >

              <p className="text-lg font-medium leading-8 text-white md:text-xl">
                Every project demands a different
                combination of engineering expertise,
                safety management, technical coordination
                and execution discipline. SSES works
                alongside project and plant teams to
                develop practical solutions that fit the
                environment in which they operate.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-4 border-b border-white/50 pb-3 text-xs font-bold uppercase tracking-[0.17em] text-white"
              >
                Discuss a project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#E8EEF1]">

        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-10 md:flex-row md:items-end"
          >

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#24384B]">
                Start a conversation
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#081A2B] md:text-6xl">
                Have a project
                <br />
                <span className="text-[#3E5368]">
                  in mind?
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-5 bg-[#081A2B] px-7 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Talk to SSES

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={15} />
              </span>
            </Link>

          </motion.div>

        </div>
      </section>

    </main>
  );
}