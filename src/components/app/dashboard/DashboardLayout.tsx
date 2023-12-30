"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import { Avatar, Box, Flex, Skeleton, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./DashboardLayout.module.css";
import Insights from "./Insights";

const { dashboard: COMPONENT_DATA } = staticData.pages;

function DashboardLayout() {
  const { push } = useRouter();
  const { userData, errorFetchingUserData, isUserDataLoading } = useUser();

  React.useEffect(() => {
    if (errorFetchingUserData) {
      push("/");
    }
  }, [errorFetchingUserData, push]);

  return (
    <Flex direction="column" w="100%" gap={20}>
      <Flex justify="space-between" gap={20}>
        <Title order={2} size={24}>
          {COMPONENT_DATA.greetings(userData?.firstName)}
        </Title>
      </Flex>
      <Box className={styles.wrapper}>
        <Insights />
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
