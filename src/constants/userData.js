import SRMImg from "../assets/srm.svg";
import TCSImg from "../assets/tcs.svg";
import PortfolioImg from "../assets/portfolio.jpeg";
import TasteTroopImg from "../assets/tastetroop.jpeg";
import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import HTMLIcon from "../assets/HTML5.svg";
import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";

export const userData = {
  name: "Rahul Kumar Mishra",
  location: "Delhi, India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Rahul Mishra. A dedicated frontend professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://www.linkedin.com/in/thecyberatom/",
    github: "https://github.com/TheCyberAtom",
    email: "rkm.rahulkmishra@gmail.com",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },
      {
        id: 2,
        name: "TypeScript",
        type: "Programming Language",
        image: TypeScriptIcon,
      },

      // Frontend Libraries and Frameworks
      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },
      {
        id: 4,
        name: "Next.js",
        type: "React Framework",
        image: NextJsIcon,
      },

      // Styling and CSS Frameworks
      // {
      //   id: 5,
      //   name: "Tailwind CSS",
      //   type: "CSS Framework",
      //   image: TailwindIcon,
      // },

      // Backend and Databases
      {
        id: 6,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: NodeJsIcon,
      },
      {
        id: 7,
        name: "Express",
        type: "Web Framework",
        image: ExpressIcon,
      },
      {
        id: 8,
        name: "MongoDB",
        type: "Database",
        image: MongoDBIcon,
      },

      // Tools and Version Control
      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
      {
        id: 1,
        title: "Senior React Developer",
        company: "Tata Consultancy Services",
        location: "Bengaluru, India",
        year: "Jul 2023 - Present",
        role: "Leading a team of frontend developers, I ensure on-time delivery of projects while enhancing security through Microsoft Authentication Library integration and optimizing performance by developing reusable components.",
        image: TCSImg,
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Tata Consultancy Services",
        location: "Bengaluru, India",
        year: "Jul 2021 - Jun 2023",
        role: "I developed an admin dashboard to streamline data visualization, significantly reduced turnaround time, and enhanced application performance while creating user-friendly tools and improving engagement through real-time notifications.",
        image: TCSImg,
      },
    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "SRM Institute of Science and Technology",
        year: "Jul 2017 - May 2021",
        image: SRMImg,
      },
    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 1,
        name: "TasteTroop",
        description:
          "A Restaurant website to explore menu and order food items.",
        techStack: [
          "JavaScript",
          "React",
          "React Router",
          "Node Js",
          "Express",
          "MongoDB",
        ],
        image: TasteTroopImg,
        github: "https://github.com/TheCyberAtom/TasteTroop",
        website: "https://tastetroop.onrender.com/",
      },
      {
        id: 2,
        name: "Portfolio V1",
        description: "A personal portfolio to showcase my projects and skills.",
        techStack: ["JavaScript", "React", "CSS", "GSAP", "Netlify"],
        image: PortfolioImg,
        github: "https://github.com/TheCyberAtom/My-PortFolio",
        website: "https://thecyberatom-v1.netlify.app/",
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's code your vision together.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
