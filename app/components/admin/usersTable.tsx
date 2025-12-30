"use client";
import { User } from "../../data/users";

type Props = {
  users: User[];
};

export default function UsersTable({ users }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Users</h2>
        <input
          placeholder="Search user..."
          className="border rounded-lg px-3 py-2 text-sm w-48"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Phone</th>
              <th className="text-left p-3">Balance</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3">
                  ₦{user.balance.toLocaleString()}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-primary-bright text-sm hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y">
        {users.map((user) => (
          <div key={user.id} className="p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full h-fit ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-600">
              <p>Phone: {user.phone}</p>
              <p>
                Balance: ₦{user.balance.toLocaleString()}
              </p>
            </div>

            <button className="mt-3 text-primary-bright text-sm">
              View user
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}