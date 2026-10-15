/**
 * Verified public contact details, taken from the supplied résumé and LinkedIn profile.
 * Keep this the single source of truth for every outbound link on the site.
 */
export const profile = {
  name: "Maique Moraes",
  jobTitle: "Senior Full Stack Software Engineer",
  email: "maiqued.18@gmail.com",
  linkedin: "https://www.linkedin.com/in/maique-moraes/",
  github: "https://github.com/cybermaique",
  resume: "/maique-moraes-resume.pdf",
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
