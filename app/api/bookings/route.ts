import { NextResponse } from "next/server";
import { getBookings, addBooking, updateBookingStatus } from "@/lib/store";

export async function GET() {
  const bookings = getBookings();
  return NextResponse.json({ success: true, data: bookings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      packageId,
      packageTitle,
      customerName,
      customerEmail,
      customerPhone,
      travelDate,
      travelers,
      totalPriceINR,
      notes,
    } = body;

    if (!packageId || !customerName || !customerEmail || !customerPhone || !travelDate) {
      return NextResponse.json(
        { success: false, error: "Missing required booking details." },
        { status: 400 }
      );
    }

    const booking = addBooking({
      packageId,
      packageTitle: packageTitle || "Custom Luxury Journey",
      customerName,
      customerEmail,
      customerPhone,
      travelDate,
      travelers: Number(travelers) || 2,
      totalPriceINR: Number(totalPriceINR) || 149999,
      status: "CONFIRMED",
      paymentStatus: "PAID",
      notes: notes || "",
    });

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to process booking." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    const updated = updateBookingStatus(id, status);
    if (updated) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
  } catch {
    return NextResponse.json({ success: false, error: "Update failed" }, { status: 500 });
  }
}
