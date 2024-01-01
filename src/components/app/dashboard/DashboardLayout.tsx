"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import { Box, Button, Flex, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./DashboardLayout.module.css";
import Insights from "@/components/app/dashboard/Insights";
import OpenPositions from "@/components/app/dashboard/OpenPositions";
import RecentActivity from "@/components/app/dashboard/RecentActivity";
import TopCandidates from "@/components/app/dashboard/TopCandidates";

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
    <Box w="100%" className={styles.main}>
      <Flex justify="space-between" align="center" gap={20}>
        <Title order={2} size={20}>
          {COMPONENT_DATA.greetings(userData?.firstName)}
        </Title>
        <Flex align="center" gap={12}>
          <Button
            variant="transparent"
            component={Link}
            href={COMPONENT_DATA.buttons.addOpening.path}
            color="dark"
          >
            {COMPONENT_DATA.buttons.addOpening.label}
          </Button>
          <Button
            leftSection={<IconPlus size={16} />}
            component={Link}
            href={COMPONENT_DATA.buttons.addApplications.path}
          >
            {COMPONENT_DATA.buttons.addApplications.label}
          </Button>
        </Flex>
      </Flex>
      <Box className={styles.wrapper} h="100%">
        <Box>
          <Insights />
        </Box>
        <Box>
          <RecentActivity />
        </Box>
        <Box>
          <OpenPositions />
        </Box>
        <Box>
          <TopCandidates />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
