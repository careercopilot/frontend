/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Icons */
import IconChrome from "@/assets/icons/Chrome.svg";

/** Home Page Assets */
import HomeHeroCover from "@/assets/home/HeroCover.svg";
import HeroBackground from "@/assets/home/HeroBackground.svg";

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { index: PAGE_DATA } = staticData.pages;
      hero: {
        title:
          "Revolutionize your hiring process with AI-driven profile insights",
        cta: "Get Chrome Extension Now",
        cover: {
          src: HomeHeroCover,
          alt: "Simplified hiring process",
        },
        background: {
          src: HeroBackground,
          alt: "Background"
        },
      },
    },
  },
  components: {
    index: {
      // This is an example of data that is used in the home's components.
      // The data can be accessed in the component using the following syntax:
      // import { staticData } from "[RELATIVE_PATH_TO_THIS_FILE]";
      // const { categoriesList: COMPONENT_DATA } = staticData.components.index;
    },
    navbar: {
      login: "Login",
      register: "Get Started",
    },
  },
  general: {
    logo: {
      src: Logo,
      alt: "Career Copilot",
    },
    logoIcon: {
      src: LogoIcon,
      alt: "Career Copilot",
    },
    icons: {
      chrome: {
        src: IconChrome,
        alt: "Chrome",
      },
    },
  },
};
