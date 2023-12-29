import axios from "axios";
import Image from "next/image";
import React from "react";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import Link from "next/link";
import { Button, Title, Text, TextInput } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import { useGoogleLogin } from "@react-oauth/google";

import notificationManager from "@/components/helpers/NotificationManager";
import { useCookies } from "react-cookie";
import API_CONSTANTS from "@/utils/apiConstants";
import { authenticationFetcher } from "@/hooks/auth.swr";

import styles from "./AuthModal.module.css";

import { staticData } from "@/utils/staticData";
const { authModal: COMPONENT_DATA } = staticData.pages.index;
const { content: GENERAL_CONTENT } = staticData.general;
const { icons: ICONS } = staticData.general;

const InputComponent = {
  text: TextInput,
  email: TextInput,
  password: TextInput,
};

function AuthModal({
  variant,
  closeModal,
}: {
  variant: string;
  closeModal: () => void;
}) {
  const [, setCookie] = useCookies();
  const [currentVariant, setCurrentVariant] = React.useState<string>(variant);
  const [googleAccountFetching, setGoogleAccountFetching] =
    React.useState<boolean>(false);
  const mForm: UseFormReturnType<any> = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length >= 6 ? null : "Password should be at least 6 characters",
      confirmPassword: (value: string) =>
        value === mForm.values.password || currentVariant === "login"
          ? null
          : "Passwords should match",
      firstName: (value: string) =>
        value.length > 0 || currentVariant === "login"
          ? null
          : "First name is required",
      lastName: (value: string) =>
        value.length > 0 || currentVariant === "login"
          ? null
          : "Last name is required",
    },
  });

  const { trigger: authenticate, isMutating } = useSWRMutation(
    "authenticate",
    authenticationFetcher
  );

  React.useEffect(() => {
    if (Object.keys(COMPONENT_DATA.titles).includes(variant)) {
      setCurrentVariant(variant);
    }
  }, [variant]);

  const handleAuthSuccess = async (
    token: string,
    messageContents: (typeof COMPONENT_DATA.messages)[keyof typeof COMPONENT_DATA.messages]
  ) => {
    setCookie("token", token, {
      path: "/",
      maxAge: 3600 * 24 * 30,
      sameSite: true,
    });
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    notificationManager.showSuccess(
      messageContents.title,
      messageContents.description
    );

    mutate(API_CONSTANTS.GET_USER);
    closeModal();
  };

  const handleSubmit = async (values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
  }) => {
    try {
      let token = await authenticate({
        authType: currentVariant,
        data: values,
      });
      handleAuthSuccess(
        token,
        COMPONENT_DATA.messages[
          currentVariant as keyof typeof COMPONENT_DATA.messages
        ]
      );
    } catch (err: any) {
      console.log(err);
      notificationManager.showError(err);
    }
  };

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        let token = await authenticate({
          authType: "google",
          data: codeResponse.code,
        });

        handleAuthSuccess(token, COMPONENT_DATA.messages.google);
      } catch (err: any) {
        console.log(err);
        notificationManager.showError(err);
      }
      setGoogleAccountFetching(false);
    },
    onError: (error) => {
      console.log("Google login failed", error);
      notificationManager.showError(error);
      setGoogleAccountFetching(false);
    },
    flow: "auth-code",
  });
  const loginWithGoogle = async () => {
    setGoogleAccountFetching(true);
    handleGoogleAuth();
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <Title order={3} className={styles.title}>
            {COMPONENT_DATA.titles[currentVariant].title}
          </Title>
          <Text size="sm" c="black.8">
            {COMPONENT_DATA.titles[currentVariant].subTitle}
          </Text>
        </div>
        <div className={styles.body}>
          <form className={styles.form} onSubmit={mForm.onSubmit(handleSubmit)}>
            {COMPONENT_DATA.inputs
              .filter((input) => input.for.includes(currentVariant))
              .map((input, index) => {
                const Component =
                  InputComponent[input.type as keyof typeof InputComponent];
                return (
                  <Component
                    data-autofocus={index === 0}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    key={input.name}
                    autoComplete={input.autoComplete}
                    size="md"
                    {...mForm.getInputProps(input.name)}
                  />
                );
              })}
            <Button
              color="primary"
              size="md"
              fullWidth
              className={styles.submitBtn}
              type="submit"
              disabled={isMutating}
            >
              {COMPONENT_DATA.buttons.submit.label}
            </Button>
          </form>
          <Text size="sm" ta="center" c="secondary">
            {GENERAL_CONTENT.or}
          </Text>
          <Button
            color="primary"
            variant="light"
            disabled={isMutating || googleAccountFetching}
            leftSection={
              <Image
                src={ICONS.google.src}
                alt={ICONS.google.alt}
                width={20}
                height={20}
              />
            }
            fullWidth
            size="md"
            onClick={loginWithGoogle}
          >
            {COMPONENT_DATA.buttons.google.label}
          </Button>
        </div>
        <div className={styles.footer}>
          <Text ta="center" inline>
            {COMPONENT_DATA.changeMode[currentVariant].label}{" "}
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.changeMode[currentVariant].button.path,
                },
              }}
            >
              <Text c="primary" component="span">
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
          className={styles.cover}
        />
      </div>
    </div>
  );
}

export default AuthModal;
