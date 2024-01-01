"use client";

import { useTopCandidates } from "@/hooks/candidates.swr";
import CandidateScores from "@/interfaces/CandidateScores";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Flex,
  Progress,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import SecondaryContainer from "../general/SecondaryContainer";

const { topCandidates: COMPONENT_DATA } = staticData.pages.dashboard;

function TopCandidateCard({ data }: { data: CandidateScores }) {
  return (
    <Flex justify="space-between" gap={10}>
      <Flex direction="column" gap={4}>
        <Flex direction="column">
          <Title order={5} fz={"lg"} c="dark" fw={600}>
            {data.candidate.firstName}
          </Title>
          <Text fz="sm" c="dimmed">
            {data.opening.title}
          </Text>
        </Flex>
        <Flex align="center" gap={12}>
          <Progress
            value={
              data.skillScores.reduce((acc, curr) => acc + curr.score, 0) /
              data.skillScores.length
            }
            size="md"
            color="green"
            w={180}
          />
          <Text>
            {data.skillScores.reduce((acc, curr) => acc + curr.score, 0) /
              data.skillScores.length}{" "}
            {"%"}
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" gap={8}>
        <ActionIcon variant="subtle">
          <IconExternalLink size={20}/>
        </ActionIcon>
      </Flex>
    </Flex>
  );
}

function TopCandidates() {
  const { candidates, errorLoadingCandidates, isLoadingCandidates } =
    useTopCandidates();

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
        {errorLoadingCandidates || isLoadingCandidates ? (
          <Skeleton height={"100%"} />
        ) : (
          <>
            <Flex direction="column" gap={12}>
              {candidates?.map((item, index) => (
                <TopCandidateCard data={item} key={index} />
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </SecondaryContainer>
  );
}

export default TopCandidates;
