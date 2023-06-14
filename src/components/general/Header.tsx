import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Avatar, Skeleton } from "@mantine/core";
import useSWR from "swr";
import User from "@/interfaces/User";
import userService from "@/services/user.service";
import API_CONSTANTS from "@/utils/apiConstants";

import styles from "./Header.module.css";

import { staticData } from "@/utils/staticData";
const { navbar: COMPONENT_DATA } = staticData.components;
const generalData = staticData.general;

function Header() {
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR(API_CONSTANTS.GET_USER, userService.getUserData);

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
      {isLoading ? (
        <Skeleton height={38} circle />
      ) : !error ? (
        <Avatar
          src={userData.image}
          alt={userData.firstName + " " + userData.lastName}
          color="secondary"
          component={Link}
          href={"/profile"}
        >
          {userData.image
            ? null
            : (userData.firstName?.[0] + userData.lastName?.[0])
                .toString()
                .toUpperCase()}
        </Avatar>
      ) : (
        <ul className={styles.buttons}>
          <li>
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.login.path,
                },
              }}
              tabIndex={-1}
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
              tabIndex={-1}
            >
              <Button color="secondary" size="md">
                {COMPONENT_DATA.register.name}
              </Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
