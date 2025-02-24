export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* هدر */}
      <header className="bg-blue-600 text-white p-4 text-xl font-bold">داشبورد مدیریت</header>

      {/* محتوای اصلی */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">خوش آمدید!</h2>
        <p>اینجا پنل مدیریت شماست. اطلاعات کلی را اینجا مشاهده خواهید کرد.</p>
      </main>

      {/* فوتر */}
      <footer className="bg-gray-800 text-white text-center p-2">&copy; 2025 - داشبورد شما</footer>
    </div>
  );
}
