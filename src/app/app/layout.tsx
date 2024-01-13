"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Skeleton,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const { appShell: COMPONENT_DATA } = staticData.components;
const { logo: LOGO, logoIcon: LOGO_ICON } = staticData.general;

export default function Layout({ children }: { children: any }) {
  const pathname = usePathname();
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();
  const theme = useMantineTheme();
  const SHELL_SIZES = theme.other.sizes.shell;

  const activeIndex = COMPONENT_DATA.navbar.links.findIndex((link) =>
    link.isActive(pathname)
  );

  return (
    <Box
      h="100%"
      display="grid"
      bg="primary.0"
      p={SHELL_SIZES.spacing}
      className={styles.main}
      style={{
        gap: SHELL_SIZES.spacing,
      }}
    >
      <Flex
        gap={16}
        h={SHELL_SIZES.header.height}
        justify="space-between"
        align="center"
        p="md"
        className={styles.header}
        style={{
          ...theme.other.box.primary,
        }}
      >
        <Image
          priority
          src={LOGO.src}
          alt={LOGO.src}
          height={25}
          className={styles.logo}
        />
        <Image
          priority
          src={LOGO_ICON.src}
          alt={LOGO_ICON.src}
          height={25}
          className={styles.logoIcon}
        />
        <Flex gap={40} align="center">
          <Flex align="center" gap={30} className={styles.headerLinks}>
            {COMPONENT_DATA.header.links.map((link) => (
              <Link href={link.href} key={link.href}>
                <Text
                  fw={500}
                  c={pathname === link.href ? "primary" : "dark.4"}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
          {isUserDataLoading || errorFetchingUserData ? (
            <Skeleton height={38} circle />
          ) : (
            <Avatar
              src={userData.avatar}
              alt={userData.firstName + " " + userData.lastName}
              color="secondary"
              imageProps={{
                referrerPolicy: "no-referrer",
              }}
              component={Link}
              href={"/app/profile"}
            >
              {userData.avatar
                ? null
                : [
                    userData.firstName?.charAt(0).toUpperCase(),
                    userData.lastName?.charAt(0).toUpperCase(),
                  ]
                    .map(Boolean)
                    .join("")}
            </Avatar>
          )}
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        w={"fit-content"}
        h="100%"
        py={SHELL_SIZES.spacing * 1.5}
        gap={20}
        className={styles.navbar}
        style={{
          ...theme.other.box.primary,
        }}
      >
        <Flex
          gap={20}
          w="100%"
          align="center"
          px={SHELL_SIZES.spacing * 1.5}
          pos="relative"
          className={styles.navbarLinks}
        >
          {COMPONENT_DATA.navbar.links.map((link) => (
            <Flex key={link.href}>
              <ActionIcon
                component={Link}
                href={link.href}
                variant="transparent"
                color={link.isActive(pathname) ? "primary" : "dark.2"}
                p={0}
              >
                <link.Icon size={22} />
              </ActionIcon>
            </Flex>
          ))}
          <Box
            bg="primary"
            w={6}
            h={28}
            pos="absolute"
            left={0}
            top={Math.max(activeIndex, 0) * (28 + 20)}
            style={{
              borderRadius: 12,
              transition:
                "top .5s cubic-bezier(0.4, 1.51, 0.47, 1.02), opacity .15s ease-out",
              opacity: activeIndex === -1 ? 0 : 1,
            }}
            className={styles.navbarLinksActive}
          />
        </Flex>
        <Flex
          direction="column"
          gap={20}
          w="100%"
          align="center"
          px={SHELL_SIZES.spacing * 1.5}
        >
          <ActionIcon
            component={Link}
            href={COMPONENT_DATA.navbar.settings.href}
            variant="transparent"
            color={
              COMPONENT_DATA.navbar.settings.isActive(pathname)
                ? "primary"
                : "dark.2"
            }
            p={0}
          >
            <COMPONENT_DATA.navbar.settings.Icon size={22} />
          </ActionIcon>
        </Flex>
      </Flex>

      {children}
    </Box>
  );
}
