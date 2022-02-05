import {
  Heading,
  HeadingProps,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet, useLoaderData } from "remix";

import type { LoaderFunction } from "remix";
import type { Meter } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { meters: Array<Meter> };

export let loader: LoaderFunction = async () => {
  const data: LoaderData = {
    meters: await db.meter.findMany(),
  };
  return data;
};

const Icon = (props: HeadingProps & { type: string }) => (
  <Heading
    borderWidth={1}
    borderColor="gray.800"
    color="gray.700"
    p={2}
    lineHeight="none"
    textTransform="uppercase"
    size="xl"
    {...props}
  >
    {props.type?.slice(0, 1)}
  </Heading>
);

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">Your meters</Heading>
      <SimpleGrid as={List} gap={6} columns={[1, 2, 3, 4]}>
        {data.meters.map((meter) => (
          <ListItem key={meter.id}>
            <VStack as={Link} to={`/meters/${meter.id}`}>
              <Icon type={meter.type} />
              <Heading as="h3" size="sm">
                {meter.name}
              </Heading>
              <Heading as="h4" size="xs" color="gray.300">{meter.value}</Heading>
            </VStack>
          </ListItem>
        ))}
      </SimpleGrid>
      <HStack as={Link} to="new">
        <Icon type="+" />
        <Heading as="h3" size="sm">
          Add
        </Heading>
      </HStack>
      <Outlet />
    </VStack>
  );
}
