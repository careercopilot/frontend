"use client";

import { useUser } from "@/hooks/user.swr";
import API_CONSTANTS from "@/utils/apiConstants";
import { staticData } from "@/utils/staticData";
import { Avatar, Button, Menu, Skeleton, UnstyledButton } from "@mantine/core";
import { IconLogout, IconUser } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import React, { forwardRef } from "react";
import { useCookies } from "react-cookie";
import { mutate } from "swr";
import notificationManager from "../helpers/NotificationManager";
import styles from "./Header.module.css";

const { navbar: COMPONENT_DATA } = staticData.components;

const MenuIcons = {
  profile: IconUser,
  logout: IconLogout,
};

interface CustomAvatarProps extends React.ComponentPropsWithoutRef<"button"> {
  avatar?: string;
  firstName: string;
  lastName: string;
}

// eslint-disable-next-line react/display-name
const CustomAvatarTrigger = forwardRef<HTMLButtonElement, CustomAvatarProps>(
  (
    { avatar, firstName = "", lastName = "", ...others }: CustomAvatarProps,
    ref
  ) => (
    <UnstyledButton ref={ref} {...others}>
      <Avatar
        src={avatar}
        alt={firstName + " " + lastName}
        color="secondary"
        imageProps={{
          referrerPolicy: "no-referrer",
        }}
      >
        {avatar
          ? null
          : firstName?.charAt(0).toUpperCase() +
            lastName?.charAt(0).toUpperCase()}
      </Avatar>
    </UnstyledButton>
  )
);

function HeaderAvatar() {
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();
  const [, , removeCookie] = useCookies();

  const handleLogout = async () => {
    removeCookie("cc-token");
    axios.defaults.headers.common["Authorization"] = null;
    mutate(API_CONSTANTS.GET_USER);
    notificationManager.showSuccess("Logged out successfully");
  };

  return (
    <>
      {errorFetchingUserData ? (
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
      ) : isUserDataLoading ? (
        <Skeleton height={38} circle />
      ) : (
        <Menu shadow="md" width={200} position="top-end">
          <Menu.Target>
            <CustomAvatarTrigger
              avatar={userData.avatar}
              firstName={userData.firstName}
              lastName={userData.lastName}
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<MenuIcons.profile size={14} />}
              component={Link}
              href={COMPONENT_DATA.menuOptions.profile.path}
            >
              {COMPONENT_DATA.menuOptions.profile.name}
            </Menu.Item>
            <Menu.Item
              c="red"
              leftSection={<MenuIcons.logout size={14} />}
              onClick={handleLogout}
            >
              {COMPONENT_DATA.menuOptions.logout.name}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </>
  );
}

export default HeaderAvatar;
