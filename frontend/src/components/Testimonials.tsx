import { Quote, Heart } from "lucide-react";
import { Sticker } from "./Sticker";

const testimonials = [
  {
    quote: "DeployHub reduced our deployment time by 90%. We can now ship features multiple times a day instead of once a week.",
    author: "Sarah Chen",
    role: "CTO at TechStart",
    avatar: "SC",
    color: "#441FFF",
  },
  {
    quote: "The environment management is a game-changer. Our dev and prod environments are completely isolated, making testing a breeze.",
    author: "Marcus Rodriguez",
    role: "Lead Developer at AppCo",
    avatar: "MR",
    color: "#0C7C59",
  },
  {
    quote: "Best developer experience I've ever had. From Git push to production in under 30 seconds. It's magical.",
    author: "Emily Watson",
    role: "Full Stack Developer",
    avatar: "EW",
    color: "#DD1155",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 dot-grid relative">
      {/* Decorative sticker */}
      <div className="absolute top-10 left-[15%] hidden lg:block">
        <Sticker icon={Heart} color="destructive" size="md" rotation={-20} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Thousands of developers <span className="doodle-underline">scale</span> with Anyedge. 💜
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the community of developers who trust us with their deployments. ⭐
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{
                transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                borderColor: `${testimonial.color}40`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}
            >
              <Quote className="w-10 h-10 mb-4" style={{ color: `${testimonial.color}40` }} />
              <p className="mb-6 text-muted-foreground italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-background font-medium"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div>{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              {/* Star stickers */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: testimonial.color }}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}