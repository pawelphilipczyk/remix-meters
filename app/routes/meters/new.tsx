import { Button, Heading, Select, VStack } from "@chakra-ui/react";
import { Form, Outlet } from "remix";

const types = [
  { name: "Electricity", type: "electricity", unit: "kWh" },
  { name: "Gas", type: "gas", unit: "m3" },
  { name: "Water", type: "water", unit: "m3" },
];

export default function Index() {
  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">New meter</Heading>
      <Form>
        <VStack spacing={6}>
          <Select>
            {types.map((type) => (
              <option value={type.type}>{type.name}</option>
            ))}
          </Select>
          <Button variant="outline" type="submit">
            Add
          </Button>
        </VStack>
      </Form>
      <Outlet />
    </VStack>
  );
}
