// src/components/projects/ProjectFootprint.jsx

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import India from "@react-map/india";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* =========================================================
   COMPLETE INDIA STATE + UNION TERRITORY DATA

   Projects are NOT hardcoded into this list.

   When a new project is added to projects.js, the project
   location is resolved against this data automatically.
========================================================= */

const STATE_META = {
  /* =========================
     STATES
  ========================= */

  AP: {
    code: "AP",
    name: "Andhra Pradesh",
    shortName: "A.P.",
  },

  AR: {
    code: "AR",
    name: "Arunachal Pradesh",
    shortName: "A.P.",
  },

  AS: {
    code: "AS",
    name: "Assam",
    shortName: "Assam",
  },

  BR: {
    code: "BR",
    name: "Bihar",
    shortName: "Bihar",
  },

  CG: {
    code: "CG",
    name: "Chhattisgarh",
    shortName: "C.G.",
  },

  GA: {
    code: "GA",
    name: "Goa",
    shortName: "Goa",
  },

  GJ: {
    code: "GJ",
    name: "Gujarat",
    shortName: "Gujarat",
  },

  HR: {
    code: "HR",
    name: "Haryana",
    shortName: "Haryana",
  },

  HP: {
    code: "HP",
    name: "Himachal Pradesh",
    shortName: "H.P.",
  },

  JH: {
    code: "JH",
    name: "Jharkhand",
    shortName: "Jharkhand",
  },

  KA: {
    code: "KA",
    name: "Karnataka",
    shortName: "Karnataka",
  },

  KL: {
    code: "KL",
    name: "Kerala",
    shortName: "Kerala",
  },

  MP: {
    code: "MP",
    name: "Madhya Pradesh",
    shortName: "M.P.",
  },

  MH: {
    code: "MH",
    name: "Maharashtra",
    shortName: "Maharashtra",
  },

  MN: {
    code: "MN",
    name: "Manipur",
    shortName: "Manipur",
  },

  ML: {
    code: "ML",
    name: "Meghalaya",
    shortName: "Meghalaya",
  },

  MZ: {
    code: "MZ",
    name: "Mizoram",
    shortName: "Mizoram",
  },

  NL: {
    code: "NL",
    name: "Nagaland",
    shortName: "Nagaland",
  },

  OD: {
    code: "OD",
    name: "Odisha",
    shortName: "Odisha",
  },

  PB: {
    code: "PB",
    name: "Punjab",
    shortName: "Punjab",
  },

  RJ: {
    code: "RJ",
    name: "Rajasthan",
    shortName: "Rajasthan",
  },

  SK: {
    code: "SK",
    name: "Sikkim",
    shortName: "Sikkim",
  },

  TN: {
    code: "TN",
    name: "Tamil Nadu",
    shortName: "Tamil Nadu",
  },

  TS: {
    code: "TS",
    name: "Telangana",
    shortName: "Telangana",
  },

  TR: {
    code: "TR",
    name: "Tripura",
    shortName: "Tripura",
  },

  UP: {
    code: "UP",
    name: "Uttar Pradesh",
    shortName: "U.P.",
  },

  UK: {
    code: "UK",
    name: "Uttarakhand",
    shortName: "U.K.",
  },

  WB: {
    code: "WB",
    name: "West Bengal",
    shortName: "W.B.",
  },

  /* =========================
     UNION TERRITORIES
  ========================= */

  AN: {
    code: "AN",
    name: "Andaman and Nicobar Islands",
    shortName: "A.N.",
  },

  CH: {
    code: "CH",
    name: "Chandigarh",
    shortName: "Chandigarh",
  },

  DN: {
    code: "DN",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    shortName: "D.N.",
  },

  DL: {
    code: "DL",
    name: "Delhi",
    shortName: "Delhi",
  },

  JK: {
    code: "JK",
    name: "Jammu and Kashmir",
    shortName: "J&K",
  },

  LA: {
    code: "LA",
    name: "Ladakh",
    shortName: "Ladakh",
  },

  LD: {
    code: "LD",
    name: "Lakshadweep",
    shortName: "Lakshadweep",
  },

  PY: {
    code: "PY",
    name: "Puducherry",
    shortName: "Puducherry",
  },
};

/* =========================================================
   LOCATION ALIASES
========================================================= */

