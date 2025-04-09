import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export const DashboardScreen: React.FC = () => {
  return (
    <Layout>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-neutral-10">Welcome to Your Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your health score: 85/100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have 2 appointments scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Last login: 2 days ago</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
