"use client";

import { useOpenings } from "@/hooks/openings.swr";
import IOpening from "@/interfaces/Opening";
import { staticData } from "@/utils/staticData";
import {
  Flex,
  Progress,
  Skeleton,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import SecondaryContainer from "../general/SecondaryContainer";

const { openPositions: COMPONENT_DATA } = staticData.pages.dashboard;

function OpenPositionCard({ data }: { data: IOpening }) {
  return (
    <Flex justify="space-between" gap={10}>
      <Flex direction="column" gap={4}>
        <Flex direction="column">
          <Title order={5} fz={"lg"} c="dark" fw={600}>
            {data.position}
          </Title>
          <Text fz="sm" c="dimmed">
            {dayjs(data.createdAt).format("MMMM DD, YYYY")}
          </Text>
        </Flex>
        <Flex align="center" gap={12}>
          <Progress
            value={(data.selected * 100) / data.total}
            size="md"
            color="green"
            w={180}
          />
          <Text>
            {COMPONENT_DATA.filled({
              filled: data.selected,
              total: data.total,
            })}
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" gap={12}>
        {COMPONENT_DATA.stats.map((item, index) => (
          <Tooltip label={item.label} key={index}>
            <Flex key={index} gap={0} align="center">
              <ThemeIcon
                variant="transparent"
                p={0}
                h="fit-content"
                w="fit-content"
                color={item.color}
              >
                <item.Icon size={18} stroke={1.5} />
              </ThemeIcon>
              <Text fz="sm" fw={500} c={item.color}>
                {data.stats[item.key as keyof typeof data.stats]}
              </Text>
            </Flex>
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
}

function OpenPositions() {
  const { openings, errorLoadingOpenings, isLoadingOpenings } = useOpenings({
    open: true,
  });

  return (
    <SecondaryContainer
      display="grid"
      style={{
        gridTemplate: "auto 1fr / 1fr",
        gap: 12,
        overflowY: "hidden",
      }}
      h="100%"
      p={20}
    >
      <Flex direction="column" gap={16}>
        <Title order={3} fz={22}>
          {COMPONENT_DATA.title}
        </Title>
        {errorLoadingOpenings || isLoadingOpenings ? (
          <Skeleton height={"100%"} />
        ) : (
          <>
            <Flex direction="column" gap={12}>
              {openings?.map((item, index) => (
                <OpenPositionCard data={item} key={index} />
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </SecondaryContainer>
  );
}

export default OpenPositions;
