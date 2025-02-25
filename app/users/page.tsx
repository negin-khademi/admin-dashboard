const users = [
  { id: 1, name: 'علی رضایی', email: 'ali@example.com' },
  { id: 2, name: 'زهرا محمدی', email: 'zahra@example.com' },
  { id: 3, name: 'امیر حسینی', email: 'amir@example.com' },
];

export default function UsersPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">لیست کاربران</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">#</th>
            <th className="border p-2">نام</th>
            <th className="border p-2">ایمیل</th>
            <th className="border p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <a href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                  مشاهده
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
