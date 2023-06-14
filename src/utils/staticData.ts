/** Interfaces */
import CandidateProfile from "@/interfaces/CandidateProfile";
import CandidateScores from "@/interfaces/CandidateScores";

/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Icons */
import IconChrome from "@/assets/icons/Chrome.svg";
import IconGoogle from "@/assets/icons/Google.svg";

/** Home Page Assets */
import HomeHeroCover from "@/assets/home/HeroCover.svg";
import HomeHeroBackground from "@/assets/home/HeroBackground.svg";
import HomeFeaturesSummaryImage from "@/assets/home/FeaturesSummaryImage.svg";
import HomeFeaturesCompatibilityImage from "@/assets/home/FeaturesCompatibilityImage.svg";
import HomeSkillIconsJavascript from "@/assets/home/skillIcons/Javascript.svg";
import HomeSkillIconsNode from "@/assets/home/skillIcons/Node.svg";
import HomeSkillIconsTypescript from "@/assets/home/skillIcons/Typescript.svg";
import HomeSkillIconsAWS from "@/assets/home/skillIcons/AWS.svg";
import AuthModalImage from "@/assets/home/AuthModalImage.svg";

/** Footer Assets */
import FooterEmailIcon from "@/assets/icons/footer/Email.svg";
import FoooterLinkedinIcon from "@/assets/icons/footer/Linkedin.svg";
import FooterPhoneIcon from "@/assets/icons/footer/Phone.svg";
import FooterTwitterIcon from "@/assets/icons/footer/Twitter.svg";

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
        title: "Let Us Streamline Your Candidate Selection Process",
        subTitle: "Focus on Bigger Picture",
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
        } as {
          [key: string]: {
            title: string;
            description: string;
          };
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
                name: "JavaScript",
                score: 98,
                icon: HomeSkillIconsJavascript,
              },
              {
                name: "Node.js",
                score: 92,
                icon: HomeSkillIconsNode,
              },
              {
                name: "TypeScript",
                score: 94,
                icon: HomeSkillIconsTypescript,
              },
              {
                name: "AWS",
                score: 74,
                icon: HomeSkillIconsAWS,
              },
            ],
          },
          more: {
            button: "Get Started ->",
            buttonLink: "register",
          },
        },
      },
      authModal: {
        titles: {
          login: {
            title: "Welcome Back",
            subTitle:
              "Continue your journey of the streamlining hiring process with us",
          },
          register: {
            title: "Get Started with Us",
            subTitle:
              "it takes only 2 minutes to get started with us and Unleash your full potential",
          },
        } as {
          [key: string]: {
            title: string;
            subTitle: string;
          };
        },
        inputs: [
          {
            name: "firstName",
            label: "First Name",
            type: "text",
            placeholder: "Enter your first name",
            required: true,
            for: ["register"],
            autoComplete: "given-name",
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
            placeholder: "Enter your last name",
            required: true,
            for: ["register"],
            autoComplete: "family-name",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            required: true,
            for: ["register", "login"],
            autoComplete: "email",
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            required: true,
            for: ["register", "login"],
            autoComplete: "current-password",
          },
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm your password",
            required: true,
            for: ["register"],
            autoComplete: "new-password",
          },
        ],
        buttons: {
          submit: {
            label: "Continue",
          },
          google: {
            label: "Continue with Google",
          },
        },
        changeMode: {
          login: {
            label: "Don't have an account?",
            button: {
              label: "Get Started",
              path: "register",
            },
          },
          register: {
            label: "Already have an account?",
            button: {
              label: "Login",
              path: "login",
            },
          },
        } as {
          [key: string]: {
            label: string;
            button: {
              label: string;
              path: string;
            };
          };
        },
        cover: {
          src: AuthModalImage,
          alt: "Automating hiring process",
          width: 371,
          height: 274,
        },
        messages: {
          login: {
            title: "Login Successful",
            description: null,
          },
          register: {
            title: "Registered Successfuly",
            description: null,
          },
        },
      },

      modalAllowedRouteValues: {
        login: true,
        register: true,
      },
    },
    profile: {
      profileInfo: {
        title: "Your Profile",
      },
      history: {
        title: "History",
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
      login: { name: "Login", path: "login" },
      register: { name: "Get Started", path: "register" },
    },
    footer: {
      socialIcons: {
        Phone: { src: FooterPhoneIcon, href: "tel:+919374548784" },
        Email: {
          src: FooterEmailIcon,
          href: "mailto:business@careercopilot.in",
        },
        Linkedin: {
          src: FoooterLinkedinIcon,
          href: "https://www.linkedin.com/company/careercopilot",
        },
        Twitter: {
          src: FooterTwitterIcon,
          href: "https://twitter.com/_careercopilot",
        },
      },
    },
    anylysis: {
      compatibilityScores: {
        title: "Position Match",
        scoreColors: ["orange", "yellow", "lime", "green"],
        accessibility: {
          ariaLabel: "Skill Compatibility Score",
          ariaValueMin: 0,
          ariaValueMax: 100,
        },
      },
    },
    getExtension: {
      // title: "Career Copilot is Better with Extension",
      title: "Take your Hiring process to the Next level",
      description:
        "Career Copilot is directly integrated into LinkedIn to seamlessly provide you with a comprehensive overview of a candidate's skills, experience, and potential fit for your organization",
      cta: {
        label: "Get Chrome Extension Now",
        href: "https://chrome.gooogle.com",
      },
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
        height: 26,
        width: 26,
      },
      google: {
        src: IconGoogle,
        alt: "Google",
      },
    },
    content: {
      or: "or",
    },
  },
};
