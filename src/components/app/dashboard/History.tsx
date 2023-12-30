"use client";

import { useUserHistory } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import {
  ActionIcon,
  Avatar,
  Pagination,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import styles from "./History.module.css";
const { history: COMPONENT_DATA } = staticData.pages.profile;

function ProfileInfoSec() {
  const [activePage, setPage] = useState(1);
  const {
    userHistory,
    userHistoryCount,
    isUserHistoryLoading,
    errorFetchingUserHistory,
  } = useUserHistory(activePage, COMPONENT_DATA.pageSize);

  const [totalPages, setTotalPages] = useState(0);

  React.useEffect(() => {
    if (userHistoryCount !== undefined && userHistoryCount !== null) {
      setTotalPages(Math.ceil(userHistoryCount / COMPONENT_DATA.pageSize));
    }
  }, [userHistoryCount]);

  return (
    <div className={styles.container}>
      <Title size={22} order={3} fw={600}>
        {COMPONENT_DATA.title}
      </Title>

      {errorFetchingUserHistory ? (
        <Text size="lg" fw={500} c="black.8">
          {COMPONENT_DATA.error}
        </Text>
      ) : isUserHistoryLoading ? (
        <>
          <Skeleton height={200} />
        </>
      ) : (
        <div className={styles.info}>
          {userHistory?.map((item, index) => (
            <a
              key={index}
              className={styles.item}
              tabIndex={0}
              href={item.linkedinUrl}
              target="_blank"
            >
              <Avatar
                src={item.profile.image}
                alt={item.profile.name}
                radius="xl"
                size={50}
                color="primary"
              >
                {item.profile.image
                  ? null
                  : item.profile.name
                      ?.split(" ")
                      .map((name) => name[0])
                      .join("")}
              </Avatar>
              <div className={styles.itemInfo}>
                <Title size={18} fw={600} order={5} lineClamp={1}>
                  {item.profile.name}
                  {" • "}
                  {item.position}
                </Title>
                <Text size="sm" fw={500} c="black.8" lineClamp={1}>
                  {item.profile.headline}
                </Text>
              </div>
              <div className={styles.itemDate}>
                <Text size="sm" fw={500} c="black.8">
                  {new Date(item.createdAt).toDateString()}
                </Text>
              </div>
              <div className={styles.itemAction}>
                <ActionIcon variant="transparent" c="primary" tabIndex={-1}>
                  <Text fz={28} fw={300}>
                    {">"}
                  </Text>
                </ActionIcon>
              </div>
            </a>
          ))}
          {userHistory?.length === 0 && (
            <>
              <div className={styles.empty}>
                <Text
                  size="lg"
                  fw={500}
                  c="black.8"
                  className={styles.emptyText}
                >
                  {COMPONENT_DATA.empty}
                </Text>
              </div>
            </>
          )}
        </div>
      )}

      <Pagination total={totalPages} value={activePage} onChange={setPage} />
    </div>
  );
}

export default ProfileInfoSec;
