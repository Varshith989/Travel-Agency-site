import { NextResponse } from "next/server";
import { destinations } from "@/lib/data/destinations";

export async function GET() {
  return NextResponse.json({ success: true, data: destinations });
}
