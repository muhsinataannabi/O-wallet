"use client";
import { users } from "../data/users";
import UsersTable from "../../../components/admin/usersTable";

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Users Management
      </h1>

      <UsersTable users={users} />
    </main>
  );
}