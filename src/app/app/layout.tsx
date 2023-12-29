"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Flex,
  ScrollArea,
  Skeleton,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { appShell: COMPONENT_DATA } = staticData.components;
const { logo: LOGO } = staticData.general;

export default function Layout({ children }: { children: any }) {
  const theme = useMantineTheme();
  const SHELL_SIZES = theme.other.sizes.shell;
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();
  const pathname = usePathname();

  const activeIndex = COMPONENT_DATA.navbar.links.findIndex((link) =>
    link.isActive(pathname)
  );

  return (
    <AppShell
      bg="primary.0"
      header={{
        height: SHELL_SIZES.header.height,
      }}
      navbar={{
        width: SHELL_SIZES.navbar.width,
        breakpoint: 0,
      }}
      padding="md"
      withBorder={false}
      styles={{
        header: {
          ...theme.other.box.primary,
          margin: SHELL_SIZES.spacing,
        },
        navbar: {
          ...theme.other.box.primary,
          margin: SHELL_SIZES.spacing,
          marginTop: SHELL_SIZES.spacing * 2,
          height:
            "calc(100vh - " +
            (SHELL_SIZES.header.height + 3 * SHELL_SIZES.spacing) / 16 +
            "rem)",
        },
        main: {
          margin: SHELL_SIZES.spacing,
          marginTop: SHELL_SIZES.spacing * 2,
          height:
            "calc(100vh - " +
            (SHELL_SIZES.header.height + 3 * SHELL_SIZES.spacing) / 16 +
            "rem)",
        },
      }}
    >
      <AppShell.Header px={16} hidden>
        <Flex gap={16} h="100%" justify="space-between" align="center">
          <Image src={LOGO.src} alt={LOGO.src} height={25} />
          <Flex gap={40} align="center">
            <Flex align="center" gap={30}>
              {COMPONENT_DATA.header.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  <Text c="dark.4">{link.label}</Text>
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
      </AppShell.Header>

      <AppShell.Navbar p={0} py={SHELL_SIZES.spacing * 1.5} hidden>
        <AppShell.Section grow>
          <Flex
            direction="column"
            gap={20}
            w="100%"
            align="center"
            pos="relative"
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
              top={activeIndex * (28 + 20)}
              style={{
                borderRadius: 12,
                transition: "top .5s cubic-bezier(0.4, 1.51, 0.47, 1.02)",
              }}
            />
          </Flex>
        </AppShell.Section>

        <AppShell.Section>
          <Flex direction="column" gap={20} w="100%" align="center">
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
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main bg="green" py={0}>
        {/* <ScrollArea h={"calc(100%)"} w="100%"> */}
        {/* <ScrollArea
          h={
            "calc(100vh - " +
            rem(SHELL_SIZES.header.height + 3 * SHELL_SIZES.spacing)
          }
          // w="100%"
          // bg="green"
        >
          {children}
        </ScrollArea> */}
        <Box
          h={
            "calc(100vh - " +
            rem(SHELL_SIZES.header.height + 3 * SHELL_SIZES.spacing)
          }
          bg="grape"
          // w="100%"
          // bg="green"
        >
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
