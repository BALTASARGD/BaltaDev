import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

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
        icon: "/assets/icons/htmlicon.svg", // Ruta correcta
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: "/assets/icons/cssicon.svg", // Ruta correcta
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: "public/assets/icons/javascripticon.svg", // Ruta correcta
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: "public/assets/icons/typescripticon.svg", // Ruta correcta
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: "public/assets/icons/reacticon.svg", // Ruta correcta
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: "public/assets/icons/nodejsicon.svg", // Ruta correcta
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: "/assets/icons/tailwindicon.svg", // Ruta correcta
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: "public/assets/icons/sassicon.svg", // Ruta correcta
        color: "#CC6699",
      },
    ],
  },
] as const;

export const projectsData = [
  {
    name: "Find Countries App",
    url: "https://dci-spa-find-countries-app-witv.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/Dci_SPA_FindCountriesApp",
    image: "/assets/images/projects_img/FindCountriesApp.png", // Ruta correcta
    tags: ["React", "API", "CSS"],
  },
  {
    name: "The Modern House",
    url: "https://baltasargd.github.io/The-Modern-House/",
    githubUrl: "https://github.com/BALTASARGD/The-Modern-House",
    image: "/assets/images/projects_img/TheModernHouse.png", // Ruta correcta
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio BGD",
    url: "https://portfolio-bgd.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/PORTFOLIO-BGD",
    image: "/assets/images/projects_img/PortfolioBGD.png",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    name: "To-Do List",
    url: "https://to-do-list-mauve-eta.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/To-Do-List",
    image: "/assets/images/projects_img/ToDoList.png",
    tags: ["React", "CSS", "LocalStorage"],
  },
  {
    name: "Tarjeta Mercedes Benz",
    url: "https://tarjeta-mercedes-benz.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/Tarjeta-Mercedes-Benz",
    image: "/assets/images/projects_img/MercedesBenzCard.png",
    tags: ["HTML", "CSS"],
  },
  {
    name: "Weather App",
    url: "https://web-dev-course-spa-weather-app.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/WebDevCourse_SPA__Weather_App-",
    image: "/assets/images/projects_img/WeatherApp.png",
    tags: ["React", "API", "CSS"],
  },
];