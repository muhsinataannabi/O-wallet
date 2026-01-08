type AccountInformationProps = {
  email: string;
  username: string;
};

export default function AccountInfo({
  email,
  username,
}: AccountInformationProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      
      <h3 className="text-lg font-semibold mb-4">Account Information</h3>
      <div className="space-y-4">
        <div>
          <p className="text-xs text-gray-500">Email</p>
          <p className="font-medium text-gray-800">{email}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Username</p>
          {username}
        </div>
      </div>
    </div>
  );
}