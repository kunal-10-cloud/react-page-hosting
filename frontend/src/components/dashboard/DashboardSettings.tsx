import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function DashboardSettings() {
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
                defaultValue="John Doe"
                className="border-2 border-primary/20 rounded-xl h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="border-2 border-primary/20 rounded-xl h-12"
              />
            </div>
            <Button className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