const LOCATION_TO_STATE = {
  /* =========================
     ANDHRA PRADESH
  ========================= */

  "andhra pradesh": "AP",
  andhra: "AP",
  vijayawada: "AP",
  visakhapatnam: "AP",
  vizag: "AP",
  tirupati: "AP",
  amaravati: "AP",

  /* =========================
     ARUNACHAL PRADESH
  ========================= */

  "arunachal pradesh": "AR",
  itanagar: "AR",

  /* =========================
     ASSAM
  ========================= */

  assam: "AS",
  namrup: "AS",
  guwahati: "AS",
  dibrugarh: "AS",
  silchar: "AS",

  /* =========================
     BIHAR
  ========================= */

  bihar: "BR",
  patna: "BR",
  barauni: "BR",
  begusarai: "BR",
  darbhanga: "BR",
  saharsa: "BR",
  sitamarhi: "BR",
  muzaffarpur: "BR",
  gaya: "BR",
  hajipur: "BR",
  "east champaran": "BR",
  "west champaran": "BR",
  taregna: "BR",

  /* =========================
     CHHATTISGARH
  ========================= */

  chhattisgarh: "CG",
  "c.g.": "CG",
  "c.g": "CG",
  raigarh: "CG",
  bilaspur: "CG",
  akaltara: "CG",
  raipur: "CG",
  "new raipur": "CG",
  korba: "CG",
  bhilai: "CG",
  durg: "CG",
  talaipalli: "CG",
  mahanadi: "CG",

  /* =========================
     GOA
  ========================= */

  goa: "GA",
  panaji: "GA",
  panjim: "GA",

  /* =========================
     GUJARAT
  ========================= */

  gujarat: "GJ",
  gujrat: "GJ",
  ahmedabad: "GJ",
  surat: "GJ",
  vadodara: "GJ",
  baroda: "GJ",
  gandhinagar: "GJ",
  rajkot: "GJ",
  jamnagar: "GJ",
  nandesari: "GJ",
  dholera: "GJ",
  bharuch: "GJ",
  ankleshwar: "GJ",
  ambaji: "GJ",

  /* =========================
     HARYANA
  ========================= */

  haryana: "HR",
  gurgaon: "HR",
  gurugram: "HR",
  faridabad: "HR",
  panipat: "HR",
  sonipat: "HR",
  hisar: "HR",
  rohtak: "HR",

  /* =========================
     HIMACHAL PRADESH
  ========================= */

  "himachal pradesh": "HP",
  shimla: "HP",
  solan: "HP",
  mandi: "HP",
  dharamshala: "HP",

  /* =========================
     JHARKHAND
  ========================= */

  jharkhand: "JH",
  ranchi: "JH",
  jamshedpur: "JH",
  dhanbad: "JH",
  bokaro: "JH",

  /* =========================
     KARNATAKA
  ========================= */

  karnataka: "KA",
  bengaluru: "KA",
  bangalore: "KA",
  mysore: "KA",
  mysuru: "KA",
  mangalore: "KA",
  hubli: "KA",
  hubballi: "KA",

  /* =========================
     KERALA
  ========================= */

  kerala: "KL",
  kochi: "KL",
  ernakulam: "KL",
  trivandrum: "KL",
  thiruvananthapuram: "KL",
  kozhikode: "KL",

  /* =========================
     MADHYA PRADESH
  ========================= */

  "madhya pradesh": "MP",
  "m.p.": "MP",
  "m.p": "MP",
  mp: "MP",
  rewa: "MP",
  sidhi: "MP",
  bhopal: "MP",
  indore: "MP",
  jabalpur: "MP",
  gwalior: "MP",
  ujjain: "MP",
  vindhyachal: "MP",
  singrauli: "MP",
  bina: "MP",
  pichor: "MP",
  pichhore: "MP",

  /* =========================
     MAHARASHTRA
  ========================= */

  maharashtra: "MH",
  mumbai: "MH",
  bombay: "MH",
  pune: "MH",
  nagpur: "MH",
  nashik: "MH",
  aurangabad: "MH",
  chhatrapati: "MH",
  thane: "MH",
  navi: "MH",

  /* =========================
     MANIPUR
  ========================= */

  manipur: "MN",
  imphal: "MN",

  /* =========================
     MEGHALAYA
  ========================= */

  meghalaya: "ML",
  shillong: "ML",

  /* =========================
     MIZORAM
  ========================= */

  mizoram: "MZ",
  aizawl: "MZ",

  /* =========================
     NAGALAND
  ========================= */

  nagaland: "NL",
  kohima: "NL",
  dimapur: "NL",

  /* =========================
     ODISHA
  ========================= */

  odisha: "OD",
  orissa: "OD",
  bhubaneswar: "OD",
  cuttack: "OD",
  rourkela: "OD",
  puri: "OD",

  /* =========================
     PUNJAB
  ========================= */

  punjab: "PB",
  chandigarh_punjab: "PB",
  amritsar: "PB",
  ludhiana: "PB",
  jalandhar: "PB",
  patiala: "PB",

  /* =========================
     RAJASTHAN
  ========================= */

  rajasthan: "RJ",
  jaipur: "RJ",
  jaisalmer: "RJ",
  bikaner: "RJ",
  ajmer: "RJ",
  abu: "RJ",
  "abu road": "RJ",
  "mount abu": "RJ",

  /* =========================
     SIKKIM
  ========================= */

  sikkim: "SK",
  gangtok: "SK",

  /* =========================
     TAMIL NADU
  ========================= */

  "tamil nadu": "TN",
  tamilnadu: "TN",
  chennai: "TN",
  coimbatore: "TN",
  madurai: "TN",
  salem: "TN",
  tiruchirappalli: "TN",

  /* =========================
     TELANGANA
  ========================= */

  telangana: "TS",
  hyderabad: "TS",
  warangal: "TS",
  secunderabad: "TS",

  /* =========================
     TRIPURA
  ========================= */

  tripura: "TR",
  agartala: "TR",

  /* =========================
     UTTAR PRADESH
  ========================= */

  "uttar pradesh": "UP",
  "u.p.": "UP",
  "u.p": "UP",
  lucknow: "UP",
  kanpur: "UP",
  varanasi: "UP",
  noida: "UP",
  ghaziabad: "UP",
  agra: "UP",
  prayagraj: "UP",
  allahabad: "UP",
  meerut: "UP",

  /* =========================
     UTTARAKHAND
  ========================= */

  uttarakhand: "UK",
  uttaranchal: "UK",
  dehradun: "UK",
  haridwar: "UK",
  haldwani: "UK",
  rudrapur: "UK",

  /* =========================
     WEST BENGAL
  ========================= */

  "west bengal": "WB",
  kolkata: "WB",
  calcutta: "WB",
  howrah: "WB",
  durgapur: "WB",
  siliguri: "WB",

  /* =========================
     UNION TERRITORIES
  ========================= */

  chandigarh: "CH",

  delhi: "DL",
  "new delhi": "DL",
  "new delhi, india": "DL",

  "jammu and kashmir": "JK",
  "jammu & kashmir": "JK",
  jammu: "JK",
  srinagar: "JK",

  ladakh: "LA",
  leh: "LA",
  kargil: "LA",

  puducherry: "PY",
  pondicherry: "PY",

  "andaman and nicobar islands": "AN",
  portblair: "AN",
  "port blair": "AN",

  lakshadweep: "LD",
  kavaratti: "LD",

  "dadra and nagar haveli": "DN",
  "daman and diu": "DN",
  daman: "DN",
  diu: "DN",
  silvassa: "DN",
};

