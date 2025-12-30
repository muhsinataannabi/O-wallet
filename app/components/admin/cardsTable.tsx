"use client";
import CardStatusBadge from "./cardStatusBadge";
import { Card } from "../../data/cards";

type Props = {
  cards: Card[];
};

export default function CardsTable({ cards }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">User</th>
            <th className="px-4 py-3 text-left">Card</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Balance</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Created</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {cards.map((card) => (
            <tr key={card.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">
                {card.userName}
              </td>

              <td className="px-4 py-3">{card.cardNumber}</td>

              <td className="px-4 py-3">{card.cardType}</td>

              <td className="px-4 py-3 font-semibold">
                {card.balance}
              </td>

              <td className="px-4 py-3">
                <CardStatusBadge status={card.status} />
              </td>

              <td className="px-4 py-3 text-gray-500">
                {card.createdAt}
              </td>

              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}