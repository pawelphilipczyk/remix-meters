import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getData().map((data) => {
      return db.meter.create({ data });
    })
  );
}

seed();

function getData() {
  return [
    {
      name: "Tauron",
      type: `electricity`,
      digits: 5,
      decimal: 2,
      value: 1099,
    },
    {
      name: "PGNiG",
      type: `gas`,
      digits: 5,
      decimal: 5,
      value: 2099,
    },
  ];
}