/* =========================================================
   STATE CODE RESOLVER
========================================================= */

function getStateCode(location = "") {
  if (!location) return null;

  const value = String(location)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  /* -----------------------------------------
     Explicit state abbreviations
  ----------------------------------------- */

  if (/\(c\.?g\.?\)/i.test(value)) {
    return "CG";
  }

  if (/\(m\.?p\.?\)/i.test(value)) {
    return "MP";
  }

  if (/\(rj\)/i.test(value)) {
    return "RJ";
  }

  if (/\(hr\)/i.test(value)) {
    return "HR";
  }

  if (/\(gj\)/i.test(value)) {
    return "GJ";
  }

  if (/\(br\)/i.test(value)) {
    return "BR";
  }

  if (/\(up\)/i.test(value)) {
    return "UP";
  }

  /* -----------------------------------------
     Explicit state words
  ----------------------------------------- */

  if (
    value.includes("chhattisgarh") ||
    value.includes("c.g.") ||
    value.includes("c.g")
  ) {
    return "CG";
  }

  if (
    value.includes("madhya pradesh") ||
    value.includes("(mp)") ||
    value.includes("(m.p")
  ) {
    return "MP";
  }

  if (
    value.includes("rajasthan") ||
    value.includes("(rj)")
  ) {
    return "RJ";
  }

  if (
    value.includes("gujarat") ||
    value.includes("gujrat")
  ) {
    return "GJ";
  }

  if (
    value.includes("bihar") ||
    value.includes("patna") ||
    value.includes("barauni") ||
    value.includes("begusarai")
  ) {
    return "BR";
  }

  /* -----------------------------------------
     Exact alias
  ----------------------------------------- */

  if (LOCATION_TO_STATE[value]) {
    return LOCATION_TO_STATE[value];
  }

  /* -----------------------------------------
     Complete state / UT names
  ----------------------------------------- */

  for (const [stateCode, meta] of Object.entries(
    STATE_META
  )) {
    const stateName = meta.name.toLowerCase();

    if (value.includes(stateName)) {
      return stateCode;
    }
  }

  /* -----------------------------------------
     Known location aliases inside longer
     project-location strings
  ----------------------------------------- */

  const aliases = Object.entries(
    LOCATION_TO_STATE
  ).sort(
    ([a], [b]) => b.length - a.length
  );

  for (const [alias, stateCode] of aliases) {
    if (value.includes(alias)) {
      return stateCode;
    }
  }

  return null;
}

