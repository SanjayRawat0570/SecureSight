import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const resolved = url.searchParams.get("resolved") === "true";

    const incidents = await prisma.incident.findMany({
      where: { resolved },
      include: { camera: true },
      orderBy: { tsStart: "desc" },
    });

    return NextResponse.json(incidents);
  } catch (err) {
    console.error("❌ API ERROR /api/incidents", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


