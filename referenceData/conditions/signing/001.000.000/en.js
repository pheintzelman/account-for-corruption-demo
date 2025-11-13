export const signing = {
  conditionId: "signing",
  version: "1.0.0",
  required: true,
  text: "I agree to the following:",
  subPoints: [
    {
      id: "accurate_info",
      audience: ["all"],
      text: "By checking this box I am providing my electronic signature to this pledge. My account information is accurate, up to date, and represents me as the individual named on this account. No one is signing this on my behalf.",
    },
    {
      id: "current_version",
      audience: ["all"],
      text: "I am agreeing to the current version as it is today. I may re-sign if a new version is released.",
    },
    {
      id: "politician_commitment",
      audience: ["politician"],
      text: "I commit to follow all of my pledges to the best of my ability.",
    },
    {
      id: "influencer_commitment",
      audience: ["influencer"],
      text: "I commit to conduct myself and use messaging that aligns with these agreements.",
    },
    {
      id: "government_worker_commitment",
      audience: ["government_worker"],
      text: "I commit to exercise my duties and responsibilities in alignment with these agreements.",
    },
    {
      id: "voter_commitment",
      audience: ["voter"],
      text: "I commit to not supporting candidates that don't uphold the pledges I have agreed to.",
    },
    {
      id: "public_record",
      audience: ["politician", "influencer"],
      text: "I understand all of my signings are in the public record. I may update my pledges at any time by re-signing.",
    },
    {
      id: "privacy",
      audience: ["voter", "government_worker"],
      text: "I understand that my signing will be kept private but used anonymously in creating public statistics.",
    },
    {
      id: "english_version",
      audience: ["all"],
      text: "I understand translations are provided for convenience, and I am agreeing to the English version of the text.",
    },
  ],
};
