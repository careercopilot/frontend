import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";

import type { Metadata } from "next";
import { Viewport } from "next";
import { Manrope } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import ClinetProvider from "@/app/clinetProvider";
import config from "@/utils/config";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";

const manropeFont = Manrope({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title:
    "Career Copilot : #1 AI Hiring Tool, Speed Up Your Hiring With AI, Candidate Screening with AI",
  description:
    "Our AI-based solution provides advanced profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. 4X your productivity with career copilot. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams",
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
    card: "summary_large_image",
    creator: "@_careercopilot",
    creatorId: "https://twitter.com/_careercopilot",
    images: [
      {
        url: "/twitter-og.png",
        width: 1200,
        height: 630,
        alt: "Career Copilot",
        type: "image/png",
      },
    ],
  },
  keywords:
    "Career Copilot, Hiring Copilot, AI Profile Insights, AI candidate Insights, AI candidate evaluation, AI, Artificial Intelligence, Hiring, Recruitment, Hiring Process, Hiring Platform, Hiring Software, AI Profile Comparison, AI Hiring, AI Hiring Platform, AI Hiring Software",
  metadataBase: new URL("https://www.careercopilot.in/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F89F9",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={manropeFont.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <ColorSchemeScript
          forceColorScheme="light"
          defaultColorScheme="light"
        />
      </head>

      <body className={manropeFont.className}>
        <NextTopLoader showSpinner={false} color="#0F89F9" />
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
          <MantineProvider
            theme={createTheme({
              /** Mantine theme override here */
              colors: {
                primary: [
                  "#F5F9FF",
                  "#A8D9FF",
                  "#72C2FF",
                  "#43ADFF",
                  "#1E9AFF",
                  "#0F89F9",
                  "#0078F4",
                  "#0069DA",
                  "#005BBD",
                  "#004FA5",
                ],
                secondary: [
                  "#EDEEF6",
                  "#5F6EBB",
                  "#29377C",
                  "#131C4E",
                  "#070E32",
                  "#010620",
                  "#00010A",
                  "#000003",
                  "#000001",
                  "#000107",
                ],
                black: [
                  "#000000",
                  "#111111",
                  "#222222",
                  "#333333",
                  "#444444",
                  "#555555",
                  "#666666",
                  "#777777",
                  "#888888",
                  "#999999",
                ],
              },
              primaryShade: 5,
              primaryColor: "primary",
              fontFamily: manropeFont.style.fontFamily,
              defaultRadius: "var(--general-box-border-radius)",
              headings: {
                fontFamily: manropeFont.style.fontFamily,
                sizes: {
                  h1: { fontSize: "var(--h1)" },
                  h2: { fontSize: "var(--h2)" },
                  h3: { fontSize: "var(--h3)" },
                  h4: { fontSize: "var(--h4)" },
                  h5: { fontSize: "var(--h5)" },
                  h6: { fontSize: "var(--h6)" },
                },
              },
              fontSizes: {
                xs: "0.625rem",
                sm: "0.875rem",
                md: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                xxl: "1.5rem",
              },
              other: {
                box: {
                  primary: {
                    boxShadow: "0px 4px 25px 0px rgba(5, 102, 192, 0.20)",
                    borderRadius: "var(--general-box-border-radius)",
                    backgroundColor: "white",
                  },
                  secondary: {
                    boxShadow: "5px 7px 23.6px 0px rgba(5, 102, 192, 0.05)",
                    borderRadius: "var(--general-seconday-box-border-radius)",
                    backgroundColor: "white",
                    border: "1px solid #E4F0FF",
                  },
                },
                sizes: {
                  shell: {
                    spacing: 10,
                    header: {
                      height: 60,
                    },
                    navbar: {
                      width: 64,
                    },
                  },
                },
              },
            })}
          >
            {/* <ClinetProvider> */}
              <Notifications />
              {children}
              <Analytics />
            {/* </ClinetProvider> */}
          </MantineProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
