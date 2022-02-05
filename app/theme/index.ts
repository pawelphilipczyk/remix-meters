import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  // Global style overrides
  styles: {
    global: {
      body: {
        color: "gray.50",
        bg: "gray.900",
      },
      a: {
        cursor: "pointer",
      },
    },
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  components: {
    Container: {
      baseStyle: {
        px: [4, 4, 12],
        maxW: 1280,
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.200",
      },
    },
  },
});
