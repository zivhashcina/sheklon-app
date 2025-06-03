import React from "react";

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-100 p-6 animate-fadeIn transition-all duration-1000 ease-out">
      {/* לוגו */}
      <img
        src="/logo.png"
        alt="שקלון לוגו"
        className="w-24 h-24 mb-4 animate-bounce"
      />

      {/* כותרת מרכזית */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
        ברוכים הבאים לקהילת שקלון 🎉
      </h1>

      {/* טקסט משיכה */}
      <p className="text-gray-600 text-center mb-6">
        🌟 הצטרפו למהפכה הכלכלית המקומית – צברו שקלונים, פדו קופונים, ותמכו בעסקים שבאמת חשובים לכם!
      </p>

      {/* כפתורי ניווט */}
      <div className="space-y-3 w-full max-w-xs">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
          📝 הרשמה
        </button>
        <button className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition">
          🔐 כניסה
        </button>
        <button className="w-full bg-yellow-500 text-white py-3 rounded-xl shadow hover:bg-yellow-600 transition">
          🏪 עסקים
        </button>
        <button className="w-full bg-purple-600 text-white py-3 rounded-xl shadow hover:bg-purple-700 transition">
          🤝 אזור קהילה
        </button>
      </div>

      {/* טקסט משלים */}
      <p className="mt-6 text-sm text-gray-700 text-center italic">
        חזרו כל יום ותראו את ההשפעה שלכם – פרסים, סטטוסים, ואימפקט חברתי אמיתי ✨
      </p>
    </div>
  );
}
