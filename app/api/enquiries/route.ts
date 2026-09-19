import { NextResponse } from "next/server";
import { getEnquiries, addEnquiry, updateEnquiryStatus } from "@/lib/store";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const dbEnquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (dbEnquiries && dbEnquiries.length > 0) {
      return NextResponse.json({ success: true, data: dbEnquiries });
    }
  } catch (err) {
    console.warn("DB fetch fallback to in-memory store:", err);
  }
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

    const enquiryRef = `ENQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;

    let savedData;
    try {
      savedData = await prisma.enquiry.create({
        data: {
          enquiryRef,
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
          status: "NEW",
        },
      });
    } catch (dbErr) {
      console.warn("Prisma save failed, saving to local store:", dbErr);
      savedData = addEnquiry({
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
    }

    return NextResponse.json({ success: true, data: savedData }, { status: 201 });
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
    
    try {
      await prisma.enquiry.update({
        where: { id },
        data: { status },
      });
      return NextResponse.json({ success: true });
    } catch {
      const updated = updateEnquiryStatus(id, status);
      if (updated) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }
  } catch {
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}
