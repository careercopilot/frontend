"use client";

import notificationManager from "@/components/helpers/NotificationManager";
import { useOpeningData } from "@/hooks/openings.swr";
import { useSkillsSearch } from "@/hooks/skills.swr";
import { ISkill } from "@/interfaces/Opening";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericMutationFetcher } from "@/utils/helpers/swr.helper";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Flex,
  Loader,
  LoadingOverlay,
  NumberInput,
  RangeSlider,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { IconChevronLeft, IconSparkles, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import styles from "./AddOpening.module.css";

interface FormValues {
  position: string;
  type: string;
  requiredMinExperience: number;
  requiredMaxExperience: number;
  skills: ISkill[];
  companyDepartment: string;
  total: number;
}

interface TransformedFormValues
  extends Omit<
    FormValues,
    "requiredMinExperience" | "requiredMaxExperience" | "skills"
  > {
  experienceRequired: {
    min: number;
    max: number;
  };
  skills: string[];
}

const { addEditOpening: COMPONENT_DATA } = staticData.pages;

function EditOpening() {
  const params = useParams();
  const OPENING_ID = params.openingId as string;
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const { skills, errorFetchingSkills, isSkillsLoading } =
    useSkillsSearch(searchValue);
  const { trigger: createSkill, isMutating: isCreatingSkill } = useSWRMutation(
    API_CONSTANTS.CREATE_SKILL,
    genericMutationFetcher
  );
  const { trigger: udpateOpening, isMutating: isUpdatingOpening } =
    useSWRMutation(
      API_CONSTANTS.UPDATE_OPENING(OPENING_ID),
      genericMutationFetcher
    );

  const form = useForm<
    FormValues,
    (values: FormValues) => TransformedFormValues
  >({
    initialValues: {
      position: "",
      companyDepartment: "",
      type: COMPONENT_DATA.inputs.type.suggestions[0],
      total: COMPONENT_DATA.inputs.total.default,
      requiredMinExperience: 0,
      requiredMaxExperience: 3,
      skills: [],
    },
    validate: {
      position: isNotEmpty("Name is required"),
      companyDepartment: isNotEmpty("Company Department is required"),
      type: isNotEmpty("Type is required"),
      total: (value) =>
        value <= 0 ? "Positions must be greater than 0" : null,
      requiredMaxExperience: (value, values) =>
        values.requiredMaxExperience < values.requiredMinExperience
          ? "Max Experience must be greater than Min Experience"
          : null,
      skills: (value) =>
        value.length === 0 ? "At least one skill is required" : null,
    },
    transformValues: (values) => ({
      ...values,
      experienceRequired: {
        min: values.requiredMinExperience,
        max: values.requiredMaxExperience,
      },
      skills: values.skills.map((item) => item._id),
    }),
  });

  const { opening, errorLoadingOpening, isLoadingOpening } =
    useOpeningData(OPENING_ID);
  const [openingData] = useDebouncedValue(opening, 100);

  useEffect(() => {
    if (openingData) {
      form.setValues({
        position: openingData.position,
        companyDepartment: openingData.companyDepartment,
        type: openingData.type,
        total: openingData.total,
        requiredMinExperience: openingData.experienceRequired.min,
        requiredMaxExperience: openingData.experienceRequired.max,
        skills: openingData.skills,
      });
    }
  }, [openingData]);

  const handleCreateSkill = async () => {
    try {
      const createdSkill = await createSkill<{ data: ISkill }>({
        type: "post",
        rest: [
          {
            name: newSkill,
          },
        ],
      });
      form.setValues({
        skills: [...form.values.skills, createdSkill.data],
      });
      setNewSkill("");
      notificationManager.showSuccess("Skill created successfully");
    } catch (e) {
      console.log(e);
      notificationManager.showError("Error creating skill");
    }
  };

  const handleSubmit = async (values: TransformedFormValues) => {
    try {
      await udpateOpening<{ data: string }>({
        type: "put",
        rest: [
          {
            _id: OPENING_ID,
            ...values,
          },
        ],
      });
      notificationManager.showSuccess("Opening created successfully");
      push(`/app/openings/${OPENING_ID}`);
    } catch (e) {
      console.log(e);
      notificationManager.showError("Error creating opening");
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex direction="column" gap={28}>
        <LoadingOverlay
          visible={isUpdatingOpening || errorLoadingOpening || isLoadingOpening}
        />
        <Flex>
          <Link href={"/app/openings"}>
            <Flex align="center" gap={10}>
              <IconChevronLeft />
              <Title order={2} size={20}>
                {COMPONENT_DATA.editTitle}
              </Title>
            </Flex>
          </Link>
        </Flex>
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
            {...form.getInputProps("position")}
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
          <Flex direction="column" gap={12}>
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
              error={form.errors.skills}
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
              disabled={errorFetchingSkills}
            />
          </Flex>
          <Flex
            direction="column"
            gap={10}
            style={{
              gridColumn: "span 2",
            }}
          >
            <Flex direction="column">
              <Text fw={500}>{COMPONENT_DATA.newSkill.title}</Text>
              <Text c="dimmed" fz="sm">
                {COMPONENT_DATA.newSkill.description}
              </Text>
            </Flex>
            <Flex gap={10} align="center">
              <TextInput
                disabled={isCreatingSkill || errorFetchingSkills}
                placeholder={COMPONENT_DATA.newSkill.input.placeholder}
                value={newSkill}
                onChange={(event) => setNewSkill(event.currentTarget.value)}
              />
              <Button
                loading={isCreatingSkill}
                variant="light"
                onClick={handleCreateSkill}
                disabled={!newSkill}
              >
                {COMPONENT_DATA.newSkill.submit}
              </Button>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Flex>
          <Button type="submit" size="md">
            {COMPONENT_DATA.submit}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default EditOpening;
