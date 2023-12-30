"use client";

import { useInsights } from "@/hooks/dashboard.swr";
import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import {
  Badge,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import SecondaryContainer from "../general/SecondaryContainer";

const { insights: COMPONENT_DATA } = staticData.pages.dashboard;

function Insights() {
  const { insights, errorLoadingInsights, isInsightsLoading } = useInsights();

  return (
    <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing={16}>
      {COMPONENT_DATA.map((item) => (
        <SecondaryContainer key={item.key} p={24}>
          <Flex direction="column" gap={16}>
            <ThemeIcon variant="light" p={16} h="fit-content" w="fit-content">
              <item.Icon size={24} />
            </ThemeIcon>
            <Flex direction="column" gap={0}>
              {isInsightsLoading || errorLoadingInsights ? (
                <Skeleton height={20} width={100} />
              ) : (
                <Flex gap={10} align="center">
                  <Text fz={32} fw={700}>
                    {insights[item.key as keyof typeof insights].value}
                  </Text>
                  <Badge
                    // leftSection={
                    //   insights[item.key as keyof typeof insights].change > 0 ? (
                    //     <IconArrowNarrowUp size={16} />
                    //   ) : (
                    //     <IconArrowNarrowDown size={16} />
                    //   )
                    // }
                    size="lg"
                    variant="light"
                    color={
                      insights[item.key as keyof typeof insights].change > 0
                        ? "red"
                        : "teal"
                    }
                  >
                    {insights[item.key as keyof typeof insights].change.toFixed(
                      1
                    )}
                    %
                  </Badge>
                </Flex>
              )}
              <Text size="md" c="dark.3">
                {item.label}
              </Text>
            </Flex>
          </Flex>
        </SecondaryContainer>
      ))}
    </SimpleGrid>
  );
}

export default Insights;
