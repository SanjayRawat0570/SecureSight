import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.incident.deleteMany();
  await prisma.camera.deleteMany();

  await prisma.camera.createMany({
    data: [
      { name: "Camera 01", location: "Shop Floor A" },
      { name: "Camera 02", location: "Vault" },
      { name: "Camera 03", location: "Entrance" },
    ],
  });

  const cameraList = await prisma.camera.findMany();

  const incidentData = [
    { type: "Gun Threat", image: "gun-threat.jpg" },
    { type: "Unauthorized Access", image: "anauth-access.jpg" },
    { type: "Unknown Person", image: "unknown-person.jpg" },
    { type: "Vault Breach", image: "vault-breach.jpg" },
    { type: "Face Recognised", image: "face-recognised.jpg" },
  ];

  for (let i = 0; i < 12; i++) {
    const incident = faker.helpers.arrayElement(incidentData);
    const tsStart = faker.date.recent({ days: 1 });
    const tsEnd = new Date(tsStart.getTime() + 2 * 60 * 1000);

    await prisma.incident.create({
      data: {
        type: incident.type,
        tsStart,
        tsEnd,
        thumbnailUrl: `/thumbnails/${incident.image}`,
        cameraId: cameraList[i % 3].id,
        resolved: false,
      },
    });
  }

  console.log("✅ Seeded 12 incidents using real images.");
}

main().finally(() => prisma.$disconnect());



