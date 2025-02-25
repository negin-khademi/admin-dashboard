'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  // استایل فعال برای لینک‌های انتخاب‌شده
  const activeLink = 'bg-blue-500 text-white';
  const normalLink = 'text-gray-700 hover:bg-gray-200';

  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">پنل مدیریت</h2>

      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className={`p-3 rounded ${pathname === '/dashboard' ? activeLink : normalLink}`}>
          داشبورد
        </Link>
        <Link href="/users" className={`p-3 rounded ${pathname === '/users' ? activeLink : normalLink}`}>
          کاربران
        </Link>
        <Link href="/settings" className={`p-3 rounded ${pathname === '/settings' ? activeLink : normalLink}`}>
          تنظیمات
        </Link>
      </nav>
    </div>
  );
}
