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
    // p: 20,
    // h: `calc(100vh - ${theme.other.sizes.shell.spacing * 3} - ${
    //   theme.other.sizes.shell.header.height
    // })`,
    ...props,
    style: {
      ...(transperent ? {} : theme.other.box.primary),
      ...props.style,
    },
  };

  if (scroll) {
    return (
      <ScrollArea {...containerProps}>
        <Box p={20}>{children}</Box>
      </ScrollArea>
    );
  }

  return (
    <Box p={20} {...containerProps}>
      {children}
    </Box>
  );
}

export default PrimaryContainer;
