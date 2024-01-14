/** Interfaces */
import CandidateProfile from "@/interfaces/CandidateProfile";

/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Icons */
import IconChrome from "@/assets/icons/Chrome.svg";
import IconGoogle from "@/assets/icons/Google.svg";

/** Home Page Assets */
import AuthModalImage from "@/assets/home/AuthModalImage.svg";
import HomeFeaturesCompatibilityImage from "@/assets/home/FeaturesCompatibilityImage.svg";
import HomeFeaturesSummaryImage from "@/assets/home/FeaturesSummaryImage.svg";
import HomeHeroBackground from "@/assets/home/HeroBackground.svg";
import HomeHeroCover from "@/assets/home/HeroCover.svg";
import PricingPlanIcon1 from "@/assets/home/pricing/PlanIcon-1.svg";
import PricingPlanIcon2 from "@/assets/home/pricing/PlanIcon-2.svg";
import PricingPlanIcon3 from "@/assets/home/pricing/PlanIcon-3.svg";
import HomeSkillIconsAWS from "@/assets/home/skillIcons/AWS.svg";
import HomeSkillIconsJavascript from "@/assets/home/skillIcons/Javascript.svg";
import HomeSkillIconsNode from "@/assets/home/skillIcons/Node.svg";
import HomeSkillIconsTypescript from "@/assets/home/skillIcons/Typescript.svg";

/** Footer Assets */
import FooterEmailIcon from "@/assets/icons/footer/Email.svg";
import FoooterLinkedinIcon from "@/assets/icons/footer/Linkedin.svg";
import FooterPhoneIcon from "@/assets/icons/footer/Phone.svg";
import FooterTwitterIcon from "@/assets/icons/footer/Twitter.svg";

/** Interfaces */
import Opening from "@/interfaces/Opening";

