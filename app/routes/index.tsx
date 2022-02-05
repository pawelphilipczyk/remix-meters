import { Container, Heading, List, ListItem, VStack } from "@chakra-ui/react";

export default function Index() {
  return (
    <Container as={VStack} spacing={6} py={6}>
      <Heading p={6} bg="gray.800">Remix Meters</Heading>
      <List as={VStack} spacing={6}>
        <ListItem p={6} borderWidth={1} borderColor="gray.800">
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </ListItem>
        <ListItem p={6} borderWidth={1} borderColor="gray.800">
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </ListItem>
        <ListItem p={6} borderWidth={1} borderColor="gray.800">
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </ListItem>
      </List>
    </Container>
  );
}
