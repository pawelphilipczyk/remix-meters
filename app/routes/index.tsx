import { Button, List, ListItem, VStack } from "@chakra-ui/react";
import { Form, json, Link, LoaderFunction, useLoaderData } from "remix";
import { auth, sessionStorage } from "~/auth.server";

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, { successRedirect: "/meters" });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const error = session.get(auth.sessionErrorKey) as LoaderData["error"];
  return json<LoaderData>({ error });
};

export default function Index() {
  const { error } = useLoaderData<LoaderData>();

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
        <Form method="post" action="/auth/github">
          {error && <div>{error.message}</div>}
          <Button variant="line" type="submit">Sign In with GitHub</Button>
        </Form>
      </ListItem>
    </List>
  );
}
