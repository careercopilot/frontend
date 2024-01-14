"use client";

import notificationManager from "@/components/helpers/NotificationManager";
import { useUser } from "@/hooks/user.swr";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericMutationFetcher } from "@/utils/helpers/swr.helper";
import { staticData } from "@/utils/staticData";
import {
  Avatar,
  Box,
  Button,
  Flex,
  LoadingOverlay,
  SimpleGrid,
  Skeleton,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import useSWRMutation from "swr/mutation";

const { profile: COMPONENT_DATA } = staticData.pages;

interface FormValues {
  firstName: string;
  lastName: string;
  organization: string;
}

function CompanyProfile() {
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();
  const [userDataDebounce] = useDebouncedValue(userData, 500);

  const { trigger, isMutating } = useSWRMutation(
    API_CONSTANTS.UPDATE_USER,
    genericMutationFetcher
  );

  const form = useForm<FormValues>({
    initialValues: {
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      organization: userData?.organization?.name,
    },
    validate: {
      firstName: isNotEmpty(),
      lastName: isNotEmpty(),
      organization: isNotEmpty(),
    },
  });

  useEffect(() => {
    if (userDataDebounce) {
      form.setInitialValues({
        firstName: userDataDebounce.firstName,
        lastName: userDataDebounce.lastName,
        organization: userDataDebounce.organization?.name,
      });
      form.setValues({
        firstName: userDataDebounce.firstName,
        lastName: userDataDebounce.lastName,
        organization: userDataDebounce.organization?.name,
      });
    }
  }, [userDataDebounce]);

  const handleSubmit = async (values: FormValues) => {
    try {
      await trigger({
        type: "put",
        rest: [values],
      });
      notificationManager.showSuccess("Profile updated successfully");
    } catch (e) {
      console.log(e);
      notificationManager.showError(e);
    }
  };

  return (
    <Flex
      h="fit-content"
      w="100%"
      direction="column"
      gap={24}
      style={{ overflow: "hidden", borderRadius: 20 }}
      pb={20}
    >
      <Flex direction="column" bg="primary" p={32} pb={0} mb={128 / 2}>
        <Link href={"/app/openings"}>
          <Flex align="center" gap={10} c={"white"}>
            <IconChevronLeft />
            <Title order={2} size={20}>
              {COMPONENT_DATA.title}
            </Title>
          </Flex>
        </Link>
        {isUserDataLoading || errorFetchingUserData ? (
          <Skeleton
            height={128}
            width={128}
            radius={20}
            ml={20}
            style={{
              transform: `translateY(calc(50%))`,
            }}
          />
        ) : (
          <Avatar
            src={userData.avatar}
            alt={userData.firstName + " " + userData.lastName}
            color="secondary"
            imageProps={{
              referrerPolicy: "no-referrer",
            }}
            radius={20}
            size={128}
            component={Link}
            href={"/app/profile"}
            ml={20}
            style={{
              transform: `translateY(calc(50%))`,
            }}
            bg="white"
          >
            {userData.avatar
              ? null
              : [
                  userData.firstName?.charAt(0).toUpperCase(),
                  userData.lastName?.charAt(0).toUpperCase(),
                ]
                  .map(Boolean)
                  .join("")}
          </Avatar>
        )}
      </Flex>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex px={52} direction="column" gap={20} pos="relative">
          <LoadingOverlay visible={isMutating} />
          <SimpleGrid
            cols={{
              sm: 1,
              md: 2,
            }}
            maw={640}
            spacing={20}
          >
            {COMPONENT_DATA.inputs.map((input) => (
              <TextInput
                key={input.key}
                label={input.label}
                placeholder={input.placeholder}
                required
                disabled={isUserDataLoading || errorFetchingUserData}
                {...form.getInputProps(input.key)}
              />
            ))}
            <Box />
            <Flex direction="column" gap={4}>
              <Text size="sm" fw={500}>
                {COMPONENT_DATA.mail.label}
              </Text>
              <Text c="primary">{userData?.email}</Text>
            </Flex>
          </SimpleGrid>
          <Flex>
            <Button type="submit">{COMPONENT_DATA.save}</Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}

export default CompanyProfile;
