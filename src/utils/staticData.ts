/** Interfaces */
import CandidateProfile from "@/interfaces/CandidateProfile";
import CandidateScores from "@/interfaces/CandidateScores";

/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Icons */
import IconChrome from "@/assets/icons/Chrome.svg";

/** Home Page Assets */
import HomeHeroCover from "@/assets/home/HeroCover.svg";
import HomeHeroBackground from "@/assets/home/HeroBackground.svg";
import HomeFeaturesSummaryImage from "@/assets/home/FeaturesSummaryImage.svg";
import HomeFeaturesCompatibilityImage from "@/assets/home/FeaturesCompatibilityImage.svg";
import HomeSkillIconsJavascript from "@/assets/home/skillIcons/Javascript.svg";
import HomeSkillIconsNode from "@/assets/home/skillIcons/Node.svg";
import HomeSkillIconsTypescript from "@/assets/home/skillIcons/Typescript.svg";
import HomeSkillIconsAWS from "@/assets/home/skillIcons/AWS.svg";

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
          src: HomeHeroBackground,
          alt: "Background",
        },
      },
      features: {
        title: "Let Us Sreamline Your Candidate Selection Process",
        subTitle: "Focus On Bigger Picture",
        features: {
          profileSummary: {
            title: "Get Instant LinkedIn Profile Summary",
            description:
              "Our powerful tool provides a comprehensive and compelling summary of the Candidate's LinkedIn profile in the Blink of an eye.",
          },
          compatibilityScores: {
            title: "Check Profile Compatibility with Position",
            description:
              "Evaluate the compatibility of a job applicant's profile with the requirements of a specific job position. By utilizing this feature, HR personnel can quickly and efficiently analyze a candidate's qualifications and identify any potential mismatches or gaps in their skills and experience",
          },
          more: {
            title: "And Many More...",
            description:
              "Unleash your full potential - Get Started now and see the difference",
          },
          examplesData: {
            profileSummary: {
              _id: "",
              firstName: "Zaire",
              lastName: "Stanton",
              position: "Full Stack Developer @XYZ",
              summary:
                "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
              image: HomeFeaturesSummaryImage,
            } as CandidateProfile,
            compatibilityScores: {
              _id: "",
              candidate: {
                _id: "",
                firstName: "Skylar",
                lastName: "Dias",
                image: HomeFeaturesCompatibilityImage,
              },
              position: "Backend Developer",
              positionScore: 89,
              skillScores: [
                {
                  skill: "JavaScript",
                  score: 98,
                  icon: HomeSkillIconsJavascript,
                },
                {
                  skill: "Node.js",
                  score: 92,
                  icon: HomeSkillIconsNode,
                },
                {
                  skill: "TypeScript",
                  score: 94,
                  icon: HomeSkillIconsTypescript,
                },
                {
                  skill: "AWS",
                  score: 75,
                  icon: HomeSkillIconsAWS,
                },
              ],
            } as CandidateScores,
            more: {
              button: "Get Started ->",
            },
          },
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
