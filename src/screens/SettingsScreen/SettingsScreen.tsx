import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const SettingsScreen: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    twoFactor: false,
    language: "English",
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({ ...prev, language: e.target.value }));
  };

  return (
    <Layout>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-neutral-10">Settings</h1>
      </header>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">Enable Notifications</span>
              <Button
                onClick={() => handleToggle("notifications")}
                variant={settings.notifications ? "default" : "outline"}
              >
                {settings.notifications ? "On" : "Off"}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Two-Factor Authentication</span>
              <Button
                onClick={() => handleToggle("twoFactor")}
                variant={settings.twoFactor ? "default" : "outline"}
              >
                {settings.twoFactor ? "On" : "Off"}
              </Button>
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-neutral-neutral-8 mb-1">
                Language
              </label>
              <select
                id="language"
                value={settings.language}
                onChange={handleLanguageChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brandprimary-base focus:border-brandprimary-base sm:text-sm rounded-md"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};
