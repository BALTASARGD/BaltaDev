import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

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