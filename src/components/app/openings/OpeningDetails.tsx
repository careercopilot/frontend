"use client";

import { useOpeningCandidates } from "@/hooks/candidates.swr";
import { useOpeningData } from "@/hooks/openings.swr";
import CandidateScores from "@/interfaces/CandidateScores";
import { staticData } from "@/utils/staticData";
import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Progress,
  Skeleton,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconChevronLeft,
  IconFileDownload,
  IconPlus,
  IconSquareRoundedMinus,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

const { openingDetails: COMPONENT_DATA } = staticData.pages;

type Store = {
  selectedCandidates: {
    [key: string]: boolean;
  };
  updateCandidateSelection: (candidateId: string, check: boolean) => void;
};

const useCandidateSelection = create<Store>()((set, get) => ({
  selectedCandidates: {},
  updateCandidateSelection: (candidateId: string, check: boolean) =>
    set({
      selectedCandidates: {
        ...get().selectedCandidates,
        [candidateId]: check,
      },
    }),
}));

function CandidateScoreCard({ data }: { data: CandidateScores }) {
  const theme = useMantineTheme();
  const { selectedCandidates, updateCandidateSelection } =
    useCandidateSelection();

  const overallScore =
    data.skillScores.reduce((acc, curr) => acc + curr.score, 0) /
    data.skillScores.length;
  const scoreColor =
    COMPONENT_DATA.applicatins.scoreColors[
      Math.floor(
        (overallScore / 100) * COMPONENT_DATA.applicatins.scoreColors.length
      )
    ];

  return (
    <Accordion.Item value={data._id} key={data._id}>
      <Accordion.Control>
        <Flex gap={20} p={6}>
          <Avatar
            size={64}
            color={scoreColor}
            src={data.candidate.image?.toString()}
            alt={data.candidate.firstName}
            style={{
              borderWidth: selectedCandidates[data._id] ? 5 : 0,
              borderStyle: "solid",
              borderColor: selectedCandidates[data._id]
                ? theme.colors.primary[5]
                : theme.colors.dark[3],
              transition: "all 0.15s ease-out",
            }}
          >
            {!data.candidate.image && data.candidate.firstName[0]}
          </Avatar>
          <Flex direction="column" gap={4}>
            <Flex direction="row" align="center" gap={12}>
              <Text size="md" fw={600}>
                {data.candidate.firstName + " " + data.candidate.lastName}
              </Text>
              <Button
                size="compact-sm"
                variant={selectedCandidates[data._id] ? "filled" : "light"}
                leftSection={
                  selectedCandidates[data._id] ? (
                    <IconSquareRoundedMinus size={14} />
                  ) : (
                    <IconPlus size={14} />
                  )
                }
                onClick={(e) => {
                  e.stopPropagation();
                  updateCandidateSelection(
                    data._id,
                    !selectedCandidates[data._id]
                  );
                }}
              >
                {selectedCandidates[data._id]
                  ? COMPONENT_DATA.applicatins.selection.selected
                  : COMPONENT_DATA.applicatins.selection.select}
              </Button>
            </Flex>
            {/* <Text c="dimmed">{data.candidate.position}</Text> */}
            <Badge
              leftSection={
                data.candidate.source === "linkedin" ? (
                  <IconBrandLinkedin size={20} />
                ) : (
                  <IconFileDownload size={20} />
                )
              }
              color={data.candidate.source === "resume" ? "green" : "blue"}
              variant="transparent"
              p={0}
            >
              {data.candidate.source}
            </Badge>{" "}
            <Flex align="center" gap={8}>
              <Progress
                w={200}
                value={overallScore}
                size={8}
                radius="xl"
                color={scoreColor}
                aria-label={COMPONENT_DATA.applicatins.accessibility.ariaLabel}
                aria-valuemin={
                  COMPONENT_DATA.applicatins.accessibility.ariaValueMin
                }
                aria-valuemax={
                  COMPONENT_DATA.applicatins.accessibility.ariaValueMax
                }
                aria-valuenow={overallScore}
              />
              <Text>{`${overallScore}%`}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Accordion.Control>
      <Accordion.Panel></Accordion.Panel>
    </Accordion.Item>
  );
}

