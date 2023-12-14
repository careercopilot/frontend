"use client";

import { staticData } from "@/utils/staticData";
import { Button, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import styles from "./GetExtension.module.css";
const { getExtension: COMPONENT_DATA } = staticData.components;
const { icons: ICONS } = staticData.general;

function GetExtension() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title order={2} ta="center" fw={700}>
          {COMPONENT_DATA.title}
        </Title>
        <Text ta="center" size="lg" c="black.6">
          {COMPONENT_DATA.description}
        </Text>
      </div>
      <Button
        size="md"
        leftSection={<Image {...ICONS.chrome.src} alt={ICONS.chrome.alt} />}
        className={styles.button}
        component={Link}
        href={COMPONENT_DATA.cta.href}
      >
        {COMPONENT_DATA.cta.label}
      </Button>
    </div>
  );
}

export default GetExtension;
