import Image from "next/image";
import React from "react";
import { Button, Title, Text, TextInput } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import styles from "./AuthModal.module.css";
import { staticData } from "@/utils/staticData";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";

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

  React.useEffect(() => {
    if (Object.keys(COMPONENT_DATA.titles).includes(variant)) {
      setCurrentVariant(variant);
    }
  }, [variant]);

  const handleSubmit = (values: {}) => {
    console.log("values", values);
  };

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: (codeResponse) => console.log("CODE", codeResponse.code),
    onError: () => console.log("Google login failed", "error"),
    flow: "auth-code",
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <Title order={3} className={styles.title}>
            {COMPONENT_DATA.titles[currentVariant].title}
          </Title>
          <Text size="sm" color="black.8">
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
            >
              {COMPONENT_DATA.buttons.submit.label}
            </Button>
          </form>
          <Text size="sm" align="center" color="secondary">
            {GENERAL_CONTENT.or}
          </Text>
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
            onClick={handleGoogleAuth}
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
          className={styles.cover}
        />
      </div>
    </div>
  );
}

export default AuthModal;
