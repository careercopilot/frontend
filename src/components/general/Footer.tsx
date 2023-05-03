import React from "react";
import Image from "next/image";
import { ActionIcon, Button } from "@mantine/core";
import { staticData } from "@/utils/staticData";

import styles from "./Footer.module.css";

const { footer: COMPONENT_DATA } = staticData.components;
const generalData = staticData.general;

function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src={generalData.logo.src}
        alt={generalData.logo.alt}
        className={styles.logo}
      />
      <Image
        src={generalData.logoIcon.src}
        alt={generalData.logoIcon.alt}
        className={styles.logoIcon}
      />
      <ul className={styles.buttons}>
        {Object.keys(COMPONENT_DATA.socialIcons).map((key) => (
          <ActionIcon
            size="lg"
            color="primary.2"
            key={key}
            variant="outline"
            radius="xl"
          >
            <Image src={COMPONENT_DATA.socialIcons[key]} alt={key} />
          </ActionIcon>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
