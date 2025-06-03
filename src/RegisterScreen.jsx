import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-4">הרשמה לשקלון 📝</h1>

          {!registered ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="מספר טלפון"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Input
                placeholder="אימייל (לא חובה)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="שכונה / אזור מגורים"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
              <Button className="w-full" type="submit">
                הירשם ✅
              </Button>
            </form>
          ) : (
            <div className="text-center text-green-700 font-semibold">
              ✅ נרשמת בהצלחה! ברוך הבא לשקלון 🌟
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
