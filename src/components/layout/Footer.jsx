import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

import PageContainer from "../common/PageContainer";
import ContactForm from "../forms/ContactForm";

import { navigationLinks } from "../../data/navigation";
import { siteData } from "../../data/siteData";

import ssesLogo from "../../assets/sses-logo.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Footer() {
  const servicesNavigation = navigationLinks.find(
    (item) => item.label === "Services"
  );

  const serviceGroups = servicesNavigation?.dropdown || [];

  const exploreLinks = navigationLinks.filter(
    (item) => item.label !== "Services"
  );

  return (
    <>
      {/* =========================================================
          TALK TO SSES
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-100 py-20 sm:py-24 lg:py-28"
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-slate-200" />

          <div className="absolute -left-12 top-36 h-44 w-44 rounded-full border border-orange-500/15" />

          <div className="absolute -right-45 -top-45 h-125 w-125nded-full border border-navy-950/5" />

          <div className="absolute -bottom-45 -right-30 h-105 w-105 rounded-full bg-navy-950/2.5" />

          <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200/60" />
        </div>

        <PageContainer className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24"
          >
            {/* ===================================================
                CONTACT INTRO
            =================================================== */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-600">
                  Talk to SSES
                </span>
              </div>

              <h2 className="mt-6 max-w-xl font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-[4.2rem]">
                Let's discuss your
                <br />
                requirements.
              </h2>

              <p className="mt-7 max-w-xl text-[17px] font-medium leading-8 text-navy-800 sm:text-[18px]">
                Tell us about your project, operational requirement, or
                technical inquiry. Our team will review your requirements and
                get back to you.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-5">
                <motion.a
                  variants={fadeUp}
                  href="tel:+918789950383"
                  whileHover={{ x: 6 }}
                  className="group flex w-fit items-center gap-4 text-[16px] font-extrabold text-navy-950 transition-colors duration-300 hover:text-orange-600 sm:text-[17px]"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center border border-orange-500/30">
                    <Phone
                      size={15}
                      strokeWidth={2.3}
                      className="text-orange-500"
                    />
                  </span>

                  +91 87899 50383
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="mailto:ask.solutionsses@gmail.com"
                  whileHover={{ x: 6 }}
                  className="group flex w-fit items-center gap-4 text-[16px] font-extrabold text-navy-950 transition-colors duration-300 hover:text-orange-600 sm:text-[17px]"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center border border-orange-500/30">
                    <Mail
                      size={15}
                      strokeWidth={2.3}
                      className="text-orange-500"
                    />
                  </span>

                  ask.solutionsses@gmail.com
                </motion.a>
              </div>

              {/* Support statement */}
              <motion.div
                variants={fadeUp}
                className="mt-12 border-l-2 border-orange-500 pl-5 sm:pl-6"
              >
                <p className="text-[16px] font-extrabold text-navy-950 sm:text-[17px]">
                  Project-focused support.
                </p>

                <p className="mt-2 max-w-md text-[15px] font-medium leading-7 text-navy-800 sm:text-[16px]">
                  From technical consultation to integrated engineering and
                  S.H.E.F. solutions, our team supports your operational
                  requirements.
                </p>
              </motion.div>
            </motion.div>

            {/* ===================================================
                CONTACT FORM
            =================================================== */}
            <motion.div
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute inset-3 translate-x-3 translate-y-3 border border-navy-950/10 bg-navy-950/5" />

              <div className="relative overflow-hidden border border-navy-800 bg-navy-950 p-6 shadow-2xl sm:p-8 lg:p-10">
                {/* Top accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-0 top-0 h-1 w-full origin-left bg-orange-500"
                />

                {/* Decorative technical shapes */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute right-[-120px] top-[-120px] h-64 w-64 rounded-full border border-white/5" />

                  <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full border border-orange-500/10" />

                  <div className="absolute bottom-[-100px] left-[-100px] h-56 w-56 rounded-full border border-white/5" />

                  <div className="absolute bottom-8 right-8 h-16 w-16 border border-white/5" />

                  <div className="absolute left-8 top-20 h-px w-24 bg-orange-500/20" />
                </div>

                <div className="relative">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="mb-8"
                  >
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-400">
                        Send an Inquiry
                      </span>

                      <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/30 sm:block">
                        SSES / CONTACT
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[2rem] font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                      Tell us how we can help.
                    </h3>

                    <p className="mt-3 max-w-lg text-[15px] font-medium leading-7 text-slate-300 sm:text-[16px]">
                      Share your requirements and our team will get back to
                      you.
                    </p>
                  </motion.div>

                  <div
                    className="
                      [&_label]:text-slate-200
                      [&_label]:text-[14px]
                      [&_label]:font-semibold

                      [&_input]:border-white/15
                      [&_input]:bg-white/[0.06]
                      [&_input]:text-white
                      [&_input]:text-[16px]
                      [&_input]:placeholder:text-slate-400
                      [&_input]:transition-all
                      [&_input]:duration-300
                      [&_input:focus]:border-orange-500
                      [&_input:focus]:bg-white/[0.09]

                      [&_textarea]:border-white/15
                      [&_textarea]:bg-white/[0.06]
                      [&_textarea]:text-white
                      [&_textarea]:text-[16px]
                      [&_textarea]:placeholder:text-slate-400
                      [&_textarea]:transition-all
                      [&_textarea]:duration-300
                      [&_textarea:focus]:border-orange-500
                      [&_textarea:focus]:bg-white/[0.09]

                      [&_button]:bg-orange-500
                      [&_button]:text-[15px]
                      [&_button]:font-extrabold
                      [&_button]:transition-all
                      [&_button]:duration-300
                      [&_button:hover]:bg-orange-600
                      [&_button:hover]:shadow-lg
                      [&_button:hover]:shadow-orange-500/10
                    "
                  >
                    <ContactForm />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </PageContainer>
      </section>

      {/* =========================================================
          COMPANY RESOURCES
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <PageContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
            className="relative overflow-hidden border border-slate-200 bg-slate-50"
          >
            {/* Orange index */}
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />

            <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
              <motion.div
                variants={fadeUp}
                className="p-7 sm:p-9 lg:p-11"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-orange-600">
                    01
                  </span>

                  <span className="h-px w-8 bg-orange-500" />

                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-600">
                    Company Resources
                  </span>
                </div>

                <h3 className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-tight tracking-[-0.03em] text-navy-950 sm:text-4xl">
                  Need more information?
                </h3>

                <p className="mt-3 max-w-2xl text-[16px] font-medium leading-7 text-navy-800 sm:text-[17px]">
                  Access our company profile and association documentation for
                  a clearer understanding of SSES and its capabilities.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col border-t border-slate-200 lg:border-l lg:border-t-0"
              >
                <a
                  href="#"
                  className="group flex min-h-[76px] items-center justify-between gap-8 border-b border-slate-200 px-7 py-5 transition-colors duration-300 hover:bg-navy-950 sm:px-9 lg:min-w-[330px]"
                >
                  <div>
                    <span className="block text-[15px] font-extrabold text-navy-950 transition-colors group-hover:text-white">
                      Company Profile
                    </span>

                    <span className="mt-1 block text-xs font-medium text-navy-800 transition-colors group-hover:text-slate-300">
                      Corporate information
                    </span>
                  </div>

                  <ArrowDown
                    size={19}
                    className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>

                <a
                  href="/documents/Associate Format (2021-22).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[76px] items-center justify-between gap-8 px-7 py-5 transition-colors duration-300 hover:bg-navy-950 sm:px-9 lg:min-w-[330px]"
                >
                  <div>
                    <span className="block text-[15px] font-extrabold text-navy-950 transition-colors group-hover:text-white">
                      Association Form
                    </span>

                    <span className="mt-1 block text-xs font-medium text-navy-800 transition-colors group-hover:text-slate-300">
                      Documentation
                    </span>
                  </div>

                  <ArrowDown
                    size={19}
                    className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <footer className="relative overflow-hidden bg-navy-950 text-white">
        {/* Technical background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border border-white/[0.035]" />

          <div className="absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full border border-orange-500/[0.07]" />

          <div className="absolute bottom-[-200px] left-[-150px] h-[480px] w-[480px] rounded-full border border-white/[0.025]" />

          <div className="absolute left-0 right-0 top-0 h-px bg-orange-500/40" />
        </div>

        <PageContainer className="relative">
          {/* =====================================================
              FOOTER INTRO
          ===================================================== */}
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
            className="border-b border-white/10 py-14 sm:py-16 lg:py-20"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-orange-500">
                    SSES / 08
                  </span>

                  <span className="h-px w-10 bg-orange-500" />

                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">
                    Engineering & Safety
                  </span>
                </div>

                <h2 className="mt-6 max-w-4xl font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.5rem]">
                  Engineering.
                  <br />
                  Safety.
                  <br />
                  <span className="text-orange-500">
                    Built for Industry.
                  </span>
                </h2>
              </div>

              <div className="max-w-sm lg:pb-2">
                <p className="text-[17px] font-medium leading-8 text-slate-300 sm:text-[18px]">
                  Integrated engineering and S.H.E.F. solutions for industrial
                  and infrastructure environments.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-3 text-[15px] font-extrabold text-white transition-colors duration-300 hover:text-orange-400"
                >
                  Start a conversation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              MAIN FOOTER GRID
          ===================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
            className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1fr] lg:gap-12 lg:py-20"
          >
            {/* ===================================================
                BRAND
            =================================================== */}
            <motion.div variants={fadeUp}>
              <Link
                to="/"
                className="group inline-flex items-center"
                aria-label="SSES Home"
              >
                <div className="flex min-h-[120px] items-center border border-white/10 bg-white p-3 transition-colors duration-300 group-hover:border-orange-500/40">
                  <img
                    src={ssesLogo}
                    alt="SSES Solutions"
                    className="block !h-[100px] !w-auto !max-w-[110px] !object-contain"
                  />
                </div>
              </Link>

              <div className="mt-7">
                <p className="text-[17px] font-bold text-white">
                  SOLUTIONS
                </p>

                <p className="mt-1 text-[14px] font-semibold text-slate-400">
                  S.H.E.F & Engineering Services LLP
                </p>
              </div>

              <p className="mt-6 max-w-sm text-[15px] font-medium leading-7 text-slate-300">
                {siteData.company.tagline}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Regd. No. AAR-7523
                </span>
              </div>
            </motion.div>

            {/* ===================================================
                SERVICES
            =================================================== */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-orange-500">
                  01
                </span>

                <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
                  Services
                </h4>
              </div>

              <div className="mt-7 space-y-5">
                {serviceGroups.map((group) => (
                  <Link
                    key={group.title}
                    to={group.items[0]?.href || "/services"}
                    className="group flex items-start gap-3 text-[16px] font-bold leading-6 text-slate-200 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange-500 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {group.title}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* ===================================================
                EXPLORE
            =================================================== */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-orange-500">
                  02
                </span>

                <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
                  Explore
                </h4>
              </div>

              <div className="mt-7 space-y-5">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group flex items-center gap-3 text-[16px] font-bold text-slate-200 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-orange-500 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* ===================================================
                REGISTERED OFFICE
            =================================================== */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold text-orange-500">
                  03
                </span>

                <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
                  Registered Office
                </h4>
              </div>

              <div className="mt-7">
                <div className="flex gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={2}
                    className="mt-1 shrink-0 text-orange-500"
                  />

                  <p className="text-[16px] font-medium leading-8 text-slate-300">
                    B-14 Vishwambhar Park-I
                    <br />
                    Near Navnath Society, Gotri Road
                    <br />
                    Vadodara, Gujarat – 390021
                  </p>
                </div>

                <div className="mt-7 space-y-4">
                  <a
                    href="mailto:ask.solutionsses@gmail.com"
                    className="group flex items-center gap-3 text-[15px] font-bold text-white transition-colors duration-300 hover:text-orange-400"
                  >
                    <Mail
                      size={17}
                      className="text-orange-500"
                    />

                    ask.solutionsses@gmail.com
                  </a>

                  <a
                    href="tel:+918789950383"
                    className="group flex items-center gap-3 text-[15px] font-bold text-white transition-colors duration-300 hover:text-orange-400"
                  >
                    <Phone
                      size={17}
                      className="text-orange-500"
                    />

                    +91 87899 50383
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              LOCATIONS
          ===================================================== */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="border-t border-white/10 py-12 sm:py-14"
          >
            <div className="mb-8 flex items-center gap-4">
              <Building2
                size={19}
                className="text-orange-500"
              />

              <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
                Other Locations
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* RAIPUR */}
              <div className="group border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-orange-500/30 hover:bg-white/[0.04] sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-500">
                      Chhattisgarh
                    </span>

                    <h4 className="mt-2 font-display text-2xl font-extrabold text-white">
                      Raipur
                    </h4>
                  </div>

                  <span className="font-mono text-[10px] font-bold text-white/20">
                    02
                  </span>
                </div>

                <p className="mt-5 text-[15px] font-medium leading-7 text-slate-300">
                  C-55, Capital City Ph-3
                  <br />
                  Near Sharda Vidhya School
                  <br />
                  Saddu, Raipur – 492001
                </p>

                <p className="mt-5 text-[15px] font-bold leading-7 text-white">
                  +91 70232 77924
                  <br />
                  +91 87899 50383
                </p>
              </div>

              {/* PATNA */}
              <div className="group border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-orange-500/30 hover:bg-white/[0.04] sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-500">
                      Bihar
                    </span>

                    <h4 className="mt-2 font-display text-2xl font-extrabold text-white">
                      Patna
                    </h4>
                  </div>

                  <span className="font-mono text-[10px] font-bold text-white/20">
                    03
                  </span>
                </div>

                <p className="mt-5 text-[15px] font-medium leading-7 text-slate-300">
                  Birala Colony
                  <br />
                  Phulwari Sharif
                  <br />
                  PIN – 801505
                </p>

                <p className="mt-5 text-[15px] font-bold leading-7 text-white">
                  +91 87899 50383
                  <br />
                  +91 98013 10632
                </p>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}
          <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <p className="text-[13px] font-medium leading-6 text-slate-400">
                © {new Date().getFullYear()} {siteData.company.name}. All
                Rights Reserved.
              </p>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <a
                href="https://www.creovis.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 text-[13px] font-medium text-slate-400 transition-colors duration-300 hover:text-white"
              >
                <span className="text-slate-500">
                  Made by
                </span>

                <span className="font-extrabold tracking-wide text-slate-200 transition-colors duration-300 group-hover:text-orange-400">
                  CREOVIS
                </span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group inline-flex w-fit items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 hover:text-white"
            >
              Back to Top

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>
        </PageContainer>
      </footer>
    </>
  );
}

export default Footer;