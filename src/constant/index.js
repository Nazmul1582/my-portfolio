// images of skills
import reactImg from "../assets/images/react.png";  
import tailwindImg from "../assets/images/tailwindcss.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import jsImg from "../assets/images/js.png";
import nodeImg from "../assets/images/nodejs-icon.svg";
import expressImg from "../assets/images/expressjs-icon.png";
import mongoImg from "../assets/images/mongodb.svg";
import gitImg from "../assets/images/git.png";

// images of projects

import p1 from "../assets/images/stay-finder.png";
import p2 from "../assets/images/talent-pulse.png";
import p3 from "../assets/images/brand-shop.png";
import p4 from "../assets/images/my-chat-app.png";
import p5 from "../assets/images/twitter-clone.png";
import p6 from "../assets/images/my-food-website.png";

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
];


export const services = [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Building dynamic web applications using the MERN stack. From database design to frontend interfaces, ensuring seamless integration."
  },
  {
    id: 2,
    title: "Web Development",
    description: "Crafting responsive and interactive websites, focusing on creating solutions that meet client requirements and provide a great user experience."
  },
  {
    id: 3,
    title: "Front End Development",
    description: "Transforming design concepts into intuitive and engaging user interfaces. Utilizing modern frontend technologies like HTML, CSS, and JavaScript."
  },
  {
    id: 4,
    title: "Back End Development",
    description: "Implementing robust server-side logic and APIs. Hands-on experience with backend technologies like Node.js, Express.js, and db management systems."
  },
  {
    id: 5,
    title: "Full Stack Development",
    description: "Full-stack expertise in both frontend and backend technologies. Handling the entire development process from conceptualization to deployment."
  },
  {
    id: 6,
    title: "Responsive Web Design",
    description: "Creating websites that seamlessly adapt to various devices and screen sizes. Specializing in responsive web design for a consistent user experience."
  }
];

export const skills = [
  { id: 1, img: reactImg, name: "React" },
  { id: 2, img: tailwindImg, name: "TailwindCSS" },
  { id: 3, img: htmlImg, name: "HTML" },
  { id: 4, img: cssImg, name: "CSS" },
  { id: 5, img: jsImg, name: "JavaScript" },
  { id: 6, img: nodeImg, name: "NodeJS" },
  { id: 7, img: expressImg, name: "ExpressJS" },
  { id: 8, img: mongoImg, name: "MongoDB" },
  { id: 9, img: gitImg, name: "Git" },
];

export const works = [
  {
    img: p1,
    link1: "https://github.com/stay-finder",
    link2: "https://stay-finder-ed81c.web.app",
  },
  {
    img: p2,
    link1: "https://github.com/talent-pulse",
    link2: "https://talent-pulse-2ba97.web.app",
  },
  {
    img: p3,
    link1: "https://github.com/brand-shop",
    link2: "https://brand-shop-1ffd7.web.app",
  },
  {
    img: p4,
    link1: "https://github.com/Nazmul1582/react-chat-app",
    link2: "https://chat-app-nazmul.netlify.app",
  },
  {
    img: p5,
    link1: "https://github.com/Nazmul1582/twitter-clone",
    link2: "https://twitter-clone-nazmul.vercel.app",
  },
  {
    img: p6,
    link1: "https://github.com/Nazmul1582/food-website-with-react",
    link2: "https://food-website-nazmul.netlify.app",
  }
];