import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";

export async function POST(request: Request) {
  try {
    const { amountINR, bookingRef, packageTitle } = await request.json();

    if (!amountINR || amountINR <= 0) {
      return NextResponse.json({ success: false, error: "Invalid amount" }, { status: 400 });
    }

    // Razorpay requires amount in Paise (1 INR = 100 paise)
    const amountInPaise = Math.round(Number(amountINR) * 100);

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";

    // If real keys are configured, call Razorpay API
    if (keyId && keySecret && !keyId.includes("YourKeyHere") && !keyId.includes("placeholder")) {
      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: "INR",
        receipt: bookingRef || `rec_${Date.now()}`,
        notes: {
          packageTitle: packageTitle || "Aerova Luxury Journey",
        },
      });

      return NextResponse.json({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId,
      });
    } else {
      // Demo / Sandbox mode fallback when live credentials are not yet entered
      return NextResponse.json({
        success: true,
        orderId: `order_demo_${Date.now()}`,
        amount: amountInPaise,
        currency: "INR",
        keyId: keyId || "rzp_test_demo",
        isDemo: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
