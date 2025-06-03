import React from "react";

export default function BusinessScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">🏪 עסקים בקהילה</h1>
        <p className="text-gray-600">כאן תוכל לגלות את העסקים המקומיים שמקבלים שקלון, עם דירוגים, קופונים והצעות משתלמות 🎯</p>
      </div>
    </div>
  );
}
