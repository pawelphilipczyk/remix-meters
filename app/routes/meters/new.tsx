import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "remix";
import { MeterForm } from "~/components";

export default function Index() {
  return (
    <VStack spacing={6} py={6}>
      <Heading size="md">Add meter</Heading>
      <MeterForm />
      <Link to="/meters">Cancel</Link>
      <Outlet />
    </VStack>
  );
}
