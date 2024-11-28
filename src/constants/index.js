import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  csharp,
  cplusplus,
  dotnetcore,
  playwright,
  reactjs,
  tailwind,
  nodejs,
  git,
  rts,
  gdsc,
  ycit,
  p1,
  p2,
  p3,
  threejs,
  dart,
  flutter,
  python,
  postman,
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
    name: "CSHARP",
    icon:  csharp,
  },
  {
    name: "DOTNETCORE",
    icon:   dotnetcore,
  },
  {
    name: "PLAYWRIGHT",
    icon:   playwright,
  },
  {
    name: "DART",
    icon:   dart,
  },
  {
    name: "FLUTTER",
    icon:   flutter,
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
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Postman",
    icon: postman,
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
    title: "IT Intern & Administration.",
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
      "Hasan is a passionate, experienced, and highly skilled professional. I’ve had the pleasure of working with him, and his expertise consistently impressed me. His problem-solving abilities and dedication reflect a strong commitment to personal growth. I thoroughly enjoyed collaborating with Hasan and highly recommend him for any project or team.",
    name: "Ahmad Alrai",
    designation: "full-stack developer",
    company: "RTS",
    image: "https://ahmadalrai.com/_next/image?url=%2FintroImg.jpg&w=256&q=95",
  },
  
];

const projects = [
  {
    name: "Smart Bank",
    description:
      "Smart Bank is a C# application that simplifies banking operations, enabling efficient account management and seamless financial transactions.",
    tags: [
      {
        name: "SmartBank",
        color: "blue-text-gradient",
      },
      {
        name: "Csharp",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/hasanfuaad/SmartBank-opp",
  },
  {
    name: "Hospital",
    description:
      "Hospital System is a small C# application designed to streamline hospital operations, managing patient records, appointments, and staff efficiently.",
    tags: [
      {
        name: "Hospital",
        color: "blue-text-gradient",
      },
      {
        name: "Csharp",
        color: "green-text-gradient",
      },
     
    ],
    image: p2,
    source_code_link: "https://github.com/hasanfuaad/Hospital-System",
  },
  {
    name: "eBusiness Company",
    description:
      "eBusiness is a company website built using a free template, leveraging HTML, CSS and JavaScript, to create a functional and visually appealing online presence.",
    tags: [
      {
        name: "eBusiness",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/hasanfuaad/eBusiness-Company-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