function OpeningDetails() {
  const params = useParams();
  const OPENING_ID = params.openingId as string;
  const { opening, isLoadingOpening, errorLoadingOpening } =
    useOpeningData(OPENING_ID);
  const { candidates, errorLoadingCandidates, isLoadingCandidates } =
    useOpeningCandidates(OPENING_ID);
  const selectedCandidates = useCandidateSelection(
    (state) => state.selectedCandidates
  );

  useEffect(() => {
    // TODO: update and mutate selected candidates
  }, [selectedCandidates]);

  return (
    <Flex direction="column" gap={32} w="100%">
      <Flex align="center" gap={12}>
        {isLoadingOpening || errorLoadingOpening ? (
          <Skeleton w={200} h={27} />
        ) : (
          <>
            <Link href={"/app/openings"}>
              <Flex align="center" gap={10}>
                <IconChevronLeft />
                <Title order={2} size={20}>
                  {opening.title}
                </Title>
              </Flex>
            </Link>
            <Badge color={opening.status === "open" ? "green" : "yellow"}>
              {opening.status}
            </Badge>
            <Badge p={0} color="dark.2" variant="transparent">
              {dayjs(opening.createdAt).format("MMM DD, YYYY")}
            </Badge>
          </>
        )}
      </Flex>
      <Flex direction="column" gap={20}>
        <Flex gap={40} wrap="wrap">
          {COMPONENT_DATA.overview.map((item, index) => {
            return (
              <Flex key={index} direction="column" w="fit-content">
                <Text c="dimmed" size="sm">
                  {item.label}
                </Text>
                {isLoadingOpening || errorLoadingOpening ? (
                  <Skeleton h={24} />
                ) : (
                  <Text fw={600}>{item.renderValue(opening)}</Text>
                )}
              </Flex>
            );
          })}
        </Flex>
        <Flex direction="column" gap={0}>
          <Text>{COMPONENT_DATA.progress.label}</Text>
          <Flex align="center" gap={12}>
            <Progress
              value={(opening.selected * 100) / opening.total}
              size="md"
              color="green"
              w={180}
            />
            <Text>
              {COMPONENT_DATA.progress.filled({
                filled: opening.selected,
                total: opening.total,
              })}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap={12} maw={1000}>
        <Flex justify="space-between" align="center" gap={12}>
          <Flex align="center" gap={20}>
            <Title order={5}>{COMPONENT_DATA.applicatins.title}</Title>
            <Flex align="center" gap={12}>
              {COMPONENT_DATA.applicatins.stats.map((item, index) => (
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
                    {opening.stats[item.key as keyof typeof opening.stats]}{" "}
                    {item.label}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Button
            component={Link}
            href={COMPONENT_DATA.applicatins.add.href}
            leftSection={<IconPlus size={16} />}
          >
            {COMPONENT_DATA.applicatins.add.label}
          </Button>
        </Flex>
        <Box
          bg="primary.0"
          style={{
            borderRadius: 22,
          }}
          p={10}
          w="100%"
        >
          <Accordion
            w="100%"
            variant="filled"
            styles={{
              root: {
                display: "flex",
                flexDirection: "column",
                gap: 10,
              },
              item: {
                borderRadius: 12,
                background: "white",
              },
            }}
          >
            {isLoadingCandidates || errorLoadingCandidates ? (
              <>
                {new Array(3).map((_, index) => (
                  <Skeleton height={200} key={index} />
                ))}
              </>
            ) : (
              <>
                {candidates.map((item) => (
                  <CandidateScoreCard data={item} key={item._id} />
                ))}
              </>
            )}
          </Accordion>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OpeningDetails;
