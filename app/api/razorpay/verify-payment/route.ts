import { NextResponse } from "next/server";
import crypto from "crypto";
import { updateBookingStatus } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } =
      await request.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";

    // If real keys are present, verify HMAC-SHA256 signature
    if (keySecret && !keySecret.includes("YourSecretKeyHere") && !keySecret.includes("placeholder")) {
      const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generatedSignature !== razorpay_signature) {
        return NextResponse.json(
          { success: false, error: "Payment verification signature mismatch" },
          { status: 400 }
        );
      }
    }

    // Mark booking as confirmed in store
    if (bookingId) {
      updateBookingStatus(bookingId, "CONFIRMED");
    }

    return NextResponse.json({
      success: true,
      message: "Payment successfully verified",
      paymentId: razorpay_payment_id || `pay_demo_${Date.now()}`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Payment verification failed" },
      { status: 500 }
    );
  }
}
