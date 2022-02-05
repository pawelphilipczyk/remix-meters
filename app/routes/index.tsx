import { Container, Heading, List, ListItem, VStack } from "@chakra-ui/react";
import { Link } from "remix";

export default function Index() {
  return (
    <List as={VStack} spacing={6}>
      <ListItem>
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer"
        >
          15m Quickstart Blog Tutorial
        </a>
      </ListItem>
      <ListItem>
        <Link to="/meters" rel="noreferrer">
          Your Meters
        </Link>
      </ListItem>
      <ListItem>
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
          Remix Docs
        </a>
      </ListItem>
    </List>
  );
}
