import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // ✅ correct path

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
  } catch (error) {
    console.error("GET /api/incidents error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}



