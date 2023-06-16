import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { Manrope } from "next/font/google";
import SEO from "../next-seo.config";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/utils/config";
import { CookiesProvider } from "react-cookie";
import { useCookies, Cookies } from "react-cookie";

import axios from "axios";

const manropeFont = Manrope({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const token = new Cookies().get("token");
  if (
    token &&
    axios.defaults.headers.common["Authorization"] != "Bearer " + token
  ) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${manropeFont.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <CookiesProvider>
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Mantine theme override here */
              colorScheme: "light",
              colors: {
                primary: [
                  "#E5F4FF",
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
            }}
          >
            <Notifications />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Analytics />
          </MantineProvider>
        </GoogleOAuthProvider>
      </CookiesProvider>
    </>
  );
}
