export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
  status: "Active" | "Suspended";
  createdAt: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "Amina Yusuf",
    email: "amina@gmail.com",
    phone: "08012345678",
    balance: 50450,
    status: "Active",
    createdAt: "2025-01-10",
  },
  {
    id: 2,
    name: "Sadiq Bello",
    email: "sadiq@gmail.com",
    phone: "08098765432",
    balance: 120000,
    status: "Suspended",
    createdAt: "2025-01-09",
  },
  {
    id: 3,
    name: "Maryam Ali",
    email: "maryam@gmail.com",
    phone: "08122233445",
    balance: 8450,
    status: "Active",
    createdAt: "2025-01-08",
  },
];