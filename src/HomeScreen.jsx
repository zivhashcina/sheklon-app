import React from "react";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2">ברוכים הבאים לשקלון 💠</h1>
      <p className="text-gray-600 text-lg mb-6">הקהילה שלך, הערך שלך</p>

      <div className="grid gap-4 w-full max-w-xs">
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl text-lg shadow-md transition-all">
          📝 הרשמה
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl text-lg shadow-md transition-all">
          🔐 כניסה
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-2xl text-lg shadow-md transition-all">
          🏪 עסקים
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl text-lg shadow-md transition-all">
          🤝 אזור קהילה
        </button>
      </div>
    </div>
  );
}
