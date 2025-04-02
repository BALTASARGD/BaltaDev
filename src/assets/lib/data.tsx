import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

import htmlicon from '../icons/htmlicon.svg';
import cssicon from '../icons/cssicon.svg';
import javascripticon from '../icons/javascripticon.svg';
import typescripticon from '../icons/typescripticon.svg';
import sassscssicon from '../icons/sassicon.svg';
import reacticon from '../icons/reacticon.svg';
import nodejsicon from '../icons/nodejsicon.svg';
import tailwindcssicon from '../icons/tailwindicon.svg';

export const sideBarRightMail = {
  link: "mailto:baltakoeln@icloud.com",
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
    link: "mailto:baltakoeln@icloud.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

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
        icon: "src/assets/icons/Git-Icon-1788C.svg",
        color: "#F05032",
      },
      {
        title: "Linux",
        hash: "#Linux",
        icon: "src/assets/icons/Linux.svg",
        color: "#FCC624",
      },
      {
        title: "GitHub",
        hash: "#GitHub",
        icon: "src/assets/icons/github-color.svg",
        color: "#181717",
      },
      {
        title: "Markdown",
        hash: "#Markdown",
        icon: "src/assets/icons/markdown-svgrepo-com.svg",
        color: "#000000",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: "src/assets/icons/free-bootstrap-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175203.webp",
        color: "#7952B3",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: "src/assets/icons/vite.svg",
        color: "#646CFF",
      },
      {
        title: "Visual Studio Code",
        hash: "#Visual Studio Code",
        icon: "src/assets/icons/Visual_Studio_Code_1.35_icon.svg.png",
        color: "#007ACC",
      },
    ],
  },
] as const;