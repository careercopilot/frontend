import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { staticData } from "@/utils/staticData";

import styles from "./Header.module.css";

const { navbar: COMPONENT_DATA } = staticData.components;
const generalData = staticData.general;

function Header() {
  return (
    <nav className={styles.container}>
      <Image
        src={generalData.logo.src}
        alt={generalData.logo.alt}
        className={styles.logo}
        loading="eager"
      />
      <Image
        src={generalData.logoIcon.src}
        alt={generalData.logoIcon.alt}
        className={styles.logoIcon}
      />
      <ul className={styles.buttons}>
        <li>
          <Button color="secondary" variant="subtle" size="md">
            {COMPONENT_DATA.login}
          </Button>
        </li>
        <li>
          <Button color="secondary" size="md">
            {COMPONENT_DATA.register}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
