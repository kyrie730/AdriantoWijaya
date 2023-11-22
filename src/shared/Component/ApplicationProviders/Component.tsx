"use client";
import { PropsWithChildren } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function ApplicationProviders({ children }: PropsWithChildren) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#1f2334",
          color: "#e65364",
        },
      }),
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
