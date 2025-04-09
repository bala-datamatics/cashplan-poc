import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { DashboardScreen } from "./screens/DashboardScreen/DashboardScreen";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen/SettingsScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </StrictMode>,
);
