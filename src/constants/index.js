import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  cplusplus,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  rts,
  gdsc,
  ycit,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Integration Test Engineer",
    icon: mobile,
  },
  {
    title: "UX & UI ",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CPLUSPLUS",
    icon: cplusplus,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Developer & Software Tester",
    company_name: "RTS Company, Tharwat for Financial Services & Investment Group",
    icon: rts,
    iconBg: "#383E56",
    date: "2024 - now",
    points: [
      "Conducted rigorous integration testing on system APIs, identifying and resolving issues to ensure robust functionality and performance.",
      "Developed APIs using ASP.NET, and using Azure DevOps .And collaborated closely with crossfunctional teams to optimize API performance and enhance overall system reliability",
      "Designed and implemented user interfaces using Flutter, contributing to a seamless and responsive userexperience across multiple platforms.",
      ],
  },
  {
    title: "Team Leader & Speaker",
    company_name: "Google Developers Student Club - Saba University",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Collaborated with experts from diverse Middle Eastern countries to design and implement several educational courses, both locally and internationally.",
      "Organized a series of events and activities focusing on the forefront of technological advancements,creating forums for knowledge exchange and exploration of the latest trends.",
    ],
  },
  {
    title: "IT Intern – & Administration.",
    company_name: "Yemen Center Information Technology in Higher Education",
    icon: ycit,
    iconBg: "#383E56",
    date: " 2020 - 2023",
    points: [
      "During my stint as a trainee at the Information Technology Center in Higher Education, I fine-tuned both administrative and programming skills. This hands-on experience allowed me to actively participate in various projects across different business areas, showcasing adaptability and contributing meaningfully to each endeavor.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
