"use client";

import { useOpenings } from "@/hooks/openings.swr";
import Opening from "@/interfaces/Opening";
import { CHROME_EXTENSION_URL, staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Anchor,
  Badge,
  Button,
  Flex,
  Group,
  Loader,
  Menu,
  Progress,
  Select,
  SimpleGrid,
  Skeleton,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconBulb,
  IconChevronLeft,
  IconDots,
  IconExternalLink,
  IconFileInvoice,
  IconFileTypePdf,
  IconPdf,
  IconPlus,
  IconUpload,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SecondaryContainer from "../general/SecondaryContainer";
import { Dropzone, FileWithPath, PDF_MIME_TYPE } from "@mantine/dropzone";
import { IconX } from "@tabler/icons-react";
import { IconPhoto } from "@tabler/icons-react";
import { useState } from "react";
import { useListState } from "@mantine/hooks";
import notificationManager from "@/components/helpers/NotificationManager";
import styles from "./AddApplications.module.css";

const { addApplications: COMPONENT_DATA } = staticData.pages;

function AddApplications() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const { openings, isLoadingOpenings } = useOpenings({});
  const [files, setFiles] = useState<FileWithPath[]>([]);

  return (
    <Flex direction="column" gap={28}>
      <Flex justify="space-between" gap={20}>
        <Link href={"/app/openings"}>
          <Flex align="center" gap={10}>
            <IconChevronLeft />
            <Title order={2} size={20}>
              {COMPONENT_DATA.title}
            </Title>
          </Flex>
        </Link>
      </Flex>
      <Select
        label={COMPONENT_DATA.select.label}
        placeholder={COMPONENT_DATA.select.placeholder}
        data={openings?.map((item) => ({
          value: item._id,
          label: item.title,
        }))}
        value={searchParams.get("opening")}
        disabled={isLoadingOpenings}
        rightSection={isLoadingOpenings && <Loader size={20} />}
        maw={300}
        variant="default"
        onChange={(value) => {
          if (value) {
            push(`?opening=${value}`);
          } else {
            push(`?opening=`);
          }
        }}
      />
      <Flex direction="column" gap={20}>
        <Flex direction="column" gap={7}>
          <Title order={3} size={18}>
            {COMPONENT_DATA.upload.title}
          </Title>
          <Text maw={340}>{COMPONENT_DATA.upload.description}</Text>
        </Flex>
        <Dropzone
          onDrop={(files) =>
            setFiles((prev) => Array.from(new Set([...prev, ...files])))
          }
          onReject={(files) =>
            files.forEach((file) =>
              notificationManager.showError(
                "Failed uploading " + file.file.name,
                file.errors[0].message
              )
            )
          }
          maxSize={10 * 1024 ** 2}
          // accept={PDF_MIME_TYPE}
          w="fit-content"
          maxFiles={100}
          style={{
            borderRadius: 20,
          }}
        >
          <Flex direction="column" gap={20} align="center" py={38} px={48}>
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: 52,
                  height: 52,
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: 52,
                  height: 52,
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconFileTypePdf
                style={{
                  width: 52,
                  height: 52,
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <Flex direction="column" align="center">
              <Text size="xl" ta="center" fw={700}>
                {COMPONENT_DATA.upload.input.title}
              </Text>
              <Text size="sm" c="dimmed" mt={7}>
                {COMPONENT_DATA.upload.input.subtitle}
              </Text>
            </Flex>
          </Flex>
        </Dropzone>
        <Flex direction="column" gap={12}>
          <Flex direction="column" gap={0}>
            <Title order={5}>{COMPONENT_DATA.upload.input.selected}</Title>
            <Text c="dimmed" size="sm">
              {COMPONENT_DATA.upload.input.count(files.length)}
            </Text>
          </Flex>
          <Flex direction="column" gap={12} maw={500}>
            {files.map((file, index) => (
              <Flex
                align="center"
                gap={10}
                key={file.name}
                className={styles.file}
                style={{
                  "--animation-duration": `${(index + 1) * 0.05 + 0.15}s`,
                }}
                w="100%"
              >
                <ThemeIcon variant="light" size="lg">
                  <IconFileInvoice size={20} stroke={1.5} />
                </ThemeIcon>
                <Flex direction="column">
                  <Text fw={600} lineClamp={1}>
                    {file.name}
                  </Text>
                  <Text c="dimmed" size="sm">
                    {(file.size / 1024 ** 2).toFixed(2)} MB
                  </Text>
                </Flex>
                <ActionIcon
                  variant="transparent"
                  size="sm"
                  color="red"
                  onClick={() => {
                    setFiles((prev) =>
                      prev.filter((item) => item.path !== file.path)
                    );
                  }}
                  ml="auto"
                >
                  <IconX size={16} />
                </ActionIcon>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex>
          <Button size="md">{COMPONENT_DATA.upload.submit}</Button>
        </Flex>
        <Flex align="center" c={"orange"} gap={8}>
          <IconBulb />
          <Text fw={500}>
            {COMPONENT_DATA.upload.tip[0]}
            <Anchor
              c={"orange"}
              inherit
              underline="always"
              href={CHROME_EXTENSION_URL}
              target="_blank"
            >
              {COMPONENT_DATA.upload.tip[1]}
            </Anchor>
            {COMPONENT_DATA.upload.tip[2]}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddApplications;
