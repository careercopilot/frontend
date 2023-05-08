import React from "react";
import { Title, Text, Avatar, ActionIcon } from "@mantine/core";
import styles from "./History.module.css";
import HistoryItem from "@/interfaces/HistoryItem";

import { staticData } from "@/utils/staticData";
const { history: COMPONENT_DATA } = staticData.pages.profile;

function ProfileInfoSec() {
  /** TODO: Fetched Data */
  const searchHistory: HistoryItem[] = new Array(5).fill(0).map(() => ({
    user: {
      fName: "Zaire",
      lName: "Stanton",
      avatar:
        Math.random() > 0.5
          ? "https://avatars.githubusercontent.com/u/56592200?v=4"
          : undefined,
      position: "Senior Developer",
      organization: "Google",
    },
    timestamp: new Date().toLocaleDateString(),
  }));

  return (
    <div className={styles.container}>
      <Title size={22} order={3} weight={600}>
        {COMPONENT_DATA.title}
      </Title>
      <div className={styles.info}>
        {searchHistory.map((item, index) => (
          <div key={index} className={styles.item} tabIndex={0}>
            <Avatar
              src={item.user.avatar}
              alt={`${item.user.fName} ${item.user.lName}`}
              radius="xl"
              size={50}
              color="primary"
            >
              {item.user.avatar
                ? null
                : item.user.fName[0] + item.user.lName[0]}
            </Avatar>
            <div className={styles.itemInfo}>
              <Title size={18} weight={600} order={5}>
                {`${item.user.fName} ${item.user.lName}`}
              </Title>
              <Text size="sm" weight={500} color="black.8">
                {`${item.user.position} @${item.user.organization}`}
              </Text>
            </div>
            <div className={styles.itemDate}>
              <Text size="sm" weight={500} color="black.8">
                {new Date(item.timestamp).toLocaleDateString()}
              </Text>
            </div>
            <div className={styles.itemAction}>
              <ActionIcon variant="transparent" color="primary" tabIndex={-1}>
                <Text size={28} weight={300}>
                  {">"}
                </Text>
              </ActionIcon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileInfoSec;
