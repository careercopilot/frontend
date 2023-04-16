import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { Manrope } from "next/font/google";
import SEO from "../next-seo.config";

const manropeFont = Manrope({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${manropeFont.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
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
          },
          primaryShade: 5,
          primaryColor: "primary",
          fontFamily: manropeFont.style.fontFamily,
          defaultRadius: "var(--general-box-border-radius)",
          headings: {
            fontFamily: manropeFont.style.fontFamily,
            sizes: {
              h1: { fontSize: "var(--h1)", fontWeight: 600, lineHeight: 1.1 },
              h2: { fontSize: "var(--h2)", fontWeight: 600, lineHeight: 1.1 },
              h3: { fontSize: "var(--h3)", fontWeight: 600, lineHeight: 1.1 },
              h4: { fontSize: "var(--h4)", fontWeight: 500, lineHeight: 1.1 },
              h5: { fontSize: "var(--h5)", fontWeight: 500, lineHeight: 1.1 },
              h6: { fontSize: "var(--h6)", fontWeight: 500, lineHeight: 1.1 },
            },
          },
          fontSizes: {
            xs: "10",
            sm: "16",
            md: "18",
            lg: "19",
            xl: "24",
          },
        }}
      >
        <Notifications />
        <Component {...pageProps} />
        <Analytics />
      </MantineProvider>
    </>
  );
}
