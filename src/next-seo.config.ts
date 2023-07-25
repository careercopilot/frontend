import { DefaultSeoProps } from "next-seo";

// <link rel="icon" href="/favicon.ico" />
// <title>
//   Career Copilot : Revolutionize your hiring process with AI
// </title>
// <meta
//   name="title"
//   content="Career Copilot : Revolutionize your hiring process with AI"
// />
// <meta
//   name="description"
//   content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
// />

// <meta property="og:type" content="website" />
// <meta property="og:url" content="https://www.careercopilot.in/" />
// <meta
//   property="og:title"
//   content="Career Copilot : Revolutionize your hiring process with AI"
// />
// <meta
//   property="og:description"
//   content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
// />
// <meta property="og:image" content="/og.png" />

// <meta property="twitter:card" content="summary_large_image" />
// <meta property="twitter:url" content="https://www.careercopilot.in/" />
// <meta
//   property="twitter:title"
//   content="Career Copilot : Revolutionize your hiring process with AI"
// />
// <meta
//   property="twitter:description"
//   content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
// />
// <meta property="twitter:image" content="/og.png"></meta>

const config: DefaultSeoProps = {
  title:
    "Career Copilot : #1 AI Hiring Tool, Speed Up Your Hiring With AI, Candidate Screening with AI",
  description:
    "Our AI-based solution provides advanced profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. 4X your productivity with career copilot. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams",
  canonical: "https://www.careercopilot.in/",
  themeColor: "#0F89F9",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.careercopilot.in/",
    siteName: "Career Copilot",
    title: "Career Copilot : Revolutionize your hiring process with AI",
    description:
      "Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams",
    images: [
      {
        url: "/og.png",
        width: 800,
        height: 600,
        alt: "Career Copilot",
        type: "image/png",
      },
      {
        url: "/twitter-og.png",
        width: 1200,
        height: 630,
        alt: "Career Copilot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    site: "@_careercopilot",
    cardType: "summary_large_image",
    handle: "@_careercopilot",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Career Copilot, Hiring Copilot, AI Profile Insights, AI candidate Insights, AI candidate evaluation, AI, Artificial Intelligence, Hiring, Recruitment, Hiring Process, Hiring Platform, Hiring Software, AI Profile Comparison, AI Hiring, AI Hiring Platform, AI Hiring Software",
    },
    {
      name: "twitter:image",
      content: "/twitter-og.png",
    },
  ],
};

export default config;
