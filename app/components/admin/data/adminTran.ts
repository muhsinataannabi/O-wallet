export type Transaction = {
  id: number;
  user: string;
  amount: string;
  type: "Credit" | "Debit";
  cardType: string;
  date: string;
};

export const adminTransactions: Transaction[] = [
  {
    id: 1,
    user: "John Doe",
    amount: "$120.00",
    type: "Credit",
    cardType: "Dollar Card",
    date: "2026-01-07",
  },
  {
    id: 2,
    user: "Aisha Musa",
    amount: "₦45,000",
    type: "Debit",
    cardType: "Naira Card",
    date: "2026-01-07",
  },
  {
    id: 3,
    user: "Michael Smith",
    amount: "$300.00",
    type: "Credit",
    cardType: "Dollar Card",
    date: "2026-01-06",
  },
  {
    id: 4,
    user: "Zainab Bello",
    amount: "₦12,000",
    type: "Debit",
    cardType: "Naira Card",
    date: "2026-01-05",
  },
  {
    id: 5,
    user: "David Mark",
    amount: "$50.00",
    type: "Credit",
    cardType: "Dollar Card",
    date: "2026-01-04",
  },
    {
    id: 6,
    user: "feas Mark",
    amount: "$10.00",
    type: "Credit",
    cardType: "Dollar Card",
    date: "2026-01-04",
  },
    {
    id: 7,
    user: "binta sadi",
    amount: "$12.00",
    type: "Debit",
    cardType: "Naira Card",
    date: "2026-01-04",
  },
];