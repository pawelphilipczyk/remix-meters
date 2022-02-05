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
    Button: {
      variants: {
        outline: {
          _hover: {
            color: "gray.200",
            bg: "gray.800",
          },
          _active: {
            bg: "gray.700",
          },
        },
      },
    },
    Container: {
      baseStyle: {
        px: [4, 4, 12],
        maxW: 1280,
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "xs",
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: "none",
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.200",
      },
    },
    Input: {
      parts: ["field"],
      baseStyle: {
        field: {
          _hover: {
            bg: "gray.800",
          },
          _focus: {
            bg: "gray.800",
          },
        },
      },
    },
    List: {
      parts: ["item"],
      baseStyle: {
        item: {
          py: 4,
          px: 6,
          borderWidth: 1,
          borderColor: "gray.800",
          _hover: {
            bg: "gray.800",
          },
        },
      },
    },
  },
});
