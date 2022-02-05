import { Heading } from "@chakra-ui/react";

type Props = {
  digits?: number;
  decimal?: number;
  value: number;
};

export const MeterCounter = ({ digits = 7, decimal = 2, value }: Props) => {
  const output = (value / 10 ** decimal).toFixed(Math.min(digits - 1, decimal));
  const zeros = Array(digits - output.length + 1)
    .fill("0")
    .join("");
  return (
    <Heading
      size="sm"
      borderWidth={1}
      borderColor="gray.700"
      p={4}
      letterSpacing={1}
      rounded="md"
    >
      {zeros}
      {output}
    </Heading>
  );
};
