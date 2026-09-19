import { getBookings } from "@/lib/store";
import BookingsManager from "@/components/admin/BookingsManager";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Bookings Management — Aerova Admin",
};

export default function BookingsPage() {
  const bookings = getBookings();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#111111]">
          Bookings & Reservations
        </h1>
        <p className="text-xs text-[#737373] mt-1">
          Review, confirm, and update payment and booking statuses for all client journeys.
        </p>
      </div>

      <BookingsManager initialBookings={bookings} />
    </div>
  );
}
