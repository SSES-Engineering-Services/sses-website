import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";
import ProjectPdfViewer from "../components/projects/ProjectPdfViewer";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

function getClient(project) {
  return project.client || "SSES Client";
}

function getSector(project) {
  return (
    project.sector ||
    project.category ||
    "Engineering & Consultancy"
  );
}

function getStatusLabel(project) {
  return project.status === "completed"
    ? "Completed"
    : "Ongoing";
}

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="border-t border-[#C7D3DC] pt-4">
      <div className="flex items-center gap-2 text-[#23415B]">
        <Icon size={14} />

        <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold text-navy-950">
        {value || "—"}
      </p>
    </div>
  );
}

function RelatedProject({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-navy-950">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#081A2B] via-[#081A2B]/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            {project.location}
          </p>

          <h3 className="mt-2 font-display text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-navy-950/60 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </Link>
  );
}

export default function ProjectDetail() {
  const { projectSlug } = useParams();

  const project = useMemo(
    () =>
      projects.find(
        (item) => item.slug === projectSlug
      ),
    [projectSlug]
  );

  const relatedProjects = useMemo(() => {
    if (!project) return [];

    return projects
      .filter(
        (item) =>
          item.slug !== project.slug &&
          item.status === project.status
      )
      .slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-screen bg-navy-950 px-6 py-32 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-white">
            PROJECT / 404
          </p>

          <h1 className="mt-5 font-display text-5xl font-bold">
            Project not found.
          </h1>

          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-white"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const isCompleted = project.status === "completed";

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050B11] text-white">

        <motion.div
          className="absolute inset-0"
          initial={{
            scale: 1.18,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            ease,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-65"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-r from-[#050B11] via-[#050B11]/70 to-[#050B11]/10" />

        <div className="absolute inset-0 bg-linear-to-t from-[#050B11] via-transparent to-[#050B11]/20" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 flex min-h-screen items-end">
          <div className="mx-auto w-full max-w-[1600px] px-4 pb-12 sm:px-6 sm:pb-14 md:px-10 md:pb-20 lg:px-14 lg:pb-24">

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
              }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-orange-500"
              >
                <ArrowLeft
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                All Projects
              </Link>
            </motion.div>

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
                delay: 0.2,
              }}
              className="mt-20 flex flex-wrap items-center gap-4"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-white">
                PROJECT /{" "}
                {String(
                  projects.findIndex(
                    (item) =>
                      item.slug === project.slug
                  ) + 1
                ).padStart(2, "0")}
              </span>

              <span className="h-px w-12 bg-white/40" />

              <span className="text-xs font-bold uppercase tracking-[0.17em] text-orange-500">
                {getStatusLabel(project)}
              </span>
            </motion.div>

            <div className="mt-7 overflow-hidden">
              <motion.h1
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.3,
                  ease,
                }}
                className="max-w-6xl break-words font-display text-[clamp(2.9rem,11vw,9rem)] font-bold leading-[0.88] tracking-[-0.055em]"
              >
                {project.title}
              </motion.h1>
            </div>

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
                delay: 0.8,
              }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-base leading-7 text-white md:text-lg">
                {project.shortDescription}
              </p>
            </motion.div>

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
                delay: 1,
              }}
              className="mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4"
            >
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {project.location}
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  Client
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {getClient(project)}
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  Sector
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {getSector(project)}
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  Year
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {project.year || "—"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          className="absolute bottom-8 right-8 hidden items-center gap-4 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40"
          >
            <ArrowRight
              size={14}
              className="rotate-90"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
                01 / OVERVIEW
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#23415B]">
                  {isCompleted
                    ? "Completed Project"
                    : "Ongoing Project"}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="max-w-4xl"
            >
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy-950 md:text-6xl">
                About the
                <span className="text-[#23415B]">
                  {" "}
                  project.
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-[#23415B] md:text-xl md:leading-9">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT FACTS
      ===================================================== */}

      <section className="bg-[#F3F6F7]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
              02 / PROJECT DATA
            </p>

            <h2 className="mt-5 font-display text-3xl font-bold text-[#081A2B] md:text-5xl">
              Project details
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem
              icon={MapPin}
              label="Location"
              value={project.location}
            />

            <MetaItem
              icon={Building2}
              label="Client"
              value={getClient(project)}
            />

            <MetaItem
              icon={ShieldCheck}
              label="Sector"
              value={getSector(project)}
            />

            <MetaItem
              icon={CalendarDays}
              label="Year"
              value={project.year}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SCOPE
      ===================================================== */}

      {project.scope?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-32">

            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
              >
                <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
                  03 / SCOPE
                </p>

                <h2 className="mt-5 font-display text-4xl font-bold text-[#081A2B] md:text-6xl">
                  What we
                  <br />
                  <span className="text-[#23415B]">
                    delivered.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={staggerContainer}
                className="max-w-3xl"
              >
                {project.scope.map((item, index) => (
                  <motion.div
                    key={`${item}-${index}`}
                    variants={fadeUp}
                    className="flex gap-5 border-t border-[#C7D3DC] py-6"
                  >
                    <span className="shrink-0 font-mono text-xs font-bold text-[#F28C28]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-lg leading-8 text-[#23415B] md:text-xl md:leading-9">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      {project.highlights?.length > 0 && (
        <section className="bg-[#081A2B] text-white">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">

            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
              >
                <p className="font-mono text-xs tracking-[0.2em] text-[#F28C28]">
                  04 / HIGHLIGHTS
                </p>

                <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">
                  Key
                  <br />
                  <span className="text-white">
                    outcomes.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={staggerContainer}
                className="grid gap-0"
              >
                {project.highlights.map(
                  (highlight, index) => (
                    <motion.div
                      key={`${highlight}-${index}`}
                      variants={fadeUp}
                      className="flex gap-6 border-t border-white/20 py-7"
                    >
                      <span className="font-mono text-xs text-[#F28C28]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="max-w-2xl text-base leading-7 text-white md:text-lg">
                        {highlight}
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>

            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          GALLERY
      ===================================================== */}

      {project.gallery?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1800px] px-4 py-20 md:px-8 lg:py-28">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="mx-auto mb-12 max-w-[1600px] px-2"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
                05 / PROJECT IMAGES
              </p>

              <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <h2 className="font-display text-4xl font-bold text-[#081A2B] md:text-6xl">
                  Inside the
                  <span className="text-[#23415B]">
                    {" "}
                    project.
                  </span>
                </h2>

                <p className="max-w-md text-sm leading-6 text-[#23415B]">
                  A visual record of the environment,
                  infrastructure and work associated with
                  this project.
                </p>

              </div>
            </motion.div>

            <div className="mx-auto max-w-[1600px]">

              {project.gallery.map((image, index) => (
                <motion.div
                  key={`${image}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 70,
                    scale: 0.98,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease,
                  }}
                  className={`relative mb-6 overflow-hidden bg-[#081A2B] ${
                    index % 3 === 1
                      ? "md:ml-[12%] md:w-[76%]"
                      : "w-full"
                  }`}
                >

                  <motion.img
                    src={image}
                    alt={`${project.title} project image ${
                      index + 1
                    }`}
                    className="block h-auto max-h-[85vh] w-full object-cover"
                    whileHover={{
                      scale: 1.025,
                    }}
                    transition={{
                      duration: 0.8,
                      ease,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.2em] text-white">
                    IMAGE /{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </motion.div>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          DOCUMENTS
      ===================================================== */}

      {project.documents?.length > 0 && (
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
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
                06 / DOCUMENTATION
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold text-[#081A2B] md:text-6xl">
                Project
                <span className="text-[#23415B]">
                  {" "}
                  documents.
                </span>
              </h2>
            </motion.div>

            <div className="mt-12 space-y-5">

              {project.documents.map(
                (document, index) => (
                  <motion.div
                    key={`${document.file}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    variants={fadeUp}
                  >
                    <div className="border border-[#C7D3DC] bg-white">

                      <div className="flex flex-col justify-between gap-5 border-b border-[#C7D3DC] p-5 md:flex-row md:items-center md:p-6">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 items-center justify-center bg-[#081A2B] text-white">
                            <FileText size={18} />
                          </div>

                          <div>
                            <p className="text-sm font-bold text-[#081A2B]">
                              {document.title ||
                                "Project Document"}
                            </p>

                            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#23415B]">
                              {document.type || "PDF"}
                            </p>
                          </div>

                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#23415B]">
                          Document{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                      </div>

                      <div className="p-3 md:p-5">
                        <ProjectPdfViewer
                          file={document.file}
                          title={
                            document.title ||
                            "Project Document"
                          }
                        />
                      </div>

                    </div>
                  </motion.div>
                )
              )}

            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED PROJECTS
      ===================================================== */}

      {relatedProjects.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >

              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-[#23415B]">
                  07 / MORE PROJECTS
                </p>

                <h2 className="mt-5 font-display text-4xl font-bold text-[#081A2B] md:text-6xl">
                  Continue
                  <span className="text-[#23415B]">
                    {" "}
                    exploring.
                  </span>
                </h2>
              </div>

              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#081A2B] transition-colors hover:text-[#F28C28]"
              >
                All projects

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <RelatedProject
                  key={relatedProject.slug}
                  project={relatedProject}
                />
              ))}
            </div>

          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#081A2B] text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-14 lg:py-32">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={reveal}
            className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >

            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[#F28C28]">
                HAVE A SIMILAR REQUIREMENT?
              </p>

              <h2 className="mt-5 max-w-5xl font-display text-4xl font-bold leading-tight md:text-7xl">
                Let's build the
                <br />
                right solution.
              </h2>
            </div>

            <Link
              to="/contact"
              className="group flex w-fit items-center gap-5 bg-white px-7 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#081A2B] transition-transform duration-300 hover:-translate-y-1"
            >
              Talk to SSES

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081A2B] text-white">
                <ArrowUpRight size={15} />
              </span>
            </Link>

          </motion.div>

        </div>
      </section>

    </main>
  );
}