/* =========================================================
   MAP VALUE → STATE CODE
========================================================= */

function getStateCodeFromMapValue(value) {
  if (!value) return null;

  const normalized = String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  /* -----------------------------------------
     Direct state code
  ----------------------------------------- */

  const directCode =
    normalized.toUpperCase();

  if (STATE_META[directCode]) {
    return directCode;
  }

  /* -----------------------------------------
     Exact alias
  ----------------------------------------- */

  if (LOCATION_TO_STATE[normalized]) {
    return LOCATION_TO_STATE[normalized];
  }

  /* -----------------------------------------
     Full state / UT names
  ----------------------------------------- */

  for (const [stateCode, meta] of Object.entries(
    STATE_META
  )) {
    if (
      normalized ===
        meta.name.toLowerCase() ||
      normalized ===
        meta.shortName.toLowerCase()
    ) {
      return stateCode;
    }
  }

  /* -----------------------------------------
     Map values containing state names
  ----------------------------------------- */

  for (const [stateCode, meta] of Object.entries(
    STATE_META
  )) {
    if (
      normalized.includes(
        meta.name.toLowerCase()
      )
    ) {
      return stateCode;
    }
  }

  return null;
}

/* =========================================================
   BUILD PROJECT GROUPS
========================================================= */

function buildProjectGroups(projects) {
  const groups = {};

  Object.keys(STATE_META).forEach(
    (stateCode) => {
      groups[stateCode] = [];
    }
  );

  const international = [];

  /*
   * Projects whose location explicitly says
   * India but cannot yet be mapped to a state.
   *
   * We keep these separate rather than incorrectly
   * displaying them as international.
   */

  const unmappedIndia = [];

  projects.forEach((project) => {
    const stateCode = getStateCode(
      project.location
    );

    if (
      stateCode &&
      groups[stateCode]
    ) {
      groups[stateCode].push(project);
      return;
    }

    const location = String(
      project.location || ""
    )
      .trim()
      .toLowerCase();

    if (
      location === "india" ||
      location.includes(", india") ||
      location.endsWith(" india")
    ) {
      unmappedIndia.push(project);
      return;
    }

    international.push(project);
  });

  return {
    states: groups,
    international,
    unmappedIndia,
  };
}

/* =========================================================
   PROJECT LIST ITEM
========================================================= */

function ProjectListItem({
  project,
  index,
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex min-w-0 items-start gap-3 border-b border-white/10 py-5 transition-colors duration-300 hover:border-orange-400/50 sm:gap-4"
    >
      <span className="shrink-0 pt-1 font-mono text-[10px] tracking-[0.2em] text-orange-400">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <h4 className="wrap-break-word text-sm font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-orange-300">
          {project.title}
        </h4>

        {project.location && (
          <div className="mt-2 flex min-w-0 items-start gap-2 text-xs leading-5 text-blue-200/60">
            <MapPin
              size={12}
              className="mt-1 shrink-0"
            />

            <span className="min-w-0 wrap-break-word">
              {project.location}
            </span>
          </div>
        )}
      </div>

      <ArrowUpRight
        size={16}
        className="mt-1 shrink-0 text-blue-200/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-300"
      />
    </Link>
  );
}

