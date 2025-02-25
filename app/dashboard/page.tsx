import Sidebar from '../components/Sidebar';

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* منوی کناری */}
      <Sidebar />

      {/* محتوای اصلی */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">داشبورد</h2>
        <p>به پنل مدیریت خوش آمدید!</p>
      </main>
    </div>
  );
}
