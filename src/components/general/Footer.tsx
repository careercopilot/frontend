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
          <li key={key}>
            <ActionIcon
              size="lg"
              color="primary.2"
              variant="outline"
              radius="xl"
              component="a"
              href={
                COMPONENT_DATA.socialIcons[
                  key as keyof typeof COMPONENT_DATA.socialIcons
                ].href
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={
                  COMPONENT_DATA.socialIcons[
                    key as keyof typeof COMPONENT_DATA.socialIcons
                  ].src
                }
                alt={key}
              />
            </ActionIcon>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
