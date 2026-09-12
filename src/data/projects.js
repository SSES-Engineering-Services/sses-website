const projects = [
  // =========================================================
  // COMPLETED PROJECTS
  // =========================================================
  // Way to add documents to a project:
  // documents: [
  //   {
  //     title: "Project Profile",
  //     type: "PDF",
  //     file: "/documents/project-profile.pdf",
  //   },
  // ]

  // ======================= Way to write new projects ============================
  // {
  //   id: "hyderabad-project",
  //   slug: "hyderabad-project",
  //   title: "Hyderabad Infrastructure Project",
  //   client: "Example Client",
  //   location: "Hyderabad, Telangana",
  //   state: "Telangana",
  //   country: "India",
  //   status: "Ongoing",
  //   category: "Infrastructure",
  //   year: "Ongoing",
  //   image: "/images/projects/hyderabad-project.jpg",
  //   description: "...",
  //   overview: "...",
  //   scope: [],
  //   highlights: [],
  //   documents: [],
  //   gallery: [],
  // },

  {
    id: "assam-petrochemicals-mafp",
    slug: "assam-petrochemicals-mafp",
    title: "Assam Petrochemicals – MAFP Project",
    shortTitle: "Assam Petrochemicals – MAFP",
    client: "Assam Petrochemicals",
    location: "Namrup, Assam",
    state: "Assam",
    country: "India",
    status: "Completed",
    category: "Industrial",
    year: "Completed",
    image: "/images/projects/assam-petrochemicals-mafp.jpg",
    description:
      "Engineering and safety consultancy support for the MAFP Project at Assam Petrochemicals, Namrup.",
    overview:
      "SSES provided professional engineering, safety and project support services for the MAFP Project at Assam Petrochemicals in Namrup, Assam.",
    scope: [
      "Safety consultancy",
      "Engineering support",
      "Project coordination",
      "Industrial SHEF support",
    ],
    highlights: [
      "Industrial project environment",
      "Engineering and safety coordination",
      "Project-level SHEF support",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "iocl-barauni-refinery",
    slug: "iocl-barauni-refinery",
    title: "IOCL – Barauni Refinery",
    shortTitle: "IOCL – Barauni Refinery",
    client: "Indian Oil Corporation Limited",
    location: "Barauni, Bihar",
    state: "Bihar",
    country: "India",
    status: "Completed",
    category: "Oil & Gas",
    year: "Completed",
    image: "/images/projects/iocl-barauni-refinery.jpg",
    description:
      "Safety and engineering consultancy support for the IOCL Barauni Refinery project.",
    overview:
      "SSES supported engineering and SHEF requirements associated with the IOCL Barauni Refinery in Bihar.",
    scope: [
      "SHEF consultancy",
      "Engineering support",
      "Safety coordination",
      "Industrial project support",
    ],
    highlights: [
      "Refinery environment",
      "Industrial safety requirements",
      "Engineering coordination",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "mangol-refinery",
    slug: "mangol-refinery",
    title: "Mangol Refinery",
    shortTitle: "Mangol Refinery",
    client: "Mangol Refinery",
    location: "Mongolia",
    state: null,
    country: "Mongolia",
    status: "Completed",
    category: "Oil & Gas",
    year: "Completed",
    image: "/images/projects/mangol-refinery.jpg",
    description:
      "Engineering and safety consultancy support for the Mangol Refinery project in Mongolia.",
    overview:
      "SSES extended its engineering and safety consultancy capabilities internationally through support for the Mangol Refinery project in Mongolia.",
    scope: [
      "Engineering consultancy",
      "Safety consultancy",
      "Industrial SHEF support",
    ],
    highlights: [
      "International project",
      "Refinery environment",
      "Engineering and safety coordination",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "sud-chemie-vadodara",
    slug: "sud-chemie-vadodara",
    title: "Sud Chemie",
    shortTitle: "Sud Chemie",
    client: "Sud Chemie India Private Ltd.",
    location: "Nandesari, Vadodara, Gujarat",
    state: "Gujarat",
    country: "India",
    status: "Completed",
    category: "Industrial",
    year: "Completed",
    image: "/images/projects/sud-chemie-vadodara.jpg",
    description:
      "Training and maintenance support for Sud Chemie India Private Ltd. in Vadodara.",
    overview:
      "SSES provided training and maintenance support for Sud Chemie India Private Ltd. at Nandesari, Vadodara.",
    scope: [
      "Industrial training",
      "Maintenance support",
      "Safety consultancy",
      "Industrial SHEF support",
    ],
    highlights: [
      "Industrial facility",
      "Training support",
      "Maintenance services",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "stt-telemedia-jaipur",
    slug: "stt-telemedia-jaipur",
    title: "STT Telemedia Global Data Centre",
    shortTitle: "STT Telemedia Data Centre",
    client: "Crescon Projects & Services Pvt. Ltd. / CBRE (PMC)",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    country: "India",
    status: "Ongoing",
    category: "Building Project (IT)",
    year: "Ongoing",
    image: "/images/projects/stt-telemedia-jaipur.jpg",
    description:
      "Safety auditing support for the STT Telemedia Global Data Centre project in Jaipur.",
    overview:
      "SSES is providing safety auditing support for the STT Telemedia Global Data Centre project in Jaipur.",
    scope: [
      "Safety auditing",
      "Construction safety",
      "Project SHEF support",
      "Technical coordination",
    ],
    highlights: [
      "Global data centre",
      "IT infrastructure",
      "Safety auditing",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "rewa-sidhi-new-bg-line",
    slug: "rewa-sidhi-new-bg-line",
    title: "Rewa–Sidhi New BG Rail Line",
    shortTitle: "Rewa–Sidhi New BG Line",
    client: "Royal Infraconstru Ltd. / West Central Railway",
    location: "Rewa–Sidhi, Madhya Pradesh",
    state: "Madhya Pradesh",
    country: "India",
    status: "Completed",
    category: "Railways",
    year: "Completed",
    image: "/images/projects/rewa-sidhi.jpg",
    description:
      "Safety consultancy support for the construction of the Rewa–Sidhi New BG Rail Line.",
    overview:
      "SSES provided safety consultancy support for the Rewa–Sidhi New Broad Gauge Rail Line doubling project under West Central Railway.",
    scope: [
      "Railway safety consultancy",
      "Construction safety",
      "Site safety support",
      "Project coordination",
    ],
    highlights: [
      "Railway infrastructure",
      "New BG railway line",
      "West Central Railway",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "jaisalmer-junction",
    slug: "jaisalmer-junction",
    title: "JSM Railway Station Re-development Project",
    shortTitle: "Jaisalmer Junction",
    client: "SKT Jaisalmer / NWR Jodhpur Division",
    location: "Jaisalmer, Rajasthan",
    state: "Rajasthan",
    country: "India",
    status: "Completed",
    category: "Railways",
    year: "Completed",
    image: "/images/projects/jaisalmer-junction.jpg",
    description:
      "Safety consultancy and QMS audit support for the Jaisalmer Railway Station redevelopment project.",
    overview:
      "SSES provided safety consultancy and QMS audit support for the Jaisalmer Railway Station redevelopment project under North Western Railway.",
    scope: [
      "Safety consultancy",
      "QMS auditing",
      "Railway station redevelopment",
      "Construction safety",
    ],
    highlights: [
      "Railway station redevelopment",
      "North Western Railway",
      "Safety and QMS auditing",
    ],
    documents: [],
    gallery: [],
  },

  // =========================================================
  // ONGOING PROJECTS
  // =========================================================

  {
    id: "gandhinagar-jaipur",
    slug: "gandhinagar-jaipur",
    title: "GADJ Railway Station Re-development Project",
    shortTitle: "Gandhinagar Jaipur Junction",
    client: "JCC BIL JV, NWR, Jaipur Division",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "/images/projects/gandhinagar-jaipur.jpg",
    description:
      "Safety consultancy and quality auditing support for the GADJ Railway Station redevelopment project.",
    overview:
      "SSES is providing Safety Consultant and Quality Auditor support for the GADJ Railway Station Re-development Project under North Western Railway, Jaipur Division.",
    scope: [
      "Safety consultancy",
      "Quality auditing",
      "Railway station redevelopment",
      "Construction safety",
    ],
    highlights: [
      "Railway station redevelopment",
      "North Western Railway",
      "Safety and quality auditing",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "new-bhuj-junction",
    slug: "new-bhuj-junction",
    title: "New Bhuj Railway Station Re-development Project",
    shortTitle: "New Bhuj Junction",
    client: "SMCC Pvt. Ltd. / Western Railway, Ahmedabad Division",
    location: "Bhuj, Gujarat",
    state: "Gujarat",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "/images/projects/new-bhuj-junction.jpg",
    description:
      "Safety consultancy and quality auditing support for the New Bhuj Railway Station redevelopment project.",
    overview:
      "SSES is providing safety consultancy and quality auditing support for the New Bhuj Railway Station Re-development Project under Western Railway.",
    scope: [
      "Railway safety consultancy",
      "Quality auditing",
      "Construction safety",
      "Project SHEF support",
    ],
    highlights: [
      "Railway station redevelopment",
      "Western Railway",
      "Safety and quality auditing",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "ambaji-railway-station",
    slug: "ambaji-railway-station",
    title: "Taregna Hill–Ambaji–Abu Road New Line Project",
    shortTitle: "Taregna Hill–Ambaji–Abu Road",
    client: "VPRPL-CIPEL Ambaji JV, NWR, Ajmer Division",
    location: "Rajasthan",
    state: "Rajasthan",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "/images/projects/ambaji-railway-station.jpg",
    description:
      "Safety consultancy support for the Taregna Hill–Ambaji–Abu Road New Line Project.",
    overview:
      "SSES is providing safety consultancy support for the Taregna Hill–Ambaji–Abu Road New Line Project under North Western Railway, Ajmer Division.",
    scope: [
      "Railway safety consultancy",
      "New railway line support",
      "Construction safety",
      "SHEF consultancy",
    ],
    highlights: [
      "New railway line",
      "North Western Railway",
      "Railway safety consultancy",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "bikaner-junction",
    slug: "bikaner-junction",
    title: "Major Upgradation Work of Bikaner Railway Station",
    shortTitle: "Bikaner Junction",
    client: "VPRPL-KSIPL BKN JV, NWR, Bikaner Division",
    location: "Bikaner, Rajasthan",
    state: "Rajasthan",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "/images/projects/bikaner-junction.jpg",
    description:
      "Safety consultancy support for the major upgradation work of Bikaner Railway Station.",
    overview:
      "SSES is providing safety consultancy support for the major upgradation work of Bikaner Railway Station in the Bikaner Division of North Western Railway.",
    scope: [
      "Railway safety consultancy",
      "Station upgradation",
      "Construction safety",
      "SHEF management",
    ],
    highlights: [
      "Railway station upgradation",
      "North Western Railway",
      "Safety consultancy",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "sitamarhi-railway-station",
    slug: "sitamarhi-railway-station",
    title: "Major Upgradation Work of Sitamarhi Railway Station",
    shortTitle: "Sitamarhi Railway Station",
    client: "SIPL / Chaitanya (PMC), ECR",
    location: "Sitamarhi, Bihar",
    state: "Bihar",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "/images/projects/sitamarhi-railway-station.jpg",
    description:
      "Safety consultancy support for the major upgradation work of Sitamarhi Railway Station.",
    overview:
      "SSES is providing safety consultancy support from East Central Railway for the major upgradation work of Sitamarhi Railway Station.",
    scope: [
      "Railway safety consultancy",
      "Station upgradation",
      "Construction safety",
      "SHEF consultancy",
    ],
    highlights: [
      "Railway station upgradation",
      "East Central Railway",
      "Safety consultancy",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "surat-integrated-road",
    slug: "surat-integrated-road",
    title: "Elevated Road Project, MMTH, SITCO, Western Railway Surat",
    shortTitle: "MMTH / SITCO Surat",
    client: "GHV(I) Pvt. Ltd. / Chaitanya (PMC) / SITCO",
    location: "Surat, Gujarat",
    state: "Gujarat",
    country: "India",
    status: "Ongoing",
    category: "Road / Railway",
    year: "Ongoing",
    image: "/images/projects/surat-integrated-road.jpg",
    description:
      "EHS auditing support for the Elevated Road Project at MMTH, SITCO, Western Railway Surat.",
    overview:
      "SSES is providing EHS Auditor support from SITCO for the Elevated Road Project at MMTH, SITCO, Western Railway Surat.",
    scope: [
      "EHS auditing",
      "Road and railway safety",
      "Construction safety",
      "Technical coordination",
    ],
    highlights: [
      "Elevated road infrastructure",
      "Western Railway Surat",
      "EHS auditing",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "surat-mmth-qms-safety-audit",
    slug: "surat-mmth-qms-safety-audit",
    title: "Elevated Road Project, MMTH, SITCO, Surat",
    shortTitle: "MMTH / SITCO QMS & Safety",
    client: "GHV(I) Pvt. Ltd. / Chaitanya (PMC) / SITCO",
    location: "Surat, Gujarat",
    state: "Gujarat",
    country: "India",
    status: "Ongoing",
    category: "Road",
    year: "Ongoing",
    image: "/images/projects/surat-integrated-road.jpg",
    description:
      "QMS and safety auditing support for the Elevated Road Project at MMTH, SITCO, Surat.",
    overview:
      "SSES is providing QMS and Safety Auditor support from SITCO for the Elevated Road Project at MMTH, SITCO, Surat.",
    scope: [
      "QMS auditing",
      "Safety auditing",
      "Road infrastructure safety",
      "Technical coordination",
    ],
    highlights: [
      "Elevated road infrastructure",
      "QMS and safety auditing",
      "SITCO project",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "dholera-healthcare-facility",
    slug: "dholera-healthcare-facility",
    title: "Multispeciality Healthcare Facility",
    shortTitle: "Dholera Healthcare Facility",
    client: "SCC-PRP (JV) / HITES (PMC)",
    location: "Dholera, Gujarat",
    state: "Gujarat",
    country: "India",
    status: "Ongoing",
    category: "Institution Building",
    year: "Ongoing",
    image: "/images/projects/dholera-healthcare.jpg",
    description:
      "Drawing safety audit support for the multispeciality healthcare facility project in Dholera.",
    overview:
      "SSES is providing drawing safety audit support from HITES for the multispeciality healthcare facility project in Dholera, Gujarat.",
    scope: [
      "Drawing safety audit",
      "Construction safety",
      "Engineering coordination",
      "SHEF support",
    ],
    highlights: [
      "Institution building",
      "Healthcare infrastructure",
      "Drawing safety audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "bihar-pul-nirman-nigam",
    slug: "bihar-pul-nirman-nigam",
    title: "Construction of ROB Between Saharsa & Panchgachia Railway Station",
    shortTitle: "Saharsa–Panchgachia ROB",
    client: "Bihar Rajya Pul Nirman Nigam Limited",
    location: "Saharsa–Panchgachia, Bihar",
    state: "Bihar",
    country: "India",
    status: "Ongoing",
    category: "Rail Over Bridge",
    year: "Ongoing",
    image: "/images/projects/bihar-pul-nirman.jpg",
    description:
      "Drawing audit support for the construction of a rail over bridge between Saharsa and Panchgachia Railway Station.",
    overview:
      "SSES is providing drawing audit support for BRPNNL on the construction of the ROB between Saharsa and Panchgachia Railway Station in Bihar.",
    scope: [
      "Drawing audit",
      "Rail over bridge safety",
      "Infrastructure safety",
      "Technical coordination",
    ],
    highlights: [
      "Rail over bridge",
      "Bihar infrastructure",
      "Drawing audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "bsrdc-patna",
    slug: "bsrdc-patna",
    title: "Construction of Serpentine Road, Patna",
    shortTitle: "Serpentine Road Patna",
    client: "Nalanda Engicon Pvt. Ltd. (NEPL), Patna",
    location: "Patna, Bihar",
    state: "Bihar",
    country: "India",
    status: "Ongoing",
    category: "Road",
    year: "Ongoing",
    image: "/images/projects/bsrdc-patna.jpg",
    description:
      "Safety consultancy and drawing audit support for the construction of Serpentine Road, Patna.",
    overview:
      "SSES is providing Safety Consultant support through drawing audit services for the Serpentine Road project in Patna.",
    scope: [
      "Safety consultancy",
      "Drawing audit",
      "Road construction safety",
      "Technical coordination",
    ],
    highlights: [
      "Road infrastructure",
      "Patna project",
      "Drawing audit",
    ],
    documents: [],
    gallery: [],
  },

  // =========================================================
  // NEW PROJECTS FROM SSES COMPANY PROFILE
  // =========================================================

  {
    id: "ntpc-talaipalli-coal-handling-plant",
    slug: "ntpc-talaipalli-coal-handling-plant",
    title: "Coal Handling Plant of NTPC Mines Ltd., Talaipalli",
    shortTitle: "NTPC Talaipalli Coal Handling Plant",
    client: "Zuberi Engineering & Construction Pvt. Ltd., Jaipur",
    location: "Talaipalli, Raigarh, Chhattisgarh",
    state: "Chhattisgarh",
    country: "India",
    status: "Ongoing",
    category: "Mines",
    year: "Ongoing",
    image: "",
    description:
      "Project support for the Coal Handling Plant of NTPC Mines Ltd. at Talaipalli.",
    overview:
      "SSES is associated with the Coal Handling Plant of NTPC Mines Ltd., Talaipalli, Raigarh, Chhattisgarh.",
    scope: [
      "Safety consultancy",
      "Mining project support",
      "Construction safety",
      "Technical coordination",
    ],
    highlights: [
      "NTPC Mines Ltd.",
      "Talaipalli, Raigarh",
      "Coal handling infrastructure",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "darbhanga-railway-station-upgradation",
    slug: "darbhanga-railway-station-upgradation",
    title: "Major Upgradation Work of Darbhanga Railway Station",
    shortTitle: "Darbhanga Railway Station",
    client: "Skylark Infra Engineering Pvt. Ltd., Gurgaon",
    location: "Darbhanga, Bihar",
    state: "Bihar",
    country: "India",
    status: "Ongoing",
    category: "Railways",
    year: "Ongoing",
    image: "",
    description:
      "Safety consultancy support for the major upgradation work of Darbhanga Railway Station.",
    overview:
      "SSES is providing Safety Consultant support for the major upgradation work of Darbhanga Railway Station in the Samastipur Division of East Central Railway.",
    scope: [
      "Railway safety consultancy",
      "Station upgradation",
      "Construction safety",
      "Technical coordination",
    ],
    highlights: [
      "East Central Railway",
      "Railway station upgradation",
      "Safety consultancy",
    ],
    documents: [],
    gallery: [],
  },

  // =========================================================
  // ADDITIONAL COMPLETED PROJECTS FROM SSES COMPANY PROFILE
  // =========================================================

  {
    id: "iocl-barauni-br09-ehs-management",
    slug: "iocl-barauni-br09-ehs-management",
    title: "BR-09 Project, IOCL Barauni Refinery – EHS Management",
    shortTitle: "IOCL Barauni BR-09 – EHS Management",
    client: "Edifice Engineering / EIL / IOCL, Bihar",
    location: "Barauni, Bihar",
    state: "Bihar",
    country: "India",
    status: "Completed",
    category: "Petro Chemicals",
    year: "Completed",
    image: "/images/projects/iocl-barauni-refinery.jpg",
    description:
      "EHS management support for the BR-09 Project at IOCL Barauni Refinery.",
    overview:
      "SSES provided EHS management support for the BR-09 Project at IOCL Barauni Refinery.",
    scope: [
      "EHS management",
      "Safety consultancy",
      "Industrial SHEF support",
    ],
    highlights: [
      "IOCL Barauni Refinery",
      "Petrochemical project",
      "EHS management",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "iocl-barauni-br09-ehs-audit",
    slug: "iocl-barauni-br09-ehs-audit",
    title: "BR-09 Project, IOCL Barauni Refinery – EHS Audit",
    shortTitle: "IOCL Barauni BR-09 – EHS Audit",
    client: "M/s Tuntun Singh Construction / EIL / IOCL, Bihar",
    location: "Barauni, Bihar",
    state: "Bihar",
    country: "India",
    status: "Completed",
    category: "Petro Chemicals",
    year: "Completed",
    image: "/images/projects/iocl-barauni-refinery.jpg",
    description:
      "EHS audit support for the BR-09 Project at IOCL Barauni Refinery.",
    overview:
      "SSES provided EHS audit support for the BR-09 Project at IOCL Barauni Refinery.",
    scope: [
      "EHS audit",
      "Safety consultancy",
      "Industrial project audit",
    ],
    highlights: [
      "IOCL Barauni Refinery",
      "Petrochemical project",
      "EHS audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "iocl-barauni-lna-infraprojects",
    slug: "iocl-barauni-lna-infraprojects",
    title: "IOCL Barauni Refinery, Begusarai",
    shortTitle: "IOCL Barauni – LNA Infraprojects",
    client: "LNA Infraprojects Pvt. Ltd., Jaipur",
    location: "Begusarai, Bihar",
    state: "Bihar",
    country: "India",
    status: "Ongoing",
    category: "Safety Management and Consultancy",
    year: "Ongoing",
    image: "/images/projects/iocl-barauni-refinery.jpg",
    description:
      "Safety management and consultancy support associated with IOCL Barauni Refinery.",
    overview:
      "SSES provided Safety Management and Consultancy support for the IOCL Barauni Refinery project with LNA Infraprojects.",
    scope: [
      "Safety management",
      "Safety consultancy",
      "Industrial SHEF support",
    ],
    highlights: [
      "IOCL Barauni Refinery",
      "Safety management",
      "Consultancy",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "hr-services-panjetani-buildwell",
    slug: "hr-services-panjetani-buildwell",
    title: "HR Services",
    shortTitle: "HR Services",
    client: "Panjetani Buildwell Pvt. Ltd. (PBPL)",
    location: "Delhi / NCR, India",
    state: "Delhi",
    country: "India",
    status: "Completed",
    category: "General Consultancy",
    year: "Completed",
    image: "",
    description:
      "General consultancy support through HR Services for Panjetani Buildwell Pvt. Ltd.",
    overview:
      "SSES provided General Consultancy through HR Services for Panjetani Buildwell Pvt. Ltd.",
    scope: [
      "HR services",
      "General consultancy",
      "Manpower support",
    ],
    highlights: [
      "HR consultancy",
      "General consultancy",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "assam-petrochemicals-bridge-roof",
    slug: "assam-petrochemicals-bridge-roof",
    title: "Assam Petrochemicals – Bridge & Roof EHS Audit",
    shortTitle: "Assam Petrochemicals – Bridge & Roof",
    client: "Bridge & Roof Co. (India) Ltd. / EIL",
    location: "Namrup, Assam",
    state: "Assam",
    country: "India",
    status: "Completed",
    category: "Petro chemical",
    year: "Completed",
    image: "/images/projects/assam-petrochemicals-mafp.jpg",
    description:
      "EHS audit support for Assam Petrochemicals at Namrup.",
    overview:
      "SSES provided EHS audit support for the Assam Petrochemicals project involving Bridge & Roof Co. (India) Ltd. / EIL.",
    scope: [
      "EHS audit",
      "Safety consultancy",
      "Petrochemical project support",
    ],
    highlights: [
      "Assam Petrochemicals",
      "Namrup",
      "EHS audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "assam-petrochemicals-driplex",
    slug: "assam-petrochemicals-driplex",
    title: "Assam Petrochemicals – Driplex EHS Audit",
    shortTitle: "Assam Petrochemicals – Driplex",
    client: "Driplex Water Engineering Pvt. Ltd.",
    location: "Namrup, Assam",
    state: "Assam",
    country: "India",
    status: "Completed",
    category: "Petro chemical",
    year: "Completed",
    image: "/images/projects/assam-petrochemicals-mafp.jpg",
    description:
      "EHS audit support for Assam Petrochemicals at Namrup.",
    overview:
      "SSES provided EHS audit support for the Assam Petrochemicals project involving Driplex Water Engineering Pvt. Ltd.",
    scope: [
      "EHS audit",
      "Safety consultancy",
      "Petrochemical project support",
    ],
    highlights: [
      "Assam Petrochemicals",
      "Namrup",
      "EHS audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "assam-petrochemicals-powermax",
    slug: "assam-petrochemicals-powermax",
    title: "Assam Petrochemicals – Powermax EHS Audit",
    shortTitle: "Assam Petrochemicals – Powermax",
    client: "Powermax India Pvt. Ltd. / EIL",
    location: "Namrup, Assam",
    state: "Assam",
    country: "India",
    status: "Completed",
    category: "Petro chemical",
    year: "Completed",
    image: "/images/projects/assam-petrochemicals-mafp.jpg",
    description:
      "EHS audit support for Assam Petrochemicals at Namrup.",
    overview:
      "SSES provided EHS audit support for the Assam Petrochemicals project involving Powermax India Pvt. Ltd. / EIL.",
    scope: [
      "EHS audit",
      "Safety consultancy",
      "Petrochemical project support",
    ],
    highlights: [
      "Assam Petrochemicals",
      "Namrup",
      "EHS audit",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "ksk-mahanadi-power-chimney",
    slug: "ksk-mahanadi-power-chimney",
    title: "Chimney Project of KSK, Mahanadi Power Plant",
    shortTitle: "KSK Mahanadi Power Plant",
    client: "Simplex Infrastructure Ltd.",
    location: "Akaltara, Bilaspur, Chhattisgarh",
    state: "Chhattisgarh",
    country: "India",
    status: "Completed",
    category: "Power",
    year: "Completed",
    image: "",
    description:
      "EHS management support for the Chimney Project of KSK, Mahanadi Power Plant.",
    overview:
      "SSES provided EHS management support for the Chimney Project of KSK, Mahanadi Power Plant at Akaltara, Bilaspur.",
    scope: [
      "EHS management",
      "Power project safety",
      "Construction safety",
    ],
    highlights: [
      "Power plant",
      "Chimney project",
      "EHS management",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "vedanta-medical-research-new-raipur",
    slug: "vedanta-medical-research-new-raipur",
    title: "Vedanta Medical Research Foundation",
    shortTitle: "Vedanta Medical Research Foundation",
    client: "JMC Projects (I) Ltd. / Vedanta Ltd.",
    location: "New Raipur, Chhattisgarh",
    state: "Chhattisgarh",
    country: "India",
    status: "Completed",
    category: "Building Project",
    year: "Completed",
    image: "",
    description:
      "EHS management support for the Vedanta Medical Research Foundation project.",
    overview:
      "SSES provided EHS management support for the Vedanta Medical Research Foundation project in New Raipur.",
    scope: [
      "EHS management",
      "Building project safety",
      "Construction safety",
    ],
    highlights: [
      "Institutional building",
      "EHS management",
      "New Raipur",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "ntpc-vindhyachal-stage-iv-chp",
    slug: "ntpc-vindhyachal-stage-iv-chp",
    title: "NTPC Vindhyachal Stage-IV CHP Project",
    shortTitle: "NTPC Vindhyachal Stage-IV CHP",
    client: "JMC Projects (I) Ltd. (A Kalpataru Group Enterprise)",
    location: "Vindhyachal, Madhya Pradesh",
    state: "Madhya Pradesh",
    country: "India",
    status: "Completed",
    category: "Power",
    year: "Completed",
    image: "",
    description:
      "EHS management support for the NTPC Vindhyachal Stage-IV CHP Project.",
    overview:
      "SSES provided EHS management support for the NTPC Vindhyachal Stage-IV CHP Project.",
    scope: [
      "EHS management",
      "Power project safety",
      "Construction safety",
    ],
    highlights: [
      "NTPC Vindhyachal",
      "CHP project",
      "EHS management",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "essar-power-mahan-singrauli",
    slug: "essar-power-mahan-singrauli",
    title: "ESSAR Power Ltd., MAHAN",
    shortTitle: "ESSAR Power Mahan",
    client: "Technomaint Contractors Ltd., Jamnagar / ESSAR Projects (I) Ltd.",
    location: "Singrauli, Madhya Pradesh",
    state: "Madhya Pradesh",
    country: "India",
    status: "Completed",
    category: "Power",
    year: "Completed",
    image: "",
    description:
      "EHS management support for ESSAR Power Ltd., MAHAN, Singrauli.",
    overview:
      "SSES provided EHS management support for ESSAR Power Ltd., MAHAN, Singrauli.",
    scope: [
      "EHS management",
      "Power project safety",
      "Industrial safety",
    ],
    highlights: [
      "ESSAR Power",
      "Singrauli",
      "EHS management",
    ],
    documents: [],
    gallery: [],
  },

  {
    id: "bina-pichor-transmission-line",
    slug: "bina-pichor-transmission-line",
    title: "Bina–Pichor 765 kV D/C Transmission Line",
    shortTitle: "Bina–Pichor Transmission Line",
    client: "Shibya Construction Co. / Power Grid Corporation Ltd.",
    location: "Bina–Pichor, India",
    state: null,
    country: "India",
    status: "Completed",
    category: "Transmission Line",
    year: "Completed",
    image: "",
    description:
      "EHS management support for the Bina–Pichor 765 kV D/C Transmission Line.",
    overview:
      "SSES provided EHS management support for the Bina–Pichor 765 kV D/C Transmission Line project.",
    scope: [
      "EHS management",
      "Transmission line safety",
      "Construction safety",
    ],
    highlights: [
      "765 kV transmission line",
      "Power infrastructure",
      "EHS management",
    ],
    documents: [],
    gallery: [],
  },
];

export default projects;