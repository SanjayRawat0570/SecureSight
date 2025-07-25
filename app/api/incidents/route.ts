import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const resolved = url.searchParams.get("resolved") === "true";

  const incidents = await prisma.incident.findMany({
    where: { resolved },
    include: { camera: true },
    orderBy: { tsStart: "desc" },
  });
  console.log(incidents)

  return NextResponse.json(incidents);
}

