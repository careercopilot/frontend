import React, { useState } from "react";
import {
  Title,
  Text,
  Avatar,
  ActionIcon,
  Pagination,
  Skeleton,
} from "@mantine/core";
import styles from "./History.module.css";
import HistoryItem from "@/interfaces/HistoryItem";

import { staticData } from "@/utils/staticData";
import { useUserHistory } from "@/hooks/user.swr";
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
      <Title size={22} order={3} weight={600}>
        {COMPONENT_DATA.title}
      </Title>

      {errorFetchingUserHistory ? (
        <Text size="lg" weight={500} color="black.8">
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
              href={item.meta.url}
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
                <Title size={18} weight={600} order={5}>
                  {item.profile.name}
                </Title>
                <Text size="sm" weight={500} color="black.8" lineClamp={1}>
                  {item.profile.headline}
                </Text>
              </div>
              <div className={styles.itemDate}>
                <Text size="sm" weight={500} color="black.8">
                  {new Date(item.createdAt).toDateString()}
                </Text>
              </div>
              <div className={styles.itemAction}>
                <ActionIcon variant="transparent" color="primary" tabIndex={-1}>
                  <Text size={28} weight={300}>
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
                  weight={500}
                  color="black.8"
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
