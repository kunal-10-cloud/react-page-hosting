import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CreditCard, Download } from "lucide-react";

export function DashboardBilling() {
  return (
    <div className="p-6 md:p-8 square-grid min-h-full">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="mb-2">Billing 💳</h2>
          <p className="text-muted-foreground">
            Manage your subscription and billing
          </p>
        </div>

        {/* Current Plan */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="mb-2">Current Plan</h3>
              <Badge className="bg-primary/10 text-primary border-2 border-primary/30">
                Pro Plan
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-3xl mb-1">$20</div>
              <div className="text-sm text-muted-foreground">/month</div>
            </div>
          </div>
          <Button variant="outline" className="border-2">
            Change Plan
          </Button>
        </div>

        {/* Payment Method */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
          <h3 className="mb-6">Payment Method</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-medium">•••• •••• •••• 4242</div>
              <div className="text-sm text-muted-foreground">Expires 12/25</div>
            </div>
          </div>
          <Button variant="outline" className="border-2">
            Update Card
          </Button>
        </div>

        {/* Billing History */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
          <h3 className="mb-6">Billing History</h3>
          <div className="space-y-4">
            {[
              { date: "Nov 1, 2024", amount: "$20.00", status: "Paid" },
              { date: "Oct 1, 2024", amount: "$20.00", status: "Paid" },
              { date: "Sep 1, 2024", amount: "$20.00", status: "Paid" },
            ].map((invoice, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div>
                  <div className="font-medium">{invoice.date}</div>
                  <div className="text-sm text-muted-foreground">
                    {invoice.amount}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                    {invoice.status}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
