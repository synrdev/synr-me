import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "JetBrains Mono",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
