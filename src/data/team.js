import {
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| TEAM DATA
|--------------------------------------------------------------------------
|
| Images:
| Place team images inside:
| public/images/team/
|
| PDFs:
| Place portfolio PDFs inside:
| public/documents/
|
| Current PDF filenames expected:
|
| vm-pandey.pdf
| sanjay-sinha.pdf
| sunil-gupta.pdf
|
*/


/*
|--------------------------------------------------------------------------
| FOUNDER
|--------------------------------------------------------------------------
*/

export const founder = {
  name: "Late U.S. Pandey",
  role: "Founder",
  initials: "USP",

  image: "/images/team/USP.png",

  portfolioPdf: null,

  education:
    "Alumnus of Birsa Institute of Technology (B.I.T.), Sindri, with expertise in Electrical Engineering and a B.Sc. (Electrical) completed in 1968.",

  description:
    "Mr. U.S. Pandey was groomed as a professional through extensive exposure to public services and State Government organizations. Throughout a career spanning more than 35 years, he was recognized for his leadership, consistency and ability to successfully handle diverse assignments.",

  legacy:
    'Inspired by Dr. A.P.J. Kalam’s thought, “All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents,” he laid the foundation for his successors and others toward self-dependency while contributing tremendous expertise through associate consultancy in Safety, Health, Environment, Fire Safety and Engineering sectors.',
};


/*
|--------------------------------------------------------------------------
| DIRECTORS
|--------------------------------------------------------------------------
*/

export const directors = [
  {
    name: 'Kumar Kundan "Pandey"',
    role: "Director",
    initials: "KKP",

    image: null,

    portfolioPdf: null,

    icon: ShieldCheck,

    experience:
      "Dynamic professional with extensive experience in Safety Management Systems and Project Management Representative (HSE) responsibilities.",

    description:
      "Experienced in establishing and implementing effective Health, Safety and Environment management systems across multi-disciplinary projects in Construction, Oil & Gas, Railways, Power Generation, Transmission and Distribution, and other core industries.",

    organizations:
      "Professional experience includes work with organizations and projects associated with TCL, Simplex Infrastructure Ltd., ESSAR Projects, KSK Power, JMC Projects (I) Ltd., TRF, NTPC, IOCL, Indian Railway and HRRL.",

    qualifications:
      "Mechanical Engineering graduate and Lead Auditor with certifications associated with ISO 14000, OHSAS 18001 and ISO 45001. Experienced in EHS audits across national and international projects and associated with approved safety auditing and consultancy assignments for organizations including Indian Railway, HITES, EIL and IOCL.",
  },

  {
    name: "S.K. Upadhyay",
    role: "Director",
    initials: "SKU",

    image: null,

    portfolioPdf: null,

    icon: Wrench,

    experience:
      "Over 15 years of professional experience.",

    description:
      "Electrical Engineer from Gujarat University with expertise in technical and industrial systems.",

    organizations:
      "Certified SCADA and PLC Programmer and trained in several standards including IEC, ANSI, GOST, OHSAS 18001:2007 and ISO 9001:2008.",

    qualifications:
      "Expertise includes Power, Oil & Gas, Fertilizers, Electrical Panel Designing and Installation.",
  },
];


/*
|--------------------------------------------------------------------------
| MEMBERS & HEADS
|--------------------------------------------------------------------------
*/

export const members = [
  {
    name: "S.K. Pandey",
    role: "Member",
    initials: "SKP",

    image: null,

    portfolioPdf: null,

    icon: ShieldCheck,

    experience:
      "Over 26 years of experience.",

    description:
      "B.Sc. with Diploma in Industrial Safety Management from Patna University and Lead Auditor ISO 45001.",

    organizations:
      "Possesses senior management experience associated with organizations including Tata Motors and JSPL.",

    qualifications:
      "Expertise in professional safety training for engineering industries, Automobile, Forge Foundry, Heavy Engineering, and Brown-field & Green-field Projects in EHS.",
  },

  {
    name: "V.M. Pandey",
    role: "Technical Head",
    initials: "VMP",

    image: null,

    portfolioPdf: "/documents/team/vm-pandey.pdf",

    icon: Wrench,

    experience:
      "Over 39 years of experience.",

    description:
      "B.Sc. Engineering (Mechanical) from BIT, Sindri, with extensive experience in mechanical design and engineering of various mechanical equipment.",

    organizations:
      "Played a vital role in engineering organizations from grassroots technical positions through senior leadership roles, including Engineer to Vice President positions.",

    qualifications:
      "Professional experience includes PROJECTS & DEVELOPMENT INDIA LTD. (PDIL), Sindri; ENGINEERS INDIA LIMITED (EIL); WORLEYPARSONS Indonesia/Korea; PETROFAC International Limited, Sharjah; SAMSUNG Engineering India Limited, Noida; and NUBERG Engineering Limited, Noida.",
  },

  {
    name: "S. K. Sinha",
    role: "Legal & Training Head (Industrial Safety)",
    initials: "SKS",

    image: null,

    portfolioPdf: "/documents/team/sanjay-sinha.pdf",

    icon: GraduationCap,

    experience:
      "Over 36 years of experience in establishing and implementing Industrial Safety Management Systems and Fire Safety Control.",

    description:
      "Possesses senior management experience across industries including Steel Plants, Power Plants, Cement Plants and Chemical Plants.",

    organizations:
      "Expertise includes National and International level EHS Training, Electrical Safety, BBS, EHS Audits, Disaster Plans, Risk Analysis and matters involving construction compliance, Factories Acts & Rules, BOCW Acts & Rules and Disaster Management.",

    qualifications:
      "B.E. (Mechanical), B.Sc., Diploma in Industrial Safety from Patna University, NEBOSH IGC, Lead Auditor BS OHSAS 18001 and ISO 14000.",
  },

  {
    name: "S.K. Gupta",
    role: "Head (Fire & Safety)",
    initials: "SKG",

    image: null,

    portfolioPdf: "/documents/team/sunil-gupta.pdf",

    icon: ShieldCheck,

    experience:
      "38 years of experience in Fire Safety Control.",

    description:
      "Extensive professional experience associated with State Fire Department operations and Fire Safety Management.",

    organizations:
      "Expertise includes Fire Safety Training, Fire Safety Audits as per Building By-laws and Chemical Fire Risk Assessment.",

    qualifications:
      "B.Sc. (B.U.), M.Sc. (Chemistry), L.L.B., Diploma in Fire Engineering, NFSC Nagpur, Advance Diploma in Fire Engineering (D.O.) NFSC Nagpur, Grade-I Fire Engineering, I.F.E. India, Member NAFO India and Fire Safety Auditor.",
  },
];


/*
|--------------------------------------------------------------------------
| KEY PERSONNEL
|--------------------------------------------------------------------------
*/

export const keyPersonnel = [
  {
    name: "K.C. Yadav",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "Over 39 years in establishing and implementing Industrial Safety Management Systems and Fire Safety Control.",

    description:
      "Possesses senior management experience associated with NTPC, KSK Power, DMRC and other major project environments. Has conducted audits in Japan, England, Holland, Singapore, Malaysia, Indonesia and India.",

    qualifications:
      "B.Tech., ADISM from CLI Mumbai, Lead Auditor ISO 45001 and Certified Auditor of NHPC by DGFASLI.",
  },

  {
    name: "A.K. Verma",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "24 years of experience in Safety Management Systems across Construction, Oil & Gas, Power, Onshore and Offshore work, Metro and O&M Power Projects.",

    description:
      "Professional experience across core industrial projects and multinational work environments.",

    qualifications:
      "M.Sc., B.Tech (Mechanical), Diploma in Industrial Safety Management from Patna University, Diploma in Environmental Management, ISOH, NEBOSH and Lead Auditor OHSAS 18001. Also trained in RSO (NG105).",
  },

  {
    name: "Rajiv Kumar",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "Over 20 years of experience in Safety Management Systems across Metro Rail Projects, Oil & Gas, Sea-bird Projects and other global project environments.",

    description:
      "Experienced in implementing safety management requirements across diverse infrastructure and industrial projects.",

    qualifications:
      "B.Sc. and Diploma in Civil Engineering, PG Diploma in Industrial Safety Management from Patna University, NEBOSH, Lead Auditor OHSAS 18001, Basic Life Support, First Aid and Scaffolding Inspector qualifications.",
  },

  {
    name: "Sanjay Singhal",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "35 years of experience in Safety Management Systems, including Scaffolding Designing and Training.",

    description:
      "Professional experience across Metro Projects, Oil & Gas, Power, Onshore and Offshore work and other core industries.",

    qualifications:
      "B.Tech (Electrical), Advanced Diploma in Industrial Safety, Scaffold Training Institute Texas, OSHA, IOSH, NEBOSH and Lead Auditor qualifications associated with ISO 9001, ISO 14001, OHSAS 18001 and ISO 45001 through IRCA.",
  },

  {
    name: "Manish Mishra",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "17 years of experience in Safety Management Systems across Metro Projects, Oil & Gas, Power, Onshore and Offshore work and other core industries.",

    description:
      "Experienced in supporting safety management requirements across complex industrial and infrastructure project environments.",

    qualifications:
      "M.Tech (Environmental Science), PG Diploma in Industrial Safety from Patna University, IOSH, Lead Auditor ISO 14001, OHSAS 18001 and ISO 45001, and IRA Certified Auditor.",
  },

  {
    name: "Md. Maijuddin",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "35 years of experience in Safety Management Systems across Metro Projects, Oil & Gas, Power and Onshore & Offshore work in several countries.",

    description:
      'Professional experience includes safely completing work associated with the project of the world’s tallest building, Burj Khalifa, Dubai.',

    qualifications:
      "B.Tech, Diploma in Industrial Safety Management from Patna University, OSHA, IOSH, NEBOSH and Lead Auditor qualifications associated with OHSAS 18001, ISO 14001 and ISO 45001 through IRCA.",
  },

  {
    name: "A.K. Sinha",

    image: null,

    portfolioPdf: null,

    icon: BriefcaseBusiness,

    experience:
      "Over 22 years of experience working on Railway Projects, Road Projects, Oil & Gas and other infrastructure environments.",

    description:
      "Professional experience includes assignments associated with organizations including AECOM, Welspun, IVRCL and DMRC.",

    qualifications:
      "B.Tech in Civil Engineering, PG Diploma in Industrial Safety Management and Post Management in Industrial Relations from Patna University, NEBOSH, Lead Auditor IMS, First Aid, Diploma in Environmental Science and Lead Auditor qualifications associated with ISO 9001, ISO 14001, OHSAS 18001 and ISO 45001.",
  },
];
