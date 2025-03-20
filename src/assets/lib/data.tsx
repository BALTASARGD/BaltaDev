import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import adobexdicon from '../icons/adobexdicon.svg';
import htmlicon from '../icons/htmlicon.svg';
import cssicon from '../icons/cssicon.svg';
import javascripticon from '../icons/javascripticon.svg';
import typescripticon from '../icons/typescripticon.svg';
import sassscssicon from '../icons/sassicon.svg';
import reacticon from '../icons/reacticon.svg';
import nodejsicon from '../icons/nodejsicon.svg';
import tailwindcssicon from '../icons/tailwindicon.svg';
import figmaicon from '../icons/figmaicon.svg';
import canvaicon from '../icons/canvaicon.svg';

export const sideBarRightMail = {
    link: "mailto:myemail@com",
    text: "baltakoeln@icloud.com",
  } as const;

export const sideBarLeftSocials = [
    {
      link: "https://www.linkedin.com/in/Baltademonio/",
      icon: FiLinkedin,
      altimgname: "linkedin",
    },
    {
      link: "https://github.com/BALTASARGD",
      icon: FiGithub,
      altimgname: "github",
    },
    {
      link: "mailto:myemail@com",
      icon: FiMail,
      altimgname: "mail",
    },
  ] as const;

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Balt",
    en: "Hi, I'm Balta",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Ich bin Balta, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Balta, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: "./src/assets/images/FotoPerfil.jpeg", // Asegúrate de que esta ruta sea correcta
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: "src/assets/icons/Git-Icon-1788C.svg", // Agregar el ícono correcto aquí
        color: "#F05032",
      },
      {
        title: "Linux",
        hash: "#Linux",
        icon: "src/assets/icons/Linux.svg", // Agregar el ícono correcto aquí
        color: "#FCC624",
      },
      {
        title: "GitHub",
        hash: "#GitHub",
        icon: "src/assets/icons/github-color.svg", // Agregar el ícono correcto aquí
        color: "#181717",
      },
      {
        title: "Markdown",
        hash: "#Markdown",
        icon: "src/assets/icons/markdown-svgrepo-com.svg", // Agregar el ícono correcto aquí
        color: "#000000",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: "src/assets/icons/free-bootstrap-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175203.webp", // Agregar el ícono correcto aquí
        color: "#7952B3",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: "src/assets/icons/vite.svg", // Agregar el ícono correcto aquí
        color: "#646CFF",
      },
      {
        title: "Visual Studio Code",
        hash: "#Visual Studio Code",
        icon: "src/assets/icons/Visual_Studio_Code_1.35_icon.svg.png", // Agregar el ícono correcto aquí
        color: "#007ACC",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;