/** Tabler Icons */
import {
  IconAffiliate,
  IconBriefcase,
  IconChartDots3,
  IconChecklist,
  IconEdit,
  IconFileAlert,
  IconFileCheck,
  IconFileDescription,
  IconLayoutDashboard,
  IconListDetails,
  IconLoader3,
  IconReportAnalytics,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export const LINKEDIN_BASE_URL = "https://www.linkedin.com/in/";
export const CHROME_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/career-copilot/ifpbcfpkdpfkblkfnefmkngnkkkieckm";

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "@/utils/staticData";
      // const { index: PAGE_DATA } = staticData.pages;
      hero: {
        title:
          "Revolutionize your hiring process with AI-driven profile insights",
        cta: "Get Started Now ->",
        chip: "Get Chrome Extension for LinkedIn",
        ctaLink: "/app",
        cover: {
          src: HomeHeroCover,
          alt: "Simplified hiring process",
        },
        background: {
          src: HomeHeroBackground,
          alt: "Background",
        },
      },
      pricing: {
        title: "Our pricing plans",
        badge: "pricing",
        features: "What's included?",
        monthly: "/ month",
        plans: [
          {
            scale: 0.95,
            title: "Free",
            badge: "For Trial",
            icon: PricingPlanIcon1,
            description:
              "Get experience of AI models to assist you in hiring right talent faster",
            features: [
              "All analytics features",
              "Complete Application Tracking",
              "Up to 10 Candidates",
              "Up to 2 Roles",
            ],
            price: "0",
            priceUnit: "month",
          },
          {
            scale: 1,
            title: "Pro",
            badge: "For SMEs",
            icon: PricingPlanIcon2,
            description:
              "Get the best out of our App and Unleash your full potential",
            features: [
              "All analytics features",
              "Complete Application Tracking",
              "2K Applications then .25$/profile",
              "Unlimited Roles",
            ],
            price: "499",
            priceUnit: "month",
            highlight: true,
            popular: true,
          },
          {
            scale: 0.95,
            title: "Enterprise",
            badge: "Custom",
            icon: PricingPlanIcon3,
            description: "Need something customized for your organization?",
            features: [
              "All analytics features",
              "Complete Application Tracking",
              "5k Applications then .2$/profile",
              "Up to 50 team members",
            ],
            price: "999",
            priceUnit: "",
            additionalButtons: {
              contact: {
                label: "Contact Us",
                href: "mailto:",
              },
            },
          },
        ],
        getStarted: "Get Started",
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
            position: "Graphic Designer @Pinterest",
            summary:
              "Creative Graphic Designer with a passion for visual storytelling. Expertise in brand identity, digital and print design. Seeking new opportunities to create captivating visuals that inspire and engage audiences.",
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
            loggedInButton: "Explore on LinkedIn ->",
            loggedInButtonLink: LINKEDIN_BASE_URL,
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
        company: {
          name: "company",
          label: "Company",
          type: "text",
          placeholder: "Enter your company name",
          required: true,
          for: ["register"],
          autoComplete: "given-name",
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
          google: {
            title: "Google Authentication Successful",
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
      title: "Company Profile",
      inputs: [
        {
          label: "Company Name",
          placeholder: "Enter Company Name",
          required: true,
          key: "organization",
        },
        {
          label: "Admin First Name",
          placeholder: "Enter Admin First Name",
          required: true,
          key: "firstName",
        },
        {
          label: "Admin Last Name",
          placeholder: "Enter Admin Last Name",
          required: true,
          key: "lastName",
        },
      ],
      mail: {
        label: "Email",
      },
      save: "Save",
    },
    dashboard: {
      greetings: (name?: string) => `Hello, ${name || "there"} 👋!`,
      buttons: {
        addOpening: {
          label: "Add Opening",
          path: "/app/add-opening",
        },
        addApplications: {
          label: "Add Applications",
          path: "/app/openings/add-applications",
        },
      },
      insights: [
        {
          label: "Total Resumes Screened this Week",
          key: "totalResumesScreened",
          Icon: IconChecklist,
        },
        {
          label: "Job Openings Added this Week",
          key: "jobOpeningsAdded",
          Icon: IconBriefcase,
        },
        {
          label: "Currently Open Positions",
          key: "openPositions",
          Icon: IconListDetails,
        },
        {
          label: "Week's Average Matching Score",
          key: "averageMatchingScore",
          Icon: IconChartDots3,
        },
      ],
      recentActivity: {
        title: "Recent Activity",
        // more: (count: number) => `+${count} more`,
        // toShow: 10,
        close: "Close All",
      },
      openPositions: {
        title: "Open Positions",
        filled: ({ filled, total }: { filled: number; total: number }) =>
          `${filled}/${total}`,
        stats: [
          {
            Icon: IconReportAnalytics,
            key: "success",
            color: "green",
            label: "Successfully processed",
          },
          {
            Icon: IconLoader3,
            key: "processing",
            color: "primary",
            label: "Currently processing",
          },
          {
            Icon: IconFileAlert,
            key: "error",
            color: "red",
            label: "Profiles with errors",
          },
          {
            Icon: IconFileDescription,
            key: "total",
            color: "yellow",
            label: "Total Profiles uploaded",
          },
        ],
        empty: "No Open Positions",
        error:
          "Something went wrong while fetching your open positions. Please try again later",
      },
      topCandidates: {
        title: "Top Candidates",
        empty: "No Top Candidates",
        error:
          "Something went wrong while fetching your top candidates. Please try again later",
      },
    },
    openigs: {
      title: "Openings",
      filled: ({ filled, total }: { filled: number; total: number }) =>
        `${filled}/${total}`,
      stats: [
        {
          Icon: IconReportAnalytics,
          key: "success",
          color: "green",
          label: "Successfully processed",
        },
        {
          Icon: IconLoader3,
          key: "processing",
          color: "primary",
          label: "Currently processing",
        },
        {
          Icon: IconFileAlert,
          key: "error",
          color: "red",
          label: "Profiles with errors",
        },
        {
          Icon: IconFileDescription,
          key: "total",
          color: "yellow",
          label: "Total Profiles uploaded",
        },
      ],
      add: {
        label: "Add Opening",
        href: "/app/add-opening",
      },
      menu: {
        markAsClosed: {
          label: "Mark as Closed",
          Icon: IconFileCheck,
          color: "teal",
        },
        edit: {
          label: "Edit",
          Icon: IconEdit,
          color: "yellow",
        },
        delete: {
          label: "Delete",
          Icon: IconTrash,
          color: "red",
        },
      },
      empty: "No Openings",
      error:
        "Something went wrong while fetching your openings. Please try again later",
    },
    openingDetails: {
      overview: [
        {
          label: "Company/Department",
          renderValue: (data: Opening) => data.companyDepartment,
        },
        { label: "Type", renderValue: (data: Opening) => data.type },
        {
          label: "YOE",
          renderValue: (data: Opening) =>
            `${data.requiredExperience.min} - ${data.requiredExperience.max} YOE`,
        },
        {
          label: "Skills",
          renderValue: (data: Opening) => `${data.skills.length} Skills`,
        },
      ],
      progress: {
        label: "Progress",
        filled: ({ filled, total }: { filled: number; total: number }) =>
          `${filled}/${total} sortlisted`,
      },
      applications: {
        title: "Applications",
        stats: [
          {
            Icon: IconReportAnalytics,
            key: "success",
            color: "green",
            label: "processed",
          },
          {
            Icon: IconLoader3,
            key: "processing",
            color: "primary",
            label: "in progress",
          },
          {
            Icon: IconFileAlert,
            key: "error",
            color: "red",
            label: "with issues",
          },
          {
            Icon: IconFileDescription,
            key: "total",
            color: "yellow",
            label: "uploaded",
          },
        ],
        selection: {
          selected: "Selected",
          select: "select",
        },
        add: {
          label: "Add applications",
          href: "/app/openings/add-applications",
        },
        scoreColors: ["orange", "yellow", "lime", "green"],
        accessibility: {
          ariaLabel: "Skill Compatibility Score",
          ariaValueMin: 0,
          ariaValueMax: 100,
        },
        summary: "Quick Summary",
      },
    },
    addApplications: {
      title: "Add Applications",
      select: {
        label: "Opening",
        placeholder: "Select opening",
      },
      upload: {
        title: "Upload Candidate Resumes",
        description:
          "Please upload resumes in PDF format.You can upload multiple files at once up to 100 Maximum file size: 10MB per resume.",
        submit: "Submit ->",
        input: {
          title: "Drag & drop Resume or Browse",
          subtitle: "Supported formats: PDF",
          selected: "Selected files",
          count: (count: number) => `${count} selected`,
        },
        tip: [
          "Tip: You can also use our ",
          "Chrome extension",
          " for quick screening through LinkedIn profiles.",
        ],
      },
    },
    addOpening: {
      title: "Add Opening",
      inputs: {
        title: {
          label: "Title",
          placeholder: "Add Opening",
        },
        companyDepartment: {
          label: "For Company/Department",
          placeholder: "Alphabet / ML Engineer",
        },
        type: {
          label: "Position Type",
          suggestions: ["Full Time", "Part Time", "Internship", "Contract"],
        },
        total: {
          label: "No of postions",
          default: 5,
        },
        experience: {
          label: "Required Experience",
          range: [0, 20],
        },
        skill: {
          title: "Skills",
          placeholder: "Add Skill",
          nothingFound: "No Skills Found for the given keyword",
          searchPlaceholder: "Search Skills by Keyword",
        },
      },
      submit: "Continue",
    },
    chromeExtension: {
      title: ["Screening using ", "LinkedIn", "?"],
      description:
        "Career Copilot is directly integrated into LinkedIn to Quickly and seamlessly provide you with a comprehensive overview of a candidate's skills, experience, and potential fit for your organization ",
      cta: "Get Chrome Extension Now",
      benefits: [
        "One-Click Candidate Evaluation",
        "Seamless Integration",
        "Smart Candidate Ranking",
      ],
    },
    contactUs: {
      title: ["Contact ", "Us"],
      description:
        "We are always happy to hear from you. Please feel free to reach out to us for any queries or feedback.",
      links: [
        {
          src: FooterPhoneIcon,
          href: "tel:+919374548784",
          label: "Call",
        },
        {
          src: FooterEmailIcon,
          href: "mailto:business@careercopilot.in",
          label: "Email",
        },
        {
          src: FoooterLinkedinIcon,
          href: "https://www.linkedin.com/company/careercopilot",
          label: "LinkedIn",
        },
        {
          src: FooterTwitterIcon,
          href: "https://twitter.com/_careercopilot",
          label: "Twitter",
        },
      ],
    },
  },
  components: {
    index: {
      // This is an example of data that is used in the home's components.
      // The data can be accessed in the component using the following syntax:
      // import { staticData } from "@/utils/staticData";
      // const { categoriesList: COMPONENT_DATA } = staticData.components.index;
    },
    navbar: {
      login: { name: "Login", path: "login" },
      register: { name: "Schedule a Demo", path: "register" },
      menuOptions: {
        profile: { key: "profile", name: "Profile", path: "/profile" },
        logout: { key: "logout", name: "Logout" },
      },
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
    appShell: {
      header: {
        links: [
          {
            label: "Chrome Extension",
            href: "/app/chrome-extension",
          },
          {
            label: "Contact us",
            href: "/app/contact-us",
          },
        ],
      },
      navbar: {
        links: [
          {
            Icon: IconLayoutDashboard,
            href: "/app",
            isActive: (path: string) => path === "/app",
          },
          {
            Icon: IconFileDescription,
            href: "/app/openings",
            isActive: (path: string) => path.startsWith("/app/openings"),
          },
          {
            Icon: IconAffiliate,
            href: "/app/add-opening",
            isActive: (path: string) => path.startsWith("/app/add-opening"),
          },
        ],
        settings: {
          Icon: IconSettings,
          href: "/app/settings",
          isActive: (path: string) => path.startsWith("/app/settings"),
        },
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
      popular: "Popular",
    },
  },
};
