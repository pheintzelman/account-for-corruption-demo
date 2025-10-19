export default {
  pledgeId: "ethical_conduct",
  text: "respect others and maintain ethical conduct",
  shortText: "Ethical conduct",
  weight: 10,
  version: "1.0.0",
  subject: {
    voter: "Politicians should",
    influencer: "Politicians should",
    politician: "I commit to",
    government_worker: "I commit to",
  },
  subpledges: [
    {
      subPledgeId: "treat_people_with_respect",
      text: "treat all people with respect, regardless of gender, race, or background.",
      shortText: "Respect diversity",
      weight: 5,
      version: "1.0.0",
    },
    {
      subPledgeId: "prevent_sexual_harassment",
      text: "maintain a workplace and public conduct free from sexual harassment or misconduct.",
      shortText: "No sexual harassment",
      weight: 3,
      version: "1.0.0",
    },
    {
      subPledgeId: "support_accountability",
      text: "support accountability and consequences for any elected officials or staff who violate these principles.",
      shortText: "Support accountability",
      weight: 7,
      version: "1.0.0",
    },
  ],
};
