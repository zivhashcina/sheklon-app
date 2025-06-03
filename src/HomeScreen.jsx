// Home screen for a regular user in Sheklon app (static version)
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">ברוך הבא לשקלון 🌿</h1>

      <Card>
        <CardContent>
          <p className="text-lg font-semibold">יתרת שקלון: <span className="text-green-600">145 SHKL</span></p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <h2 className="font-bold text-xl">הפעולות שלי 📋</h2>
          <ul className="list-disc list-inside text-sm">
            <li>שלחת שקלונים לפלאפל אחמד</li>
            <li>מימשת קופון במאפייה של מיכאל</li>
            <li>קיבלת תודה מהמשתמשת יעל 👏</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="font-bold text-xl mb-2">הצעות אישיות 💡</h2>
          <Button className="w-full">צפה בקופונים באזור שלך</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="font-bold text-xl mb-2">פעולות מהירות ⚡</h2>
          <div className="flex flex-col space-y-2">
            <Button variant="outline">שלח שקלונים</Button>
            <Button variant="outline">קבל קופון</Button>
            <Button variant="outline">הצטרף למשימה קהילתית</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
