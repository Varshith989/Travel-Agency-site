import { NextResponse } from "next/server";
import { packages } from "@/lib/data/packages";

export async function GET() {
  return NextResponse.json({ success: true, data: packages });
}
