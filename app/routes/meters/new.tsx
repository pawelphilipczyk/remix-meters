import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Form, Link, Outlet } from "remix";
import { MeterCounter } from "~/components";

const defaultValues = {
  digits: 7,
  decimal: 2,
};

const types = [
  { name: "Electricity", type: "electricity", unit: "kWh" },
  { name: "Gas", type: "gas", unit: "m3" },
  { name: "Water", type: "water", unit: "m3" },
];

export default function Index() {
  const [counter, setCounter] = useState(defaultValues);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const fields = ["digits", "decimal"];
    const [digits, decimal] = fields.map((field) => Number(data.get(field)));
    setCounter({ digits, decimal: Math.min(digits, decimal) });
  };

  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">New meter</Heading>
      <Form onChange={onChange} ref={formRef}>
        <VStack spacing={6}>
          <FormControl id="meter-type">
            <FormLabel>Type</FormLabel>
            <Select>
              {types.map((type) => (
                <option value={type.type}>{type.name}</option>
              ))}
            </Select>
          </FormControl>

          <HStack>
            <FormControl id="meter-digits">
              <FormLabel>Digits</FormLabel>
              <Input
                type="number"
                name="digits"
                defaultValue={counter.digits}
                w={16}
                textAlign="center"
                max={9}
                min={1}
              />
            </FormControl>
            <FormControl id="meter-decimal">
              <FormLabel>Decimal</FormLabel>
              <Input
                type="number"
                name="decimal"
                defaultValue={counter.decimal}
                w={16}
                textAlign="center"
                max={counter.digits - 1}
                min={0}
              />
            </FormControl>
          </HStack>

          <MeterCounter {...counter} value={0} />

          <Button variant="outline" type="submit" w="full">
            Add
          </Button>
          <Link to="/meters">Cancel</Link>
        </VStack>
      </Form>
      <Outlet />
    </VStack>
  );
}
