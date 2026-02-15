export type Sponsor = {
  id: string;
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  website?: string;
};

export const sponsorsData: Sponsor[] = [
  // Add your sponsors here
  // Example:
  // {
  //   id: "sponsor-1",
  //   name: "Tech Corp",
  //   logo: "/images/sponsors/tech-corp.png",
  //   tier: "platinum",
  //   website: "https://techcorp.com",
  // },
];

export const SPONSOR_CONTACT_EMAIL = "epitome@staloysius.ac.in";
