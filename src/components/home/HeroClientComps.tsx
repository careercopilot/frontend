"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import { Button } from "@mantine/core";
import Link from "next/link";
import styles from "./Hero.module.css";

const { hero: COMPONENT_DATA } = staticData.pages.index;
const { icons: ICONS } = staticData.general;

export function HeroCTA() {
  const { userData } = useUser();
  return (
    <>
      {userData ? (
        <Button
          size="md"
          className={styles.button}
          component={Link}
          href={COMPONENT_DATA.ctaLink.authenticated}
          mt={20}
        >
          {COMPONENT_DATA.cta.authenticated}
        </Button>
      ) : (
        <Button
          size="md"
          className={styles.button}
          component={Link}
          href={COMPONENT_DATA.ctaLink.default}
          mt={20}
        >
          {COMPONENT_DATA.cta.default}
        </Button>
      )}
    </>
  );
}
