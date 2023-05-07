import Image from "next/image";
import React from "react";
import { Button, Title, Text, TextInput } from "@mantine/core";
import styles from "./AuthModal.module.css";
import { staticData } from "@/utils/staticData";
import Link from "next/link";

const { authModal: COMPONENT_DATA } = staticData.pages.index;
const { content: GENERAL_CONTENT } = staticData.general;
const { icons: ICONS } = staticData.general;

const InputComponent = {
  text: TextInput,
  email: TextInput,
  password: TextInput,
};

function AuthModal({ variant }: { variant: string }) {
  const [currentVariant, setCurrentVariant] = React.useState<string>(variant);

  React.useEffect(() => {
    if (Object.keys(COMPONENT_DATA.titles).includes(variant)) {
      setCurrentVariant(variant);
    }
  }, [variant]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <Title order={2}>{COMPONENT_DATA.titles[currentVariant].title}</Title>
          <Text size="lg">
            {COMPONENT_DATA.titles[currentVariant].subTitle}
          </Text>
        </div>
        <div className={styles.body}>
          <div className={styles.form}>
            {COMPONENT_DATA.inputs
              .filter((input) => input.for.includes(currentVariant))
              .map((input, index) => {
                const Component =
                  InputComponent[input.type as keyof typeof InputComponent];
                return (
                  <Component
                    data-autoFocus={index === 0}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    key={input.name}
                  />
                );
              })}
            <Button
              color="primary"
              size="md"
              fullWidth
              className={styles.submitBtn}
            >
              {COMPONENT_DATA.buttons.submit.label}
            </Button>
          </div>
          <Text align="center"> {GENERAL_CONTENT.or} </Text>
          <Button
            color="primary"
            variant="light"
            leftIcon={
              <Image
                src={ICONS.google.src}
                alt={ICONS.google.alt}
                width={20}
                height={20}
              />
            }
            fullWidth
            size="md"
          >
            {COMPONENT_DATA.buttons.google.label}
          </Button>
        </div>
        <div className={styles.footer}>
          <Text align="center" inline>
            {COMPONENT_DATA.changeMode[currentVariant].label}{" "}
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.changeMode[currentVariant].button.path,
                },
              }}
            >
              <Text color="primary" component="span">
                {COMPONENT_DATA.changeMode[currentVariant].button.label}
              </Text>
            </Link>
          </Text>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={COMPONENT_DATA.cover.src}
          alt={COMPONENT_DATA.cover.alt}
          width={COMPONENT_DATA.cover.width}
          height={COMPONENT_DATA.cover.height}
        />
      </div>
    </div>
  );
}

export default AuthModal;
