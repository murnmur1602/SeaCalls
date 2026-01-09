import TripDetailPage from "@/components/TripDetailPage";
import { getTripBySlug, trips } from "@/lib/trips-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  return <TripDetailPage trip={trip} />;
}
