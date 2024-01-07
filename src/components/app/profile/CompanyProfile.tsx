"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import {
  Avatar,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Skeleton,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";

const { profile: COMPONENT_DATA } = staticData.pages;

function CompanyProfile() {
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();
  const [userDataDebounce] = useDebouncedValue(userData, 500);

  const form = useForm({
    initialValues: {
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
    },
    validate: {
      firstName: isNotEmpty(),
      lastName: isNotEmpty(),
      email: isEmail(),
    },
  });

  useEffect(() => {
    if (userDataDebounce) {
      form.setValues({
        firstName: userDataDebounce.firstName,
        lastName: userDataDebounce.lastName,
        email: userDataDebounce.email,
      });
    }
  }, [userDataDebounce]);

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

      <Flex px={52} direction="column" gap={20}>
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
          <Button>{COMPONENT_DATA.save}</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CompanyProfile;
