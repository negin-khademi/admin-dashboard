import { notFound } from 'next/navigation';

const users = [
  { id: 1, name: 'علی رضایی', email: 'ali@example.com', phone: '09123456789', role: 'مدیر' },
  { id: 2, name: 'زهرا محمدی', email: 'zahra@example.com', phone: '09129876543', role: 'کاربر عادی' },
  { id: 3, name: 'امیر حسینی', email: 'amir@example.com', phone: '09351234567', role: 'نویسنده' },
];

export default function UserDetails({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === Number(params.id));

  if (!user) {
    return notFound(); // نمایش صفحه 404 اگر کاربر یافت نشد
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">جزئیات کاربر</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <p>
          <strong>نام:</strong> {user.name}
        </p>
        <p>
          <strong>ایمیل:</strong> {user.email}
        </p>
        <p>
          <strong>تلفن:</strong> {user.phone}
        </p>
        <p>
          <strong>نقش:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}
