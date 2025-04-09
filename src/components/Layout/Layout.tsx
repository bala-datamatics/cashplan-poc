import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-neutral-neutral-0">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-neutral-2 p-4">
        <div className="mb-8">
          {/* Bupa Logo */}
          <div className="relative w-[89px] h-[89px]">
            <div className="h-[89px] bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/vector.svg)] bg-[100%_100%]">
              <div className="w-[89px] h-[89px] bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[83px] h-[37px] top-[9px] left-1.5 bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {[
              { path: "/dashboard", label: "Dashboard" },
              { path: "/profile", label: "Profile" },
              { path: "/settings", label: "Settings" },
            ].map((item) => (
              <li key={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={item.path}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};
