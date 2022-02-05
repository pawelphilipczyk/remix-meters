import { Heading, StackProps, VStack } from "@chakra-ui/react";
import type { Meter } from "@prisma/client";
import { Link } from "react-router-dom";
import { MeterCounter } from ".";

type Props = StackProps & {
  meter: Meter;
  value: number;
};

export const MeterCard = ({ meter, value, ...props }: Props) => {
  return (
    <VStack as={Link} to={`/meters/${meter?.id}`} {...props}>
      <Heading
        className="meter-card"
        color="gray.700"
        p={2}
        lineHeight="none"
        textTransform="uppercase"
        size="xl"
        {...props}
      >
        {meter.type?.slice(0, 1)}
      </Heading>
      <Heading as="h3" size="sm">
        {meter.name}
      </Heading>
      <MeterCounter decimal={meter.decimal} digits={meter.digits} value={value} />
    </VStack>
  );
};
