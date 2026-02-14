export type Rule = {
  id: string;
  text: string;
  icon: string;
};

export const generalRules: Rule[] = [
  {
    id: "g1",
    text: "Open to all college students with valid ID cards.",
    icon: "→",
  },
  {
    id: "g2",
    text: "Maximum team size: 4 members per team.",
    icon: "→",
  },
  {
    id: "g3",
    text: "Registration closes 2 days before the event.",
    icon: "→",
  },
  {
    id: "g4",
    text: "Individual participation allowed for all events.",
    icon: "→",
  },
  {
    id: "g5",
    text: "No registration fees - completely free entry.",
    icon: "→",
  },
];

export const additionalRules: Rule[] = [
  {
    id: "a1",
    text: "All participants must register through the official Google Form.",
    icon: "→",
  },
  {
    id: "a2",
    text: "Report to the venue 30 minutes before your event starts.",
    icon: "→",
  },
  {
    id: "a3",
    text: "Bring your college ID card and registration confirmation.",
    icon: "→",
  },
  {
    id: "a4",
    text: "Refreshments and lunch will be provided to all participants.",
    icon: "→",
  },
  {
    id: "a5",
    text: "Winners will be announced on the same day with prizes.",
    icon: "→",
  },
  {
    id: "a6",
    text: "Follow the code of conduct and respect fellow participants.",
    icon: "→",
  },
];
