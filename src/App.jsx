import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>ברוכים הבאים לקהילת שקלון</h1>
      <p>בחרו אפשרות:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><button onClick={() => alert("מעבר לרישום משתמש חדש")}>📝 הרשמה</button></li>
        <li><button onClick={() => alert("כניסה לחשבון")}>🔐 כניסה</button></li>
        <li><button onClick={() => alert("כניסה לאזור עסק")}>🏪 עסקים</button></li>
        <li><button onClick={() => alert("קהילה")}>🤝 אזור קהילה</button></li>
      </ul>
    </div>
  );
}

export default App;
