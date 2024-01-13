"use client";

import { useSkillsSearch } from "@/hooks/skills.swr";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Flex,
  Loader,
  NumberInput,
  RangeSlider,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconChevronLeft, IconSparkles, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./AddOpening.module.css";

interface FormValues {
  title: string;
  companyDepartment: string;
  type: string;
  total: number;
  requiredMinExperience: number;
  requiredMaxExperience: number;
  skills: { _id: string; name: string; link?: string }[];
}

interface TransformedFormValues
  extends Omit<
    FormValues,
    "requiredMinExperience" | "requiredMaxExperience" | "skills"
  > {
  requiredExperience: {
    min: number;
    max: number;
  };
  skills: string[];
}

const { addOpening: COMPONENT_DATA } = staticData.pages;

function AddOpening() {
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const { skills, errorFetchingSkills, isSkillsLoading } =
    useSkillsSearch(searchValue);

  const form = useForm<
    FormValues,
    (values: FormValues) => TransformedFormValues
  >({
    initialValues: {
      title: "",
      companyDepartment: "",
      type: COMPONENT_DATA.inputs.type.suggestions[0],
      total: COMPONENT_DATA.inputs.total.default,
      requiredMinExperience: 0,
      requiredMaxExperience: 3,
      skills: [],
    },
    validate: {
      title: isNotEmpty("Name is required"),
      companyDepartment: isNotEmpty("Company Department is required"),
      type: isNotEmpty("Type is required"),
      total: (value) => value !== 0 || "Total is required",
      requiredMaxExperience: (value, values) =>
        values.requiredMaxExperience >= values.requiredMinExperience ||
        "Max Experience must be greater than Min Experience",
    },
    transformValues: (values) => ({
      ...values,
      requiredExperience: {
        min: values.requiredMinExperience,
        max: values.requiredMaxExperience,
      },
      skills: values.skills.map((item) => item._id),
    }),
  });

  const handleSubmit = (values: TransformedFormValues) => {};

  return (
    <Flex direction="column" gap={28}>
      <Flex>
        <Link href={"/app/openings"}>
          <Flex align="center" gap={10}>
            <IconChevronLeft />
            <Title order={2} size={20}>
              {COMPONENT_DATA.title}
            </Title>
          </Flex>
        </Link>
      </Flex>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid
          maw={600}
          cols={{
            sm: 1,
            lg: 2,
          }}
        >
          <TextInput
            required
            label={COMPONENT_DATA.inputs.title.label}
            placeholder={COMPONENT_DATA.inputs.title.placeholder}
            {...form.getInputProps("title")}
          />
          <TextInput
            required
            label={COMPONENT_DATA.inputs.companyDepartment.label}
            placeholder={COMPONENT_DATA.inputs.companyDepartment.placeholder}
            {...form.getInputProps("companyDepartment")}
          />
          <Autocomplete
            required
            label={COMPONENT_DATA.inputs.type.label}
            {...form.getInputProps("type")}
            data={COMPONENT_DATA.inputs.type.suggestions}
          />
          <NumberInput
            required
            label={COMPONENT_DATA.inputs.total.label}
            {...form.getInputProps("total")}
          />
          <Flex direction="column" gap={12}>
            <Text size="sm" fw={500}>
              {COMPONENT_DATA.inputs.experience.label}
            </Text>
            <RangeSlider
              size={8}
              minRange={1}
              maxRange={20}
              itemType={"number"}
              min={COMPONENT_DATA.inputs.experience.range[0]}
              max={COMPONENT_DATA.inputs.experience.range[1]}
              label={(item) => item}
              thumbSize={16}
              showLabelOnHover
              labelTransitionProps={{
                duration: 100,
                timingFunction: "ease-out",
                transition: "pop",
              }}
              value={[
                form.values.requiredMinExperience,
                form.values.requiredMaxExperience,
              ]}
              onChange={(value) =>
                form.setValues({
                  requiredMinExperience: value[0],
                  requiredMaxExperience: value[1],
                })
              }
            />
          </Flex>
          <Box />
          <Flex
            direction="column"
            gap={12}
            // style={{
            //   gridColumn: "span 2",
            // }}
          >
            <Title order={6} size="var(--h6-ext)" fw={500}>
              {COMPONENT_DATA.inputs.skill.title}
            </Title>
            <Flex direction="column" gap={6}>
              {form.values.skills.map((skill, index) => (
                <Flex
                  align="center"
                  gap={8}
                  w="100%"
                  key={index}
                  className={styles.animatedIntro}
                >
                  {skill.link ? (
                    <Image
                      src={skill.link}
                      alt={skill.name}
                      height={16}
                      width={16}
                      style={{
                        borderRadius: 2,
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <IconSparkles size={16} />
                  )}
                  <Text c="black.4" fw={600}>
                    {skill.name}
                  </Text>
                  <ActionIcon ml="auto" size="sm" variant="light" color="red">
                    <IconX
                      size={14}
                      onClick={() => {
                        form.setValues({
                          skills: form.values.skills.filter(
                            (item) => item._id !== skill._id
                          ),
                        });
                      }}
                    />
                  </ActionIcon>
                </Flex>
              ))}
            </Flex>
            <Select
              data={
                skills?.map((item) => ({
                  value: item._id,
                  label: item.name,
                  icon: item.link,
                })) || []
              }
              value={null}
              placeholder={COMPONENT_DATA.inputs.skill.placeholder}
              nothingFoundMessage={
                searchValue
                  ? COMPONENT_DATA.inputs.skill.nothingFound
                  : COMPONENT_DATA.inputs.skill.searchPlaceholder
              }
              searchable
              rightSection={isSkillsLoading ? <Loader size={16} /> : null}
              onChange={(value) => {
                const skill = skills.find((item) => item._id === value);
                if (!skill) return;
                if (form.values.skills.find((item) => item._id === value))
                  return;

                form.setValues((values) => ({
                  ...values,
                  skills: Array.from(
                    new Set([...(values.skills ?? []), skill])
                  ),
                }));

                setTimeout(() => {
                  setSearchValue("");
                }, 0);
              }}
              size="sm"
              maxDropdownHeight={400}
              onSearchChange={setSearchValue}
              searchValue={searchValue}
            />
          </Flex>
        </SimpleGrid>
      </form>
      <Flex>
        <Button size="md">{COMPONENT_DATA.submit}</Button>
      </Flex>
    </Flex>
  );
}

export default AddOpening;
