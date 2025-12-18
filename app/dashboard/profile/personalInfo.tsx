"use client";
import { useState } from "react";

type PersonalInfoProps = {
  fullname: string;
  phoneNum: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (data: { fullname: string; phoneNum: string }) => void;
};

export default function PersonalInfo({
  fullname,
  phoneNum,
  isEditing,
  onEdit,
  onSave,
}: PersonalInformationProps) {

  const [form, setForm] = useState({
    fullname,
    phoneNum,
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
<hr />
        {!isEditing ? (
          <button
            onClick={onEdit}
            className="text-blue-600 text-sm font-medium"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => onSave(form)}
            className="text-white bg-primary-bright text-sm font-medium rounded-lg px-4 py-2"
          >
            Save
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="space-y-4">

        {/* FULL NAME */}
        <div>
          <p className="text-xs text-gray-500">Full Name</p>

          {!isEditing ? (
            <p className="font-medium text-gray-800">{fullname}</p>
          ) : (
            <input
              value={form.fullname}
              onChange={(e) =>
                setForm({ ...form, fullname: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          )}
        </div>

        {/* PHONE NUMBER */}
        <div>
          <p className="text-xs text-gray-500">Phone Number</p>

          {!isEditing ? (
            <p className="font-medium text-gray-800">{phoneNum}</p>
          ) : (
            <input
              value={form.phoneNum}
              onChange={(e) =>
                setForm({ ...form, phoneNum: e.target.value })
              }
              className="w-full border rounded-lg px-3 py-2"
            />
          )}
        </div>

      </div>
    </div>
  );
}