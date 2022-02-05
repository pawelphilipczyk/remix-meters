import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider, Container, Heading, VStack } from "@chakra-ui/react";
import theme from "./theme";

export const meta: MetaFunction = () => {
  return { title: "Meters" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Container as={VStack} spacing={6} py={6}>
            <Link to="/">
              <Heading p={6} bg="gray.800">
                Remix Meters
              </Heading>
            </Link>
            <Outlet />
          </Container>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
