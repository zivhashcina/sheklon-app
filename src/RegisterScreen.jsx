// RegisterScreen.jsx
import React from "react";

export default function RegisterScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">הרשמה לקהילת שקלון</h2>
        <form className="space-y-4">
          <input type="text" placeholder="שם מלא" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="אימייל" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="סיסמה" className="w-full p-3 border rounded-xl" />
          <button className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">הרשמה</button>
        </form>
      </div>
    </div>
  );
}
