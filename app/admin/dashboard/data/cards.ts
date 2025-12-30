export type Card = {
  id: number;
  userName: string;
  cardNumber: string;
  cardType: "Naira" | "Dollar";
  status: "Active" | "Frozen" | "Expired";
  balance: string;
  createdAt: string;
};

export const cards: Card[] = [
  {
    id: 1,
    userName: "Amina Yusuf",
    cardNumber: "**** **** **** 2345",
    cardType: "Naira",
    status: "Active",
    balance: "₦45,000",
    createdAt: "2025-01-10",
  },
  {
    id: 2,
    userName: "Sadiq Bello",
    cardNumber: "**** **** **** 8890",
    cardType: "Dollar",
    status: "Frozen",
    balance: "$120",
    createdAt: "2025-01-08",
  },
  {
    id: 3,
    userName: "Maryam Ali",
    cardNumber: "**** **** **** 1122",
    cardType: "Naira",
    status: "Expired",
    balance: "₦0",
    createdAt: "2024-11-22",
  },
];