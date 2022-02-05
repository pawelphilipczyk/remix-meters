import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import type { Meter } from "@prisma/client";
import { Link } from "react-router-dom";
import type { LoaderFunction } from "remix";
import { Outlet, useLoaderData } from "remix";
import { MeterCard } from "~/components";
import { db } from "~/utils/db.server";

type LoaderData = { meters: Array<Meter> };

export let loader: LoaderFunction = async () => {
  const data: LoaderData = {
    meters: await db.meter.findMany(),
  };
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">Your meters</Heading>
      <SimpleGrid as={List} gap={6} columns={[1, 2, 3, 4]}>
        {data.meters.map((meter) => (
          <ListItem key={meter.id}>
            <MeterCard meter={meter} value={Math.random() * 10000} />
          </ListItem>
        ))}
      </SimpleGrid>
      <Button variant="outline" as={Link} to="new" leftIcon={<AddIcon />}>
        Add
      </Button>
      <Outlet />
    </VStack>
  );
}
