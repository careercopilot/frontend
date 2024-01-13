"use client";

import { useRecentActivity } from "@/hooks/dashboard.swr";
import { staticData } from "@/utils/staticData";
import { Button, Flex, Notification, Skeleton, Title } from "@mantine/core";
import SecondaryContainer from "../general/SecondaryContainer";

const { recentActivity: COMPONENT_DATA } = staticData.pages.dashboard;

function RecentActivity() {
  const {
    recentActivity,
    isRecentActivityLoading,
    errorLoadingRecentActivity,
  } = useRecentActivity();

  return (
    <SecondaryContainer
      display="grid"
      style={{
        gridTemplate: "auto 1fr auto / 1fr",
        gap: 12,
      }}
      h="100%"
    >
      <Title order={2} fz={22}>
        {COMPONENT_DATA.title}
      </Title>

      {errorLoadingRecentActivity || isRecentActivityLoading ? (
        <Skeleton height={"100%"} />
      ) : (
        <>
          <Flex direction="column" gap={0}>
            {recentActivity?.map((item) => (
              <Notification
                key={item.id}
                title={item.title}
                color={item.color}
                style={{
                  cursor: "pointer",
                  borderRadius: 10,
                  boxShadow: "none",
                }}
                styles={{
                  body: {
                    padding: 0,
                  },
                  root: {
                    // padding: 0,
                    margin: 0,
                  },
                }}
                withCloseButton
                // p={0}
              >
                {item.description}
              </Notification>
            ))}
          </Flex>
          {recentActivity?.length !== 0 && (
            <Button variant="light" size="compact-sm">
              {COMPONENT_DATA.close}
            </Button>
          )}
        </>
      )}
    </SecondaryContainer>
  );
}

export default RecentActivity;
