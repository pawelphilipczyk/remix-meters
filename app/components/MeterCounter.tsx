import { Heading, HeadingProps } from "@chakra-ui/react";

type Props = HeadingProps & {
  digits?: number;
  decimal?: number;
  value: number;
};

export const MeterCounter = ({
  digits = 7,
  decimal = 2,
  value,
  ...props
}: Props) => {
  const output = (value / 10 ** decimal).toFixed(Math.min(digits - 1, decimal));
  const zeros = Array(digits - output.length + 1)
    .fill("0")
    .join("");
  return (
    <Heading
      className="meter-counter"
      size="sm"
      borderWidth={1}
      borderColor="gray.700"
      p={4}
      letterSpacing={1}
      rounded="md"
      {...props}
    >
      {zeros}
      {output}
    </Heading>
  );
};
