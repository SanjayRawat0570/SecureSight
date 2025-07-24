import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const incident = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
    include: { camera: true },
  });

  return NextResponse.json(incident);
}

