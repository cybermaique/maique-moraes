/**
 * Verified public contact details, taken from the supplied resume and LinkedIn profile.
 * Keep this the single source of truth for every outbound link on the site.
 */
export const profile = {
  name: "Maique Moraes",
  jobTitle: "Senior Full Stack Software Engineer",
  email: "maiqued.18@gmail.com",
  linkedin: "https://www.linkedin.com/in/maique-moraes/",
  github: "https://github.com/cybermaique",
  resume: "/maique-moraes-resume.pdf",
  /** This website's public repository. */
  sourceCode: "https://github.com/cybermaique/maique-moraes-portfolio",
  /** João Pessoa observes UTC−3 all year (no daylight saving time). */
  timeZone: "America/Fortaleza",
  utcOffsetMinutes: -180,
  location: { city: "João Pessoa", region: "Paraíba", country: "Brazil", countryCode: "BR" },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Retrieval-augmented generation",
    "Model Context Protocol",
    "Design systems",
    "Automated testing",
  ],
} as const;
