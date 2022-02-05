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

const defaultValues = {
  digits: 7,
  decimal: 2,
};

const types = [
  { name: "Electricity", type: "electricity", unit: "kWh" },
  { name: "Gas", type: "gas", unit: "m3" },
  { name: "Water", type: "water", unit: "m3" },
];

const getZeros = (count: number) => Array(count).fill(0).join("");

const getMeterPreview = (digits: number, decimal: number) =>
  [getZeros(digits - decimal), ".", getZeros(decimal)].join("");

export default function Index() {
  const [preview, setPreview] = useState(
    getMeterPreview(defaultValues.digits, defaultValues.decimal)
  );
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const fields = ["digits", "decimal"];
    const [digits, decimal] = fields.map((field) => Number(data.get(field)));
    const preview = getMeterPreview(digits, decimal);
    setPreview(preview);
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
                defaultValue={defaultValues.digits}
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
                defaultValue={defaultValues.decimal}
                w={16}
                textAlign="center"
                max={9}
                min={0}
              />
            </FormControl>
          </HStack>

          <Heading size="sm">{preview}</Heading>

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
