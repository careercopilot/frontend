"use client";

import type { BoxProps, ScrollAreaProps } from "@mantine/core";
import { Box, ScrollArea, useMantineTheme } from "@mantine/core";

function PrimaryContainer({
  children,
  scroll = false,
  transperent = false,
  ...props
}: {
  children: any;
  scroll?: boolean;
  transperent?: boolean;
} & (BoxProps | ScrollAreaProps)) {
  const theme = useMantineTheme();
  const containerProps = {
    p: 20,
    ...props,
    style: {
      ...(transperent ? {} : theme.other.box.primary),
      ...props.style,
    },
  };

  if (scroll) {
    return <ScrollArea {...containerProps}>{children}</ScrollArea>;
  }

  return <Box {...containerProps}>{children}</Box>;
}

export default PrimaryContainer;
