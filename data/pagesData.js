export const pages = {
  home: {
    slug: "Home",
    order: 1,
    customHTML: "String",
    greet: "Hi,",
    title: "I am Júlia",
    subtitle:
      "I bridge the gap between research, design & front-end development.",
    description:
      "As a Product Experience Designer with a frontend mindset, I turn user insights into thoughtful, feasible solutions that feel good to use—and realistic to build.",
    githubURL: "https://github.com/jumaber",
    linkedinURL: "https://www.linkedin.com/in/juliamaribernaus",
    cardGrid: "String", // I could here determine how many cols I use to display?
    aboutTitle: "About Me",
    aboutDescription:
      "I'm a Senior Product Experience Designer with a strong track record of driving design consistency, improving user satisfaction, and contributing to business growth. I believe that great product design requires a solid understanding of how things are built—especially when most resources go into development. This perspective helps me bridge the gap between design and engineering, contributing to solutions that are both thoughtful and scalable. With a background in Fine Arts, entrepreneurial experience as the founder of Artconnect.com, and a career spanning both startups and larger companies, I bring a balance of creativity, structure, and systems thinking to every project.",
    aboutPortrait: "String",
    process: [
      {
        phase: "Mister Spex",
        experienceTitle: "Senior Product Experience Designer",
        experienceLocation: "Berlin, Germany",
        experiencePeriod: "Apr 2021 - Oct 2024",
        highlights: [
          "Redesigned the Lens Configuration Page to eliminate legacy constraints and reduce maintenance risk. Despite the complexity and impact of the changes, CVR remained stable post-launch—an encouraging sign of product-market fit and a strong foundation for future optimization.",
          "Led up to 3 user research cycles per month using a mix of qualitative and quantitative methods to drive iterative design and support A/B testing. Informed product decisions for the Lens Configurator and other core journeys.",
          "Streamlined the login and registration experience by rearchitecting flows with Auth0, simplifying edge cases, and improving usability. Resulted in a 20% increase in sign-ups while lowering engineering overhead and security risks.",
          "Defined the early design direction for the Premium Private Lenses Label in close collaboration with developers, category managers, and brand teams—delivering launch-ready assets within two months and aligning digital and in-store touchpoints.",
          "Overhauled all company marketing and transactional emails by auditing existing communications and building a scalable, responsive design system in Emarsys. Enabled a reduced Marketing team and external partners to deliver consistent, high-quality campaigns to millions of users.",
        ],
      },
      {
        phase: "CareerFoundry",
        experienceTitle: "UX Mentor",
        experienceLocation: "Remote",
        experiencePeriod: "2020 - 2021",
        highlights: [
          "Mentored over 20 aspiring UX designers through CareerFoundry’s intensive program.",
          "Gave detailed feedback on design projects and portfolio work, helping students land jobs in the industry.",
        ],
      },
      {
        company: "Freelancing",
        title: "UX/UI Designer",
        location: "Berlin, Germany",
        period: "2018 - 2020",
        highlights: [
          "Designed and built websites and apps for startups in health, e-commerce, and education.",
          "Balanced branding, usability, and performance in fast-paced MVP delivery.",
        ],
      },
      {
        company: "Artconnect",
        title: "Founder & CEO",
        location: "Berlin, Germany",
        period: "2012 - 2018",
        highlights: [
          "Founded and grew Artconnect into a thriving creative community platform with over 25,000 users.",
          "Managed product, partnerships, community, and design while building a small team from scratch.",
        ],
      },
    ],
    contactTitle: "String",
    contactDescription: "String",
    contactButton: "String",
    contactButtonURL: "String",
  },
  imprint: {
    slug: "Imprint",
    order: 2,
    customHTML: "String",
  },
};

export default pages;
