import { NextResponse } from "next/server";
import { getEnquiries, addEnquiry, updateEnquiryStatus } from "@/lib/store";

export async function GET() {
  const enquiries = getEnquiries();
  return NextResponse.json({ success: true, data: enquiries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      destination,
      travelMonth,
      travelYear,
      durationDays,
      travelersCount,
      travelStyle,
      budgetPerPerson,
      accommodation,
      customerName,
      customerEmail,
      customerPhone,
      customerCountry,
      notes,
    } = body;

    if (!customerName || !customerEmail || !customerPhone || !destination) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    const newEnquiry = addEnquiry({
      destination,
      travelMonth: travelMonth || "Flexible",
      travelYear: travelYear || "2026",
      durationDays: durationDays || "7-10 Days",
      travelersCount: Number(travelersCount) || 2,
      travelStyle: travelStyle || "Luxury",
      budgetPerPerson: budgetPerPerson || "Flexible",
      accommodation: accommodation || "5-Star Luxury",
      customerName,
      customerEmail,
      customerPhone,
      customerCountry: customerCountry || "India",
      notes: notes || "",
    });

    return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    const updated = updateEnquiryStatus(id, status);
    if (updated) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
  } catch {
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}
