"use client";

import { useOpenings } from "@/hooks/openings.swr";
import Opening from "@/interfaces/Opening";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Menu,
  Progress,
  SimpleGrid,
  Skeleton,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconDots, IconExternalLink, IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SecondaryContainer from "../general/SecondaryContainer";

const { openigs: COMPONENT_DATA } = staticData.pages;

function OpeningCard({ data }: { data: Opening }) {
  return (
    <SecondaryContainer>
      <Flex direction="column" justify="space-between" gap={16} h="100%">
        <Flex direction="column" gap={10}>
          <Flex justify="space-between" gap={16}>
            <Badge color={data.status === "open" ? "green" : "yellow"}>
              {data.status}
            </Badge>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon variant="subtle">
                  <IconDots size={18} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {data.status !== "closed" && (
                  <Menu.Item
                    color={COMPONENT_DATA.menu.markAsClosed.color}
                    leftSection={
                      <COMPONENT_DATA.menu.markAsClosed.Icon
                        size={16}
                        stroke={1.5}
                      />
                    }
                  >
                    {COMPONENT_DATA.menu.markAsClosed.label}
                  </Menu.Item>
                )}
                <Menu.Item
                  color={COMPONENT_DATA.menu.edit.color}
                  leftSection={
                    <COMPONENT_DATA.menu.edit.Icon size={16} stroke={1.5} />
                  }
                >
                  {COMPONENT_DATA.menu.edit.label}
                </Menu.Item>
                <Menu.Item
                  color={COMPONENT_DATA.menu.delete.color}
                  leftSection={
                    <COMPONENT_DATA.menu.delete.Icon size={16} stroke={1.5} />
                  }
                >
                  {COMPONENT_DATA.menu.delete.label}
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
          <Flex direction="column" gap={4}>
            <Flex direction="column">
              <Link href={"openings/" + data._id}>
                <Flex align="center" gap={4}>
                  <Title order={5} fz={"lg"} c="dark" fw={600}>
                    {data.title}
                  </Title>
                  <ThemeIcon
                    variant="transparent"
                    p={0}
                    h="fit-content"
                    w="fit-content"
                  >
                    <IconExternalLink size={18} />
                  </ThemeIcon>
                </Flex>
              </Link>
              <Text fz="sm" c="dimmed">
                {`${data.skills.length} skills | ${
                  data.requiredExperience.min || 0
                } - ${data.requiredExperience.max} YOE | ${data.type}`}
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
            <Text fz="sm" c="dimmed">
              {dayjs(data.createdAt).format("MMM DD, YYYY")}
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
    </SecondaryContainer>
  );
}

function OpeningsListing() {
  const { push } = useRouter();
  const { openings, isLoadingOpenings, errorLoadingOpenings } = useOpenings({});

  return (
    <Flex direction="column" gap={16} w="100%">
      <Flex justify="space-between" align="center" gap={20}>
        <Title order={2} size={20}>
          {COMPONENT_DATA.title}
        </Title>
        <Flex align="center" gap={12}>
          <Button
            leftSection={<IconPlus size={16} />}
            component={Link}
            href={COMPONENT_DATA.add.href}
          >
            {COMPONENT_DATA.add.label}
          </Button>
        </Flex>
      </Flex>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4, xl: 5 }} spacing={12}>
        {isLoadingOpenings || errorLoadingOpenings ? (
          <>
            {new Array(5).fill(0).map((_, index) => (
              <Skeleton key={index} height={200} />
            ))}
          </>
        ) : (
          openings?.map((opening, index) => (
            <OpeningCard key={index} data={opening} />
          ))
        )}
      </SimpleGrid>
    </Flex>
  );
}

export default OpeningsListing;
