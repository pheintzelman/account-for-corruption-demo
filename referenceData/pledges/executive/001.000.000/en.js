export default {
  pledgeId: "executive_powers",
  version: "1.0.0",
  text: "use powers ethically",
  shortText: "Ethical use of Power",
  weight: 7,
  subject: {
    voter: "Politicians should",
    influencer: "Politicians should",
    politician: "I commit to",
    government_worker: "I commit to",
  },
  subpledges: [
    {
      subPledgeId: "ethical_pardons",
      text: "use clemency, pardons, reprieves, and commutations only to correct injustice, never for friends, family, or political allies.",
      shortText: "Ethical Pardons",
      weight: 7,
      version: "1.0.0",
    },
    {
      subPledgeId: "nonpartisan_justice",
      text: "not weaponize the justice system; ensure investigations, prosecutions, and enforcement remain free from political interference or consideration.",
      shortText: "Justice for all",
      weight: 8,
      version: "1.0.0",
    },
    {
      subPledgeId: "judicial_integrity",
      text: "maintain the integrity of judicial appointments and influence over courts, based primarily on qualifications and merit, without partisan bias.",
      shortText: "Appoint nonpartisan judges",
      weight: 7,
      version: "1.0.0",
    },
    {
      subPledgeId: "responsible_emergency_powers",
      text: "exercise emergency powers or special authority only in the public interest, not for personal or political gain.",
      shortText: "Use emergency powers responsibly",
      weight: 7,
      version: "1.0.0",
    },
  ],
};
