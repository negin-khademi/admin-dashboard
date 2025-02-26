'use client';

import { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'علی رضایی', email: 'ali@example.com' },
    { id: 2, name: 'زهرا محمدی', email: 'zahra@example.com' },
    { id: 3, name: 'امیر حسینی', email: 'amir@example.com' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;

    const newUserData = {
      id: users.length + 1,
      name: newUser.name,
      email: newUser.email,
    };

    setUsers([...users, newUserData]);
    setNewUser({ name: '', email: '' });
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">لیست کاربران</h2>

      {/* فرم افزودن کاربر */}
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <input
          type="text"
          placeholder="نام"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <button onClick={addUser} className="bg-blue-500 text-white p-2 rounded">
          افزودن کاربر
        </button>
      </div>

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
                <a href={`/users/${user.id}`} className="text-blue-500 hover:underline mx-2">
                  مشاهده
                </a>
                <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:underline">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
