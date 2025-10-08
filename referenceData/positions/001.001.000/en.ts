import type { PositionReferenceData } from "../../../types/politician";

export const positions: {
  version: string;
  publishedDate: string;
  positions: PositionReferenceData[];
} = {
  version: "v1.1.0",
  publishedDate: "2025-08-25",
  positions: [
    // =====================
    // FEDERAL - EXECUTIVE
    // =====================
    {
      positionId: "president",
      title: "President of the United States",
      displayTemplate: "President {lastName}",
      level: "federal",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Head of state and government, commander-in-chief of the armed forces, responsible for executing federal laws.",
    },
    {
      positionId: "vicePresident",
      title: "Vice President of the United States",
      displayTemplate: "Vice President {firstName} {lastName}",
      level: "federal",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Second-highest executive officer, assumes presidency if the President cannot serve, presides over the Senate.",
    },
    {
      positionId: "secretaryOfState",
      title: "Secretary of State",
      displayTemplate: "Secretary of State {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "state",
      description:
        "Leads foreign policy and represents the U.S. in international affairs.",
    },
    {
      positionId: "secretaryOfTreasury",
      title: "Secretary of the Treasury",
      displayTemplate: "Secretary of the Treasury {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "treasury",
      description: "Oversees federal finances, taxation, and monetary policy.",
    },
    {
      positionId: "secretaryOfDefense",
      title: "Secretary of Defense",
      displayTemplate: "Secretary of Defense {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "defense",
      description:
        "Principal defense policy advisor, oversees the armed forces and national security.",
    },
    {
      positionId: "attorneyGeneral",
      title: "Attorney General",
      displayTemplate: "Attorney General {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "justice",
      description:
        "Top law enforcement officer, oversees the Department of Justice.",
    },
    {
      positionId: "usAttorney",
      title: "United States Attorney",
      displayTemplate: "Attorney General {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Prosecutes federal crimes and represents the U.S. government in civil cases within a judicial district.",
    },
    {
      positionId: "secretaryOfInterior",
      title: "Secretary of the Interior",
      displayTemplate: "Secretary of the Interior {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "interior",
      description:
        "Manages public lands, natural resources, and Native American affairs.",
    },
    {
      positionId: "secretaryOfAgriculture",
      title: "Secretary of Agriculture",
      displayTemplate: "Secretary of Agriculture {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "agriculture",
      description:
        "Oversees farming, food safety, forestry, and rural economic development.",
    },
    {
      positionId: "secretaryOfCommerce",
      title: "Secretary of Commerce",
      displayTemplate: "Secretary of Commerce {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "commerce",
      description:
        "Promotes economic growth, trade, and technology innovation.",
    },
    {
      positionId: "secretaryOfLabor",
      title: "Secretary of Labor",
      displayTemplate: "Secretary of Labor {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "labor",
      description:
        "Oversees workforce safety, employment laws, and labor statistics.",
    },
    {
      positionId: "secretaryOfHealthAndHumanServices",
      title: "Secretary of Health and Human Services",
      displayTemplate:
        "Secretary of Health and Human Services {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "health_human_services",
      description:
        "Manages public health, welfare programs, and federal healthcare policy.",
    },
    {
      positionId: "secretaryOfHousingAndUrbanDevelopment",
      title: "Secretary of Housing and Urban Development",
      displayTemplate:
        "Secretary of Housing and Urban Development {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "housing_urban_development",
      description:
        "Oversees housing policy, urban development, and affordable housing programs.",
    },
    {
      positionId: "secretaryOfTransportation",
      title: "Secretary of Transportation",
      displayTemplate: "Secretary of Transportation {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "transportation",
      description:
        "Oversees highways, railways, air travel, and transportation infrastructure.",
    },
    {
      positionId: "secretaryOfEnergy",
      title: "Secretary of Energy",
      displayTemplate: "Secretary of Energy {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "energy",
      description:
        "Oversees energy policy, nuclear security, and scientific research.",
    },
    {
      positionId: "secretaryOfEducation",
      title: "Secretary of Education",
      displayTemplate: "Secretary of Education {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "education",
      description:
        "Oversees federal education policy, funding, and student loan programs.",
    },
    {
      positionId: "secretaryOfVeteransAffairs",
      title: "Secretary of Veterans Affairs",
      displayTemplate: "Secretary of Veterans Affairs {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "veterans_affairs",
      description:
        "Oversees programs for veterans' healthcare, benefits, and services.",
    },
    {
      positionId: "secretaryOfHomelandSecurity",
      title: "Secretary of Homeland Security",
      displayTemplate: "Secretary of Homeland Security {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "homeland_security",
      description:
        "Oversees domestic security, counterterrorism, and disaster response.",
    },
    {
      positionId: "directorOfNationalIntelligence",
      title: "Director of National Intelligence",
      displayTemplate:
        "Director of National Intelligence {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Leads the U.S. Intelligence Community and advises the President on intelligence matters.",
    },
    {
      positionId: "ambassadorToUnitedNations",
      title: "Ambassador to the United Nations",
      displayTemplate: "UN Ambassador {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Represents the U.S. at the United Nations and handles multilateral diplomacy.",
    },
    {
      positionId: "administratorOfEnvironmentalProtectionAgency",
      title: "Administrator of the Environmental Protection Agency",
      displayTemplate: "EPA Administrator {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "epa",
      description: "Oversees environmental regulations and pollution control.",
    },
    {
      positionId: "administratorOfSmallBusinessAdministration",
      title: "Administrator of the Small Business Administration",
      displayTemplate: "SBA Administrator {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "small_business_administration",
      description:
        "Supports small businesses through loans, contracts, and counseling.",
    },
    {
      positionId: "directorOfOfficeOfManagementAndBudget",
      title: "Director of the Office of Management and Budget",
      displayTemplate: "OMB Director {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Oversees the federal budget and evaluates government programs.",
    },
    {
      positionId: "directorOfOfficeOfScienceAndTechnologyPolicy",
      title: "Director of the Office of Science and Technology Policy",
      displayTemplate: "OSTP Director {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Advises the President on science, technology, and innovation.",
    },
    {
      positionId: "administratorOfNationalAeronauticsAndSpaceAdministration",
      title:
        "Administrator of the National Aeronautics and Space Administration",
      displayTemplate: "NASA Administrator {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "nasa",
      description: "Leads NASA and oversees space exploration and research.",
    },
    {
      positionId: "administratorOfNationalOceanicAndAtmosphericAdministration",
      title:
        "Administrator of the National Oceanic and Atmospheric Administration",
      displayTemplate: "NOAA Administrator {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "noaa",
      description:
        "Oversees weather forecasting, climate research, and ocean policy.",
    },
    {
      positionId: "administratorOfFederalAviationAdministration",
      title: "Administrator of the Federal Aviation Administration",
      displayTemplate: "FAA Administrator {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "faa",
      description: "Oversees civil aviation safety and regulation.",
    },
    {
      positionId: "administratorOfFederalEmergencyManagementAgency",
      title: "Administrator of the Federal Emergency Management Agency",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "fema",
      description: "Manages disaster response and recovery efforts.",
    },
    {
      positionId: "administratorOfGeneralServicesAdministration",
      title: "Administrator of the General Services Administration",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "general_services",
      description:
        "Oversees federal property, procurement, and administrative services.",
    },
    {
      positionId: "administratorOfTransportationSecurityAdministration",
      title: "Administrator of the Transportation Security Administration",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "tsa",
      description: "Oversees airport and transportation security operations.",
    },
    {
      positionId: "deputySecretaryOfState",
      title: "Deputy Secretary of State",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "state",
      description:
        "Assists the Secretary of State in managing foreign affairs and departmental operations.",
    },
    {
      positionId: "deputySecretaryOfDefense",
      title: "Deputy Secretary of Defense",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "defense",
      description:
        "Assists the Secretary of Defense in managing the Department of Defense and national defense policy.",
    },
    // NEW FEDERAL EXECUTIVE POSITIONS
    {
      positionId: "chairmanOfJointChiefsOfStaff",
      title: "Chairman of the Joint Chiefs of Staff",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "defense",
      description:
        "Highest-ranking military officer, principal military advisor to the President and Secretary of Defense.",
    },
    {
      positionId: "directorOfCIA",
      title: "Director of the Central Intelligence Agency",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "cia",
      description:
        "Heads the CIA and oversees foreign intelligence gathering operations.",
    },
    {
      positionId: "directorOfFBI",
      title: "Director of the Federal Bureau of Investigation",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "fbi",
      description:
        "Leads the FBI in domestic law enforcement and counterintelligence operations.",
    },
    {
      positionId: "surgeonGeneral",
      title: "Surgeon General of the United States",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "health_human_services",
      description:
        "Chief public health officer, provides health guidance and oversees Public Health Service.",
    },
    {
      positionId: "chiefOfStaff",
      title: "White House Chief of Staff",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Manages White House operations and serves as the President's principal advisor and gatekeeper.",
    },
    {
      positionId: "nationalSecurityAdvisor",
      title: "National Security Advisor",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Principal advisor to the President on national security matters and foreign policy.",
    },
    {
      positionId: "pressSecretary",
      title: "White House Press Secretary",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Serves as the primary spokesperson for the President and the White House administration.",
    },
    {
      positionId: "ambassadorGeneral",
      title: "Ambassador (General)",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "state",
      description:
        "Represents the U.S. in foreign countries and manages diplomatic relations.",
    },
    {
      positionId: "postmasterGeneral",
      title: "Postmaster General",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "us_postal_service",
      description:
        "Chief executive of the U.S. Postal Service, oversees mail delivery operations.",
    },
    {
      positionId: "solicitorgGeneral",
      title: "Solicitor General",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "justice",
      description:
        "Represents the federal government before the Supreme Court.",
    },
    {
      positionId: "marshalGeneral",
      title: "U.S. Marshal (General)",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: "us_marshals",
      description:
        "Federal law enforcement officer responsible for judicial security, fugitive operations, and prisoner transport.",
    },

    // =====================
    // FEDERAL - LEGISLATIVE
    // =====================
    {
      positionId: "senator",
      title: "U.S. Senator",
      displayTemplate: "Senator {firstName} {lastName} from {state}",
      scope: ["state"],
      level: "federal",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Represents an entire state in the U.S. Senate, serving six-year terms and voting on federal laws, treaties, and confirmations.",
    },
    {
      positionId: "representative",
      title: "U.S. Representative",
      displayTemplate: "Representative {firstName} {lastName} from {state}",
      scope: ["state", "congressionalDistrict"],
      level: "federal",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Represents a congressional district in the House of Representatives, serving two-year terms and introducing or voting on federal legislation.",
    },

    // =====================
    // FEDERAL - JUDICIAL
    // =====================
    {
      positionId: "supremeCourtJustice",
      title: "Supreme Court Justice",
      displayTemplate: "Justice {lastName}",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "One of nine justices on the highest court in the United States. They interpret the Constitution, review major federal cases, and set binding legal precedents.",
    },
    {
      positionId: "chiefJustice",
      title: "Chief Justice of the United States",
      displayTemplate: "Chief Justice {firstName} {lastName}",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Presiding officer of the Supreme Court and highest judicial officer in the United States.",
    },
    {
      positionId: "circuitCourtJudge",
      title: "U.S. Circuit Court Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "A judge on one of the 13 U.S. Courts of Appeals. They review decisions from district courts within their circuit and decide important legal questions.",
    },
    {
      positionId: "districtCourtJudge",
      title: "U.S. District Court Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "A trial judge in one of the 94 federal district courts. They preside over civil and criminal cases, ruling on motions, evidence, and jury trials.",
    },
    {
      positionId: "magistrateJudge",
      title: "Magistrate Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "A judge who assists district court judges by handling preliminary matters such as pretrial motions, hearings, and settlement conferences.",
    },
    {
      positionId: "bankruptcyJudge",
      title: "Bankruptcy Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "A specialized judge who oversees bankruptcy cases, including debt restructuring, liquidation, and disputes between creditors and debtors.",
    },

    // =====================
    // FEDERAL - JUDICIAL (Specialized Courts)
    // =====================
    {
      positionId: "courtOfFederalClaimsJudge",
      title: "U.S. Court of Federal Claims Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles monetary claims against the U.S. government, including contracts, takings, and tax refunds.",
    },
    {
      positionId: "taxCourtJudge",
      title: "U.S. Tax Court Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Adjudicates disputes between taxpayers and the IRS regarding federal taxes.",
    },
    {
      positionId: "courtOfInternationalTradeJudge",
      title: "U.S. Court of International Trade Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Hears cases involving international trade and customs laws.",
    },
    {
      positionId: "federalAdministrativeLawJudge",
      title: "Federal Administrative Law Judge",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Presides over hearings within federal agencies on regulatory and administrative matters.",
    },

    // =====================
    // FEDERAL - INDEPENDENT
    // =====================
    {
      positionId: "chairmanOfFederalReserve",
      title: "Chairman of the Federal Reserve",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Leads the Federal Reserve, sets U.S. monetary policy, manages interest rates and economic stability.",
    },
    {
      positionId: "chairmanOfFederalCommunicationsCommission",
      title: "Chairman of the Federal Communications Commission",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Heads the FCC, regulates communications industries including radio, TV, internet, and telecommunications.",
    },
    // NEW FEDERAL INDEPENDENT POSITIONS
    {
      positionId: "chairmanOfSecuritiesAndExchangeCommission",
      title: "Chairman of the Securities and Exchange Commission",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Heads the SEC, regulates securities markets and protects investors.",
    },
    {
      positionId: "chairmanOfFederalTradeCommission",
      title: "Chairman of the Federal Trade Commission",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Leads the FTC in enforcing consumer protection and antitrust laws.",
    },
    {
      positionId: "chairmanOfNationalLaborRelationsBoard",
      title: "Chairman of the National Labor Relations Board",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Oversees enforcement of federal labor laws and union relations.",
    },
    {
      positionId: "chairmanOfEqualEmploymentOpportunityCommission",
      title: "Chairman of the Equal Employment Opportunity Commission",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Enforces federal laws prohibiting employment discrimination.",
    },

    // =====================
    // STATE - EXECUTIVE
    // =====================
    {
      positionId: "governor",
      title: "Governor",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Chief executive of a state, oversees agencies, enforces laws, signs or vetoes legislation.",
    },
    {
      positionId: "lieutenantGovernor",
      title: "Lieutenant Governor",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Second-highest executive officer, often presides over the state senate, may succeed the governor.",
    },
    {
      positionId: "stateAttorneyGeneral",
      title: "State Attorney General",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Top legal officer of the state, oversees prosecutions, defends state laws, provides legal opinions.",
    },
    {
      positionId: "stateSecretaryOfState",
      title: "State Secretary of State",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Manages elections, business registrations, and maintains official state records.",
    },
    {
      positionId: "stateTreasurer",
      title: "State Treasurer",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Manages state finances, investments, and revenue collection.",
    },
    {
      positionId: "stateAuditor",
      title: "State Auditor / Comptroller",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Oversees audits of state agencies and programs to ensure financial accountability.",
    },

    // =====================
    // STATE - ADDITIONAL EXECUTIVE
    // =====================
    {
      positionId: "stateInsuranceCommissionerElected",
      title: "State Insurance Commissioner",
      displayTemplate:
        "{state} State Insurance Commissioner {firstName} {lastName}",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Regulates insurance companies, policies, and consumer protections within the state.",
    },
    {
      positionId: "stateInsuranceCommissionerAppointed",
      title: "State Insurance Commissioner",
      displayTemplate:
        "{state} State Insurance Commissioner {firstName} {lastName}",
      level: "state",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Regulates insurance companies, policies, and consumer protections within the state.",
    },
    {
      positionId: "stateLaborCommissionerElected",
      title: "State Labor Commissioner",
      displayTemplate:
        "{state} State Labor Commissioner {firstName} {lastName}",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Oversees workplace laws, employment standards, and worker protections.",
    },
    {
      positionId: "stateLaborCommissionerAppointed",
      title: "State Labor Commissioner",
      displayTemplate:
        "{state} State Labor Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Oversees workplace laws, employment standards, and worker protections.",
    },
    {
      positionId: "stateEducationCommissionerElected",
      title: "Public Instruction Superintendent / Education Commissioner",
      displayTemplate: "{state} Education Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Leads statewide education policy, curriculum standards, and school administration.",
    },
    {
      positionId: "stateEducationCommissionerAppointed",
      title: "Public Instruction Superintendent / Education Commissioner",
      displayTemplate: "{state} Education Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Leads statewide education policy, curriculum standards, and school administration.",
    },
    {
      positionId: "statePublicUtilityCommissionerElected",
      title: "State Public Utility Commissioner",
      displayTemplate:
        "{state} Public Utility Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Regulates utilities such as electricity, water, and telecommunications at the state ",
    },
    {
      positionId: "statePublicUtilityCommissionerAppointed",
      title: "State Public Utility Commissioner",
      displayTemplate:
        "{state} Public Utility Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Regulates utilities such as electricity, water, and telecommunications at the state ",
    },
    {
      positionId: "stateAgricultureCommissionerElected",
      title: "State Agriculture Commissioner",
      displayTemplate:
        "{state} State Agriculture Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Oversees agriculture policy, food safety, and farming support programs.",
    },
    {
      positionId: "stateAgricultureCommissionerAppointed",
      title: "State Agriculture Commissioner",
      displayTemplate:
        "{state} State Agriculture Commissioner {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Oversees agriculture policy, food safety, and farming support programs.",
    },
    {
      positionId: "stateAdjutantGeneralAppointed",
      title: "State Adjutant General",
      displayTemplate: "{state} Adjutant General {firstName} {lastName}",
      level: "state",
      scope: ["state"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Leads the state's National Guard and manages military affairs at the state ",
    },
    {
      positionId: "stateDeputyAttorneyGeneral",
      title: "State Deputy Attorney General",
      level: "state",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Supports the state Attorney General in legal matters, prosecutions, and policy advice.",
    },
    {
      positionId: "stateDeputyEducationCommissioner",
      title: "State Deputy Education Commissioner",
      level: "state",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Assists the Education Commissioner in managing statewide education policy and administration.",
    },

    // =====================
    // STATE - LEGISLATIVE
    // =====================
    {
      positionId: "stateSenator",
      title: "State Senator",
      displayTemplate: "{state} State {senatorName} {firstName} {lastName}",
      level: "state",
      scope: ["state", "stateSenateDistrict"],
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Member of the state legislature's upper chamber, drafts and votes on state laws.",
    },
    {
      positionId: "stateRepresentative",
      title: "State Representative",
      displayTemplate: "{state} State {houseRepName} {firstName} {lastName}",
      level: "state",
      scope: ["state", "stateHouseDistrict"],
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Member of the lower chamber of the state legislature, helps create and pass state laws.",
    },

    // =====================
    // STATE - JUDICIAL
    // =====================
    {
      positionId: "stateSupremeCourtJustice",
      title: "State Supreme Court Justice",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Serves on the state's highest court, interprets the state constitution, and rules on major appeals.",
    },
    {
      positionId: "stateChiefJustice",
      title: "State Chief Justice",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Chief judge of the state supreme court, oversees the state court system.",
    },
    {
      positionId: "stateAppellateJudge",
      title: "State Appellate Court Judge",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Reviews decisions of lower courts, handles appeals, ensures proper application of law.",
    },
    {
      positionId: "stateJudge",
      title: "State Judge",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Presides over trials in state courts, rules on cases involving state law.",
    },

    // =====================
    // STATE - JUDICIAL (Specialized Courts)
    // =====================
    {
      positionId: "stateFamilyCourtJudge",
      title: "State Family Court Judge",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles cases related to family matters such as divorce, custody, and child support.",
    },
    {
      positionId: "stateJuvenileCourtJudge",
      title: "State Juvenile Court Judge",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Presides over cases involving minors, including delinquency and child protection matters.",
    },
    {
      positionId: "stateAdministrativeLawJudge",
      title: "State Administrative Law Judge",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Adjudicates disputes related to state agencies, licenses, and regulatory issues.",
    },

    // =====================
    // LOCAL - EXECUTIVE
    // =====================
    {
      positionId: "mayor",
      title: "Mayor",
      displayTemplate: "Mayor {firstName} {lastName} of {city}, {state}",
      level: "local",
      scope: ["state", "city"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Chief executive of a city or town, manages local services, policies, and city budget.",
    },
    {
      positionId: "countyExecutive",
      title: "County Executive",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Head of county government, oversees county departments and services.",
    },
    {
      positionId: "sheriff",
      title: "County Sheriff",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Elected law enforcement officer, oversees policing in unincorporated areas and manages county jails.",
    },
    {
      positionId: "districtAttorney",
      title: "District Attorney",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Prosecutes criminal cases at the county or district level, represents the government in court.",
    },
    {
      positionId: "cityAttorney",
      title: "City Attorney",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Provides legal counsel for the city, prosecutes municipal violations, and defends city ordinances.",
    },
    {
      positionId: "countyClerk",
      title: "County Clerk / Recorder of Deeds",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Maintains county records, vital statistics, and public documents such as property deeds.",
    },
    {
      positionId: "assessor",
      title: "Assessor / Tax Collector",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Determines property values for taxation and manages collection of local property taxes.",
    },
    {
      positionId: "publicUtilityCommissioner",
      title: "Public Utility Commissioner",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Regulates local utilities such as electricity, water, and telecommunications.",
    },

    // =====================
    // LOCAL - OTHER ELECTED OFFICES
    // =====================
    {
      positionId: "townshipTrusteeElected",
      title: "Township Trustee / Supervisor",
      displayTemplate:
        "{township}, {state} Township Trustee / Supervisor {firstName} {lastName}",
      scope: ["state", "township"],
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Manages township government, local services, and budgets where applicable.",
    },
    {
      positionId: "townshipTrusteeAppointed",
      title: "Township Trustee / Supervisor",
      displayTemplate:
        "{township}, {state} Township Trustee / Supervisor {firstName} {lastName}",
      scope: ["state", "township"],
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Manages township government, local services, and budgets where applicable.",
    },
    {
      positionId: "countyConstableAppointed",
      title: "Constable (County)",
      displayTemplate: "{county} Constable {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Appointed law enforcement officer serving a county precinct.",
    },
    {
      positionId: "townshipConstableAppointed",
      title: "Constable (Township)",
      displayTemplate: "{township} Constable {firstName} {lastName}",
      level: "local",
      scope: ["township"],
      appointed: true,
      branch: "executive",
      department: null,
      description: "Appointed law enforcement officer serving a township.",
    },
    {
      positionId: "countyConstableElected",
      title: "Constable (County)",
      displayTemplate: "{county} Constable {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: false,
      branch: "executive",
      department: null,
      description: "Elected law enforcement officer serving a county precinct.",
    },
    {
      positionId: "townshipConstableElected",
      title: "Constable (Township)",
      displayTemplate: "{township} Constable {firstName} {lastName}",
      level: "local",
      scope: ["township"],
      appointed: false,
      branch: "executive",
      department: null,
      description: "Elected law enforcement officer serving a township.",
    },
    {
      positionId: "schoolSuperintendentElected",
      title: "School Superintendent",
      displayTemplate:
        "{schoolDistrict} School Superintendent {firstName} {lastName}",
      level: "local",
      scope: ["schoolDistrict"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Leads a school district, implements education policy, and manages district administration.",
    },
    {
      positionId: "schoolSuperintendentAppointed",
      title: "School Superintendent",
      displayTemplate:
        "{schoolDistrict} School Superintendent {firstName} {lastName}",
      level: "local",
      scope: ["schoolDistrict"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Leads a school district, implements education policy, and manages district administration.",
    },
    {
      positionId: "countyCoronerElected",
      title: "County Coroner / Medical Examiner",
      displayTemplate:
        "{county} County Coroner / Medical Examiner {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Investigates deaths within the county and determines causes of death.",
    },
    {
      positionId: "countyCoronerAppointed",
      title: "County Coroner / Medical Examiner",
      displayTemplate:
        "{county} County Coroner / Medical Examiner {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Investigates deaths within the county and determines causes of death.",
    },
    {
      positionId: "countyTaxCommissioner",
      title: "Tax Commissioner / Collector (County)",
      displayTemplate:
        "{county} Tax Commissioner / Collector {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: true,
      branch: "executive",
      department: null,
      description: "Oversees tax collection and administration for the county.",
    },
    {
      positionId: "cityTaxCommissioner",
      title: "Tax Commissioner / Collector (City)",
      displayTemplate:
        "{city} Tax Commissioner / Collector {firstName} {lastName}",
      level: "local",
      scope: ["city"],
      appointed: true,
      branch: "executive",
      department: null,
      description: "Oversees tax collection and administration for the city.",
    },
    {
      positionId: "countyTaxCommissioner",
      title: "Tax Commissioner / Collector (County)",
      displayTemplate:
        "{county} Tax Commissioner / Collector {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: false,
      branch: "executive",
      department: null,
      description: "Oversees tax collection and administration for the county.",
    },
    {
      positionId: "cityTaxCommissioner",
      title: "Tax Commissioner / Collector (City)",
      displayTemplate:
        "{city} Tax Commissioner / Collector {firstName} {lastName}",
      level: "local",
      scope: ["city"],
      appointed: false,
      branch: "executive",
      department: null,
      description: "Oversees tax collection and administration for the city.",
    },
    {
      positionId: "policeChief",
      title: "Police Chief",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Leads the local police department, sets law enforcement priorities, and manages personnel.",
    },
    {
      positionId: "fireChief",
      title: "Fire Chief / Fire Marshal",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Oversees fire department operations, fire prevention, and emergency response services.",
    },
    {
      positionId: "countyBoardMember",
      title: "County Board Member / Supervisor",
      level: "local",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Serves on the county board, makes policy decisions, approves budgets, and represents constituents.",
    },
    {
      positionId: "cityClerk",
      title: "City Clerk",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Maintains official city records, oversees municipal elections, and ensures administrative compliance.",
    },
    {
      positionId: "townshipClerk",
      title: "Township Clerk",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Maintains township records, assists in local elections, and supports township governance.",
    },
    // NEW LOCAL POSITIONS
    {
      positionId: "countyJudgeExecutive",
      title: "County Judge/Executive (Elected)",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "In some states, serves as chief executive of county government (Kentucky model).",
    },
    {
      positionId: "cityManager",
      title: "City Manager",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Professional administrator hired by city council to manage day-to-day city operations.",
    },
    {
      positionId: "countyManager",
      title: "County Manager/Administrator",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Professional administrator hired to manage county operations and implement board policies.",
    },
    {
      positionId: "publicDefender",
      title: "Public Defender",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Provides legal representation to defendants who cannot afford private attorneys.",
    },
    {
      positionId: "registerOfWills",
      title: "Register of Wills",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Maintains probate records and oversees the probate process in some jurisdictions.",
    },

    // =====================
    // LOCAL - LEGISLATIVE
    // =====================
    {
      positionId: "cityCouncilMember",
      title: "City Council Member",
      displayTemplate: "{city}, {state} Council Member {firstName} {lastName}",
      level: "local",
      scope: ["state", "city"],
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Elected legislator for a city, passes ordinances, approves budget, represents constituents.",
    },
    {
      positionId: "schoolBoardMember",
      title: "School Board Member",
      displayTemplate:
        "{schoolDistrict} School Board Member {firstName} {lastName} ({state})",
      level: "local",
      scope: ["state", "schoolDistrict"],
      appointed: false,
      branch: "legislative",
      department: "education",
      description:
        "Elected representative for a local school district, sets education policy, oversees superintendent, and approves budgets.",
    },
    // NEW LOCAL LEGISLATIVE POSITIONS
    {
      positionId: "aldermenAlderwomen",
      title: "Aldermen/Alderwomen",
      level: "local",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "City council members in certain municipalities, particularly in the Midwest.",
    },
    {
      positionId: "mayorCouncilMember",
      title: "Mayor-Council Member",
      level: "local",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "In some small towns, serves dual role as both mayor and council member.",
    },

    // =====================
    // LOCAL - JUDICIAL
    // =====================
    {
      positionId: "localJudge",
      title: "Local Judge",
      level: "local",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles civil and criminal cases at the county or municipal ",
    },
    {
      positionId: "municipalJudge",
      title: "Municipal Judge / Justice of the Peace",
      level: "local",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Oversees local court cases, often traffic, misdemeanors, or small claims disputes.",
    },
    {
      positionId: "probateJudge",
      title: "Probate Judge",
      level: "local",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles cases involving wills, estates, guardianship, and conservatorship.",
    },

    // =====================
    // LOCAL - JUDICIAL (Often Elected in Some States)
    // =====================
    {
      positionId: "countyJusticeOfThePeaceElected",
      title: "Justice of the Peace (County)",
      displayTemplate: "{county} Justice of the Peace {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: false,
      branch: "judicial",
      department: null,
      description:
        "Handles minor civil and criminal matters, marriages, and small claims at the county level.",
    },
    {
      positionId: "townshipJusticeOfThePeaceElected",
      title: "Justice of the Peace (Township)",
      displayTemplate: "{township} Justice of the Peace {firstName} {lastName}",
      level: "local",
      scope: ["township"],
      appointed: false,
      branch: "judicial",
      department: null,
      description:
        "Handles minor civil and criminal matters, marriages, and small claims at the township level.",
    },
    {
      positionId: "countyJusticeOfThePeaceAppointed",
      title: "Justice of the Peace (County)",
      displayTemplate: "{county} Justice of the Peace {firstName} {lastName}",
      level: "local",
      scope: ["county"],
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles minor civil and criminal matters, marriages, and small claims at the county level.",
    },
    {
      positionId: "townshipJusticeOfThePeaceAppointed",
      title: "Justice of the Peace (Township)",
      displayTemplate: "{township} Justice of the Peace {firstName} {lastName}",
      level: "local",
      scope: ["township"],
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Handles minor civil and criminal matters, marriages, and small claims at the township level.",
    },
    {
      positionId: "localAdministrativeLawJudge",
      title: "Local Administrative Law Judge",
      level: "local",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Presides over hearings on local government regulations, licenses, and disputes.",
    },

    // =====================
    // TERRITORIAL POSITIONS
    // =====================
    {
      positionId: "territorialGovernor",
      title: "Territorial Governor",
      level: "territorial",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Chief executive of U.S. territories (Puerto Rico, Guam, U.S. Virgin Islands, etc.), appointed by the President.",
    },
    {
      positionId: "territorialDelegate",
      title: "Territorial Delegate to Congress",
      level: "territorial",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Non-voting representative in the U.S. House from territories like Puerto Rico, Guam, U.S. Virgin Islands.",
    },
    {
      positionId: "territorialLegislator",
      title: "Territorial Legislator",
      level: "territorial",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Elected member of territorial legislature in U.S. territories.",
    },

    // =====================
    // TRIBAL POSITIONS
    // =====================
    {
      positionId: "tribalChief",
      title: "Tribal Chief/Chairperson",
      level: "tribal",
      appointed: false,
      branch: "executive",
      department: null,
      description: "Chief executive of a Native American tribal government.",
    },
    {
      positionId: "tribalCouncilMember",
      title: "Tribal Council Member",
      level: "tribal",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Elected member of a tribal council or similar governing body.",
    },
    {
      positionId: "tribalJudge",
      title: "Tribal Court Judge",
      level: "tribal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Judge in tribal court system handling cases under tribal jurisdiction.",
    },

    // =====================
    // CATCH-ALL POSITIONS
    // =====================

    // Federal
    {
      positionId: "otherFederalExecutiveOffice",
      title: "Other Federal Executive Office (Appointed)",
      level: "federal",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Any other federal executive position not specifically listed, appointed by the President or relevant authority.",
    },
    {
      positionId: "otherFederalLegislativeOfficeElected",
      title: "Other Federal Legislative Office (Elected)",
      level: "federal",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Any other federal legislative office not specifically listed, filled by election.",
    },
    {
      positionId: "otherFederalLegislativeOfficeAppointed",
      title: "Other Federal Legislative Office (Appointed)",
      level: "federal",
      appointed: true,
      branch: "legislative",
      department: null,
      description:
        "Any other federal legislative office not specifically listed, filled by appointment.",
    },
    {
      positionId: "otherFederalJudicialOffice",
      title: "Other Federal Judicial Office (Appointed)",
      level: "federal",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Any other federal judicial position not specifically listed, appointed according to federal law.",
    },
    {
      positionId: "otherFederalIndependentOffice",
      title: "Other Federal Independent Office (Appointed)",
      level: "federal",
      appointed: true,
      branch: "independent",
      department: null,
      description:
        "Any other federal independent agency position not specifically listed, appointed by relevant authority.",
    },

    // State
    {
      positionId: "otherStateExecutiveOfficeElected",
      title: "Other State Executive Office (Elected)",
      level: "state",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Any other state executive position not specifically listed, filled by election.",
    },
    {
      positionId: "otherStateExecutiveOfficeAppointed",
      title: "Other State Executive Office (Appointed)",
      level: "state",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Any other state executive position not specifically listed, filled by appointment.",
    },
    {
      positionId: "otherStateLegislativeOfficeElected",
      title: "Other State Legislative Office (Elected)",
      level: "state",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Any other state legislative position not specifically listed, filled by election.",
    },
    {
      positionId: "otherStateLegislativeOfficeAppointed",
      title: "Other State Legislative Office (Appointed)",
      level: "state",
      appointed: true,
      branch: "legislative",
      department: null,
      description:
        "Any other state legislative position not specifically listed, filled by appointment.",
    },
    {
      positionId: "otherStateJudicialOfficeElected",
      title: "Other State Judicial Office (Elected)",
      level: "state",
      appointed: false,
      branch: "judicial",
      department: null,
      description:
        "Any other state judicial position not specifically listed, filled by election or retention vote.",
    },
    {
      positionId: "otherStateJudicialOfficeAppointed",
      title: "Other State Judicial Office (Appointed)",
      level: "state",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Any other state judicial position not specifically listed, filled by appointment.",
    },

    // Local
    {
      positionId: "otherLocalExecutiveOfficeElected",
      title: "Other Local Executive Office (Elected)",
      level: "local",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Any other local executive position not specifically listed, filled by election.",
    },
    {
      positionId: "otherLocalExecutiveOfficeAppointed",
      title: "Other Local Executive Office (Appointed)",
      level: "local",
      appointed: true,
      branch: "executive",
      department: null,
      description:
        "Any other local executive position not specifically listed, filled by appointment.",
    },
    {
      positionId: "otherLocalLegislativeOfficeElected",
      title: "Other Local Legislative Office (Elected)",
      level: "local",
      appointed: false,
      branch: "legislative",
      department: null,
      description:
        "Any other local legislative position not specifically listed, filled by election.",
    },
    {
      positionId: "otherLocalLegislativeOfficeAppointed",
      title: "Other Local Legislative Office (Appointed)",
      level: "local",
      appointed: true,
      branch: "legislative",
      department: null,
      description:
        "Any other local legislative position not specifically listed, filled by appointment.",
    },
    {
      positionId: "otherLocalJudicialOfficeElected",
      title: "Other Local Judicial Office (Elected)",
      level: "local",
      appointed: false,
      branch: "judicial",
      department: null,
      description:
        "Any other local judicial position not specifically listed, filled by election.",
    },
    {
      positionId: "otherLocalJudicialOfficeAppointed",
      title: "Other Local Judicial Office (Appointed)",
      level: "local",
      appointed: true,
      branch: "judicial",
      department: null,
      description:
        "Any other local judicial position not specifically listed, filled by appointment.",
    },

    // Territorial
    {
      positionId: "otherTerritorialOffice",
      title: "Other Territorial Office",
      level: "territorial",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Any other territorial government position not specifically listed.",
    },

    // Tribal
    {
      positionId: "otherTribalOffice",
      title: "Other Tribal Office",
      level: "tribal",
      appointed: false,
      branch: "executive",
      department: null,
      description:
        "Any other tribal government position not specifically listed.",
    },
  ],
};
