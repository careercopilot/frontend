"use client";

import { useUser } from "@/hooks/user.swr";
import { Flex, Skeleton } from "@mantine/core";
import React from "react";
import Pricing from "../home/Pricing";
import PrimaryContainer from "./general/PrimaryContainer";
import IUser from "@/interfaces/User";

const planValidator = (
  user: IUser
): {
  isValid: boolean;
  message?: string;
} => {
  if (!user.organization.plan) {
    return {
      isValid: false,
      message: "You don't have a plan",
    };
  }
  if (new Date(user.organization.plan.validity).getTime() < Date.now()) {
    return {
      isValid: false,
      message: "Your plan has expired",
    };
  }

  if (user.organization.plan.usage >= user.organization.plan.limit) {
    return {
      isValid: false,
      message: "You have reached your usage limit",
    };
  }

  return {
    isValid: true,
  };
};
function PlanValidator({ children }: { children: React.ReactNode }) {
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();

  return (
    <>
      {isUserDataLoading ? (
        <Flex direction="column" gap={20} p={20}>
          <Skeleton height={200} />
          <Skeleton height={80} maw={400} />
          <Skeleton height={80} maw={300} />
        </Flex>
      ) : errorFetchingUserData || !userData ? (
        <Flex direction="column" align="center" justify="center" py={100}>
          Something went wrong
        </Flex>
      ) : (
        <>
          {planValidator(userData).isValid ? (
            children
          ) : (
            <PrimaryContainer p={0}>
              <Pricing />
            </PrimaryContainer>
          )}
        </>
      )}
    </>
  );
}

export default PlanValidator;
