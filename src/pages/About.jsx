import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Factory,
  Flame,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Quote,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageContainer from "../components/common/PageContainer";
import Button from "../components/common/Button";

const expertise = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "S.H.E.F. Management Solutions",
    description:
      "Effective and reliable solutions across Safety, Health, Environment and Fire management, tailored to demanding industrial requirements.",
    href: "/services/shef-management-solutions",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Audits & Inspection",
    description:
      "Audits, inspections, risk assessments and management plans conducted by experienced industry professionals.",
    href: "/services/audits-inspection",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Training & Certifications",
    description:
      "Practical training and certification programs designed for demanding and safety-critical professional environments.",
    href: "/services/training-certifications",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Engineering Services",
    description:
      "Engineering, structural design, quality assessment and construction-related support across project lifecycles.",
    href: "/services/engineering-services",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "PPE, Material & Equipment Supplies",
    description:
      "Expert-approved safety materials and equipment sourced to support reliability, value and project requirements.",
    href: "/services/ppe-material-equipment-supplies",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Environment & Waste Management",
    description:
      "Environmental, resource-management and waste solutions designed around operational efficiency and responsible practices.",
    href: "/services/environment-waste-management",
  },
  {
    number: "07",
    icon: Award,
    title: "Industrial Insurance Claim Settlement",
    description:
      "Industrial and workplace insurance support, including assistance with risk coverage and claim settlement requirements.",
    href: "/services/industrial-insurance-claim-settlement",
  },
  {
    number: "08",
    icon: Users,
    title: "Manpower Solutions",
    description:
      "Qualified and experienced professionals supporting Government, PSU and private-sector organizational requirements.",
    href: "/services/manpower-solutions",
  },
];

const testimonials = [
  {
    quote:
      "Upon reviewing the team members' profiles and the services provided by SSES in the fields of Engineering, E.H.S., and Fire Safety Management Systems through your internationally connected team, I am pleased to confirm my full satisfaction with your consultancy services.",
    name: "Chief Manager (EHS)",
    designation: "Testimonial",
  },
  {
    quote:
      "SSES offers top-notch consultancy services in Engineering, Environment, Health and Safety, as well as Fire management systems. Their team, consisting of experienced professionals with global affiliations, ensures that their clients receive exemplary services. As a startup, SSES has made a commendable entrance into the industry, and I extend my best wishes for their ongoing expansion and prosperity in the days ahead.",
    name: "Mr. Samit Samanta",
    designation: "Residence Construction Manager, Bridge & Roof (I) Ltd.",
  },
];

const environments = [
  "Industrial projects",
  "Infrastructure development projects",
  "Construction and maintenance requirements",
  "Government sector organizations",
  "Public Sector Undertakings (PSU)",
  "Limited and private sector organizations",
];

const philosophySteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin with the project's operational environment, requirements and specific challenges.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Our multidisciplinary expertise is applied to develop practical and technically informed solutions.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "We remain focused on implementation, compliance, safety and reliable project execution.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-orange-500" />

      <span
        className={`text-[10px] font-extrabold uppercase tracking-[0.22em] ${
          light ? "text-orange-400" : "text-orange-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0, y = 35 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState(null);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.2,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.3], [0, -110]);
  const heroGridY = useTransform(smoothProgress, [0, 0.25], [0, 120]);
  const heroScale = useTransform(smoothProgress, [0, 0.25], [1.08, 1]);
  const storyImageY = useTransform(smoothProgress, [0.1, 0.55], [40, -60]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 18);
  };

  const nextTestimonial = () => {
    setActiveTestimonial(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setActiveTestimonial(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(
        (current) => (current + 1) % testimonials.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[760px] overflow-hidden bg-navy-950 text-white sm:min-h-[820px]">
        <motion.div
          style={{
            y: heroImageY,
            scale: heroScale,
            x: mouseX,
          }}
          className="absolute inset-[-8%]"
        >
          <img
            src="https://static.wixstatic.com/media/78b226_6e27a80fe6624861afd937428c095600~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85,enc_avif,quality_auto/SSES1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Deep cinematic overlays */}
        <div className="absolute inset-0 bg-navy-950/90" />

        <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/45" />

        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/40" />

        {/* Animated technical grid */}
        <motion.div
          style={{ y: heroGridY }}
          className="pointer-events-none absolute inset-[-10%] opacity-[0.13]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </motion.div>

        {/* Moving scan line */}
        <motion.div
          animate={{ y: ["-20vh", "110vh"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent"
        />

        {/* Background giant typography */}
        <motion.div
          animate={{ x: ["0%", "-8%", "0%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-4 left-[-5%] whitespace-nowrap font-display text-[28vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]"
        >
          SSES
        </motion.div>

        {/* Technical markers */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-[12%] top-[25%] flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Engineering / 01
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-[28%] right-[9%] flex items-center gap-3"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              E.H.S.F.
            </span>

            <span className="h-px w-20 bg-white/20" />
          </motion.div>

          <div className="absolute left-[5%] top-[45%]">
            <div className="h-28 w-px bg-white/10" />
            <div className="h-px w-28 bg-white/10" />
          </div>
        </div>

        <PageContainer className="relative z-10">
          {/* HERO CONTENT MOVED UP */}
          <div className="flex min-h-[760px] -translate-y-8 items-end py-28 sm:min-h-[820px] sm:-translate-y-12 lg:-translate-y-20 lg:items-center lg:py-32">
            <div className="max-w-5xl">
              <Reveal y={25}>
                <Eyebrow light>About SSES</Eyebrow>
              </Reveal>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-5xl font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[92px]"
              >
                Engineering

                <span className="block text-white/80">
                  expertise.
                </span>

                <span className="block text-orange-500">
                  Integrated solutions.
                </span>
              </motion.h1>

              <Reveal delay={0.2} y={25}>
                <p className="mt-9 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Solutions S.H.E.F & Engineering Services is dedicated to
                  delivering high-quality services across Environment, Health,
                  Safety and Fire, engineering, training, auditing and
                  industrial liaison requirements.
                </p>
              </Reveal>

              <Reveal delay={0.3} y={20}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center gap-3 bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Explore Our Expertise

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/projects"
                    className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
                  >
                    View Projects

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </PageContainer>

        {/* Hero bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-950/60 backdrop-blur-md">
          <PageContainer>
            <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
              {[
                ["01", "Engineering"],
                ["02", "Safety"],
                ["03", "Environment"],
                ["04", "Fire"],
              ].map(([number, label]) => (
                <motion.div
                  key={number}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                  className="flex items-center gap-3 px-4 py-5 transition sm:px-6"
                >
                  <span className="font-mono text-[10px] font-bold text-orange-500">
                    {number}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-[88px] right-5 hidden flex-col items-center gap-3 lg:flex"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">
            Scroll to explore
          </span>

          <ArrowDown size={14} className="text-orange-500" />
        </motion.div>
      </section>

      {/* =========================================================
          COMPANY STORY — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "100px 100%",
            }}
          />
        </div>

        <PageContainer className="relative">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              style={{ y: storyImageY }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  src="https://static.wixstatic.com/media/78b226_bd835dc3bd5c45209275861c71bd1edc~mv2.jpg/v1/crop/x_0,y_148,w_1280,h_595/fill/w_1170,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/railway-technician-engineer-wearing-safety-uniform-2024-06-28-17-40-18-utc.jpg"
                  alt="Engineering and industrial safety professional"
                  className="h-[470px] w-full object-cover sm:h-[560px]"
                />

                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 bg-navy-950/25"
                />

                <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-400">
                    Registered Organization
                  </span>

                  <p className="mt-3 max-w-sm font-display text-xl font-bold leading-7">
                    Registered under the Ministry of Corporate Affairs.
                  </p>
                </div>
              </div>

              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-5 hidden h-28 w-28 border-b border-r border-orange-500 sm:block"
              />

              <div className="absolute -left-4 top-8 hidden bg-orange-500 px-4 py-3 sm:block">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-white">
                  SSES / 2026
                </span>
              </div>
            </motion.div>

            <div>
              <Reveal>
                <Eyebrow light>Who We Are</Eyebrow>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  Supporting safer operations and stronger project execution.
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-8 text-base leading-8 text-slate-300">
                  Solutions S.H.E.F & Engineering Services (SSES) is dedicated
                  to delivering high-quality services with a core focus on
                  Environment, Health, Safety & Fire (E.H.S.F.) and Quality
                  Management Service (Q.M.S.), Training and Education,
                  Auditing & Certification, and comprehensive industrial
                  liaison services.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-5 text-base leading-8 text-slate-400">
                  We actively support infrastructure development projects while
                  working toward practical, reliable and professional solutions
                  for a wide range of industrial and organizational
                  requirements.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                  <div className="bg-navy-900 p-6">
                    <Factory size={23} className="text-orange-500" />

                    <h3 className="mt-5 font-display text-lg font-extrabold">
                      Industrial Focus
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Solutions designed around real operational environments.
                    </p>
                  </div>

                  <div className="bg-navy-900 p-6">
                    <Wrench size={23} className="text-orange-500" />

                    <h3 className="mt-5 font-display text-lg font-extrabold">
                      Multidisciplinary
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Engineering, safety and project expertise working
                      together.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          EHSF SYSTEM
      ========================================================= */}
      <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-black to-navy-950" />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
        />

        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/[0.08]"
        />

        <PageContainer className="relative">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow light>Core Expertise</Eyebrow>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-7 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                  Where engineering meets{" "}
                  <span className="text-orange-500">responsibility.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                  Our capabilities bring together Environment, Health, Safety,
                  Fire and Quality Management principles with engineering and
                  project support requirements.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-9 flex items-center gap-4">
                  <div className="h-px w-12 bg-orange-500" />

                  <span className="font-mono text-xs tracking-[0.15em] text-white/40">
                    E.H.S.F. + Q.M.S.
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-square max-w-[500px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[8%] rounded-full border border-white/10"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[22%] rounded-full border border-orange-500/20 border-dashed"
                />

                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500/30 bg-navy-900 shadow-[0_0_80px_rgba(242,140,40,0.08)]">
                  <div className="text-center">
                    <span className="block font-display text-4xl font-black text-orange-500">
                      SSES
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                      Integrated
                    </span>
                  </div>
                </div>

                {[
                  {
                    title: "SAFETY",
                    icon: ShieldCheck,
                    position: "left-0 top-[15%]",
                  },
                  {
                    title: "HEALTH",
                    icon: HeartHandshake,
                    position: "right-0 top-[15%]",
                  },
                  {
                    title: "ENVIRONMENT",
                    icon: Leaf,
                    position: "left-[5%] bottom-[12%]",
                  },
                  {
                    title: "FIRE",
                    icon: Flame,
                    position: "right-[5%] bottom-[12%]",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                      }}
                      animate={{
                        y: [0, index % 2 === 0 ? -8 : 8, 0],
                      }}
                      className={`absolute ${item.position} flex items-center gap-3`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-navy-900 text-orange-500">
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                      <span className="hidden font-mono text-[9px] font-bold tracking-[0.15em] text-white/55 sm:block">
                        {item.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          PHILOSOPHY — MOVING TYPOGRAPHY
      ========================================================= */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap font-display text-[14vw] font-black leading-none tracking-[-0.07em] text-white/[0.025]"
          >
            TOGETHER · TOGETHER · TOGETHER · TOGETHER ·
          </motion.div>
        </div>

        <PageContainer className="relative">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <Reveal>
              <Eyebrow light>Our Philosophy</Eyebrow>

              <h2 className="mt-7 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Built around collaboration.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                A guiding principle reflected in our approach to supporting
                projects, organizations and professional requirements.
              </p>
            </Reveal>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="border-y border-white/10 py-8"
              >
                <p className="font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  JOIN TOGETHER.
                </p>

                <p className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-orange-500 sm:text-6xl lg:text-7xl">
                  ENCOURAGE EACH OTHER.
                </p>
              </motion.div>

              <div className="mt-8 grid gap-0 border-t border-white/10">
                {philosophySteps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <div className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[70px_150px_1fr] sm:items-center">
                      <span className="font-mono text-[10px] font-bold text-orange-500">
                        {step.number}
                      </span>

                      <h3 className="font-display text-xl font-extrabold">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-7 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          SERVICES — DARK INTERACTIVE INDEX
      ========================================================= */}
      <section className="bg-navy-900 py-24 text-white lg:py-32">
        <PageContainer>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal className="max-w-3xl">
              <Eyebrow light />

              <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                One organization.

                <span className="block text-white/45">
                  Multiple areas of project support.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                SSES provides a broad range of professional services
                supporting engineering projects, industrial operations,
                safety requirements, infrastructure development and
                organizational needs.
              </p>
            </Reveal>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-bold text-white transition hover:text-orange-400"
            >
              View all services

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-14 border-t border-white/10">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeService === index;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`group border-b border-white/10 transition-colors duration-500 ${
                    isActive ? "bg-white/[0.035]" : ""
                  }`}
                >
                  <Link
                    to={item.href}
                    className="grid gap-5 px-3 py-7 sm:grid-cols-[70px_65px_1fr_auto] sm:items-center sm:gap-6 sm:px-5"
                  >
                    <span
                      className={`font-mono text-xs font-bold transition-colors duration-300 ${
                        isActive ? "text-orange-500" : "text-white/25"
                      }`}
                    >
                      {item.number}
                    </span>

                    <motion.div
                      animate={{
                        rotate: isActive ? 45 : 0,
                        scale: isActive ? 1.08 : 1,
                      }}
                      className={`flex h-11 w-11 items-center justify-center border transition-colors duration-300 ${
                        isActive
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-white/10 text-white/60"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.div>

                    <div>
                      <h3
                        className={`font-display text-xl font-extrabold tracking-tight transition-colors duration-300 sm:text-2xl ${
                          isActive ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 8 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        x: isActive ? 4 : 0,
                      }}
                      className={`flex h-10 w-10 items-center justify-center border transition-colors duration-300 ${
                        isActive
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      <ArrowRight size={17} />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-start gap-4 border-l-2 border-orange-500 bg-white/[0.025] px-6 py-5">
              <span className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-orange-500">
                Note
              </span>

              <p className="text-sm leading-7 text-slate-400">
                We also offer outsourcing and customized services according to
                the client's requirements.
              </p>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* =========================================================
          PROJECT ENVIRONMENTS
      ========================================================= */}
      <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950/80 via-black to-black" />

        <motion.div
          animate={{ x: ["-10%", "10%", "-10%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-orange-500/[0.06]"
        />

        <PageContainer className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <Eyebrow light />

              <h2 className="mt-7 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Built for

                <span className="block text-orange-500">
                  complex environments.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
                Our experience and professional capabilities are positioned to
                support a broad range of industrial, infrastructure and
                organizational requirements.
              </p>

              <Link
                to="/projects"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-orange-400"
              >
                Explore our projects

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {environments.map((environment, index) => (
                <motion.div
                  key={environment}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -4 }}
                  className="group bg-navy-950 p-7 transition-colors duration-300 hover:bg-navy-800"
                >
                  <div className="flex items-start justify-between">
                    <CheckCircle2
                      size={20}
                      className="text-orange-500"
                    />

                    <span className="font-mono text-[9px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-9 text-sm font-semibold leading-6 text-slate-300 transition group-hover:text-white">
                    {environment}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          TESTIMONIALS — DARK EDITORIAL
      ========================================================= */}
      <section className="overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
        <PageContainer>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <Eyebrow light />

              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                What professionals say about SSES.
              </h2>
            </Reveal>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/60 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center bg-orange-500 text-white transition hover:bg-orange-600"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative mt-14">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeTestimonial}
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -70) nextTestimonial();
                  if (info.offset.x > 70) previousTestimonial();
                }}
                className="relative cursor-grab border-y border-white/10 py-10 active:cursor-grabbing sm:py-14 lg:py-16"
              >
                <Quote
                  size={100}
                  strokeWidth={0.7}
                  className="absolute right-0 top-8 text-orange-500/[0.08]"
                />

                <div className="relative flex items-center gap-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-orange-500">
                    {String(activeTestimonial + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-12 bg-white/15" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Testimonial
                  </span>
                </div>

                <blockquote className="relative mt-8 max-w-5xl font-display text-2xl font-bold leading-[1.45] tracking-tight text-white sm:text-3xl lg:text-[38px] lg:leading-[1.45]">
                  “{testimonials[activeTestimonial].quote}”
                </blockquote>

                <div className="relative mt-10 flex items-center gap-5">
                  <div className="h-10 w-10 bg-orange-500" />

                  <div>
                    <p className="font-display text-base font-extrabold">
                      {testimonials[activeTestimonial].name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonials[activeTestimonial].designation}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1.5 transition-all ${
                  activeTestimonial === index
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-black py-28 text-white lg:py-36">
        {/* Moving background grid */}
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-[-10%] opacity-[0.08]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </motion.div>

        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-orange-500/10" />

        <PageContainer className="relative">
          <Reveal>
            <Eyebrow light />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-5xl font-display text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[100px]">
              Engineering.

              <span className="block text-white/30">
                Safety.
              </span>

              <span className="block text-orange-500">
                Confidence.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Our team at SSES combines engineering capability,
                E.H.S.F. expertise and experienced professionals to support
                projects from planning through execution.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-4 bg-orange-500 px-7 py-5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Explore SSES Services

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-white/10 pt-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Solutions S.H.E.F & Engineering Services
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                AAR-7523
              </span>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* =========================================================
          COMPANY STATUS
      ========================================================= */}
      <section className="border-t border-white/10 bg-navy-900 py-12 text-white lg:py-16">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-orange-500 text-white">
                <Award size={27} />
              </div>

              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-orange-400">
                  Company Registration
                </span>

                <h3 className="mt-2 font-display text-xl font-extrabold sm:text-2xl">
                  Registered under the Ministry of Corporate Affairs
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Registration Number: AAR-7523
                </p>
              </div>
            </div>

            <Button href="#contact">Talk to SSES</Button>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

export default About;