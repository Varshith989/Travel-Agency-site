import PlanTripClient from "@/components/planner/PlanTripClient";

export const metadata = {
  title: "Plan Your Bespoke Trip — Aerova Travels",
  description: "Craft a customized luxury journey with our personal travel architects. Request a tailor-made day-by-day itinerary.",
};

interface Props {
  searchParams: Promise<{ destination?: string; style?: string }>;
}

export default async function PlanTripPage({ searchParams }: Props) {
  const { destination, style } = await searchParams;

  return (
    <PlanTripClient
      initialDestination={destination}
      initialStyle={style}
    />
  );
}
