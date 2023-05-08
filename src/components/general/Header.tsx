import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { staticData } from "@/utils/staticData";

import styles from "./Header.module.css";

const { navbar: COMPONENT_DATA } = staticData.components;
const generalData = staticData.general;

function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">
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
      </Link>
      <ul className={styles.buttons}>
        <li>
          <Link
            href={{
              query: {
                modal: COMPONENT_DATA.login.path,
              },
            }}
          >
            <Button color="secondary" variant="subtle" size="md">
              {COMPONENT_DATA.login.name}
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href={{
              query: {
                modal: COMPONENT_DATA.register.path,
              },
            }}
          >
            <Button color="secondary" size="md">
              {COMPONENT_DATA.register.name}
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
