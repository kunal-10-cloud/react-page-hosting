import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Sticker } from "./Sticker";
import { Sparkles, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for personal projects",
    features: [
      "Unlimited projects",
      "100GB bandwidth/month",
      "1 concurrent build",
      "Community support",
      "Custom domains",
    ],
    cta: "Get Started Free",
    popular: false,
    emoji: "🚀",
    icon: Rocket,
  },
  {
    name: "Pro",
    price: "$20",
    description: "For professional developers",
    features: [
      "Everything in Hobby",
      "1TB bandwidth/month",
      "5 concurrent builds",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
    emoji: "⭐",
    icon: Sparkles,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited bandwidth",
      "Unlimited builds",
      "24/7 dedicated support",
      "SLA guarantee",
      "Custom contracts",
      "Security reviews",
    ],
    cta: "Contact Sales",
    popular: false,
    emoji: "👑",
    icon: Crown,
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-32 dot-grid relative" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 tape">
          <h2 className="mb-4">
            Simple, <span className="doodle-underline">transparent</span> pricing 💰
          </h2>
          <p className="text-muted-foreground text-lg">
            Start for free and scale as you grow. No hidden fees, no surprises. ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`bg-card border-2 rounded-2xl p-8 relative transform transition-all hover:scale-105 ${
                  plan.popular
                    ? "border-primary shadow-2xl md:-translate-y-2"
                    : "border-border shadow-xl"
                }`}
                style={{
                  transform: plan.popular ? 'scale(1.02)' : `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                  boxShadow: plan.popular ? '0 20px 50px rgba(68, 31, 255, 0.2)' : '0 10px 30px rgba(0,0,0,0.08)'
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm shadow-lg border-2 border-background flex items-center gap-2">
                      <span>Most Popular</span>
                      <span>🔥</span>
                    </div>
                  </div>
                )}

                <div className="absolute -top-3 -right-3">
                  <Sticker icon={Icon} color={plan.popular ? "primary" : index % 2 === 0 ? "secondary" : "destructive"} size="sm" rotation={15} />
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3>{plan.name}</h3>
                    <span className="text-2xl">{plan.emoji}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <Button
                  className={`w-full mb-6 shadow-lg transition-all ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-secondary/40">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>All plans include 14-day free trial. No credit card required.</span>
            <span>🎉</span>
          </p>
        </div>
      </div>
    </section>
  );
}