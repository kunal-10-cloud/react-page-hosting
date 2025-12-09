"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useAuth } from "@/context/AuthContext";

export function DashboardSettings() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="p-6 md:p-8 dot-grid min-h-full">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 dot-grid min-h-full">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="mb-2">Settings ⚙️</h2>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
          <h3 className="mb-6">Profile Information</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user?.username || ""}
                readOnly
                className="border-2 border-primary/20 rounded-xl h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email || ""}
                readOnly
                className="border-2 border-primary/20 rounded-xl h-12"
              />
            </div>
            <Button className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Save Changes
            </Button>
          </div>
        </div>
      </div >
    </div >
  );
}
