import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title, Text, Button } from "@mantine/core";
import styles from "./GetExtension.module.css";

import { staticData } from "@/utils/staticData";
const { getExtension: COMPONENT_DATA } = staticData.components;
const { icons: ICONS } = staticData.general;

function GetExtension() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title order={2} align="center" weight={700}>
          {COMPONENT_DATA.title}
        </Title>
        <Text align="center" size="lg" color="black.6">
          {COMPONENT_DATA.description}
        </Text>
      </div>
      <Button
        size="md"
        leftIcon={<Image {...ICONS.chrome.src} alt={ICONS.chrome.alt} />}
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
