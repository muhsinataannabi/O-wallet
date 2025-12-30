"use client";
import ProfileSetting from "../../../components/admin/profileSetting";
import ChangePassword from "../../../components/admin/changePassword";
import NotificationSetting from "../../../components/admin/notificationSetting";
import DeleteAccount from "../../../components/admin/deleteAccount";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <ProfileSetting />
      <ChangePassword />
      <NotificationSetting />
      <DeleteAccount />
    </div>
  );
}