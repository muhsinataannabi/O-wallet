"use client";
import { cards } from "../data/cards";
import CardsTable from "../../../components/admin/cardsTable";

export default function AdminCardsPage() {
  return (
    <main className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Cards
        </h1>
        <p className="text-sm text-gray-500">
          Manage all user cards
        </p>
      </div>

      {/* Cards Table */}
      <CardsTable cards={cards} />
    </main>
  );
}