/* =========================================================
   STATE INDEX ITEM
========================================================= */

function StateIndexItem({
  state,
  index,
  projectCount,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full border-b border-white/10 py-5 text-left transition-all duration-300 last:border-b-0 ${
        active
          ? "pl-2 sm:pl-3"
          : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <span
          className={`shrink-0 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
            active
              ? "text-orange-400"
              : "text-blue-200/40 group-hover:text-orange-300"
          }`}
        >
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </span>

        <div className="min-w-0 flex-1">
          <div
            className={`truncate text-sm font-semibold transition-colors duration-300 ${
              active
                ? "text-white"
                : "text-blue-100 group-hover:text-white"
            }`}
          >
            {state.name}
          </div>

          <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-blue-200/40">
            {projectCount}{" "}
            {projectCount === 1
              ? "Project"
              : "Projects"}
          </div>
        </div>

        <div
          className={`flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full border px-2 font-mono text-xs transition-all duration-300 ${
            active
              ? "border-orange-400 bg-orange-400 text-[#071522]"
              : "border-white/15 bg-white/3 text-blue-100 group-hover:border-orange-400/50"
          }`}
        >
          {projectCount}
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   SELECTED STATE
========================================================= */

function SelectedStateCard({
  selectedMeta,
  selectedProjects,
  effectiveSelectedState,
}) {
  return (
    <div className="border border-white/10 bg-[#0a2033]">
      <div className="border-b border-white/10 px-4 py-5 sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-orange-400">
              Selected Region
            </div>

            <h3 className="mt-2 truncate text-lg font-semibold text-white sm:text-xl">
              {selectedMeta?.name ||
                "No region selected"}
            </h3>
          </div>

          <div className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 px-3 font-mono text-sm font-semibold text-[#071522]">
            {selectedProjects.length}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={
              effectiveSelectedState ||
              "none"
            }
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {selectedProjects.length >
            0 ? (
              selectedProjects.map(
                (
                  project,
                  index
                ) => (
                  <ProjectListItem
                    key={
                      project.id ||
                      project.slug ||
                      index
                    }
                    project={
                      project
                    }
                    index={
                      index
                    }
                  />
                )
              )
            ) : (
              <div className="py-10 text-sm text-blue-100/50">
                No projects currently
                recorded for this
                region.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT FOOTPRINT
========================================================= */

export default function ProjectFootprint({
  projects = [],
}) {
  /*
   * Gujarat remains the preferred initial state.
   *
   * If Gujarat has no projects, effectiveSelectedState
   * automatically falls back to the first active region.
   */

  const [selectedState, setSelectedState] =
    useState("GJ");

  /* =======================================================
     PROJECT GROUPING
  ====================================================== */

  const {
    states,
    international,
    unmappedIndia,
  } = useMemo(
    () =>
      buildProjectGroups(projects),
    [projects]
  );

  /* =======================================================
     ACTIVE STATES
  ====================================================== */

  const activeStates = useMemo(
    () =>
      Object.keys(STATE_META).filter(
        (stateCode) =>
          states[stateCode]?.length > 0
      ),
    [states]
  );

  /* =======================================================
     SAFE SELECTED STATE
  ====================================================== */

  const effectiveSelectedState =
    selectedState &&
    activeStates.includes(
      selectedState
    )
      ? selectedState
      : activeStates[0] || null;

  const selectedProjects =
    effectiveSelectedState
      ? states[
          effectiveSelectedState
        ] || []
      : [];

  const selectedMeta =
    effectiveSelectedState
      ? STATE_META[
          effectiveSelectedState
        ]
      : null;

  /* =======================================================
     STATISTICS
  ====================================================== */

  const indiaProjects =
    Object.values(states).reduce(
      (total, list) =>
        total + list.length,
      0
    ) + unmappedIndia.length;

  const activeStateCount =
    activeStates.length;

  /* =======================================================
     MAP SELECT
  ====================================================== */

  const handleMapSelect = (value) => {
    const stateCode =
      getStateCodeFromMapValue(
        value
      );

    if (!stateCode) return;

    if (
      states[stateCode]?.length > 0
    ) {
      setSelectedState(
        stateCode
      );
    }
  };

  return (
    <section
      id="project-footprint"
      className="relative overflow-hidden bg-[#071522] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* =====================================================
          TECHNICAL BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(125,170,210,0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(125,170,210,0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-375 px-4 sm:px-6 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-orange-400">
              01
            </span>

            <span className="h-px w-8 bg-orange-400/60 sm:w-12" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-blue-200/50 sm:text-[10px] sm:tracking-[0.28em]">
              Project Footprint
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Where SSES
            <br />
            <span className="text-blue-200/60">
              has delivered.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/65 sm:mt-6 sm:text-base sm:leading-8">
            A growing project footprint across
            infrastructure, industrial, railway,
            energy and engineering assignments
            throughout India and beyond.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FOOTPRINT AREA
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          {/* ===================================================
              LEFT COLUMN — MAP + SELECTED REGION
          ==================================================== */}

          <div className="min-w-0">
            {/* =================================================
                MAP
            ================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="relative min-w-0 overflow-hidden border border-white/10 bg-[#06111c]"
            >
              {/* Map header */}

              <div className="absolute left-4 top-4 z-20 flex items-center gap-3 sm:left-5 sm:top-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 sm:h-9 sm:w-9">
                  <Globe2
                    size={15}
                    className="text-orange-400"
                  />
                </div>

                <div>
                  <div className="text-[8px] uppercase tracking-[0.22em] text-blue-200/40 sm:text-[9px]">
                    India
                  </div>

                  <div className="mt-1 text-[11px] font-medium text-blue-100/80 sm:text-xs">
                    Project locations
                  </div>
                </div>
              </div>

              {/* =================================================
                  COMPACT RESPONSIVE MAP CONTAINER
              ================================================== */}

              <div
                className="
                  flex
                  h-95
                  min-w-0
                  items-center
                  justify-center
                  overflow-hidden
                  px-3
                  pb-8
                  pt-16

                  sm:h-107.5
                  sm:px-5
                  sm:pb-8
                  sm:pt-18

                  lg:h-105
                  lg:px-8
                  lg:pb-10
                  lg:pt-18
                "
              >
                <div
                  className="
                    relative
                    flex
                    max-w-full
                    items-center
                    justify-center
                  "
                >
                  <div className="flex w-full items-center justify-center">
                    <India
                      type="select-single"
                      size={420}
                      mapColor="#10283B"
                      strokeColor="#29465B"
                      strokeWidth={1}
                      hoverColor="#1D4863"
                      selectColor="#F28C28"
                      hints={true}
                      onSelect={handleMapSelect}
                      className="block max-w-full"
                    />
                  </div>

                  {/* Active-state indicator */}

                  <div className="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400 sm:h-2 sm:w-2" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-blue-100/40 sm:text-[8px]">
                      Tap a state
                    </span>
                  </div>
                </div>
              </div>

              {/* Map corner data */}

              <div className="absolute bottom-4 right-5 z-20 hidden text-right sm:block">
                <div className="font-mono text-2xl font-semibold text-white lg:text-3xl">
                  {indiaProjects}
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-blue-200/40 lg:text-[9px]">
                  India projects
                </div>
              </div>
            </motion.div>

            {/* =================================================
                SELECTED STATE
                Moved directly below the map.
                Uses the full width of the map column.
            ================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: 0.05,
              }}
              className="mt-5"
            >
              <SelectedStateCard
                selectedMeta={
                  selectedMeta
                }
                selectedProjects={
                  selectedProjects
                }
                effectiveSelectedState={
                  effectiveSelectedState
                }
              />
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT COLUMN — INDEX
          ==================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: 0.1,
            }}
            className="min-w-0"
          >
            {/* =================================================
                STATE INDEX
            ================================================== */}

            <div className="border border-white/10 bg-[#06111c]">
              <div className="border-b border-white/10 px-4 py-5 sm:px-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-orange-400">
                      Location Index
                    </div>

                    <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                      Indian project clusters
                    </h3>
                  </div>

                  <Navigation
                    size={17}
                    className="shrink-0 text-blue-200/30"
                  />
                </div>
              </div>

              <div className="px-4 sm:px-5">
                {activeStates.length > 0 ? (
                  activeStates.map(
                    (
                      stateCode,
                      index
                    ) => {
                      const meta =
                        STATE_META[
                          stateCode
                        ];

                      return (
                        <StateIndexItem
                          key={
                            stateCode
                          }
                          state={meta}
                          index={
                            index
                          }
                          projectCount={
                            states[
                              stateCode
                            ]?.length ||
                            0
                          }
                          active={
                            effectiveSelectedState ===
                            stateCode
                          }
                          onClick={() =>
                            setSelectedState(
                              stateCode
                            )
                          }
                        />
                      );
                    }
                  )
                ) : (
                  <div className="py-10 text-sm text-blue-100/50">
                    No Indian project
                    locations currently
                    recorded.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-5 grid border border-white/10 bg-[#06111c] sm:mt-8 sm:grid-cols-3"
        >
          {/* India projects */}

          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="font-mono text-3xl font-semibold text-white sm:text-4xl">
              {indiaProjects}
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-blue-200/40 sm:text-[10px] sm:tracking-[0.2em]">
              Projects across India
            </div>
          </div>

          {/* Active states */}

          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="font-mono text-3xl font-semibold text-white sm:text-4xl">
              {activeStateCount}
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-blue-200/40 sm:text-[10px] sm:tracking-[0.2em]">
              Active states / UTs
            </div>
          </div>

          {/* International */}

          <div className="p-5 sm:p-6">
            <div className="font-mono text-3xl font-semibold text-white sm:text-4xl">
              {international.length}
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-blue-200/40 sm:text-[10px] sm:tracking-[0.2em]">
              International projects
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            INTERNATIONAL
        ====================================================== */}

        {international.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-14 sm:mt-18 lg:mt-20"
          >
            <div className="mb-7 flex items-end justify-between gap-6 sm:mb-8">
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-orange-400">
                    02
                  </span>

                  <span className="h-px w-8 bg-orange-400/60 sm:w-12" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-blue-200/40 sm:text-[10px] sm:tracking-[0.25em]">
                    International
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Beyond India.
                </h3>
              </div>

              <Globe2
                size={28}
                className="hidden shrink-0 text-blue-200/20 sm:block"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {international.map(
                (
                  project,
                  index
                ) => (
                  <ProjectListItem
                    key={
                      project.id ||
                      project.slug ||
                      index
                    }
                    project={
                      project
                    }
                    index={
                      index
                    }
                  />
                )
              )}
            </div>
          </motion.div>
        )}

        {/* =====================================================
            UNMAPPED INDIA PROJECTS
        ====================================================== */}

        {unmappedIndia.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-12 sm:mt-16"
          >
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-orange-400">
                  03
                </span>

                <span className="h-px w-8 bg-orange-400/60 sm:w-12" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-blue-200/40 sm:text-[10px]">
                  India
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Location to be mapped.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100/50">
                These projects are confirmed as
                Indian assignments, but their
                specific state is not currently
                defined in the project data.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {unmappedIndia.map(
                (
                  project,
                  index
                ) => (
                  <ProjectListItem
                    key={
                      project.id ||
                      project.slug ||
                      index
                    }
                    project={
                      project
                    }
                    index={
                      index
                    }
                  />
                )
              )}
            </div>
          </motion.div>
        )}

        {/* =====================================================
            BOTTOM STATE SUMMARY
        ====================================================== */}

        {activeStates.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-18 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5"
          >
            {activeStates.map(
              (stateCode) => {
                const meta =
                  STATE_META[
                    stateCode
                  ];

                const count =
                  states[
                    stateCode
                  ]?.length || 0;

                return (
                  <button
                    key={
                      stateCode
                    }
                    type="button"
                    onClick={() =>
                      setSelectedState(
                        stateCode
                      )
                    }
                    className={`group min-w-0 bg-[#071522] p-5 text-left transition-colors duration-300 hover:bg-[#0a2033] sm:p-6 ${
                      effectiveSelectedState ===
                      stateCode
                        ? "bg-[#0a2033]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-blue-200/30">
                        {stateCode}
                      </span>

                      <span
                        className={`font-mono text-lg ${
                          effectiveSelectedState ===
                          stateCode
                            ? "text-orange-400"
                            : "text-white"
                        }`}
                      >
                        {count}
                      </span>
                    </div>

                    <div className="mt-5 truncate text-sm font-medium text-blue-100/70 transition-colors group-hover:text-white">
                      {meta.name}
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-blue-200/30">
                      {count === 1
                        ? "Project"
                        : "Projects"}
                    </div>
                  </button>
                );
              }
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}