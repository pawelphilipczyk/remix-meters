import {
  Heading,
  HeadingProps,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "remix";

const meters = [
  { name: "Electricity", type: "electricity", unit: "kWh" },
  { name: "Gas", type: "gas", unit: "m3" },
  { name: "Water", type: "water", unit: "m3" },
];

const Icon = (props: HeadingProps & { type: string }) => (
  <Heading
    borderWidth={1}
    borderColor="gray.800"
    color="gray.700"
    p={2}
    lineHeight="none"
    textTransform="uppercase"
    size="sm"
    {...props}
  >
    {props.type?.slice(0, 1)}
  </Heading>
);

export default function Index() {
  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">Your meters</Heading>
      <SimpleGrid as={List} gap={6} columns={[1, 2, 3, 4]}>
        {meters.map((meter) => (
          <HStack as={ListItem}>
            <Icon type={meter.type} />
            <Heading as="h3" size="sm">
              {meter.name}
            </Heading>
          </HStack>
        ))}
      </SimpleGrid>
      <Outlet />
    </VStack>
  );
}
