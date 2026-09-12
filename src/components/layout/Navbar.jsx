import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { navigationLinks } from "../../data/navigation";
import ssesLogo from "../../assets/sses-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1900px] px-4 sm:px-6 lg:px-8 2xl:px-10">

        {/* =====================================================
            MAIN HEADER
        ===================================================== */}
        <div className="flex h-[82px] w-full items-center gap-5 lg:h-[86px] lg:gap-7 xl:gap-8">

          {/* ===================================================
              BRAND
          =================================================== */}
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="SSES Home"
          >
            {/* LOGO */}
            <div className="flex h-[58px] w-[92px] shrink-0 items-center justify-center">
              <img
                src={ssesLogo}
                alt="SSES Solutions"
                className="block !h-[52px] !w-auto object-contain sm:!h-[54px] lg:!h-[56px]"
              />
            </div>

            {/* DIVIDER */}
            <div className="mx-3 hidden h-[48px] w-px bg-slate-300 xl:mx-4 xl:block" />

            {/* COMPANY INFORMATION */}
            <div className="hidden min-w-0 pt-1 xl:block xl:max-w-[470px] 2xl:max-w-[540px]">

              {/* SOLUTIONS */}
              <div className="font-display text-[19px] font-extrabold leading-none tracking-[-0.025em] text-navy-950 2xl:text-[22px]">
                SOLUTIONS
              </div>

              {/* COMPANY NAME */}
              <div className="mt-1.5 whitespace-nowrap font-display text-[17px] font-extrabold leading-none tracking-[-0.025em] text-navy-950 2xl:text-[19px]">
                S.H.E.F & Engineering Services LLP
              </div>

              {/* TAGLINE */}
              <div className="mt-1.5 max-w-[500px] text-[10px] font-semibold italic leading-[1.25] text-navy-800 2xl:text-[11px]">
                A complete solution of Engineering, Safety, Health,
                Environment and Fire-safety Services
              </div>

              {/* REGISTRATION */}
              <div className="mt-1 text-[8px] font-semibold leading-[1.2] text-navy-800 2xl:text-[9px]">
                ® Registered under the Ministry of Corporate Affairs
                <span className="mx-1">(</span>
                Regd No. AAR-7523
                <span className="mx-1">)</span>
              </div>
            </div>
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}
          <nav
            className="ml-auto hidden min-w-0 flex-1 items-center justify-end lg:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-center justify-end gap-1 xl:gap-2 2xl:gap-3">

              {navigationLinks.map((item) => {
                const isDropdownOpen =
                  openDropdown === item.label;

                /* =================================================
                    SERVICES DROPDOWN
                ================================================= */
                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() =>
                        setOpenDropdown(item.label)
                      }
                      onMouseLeave={() =>
                        setOpenDropdown(null)
                      }
                    >
                      <button
                        type="button"
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          toggleDropdown(item.label)
                        }
                        className="
                          group
                          flex
                          h-[50px]
                          items-center
                          justify-center
                          gap-1.5
                          whitespace-nowrap
                          px-3
                          font-display
                          text-[15px]
                          font-extrabold
                          tracking-[-0.02em]
                          text-navy-950
                          transition-colors
                          duration-200
                          hover:text-orange-600
                          xl:h-[54px]
                          xl:px-4
                          xl:text-[16px]
                          2xl:px-5
                          2xl:text-[17px]
                        "
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={16}
                          strokeWidth={2.5}
                          className={`
                            shrink-0
                            transition-transform
                            duration-200
                            ${
                              isDropdownOpen
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {/* =================================================
                          SERVICES MEGA MENU
                      ================================================= */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 3,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 3,
                            }}
                            transition={{
                              duration: 0.12,
                              ease: "easeOut",
                            }}
                            className="
                              absolute
                              right-0
                              top-full
                              z-[120]
                              mt-1
                              w-[740px]
                              border
                              border-slate-200
                              bg-white
                              shadow-[0_18px_50px_rgba(8,26,43,0.12)]
                            "
                          >
                            {/* MENU HEADER */}
                            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 xl:px-7">
                              <div>
                                <div className="font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-orange-600">
                                  SSES / SERVICES
                                </div>

                                <div className="mt-1 font-display text-[20px] font-extrabold tracking-[-0.025em] text-navy-950">
                                  Core capabilities
                                </div>
                              </div>

                              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                08 SERVICES
                              </div>
                            </div>

                            {/* SERVICE GROUPS */}
                            <div className="grid grid-cols-2 gap-x-8 px-6 py-5 xl:px-7">
                              {item.dropdown.map((group) => (
                                <div
                                  key={group.title}
                                  className="min-w-0"
                                >
                                  <div className="mb-2.5">
                                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-orange-600">
                                      {group.title}
                                    </p>
                                  </div>

                                  <div>
                                    {group.items.map(
                                      (subItem, index) => (
                                        <Link
                                          key={subItem.label}
                                          to={subItem.href}
                                          onClick={() =>
                                            setOpenDropdown(null)
                                          }
                                          className="
                                            group/item
                                            flex
                                            min-h-[49px]
                                            items-center
                                            gap-3
                                            border-b
                                            border-slate-100
                                            py-2.5
                                            transition-colors
                                            duration-150
                                            last:border-b-0
                                            hover:bg-slate-50
                                          "
                                        >
                                          <span
                                            className="
                                              w-6
                                              shrink-0
                                              font-mono
                                              text-[8px]
                                              font-bold
                                              tracking-[0.08em]
                                              text-slate-400
                                              transition-colors
                                              duration-150
                                              group-hover/item:text-orange-600
                                            "
                                          >
                                            {String(index + 1).padStart(
                                              2,
                                              "0"
                                            )}
                                          </span>

                                          <span
                                            className="
                                              min-w-0
                                              flex-1
                                              text-[13px]
                                              font-bold
                                              leading-5
                                              text-navy-950
                                            "
                                          >
                                            {subItem.label}
                                          </span>

                                          <ArrowUpRight
                                            size={14}
                                            strokeWidth={2}
                                            className="
                                              shrink-0
                                              text-slate-300
                                              opacity-0
                                              transition-all
                                              duration-150
                                              group-hover/item:-translate-y-0.5
                                              group-hover/item:translate-x-0.5
                                              group-hover/item:text-orange-600
                                              group-hover/item:opacity-100
                                            "
                                          />
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* MENU FOOTER */}
                            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-3.5 xl:px-7">
                              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                Integrated engineering & SHEF capabilities
                              </span>

                              <Link
                                to={item.href}
                                onClick={() =>
                                  setOpenDropdown(null)
                                }
                                className="
                                  group/explore
                                  inline-flex
                                  shrink-0
                                  items-center
                                  gap-2
                                  text-[11px]
                                  font-extrabold
                                  text-navy-950
                                  transition-colors
                                  duration-150
                                  hover:text-orange-600
                                "
                              >
                                View all services

                                <ArrowUpRight
                                  size={14}
                                  strokeWidth={2.5}
                                  className="
                                    transition-transform
                                    duration-150
                                    group-hover/explore:-translate-y-0.5
                                    group-hover/explore:translate-x-0.5
                                  "
                                />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* =================================================
                    NORMAL NAVIGATION ITEM
                ================================================= */
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={() =>
                      setOpenDropdown(null)
                    }
                    className={({ isActive }) =>
                      `
                        flex
                        h-[50px]
                        items-center
                        justify-center
                        whitespace-nowrap
                        px-3
                        font-display
                        text-[15px]
                        font-extrabold
                        tracking-[-0.02em]
                        transition-colors
                        duration-200
                        xl:h-[54px]
                        xl:px-4
                        xl:text-[16px]
                        2xl:px-5
                        2xl:text-[17px]
                        ${
                          isActive
                            ? "text-navy-950"
                            : "text-navy-950 hover:text-orange-600"
                        }
                      `
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              {/* =================================================
                  TALK TO SSES CTA
              ================================================= */}
              <Link
                to="/#contact"
                className="
                  group
                  ml-2
                  inline-flex
                  h-[48px]
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  whitespace-nowrap
                  bg-navy-950
                  px-5
                  font-display
                  text-[14px]
                  font-extrabold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-orange-600
                  xl:ml-3
                  xl:h-[50px]
                  xl:px-6
                  xl:text-[15px]
                  2xl:ml-4
                  2xl:px-7
                  2xl:text-[16px]
                "
              >
                Talk to SSES

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </nav>

          {/* ===================================================
              MOBILE MENU BUTTON
          =================================================== */}
          <button
            type="button"
            className="
              ml-auto
              inline-flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              border
              border-slate-200
              bg-white
              text-navy-950
              transition-colors
              duration-200
              hover:bg-slate-50
              lg:hidden
            "
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu
              size={23}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="
              fixed
              inset-0
              z-[110]
              bg-navy-950
              lg:hidden
            "
          >
            <div className="flex h-full flex-col">

              {/* MOBILE HEADER */}
              <div
                className="
                  flex
                  min-h-[70px]
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  sm:px-5
                "
              >
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    bg-white
                    px-2
                    py-1.5
                  "
                  aria-label="SSES Home"
                >
                  <img
                    src={ssesLogo}
                    alt="SSES Solutions"
                    className="!block !h-[40px] !w-auto !max-w-[120px] !object-contain sm:!h-[42px]"
                  />
                </Link>

                <button
                  type="button"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-white/20
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-white/10
                  "
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                >
                  <X
                    size={22}
                    strokeWidth={2.5}
                  />
                </button>
              </div>

              {/* MOBILE COMPANY INFORMATION */}
              <div
                className="
                  border-b
                  border-white/10
                  px-4
                  py-5
                  sm:px-5
                  sm:py-6
                "
              >
                <p className="font-display text-xl font-extrabold text-white">
                  SOLUTIONS
                </p>

                <p className="mt-1 font-display text-base font-bold leading-tight text-white">
                  S.H.E.F & Engineering Services LLP
                </p>

                <p className="mt-2 max-w-xl text-xs font-medium italic leading-relaxed text-slate-300">
                  A complete solution of Engineering, Safety,
                  Health, Environment and Fire-safety Services
                </p>

                <p className="mt-2 text-[10px] font-medium leading-relaxed text-slate-400">
                  ® Registered under the Ministry of Corporate Affairs
                  (Regd No. AAR-7523)
                </p>
              </div>

              {/* MOBILE LINKS */}
              <nav
                className="
                  flex
                  flex-1
                  flex-col
                  overflow-y-auto
                  px-4
                  py-5
                  sm:px-5
                  sm:py-6
                "
                aria-label="Mobile navigation"
              >
                <div>
                  {navigationLinks.map((item) => (
                    <div key={item.label}>

                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/10
                          py-4
                          font-display
                          text-[22px]
                          font-extrabold
                          tracking-[-0.025em]
                          text-white
                          transition-colors
                          duration-200
                          hover:text-orange-400
                          sm:py-5
                          sm:text-[24px]
                        "
                      >
                        <span>{item.label}</span>

                        <ArrowUpRight
                          size={20}
                          strokeWidth={2.5}
                          className="
                            text-orange-500
                            transition-transform
                            duration-200
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </Link>

                      {item.dropdown && (
                        <div className="border-b border-white/10 py-3 sm:py-4">

                          {item.dropdown.map((group) => (
                            <div
                              key={group.title}
                              className="mb-3 last:mb-0"
                            >
                              <p
                                className="
                                  px-2
                                  py-2
                                  text-[9px]
                                  font-extrabold
                                  uppercase
                                  tracking-[0.18em]
                                  text-orange-400
                                "
                              >
                                {group.title}
                              </p>

                              {group.items.map(
                                (subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={closeMobileMenu}
                                    className="
                                      flex
                                      items-center
                                      gap-3
                                      px-2
                                      py-2.5
                                      text-[14px]
                                      font-semibold
                                      leading-5
                                      text-slate-300
                                      transition-colors
                                      duration-150
                                      hover:text-white
                                      sm:text-[15px]
                                    "
                                  >
                                    <span className="font-mono text-[9px] text-slate-500">
                                      →
                                    </span>

                                    <span>
                                      {subItem.label}
                                    </span>
                                  </Link>
                                )
                              )}
                            </div>
                          ))}

                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* MOBILE CTA */}
                <Link
                  to="/#contact"
                  onClick={closeMobileMenu}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-orange-500
                    px-5
                    py-4
                    text-[15px]
                    font-extrabold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-orange-600
                    sm:mt-9
                    sm:text-[16px]
                  "
                >
                  Talk to SSES

                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.5}
                  />
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;