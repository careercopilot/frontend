import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Text, Title, TextInput, ActionIcon } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import styles from "@/styles/Home.module.css";

import logo from "@/assets/Logo.svg";
import heroBanner from "@/assets/HeroBanner.png";
import LinedinIcon from "@/assets/icons/Linkedin.svg";
import TwitterIcon from "@/assets/icons/Twitter.svg";

const socialData: {
  [key: string]: {
    url: string;
    icon: string;
  };
} = {
  twitter: {
    url: "https://twitter.com/_careercopilot",
    icon: TwitterIcon,
  },
  linkedin: {
    url: "https://www.linkedin.com/company/careercopilot",
    icon: LinedinIcon,
  },
};

const email = "business@careercopilot.in";

export default function Home() {
  const [isRequestloading, setIsRequestLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRequestLoading(true);
    try {
      const email = (e.target as HTMLFormElement).email.value;
      console.log("email", email);
      setIsRequestLoading(false);
      if (email) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/join-waitlist`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        console.log("res", res);
        if (res.status === 200) {
          notifications.show({
            title: `Joined Waitlist Successfully`,
            message: (res.body as { [key: string]: any })?.message,
            autoClose: false,
            color: "teal",
          });
        } else {
          notifications.show({
            title: `Something went wrong`,
            message: "Please try again later",
            autoClose: false,
            color: "red",
          });
        }
      } else {
        notifications.show({
          title: `Please enter a valid email`,
          message: "Please try again later",
          autoClose: false,
          color: "red",
        });
      }
    } catch (err) {
      console.log("err", err);
      notifications.show({
        title: `Something went wrong`,
        message: "Please try again later",
        autoClose: false,
        color: "red",
      });
    }
    setIsRequestLoading(false);
  };

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>
          Career Copilot : Revolutionize your hiring process with AI
        </title>
        <meta
          name="title"
          content="Career Copilot : Revolutionize your hiring process with AI"
        />
        <meta
          name="description"
          content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careercopilot.in/" />
        <meta
          property="og:title"
          content="Career Copilot : Revolutionize your hiring process with AI"
        />
        <meta
          property="og:description"
          content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
        />
        <meta property="og:image" content="/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.careercopilot.in/" />
        <meta
          property="twitter:title"
          content="Career Copilot : Revolutionize your hiring process with AI"
        />
        <meta
          property="twitter:description"
          content="Our AI-based solution provides comprehensive profile analysis and comparison for hiring managers, making recruitment faster, smarter, and more efficient. Our platform helps companies evaluate candidates more objectively, reducing the risk of human bias and ensuring the best fit for their teams"
        />
        <meta property="twitter:image" content="/og.png"></meta>
      </Head> */}
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Image src={logo} alt="Career Copilot Logo" />
          <Button size="md" component="a" href={`mailto:${email}`}>
            <Text color="primary.9" weight={700}>
              Get In Touch
            </Text>
          </Button>
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <Title order={1} color="primary">
              Career Copilot : Revolutionize your hiring process with AI
            </Title>
            <Text color="primary" size="md">
              Sign up for our waitlist to stay informed and be the first to know
              when our AI-based profile analysis solution becomes available.
              Notify me when available!
            </Text>
            <form className={styles.form} onSubmit={handleSubmit}>
              <TextInput
                variant="unstyled"
                color="primary.7"
                className={styles.input}
                size="md"
                placeholder="Enter your email"
                type="email"
                name="email"
                required
              />
              <Button size="sm" type="submit" loading={isRequestloading}>
                <Text color="primary.9">Notify Me</Text>
              </Button>
            </form>
          </div>
          <div className={styles.heroRight}>
            <Image
              src={heroBanner}
              alt="Hero Banner"
              className={styles.heroBanner}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Title order={3} color="primary" size={18} weight={500}>
            Follow For Updates
          </Title>
          <div className={styles.socials}>
            {Object.keys(socialData).map((key) => {
              const { url, icon } = socialData[key];
              return (
                <ActionIcon
                  component="a"
                  href={url}
                  key={key}
                  variant="outline"
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={icon} alt={`${key} icon`} />
                </ActionIcon>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
