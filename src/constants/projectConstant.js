import PortfolioImg from "../assets/portfolio.jpeg";
import TasteTroopImg from "../assets/tastetroop.jpeg";

const projectsData = [
  {
    id: 1,
    name: "TasteTroop",
    description: "A Restaurant website to explore menu and order food items.",
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
];

export default projectsData;
