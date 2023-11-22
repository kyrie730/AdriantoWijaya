"use client";
import { PropsWithChildren } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function ApplicationProviders({ children }: PropsWithChildren) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
          color: "#c6a548",
        },
      }),
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
