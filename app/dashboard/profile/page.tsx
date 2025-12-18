"use client";
import { useEffect, useState } from "react";
import ProfileCard from "./profileCard";
import PersonalInfo from "./personalInfo";
import AccountInfo from "./accountInfo";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }
  const handleSave = (updatedData: { fullname: string; phoneNum: string }) => {
  const updatedUser = { ...user, ...updatedData };

  localStorage.setItem("user", JSON.stringify(updatedUser));
  setUser(updatedUser);
  setIsEditing(false);
};
const handleEdit = () => {
  setIsEditing(true);
};
  return (
    <section className="px-5 py-6 space-y-6">
      {/* PROFILE CARD */}
      <ProfileCard fullname={user.fullname} />

      {/* PERSONAL INFO */}
      <PersonalInfo
        fullname={user.fullname}
        phoneNum={user.phoneNum}
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
      />

      {/* ACCOUNT INFO */}
      <AccountInfo
        email={user.email}
        username={user.username}
      />
    </section>
  );
}