import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sticker } from "./Sticker";
import { MapPin } from "lucide-react";

export function Network() {
  const regions = [
    { name: "North America", count: "35 locations", emoji: "🇺🇸", color: "primary" as const },
    { name: "Europe", count: "28 locations", emoji: "🇪🇺", color: "secondary" as const },
    { name: "Asia Pacific", count: "22 locations", emoji: "🌏", color: "destructive" as const },
    { name: "South America", count: "8 locations", emoji: "🌎", color: "primary" as const },
    { name: "Africa", count: "5 locations", emoji: "🌍", color: "secondary" as const },
    { name: "Middle East", count: "7 locations", emoji: "🕌", color: "destructive" as const },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/20 square-grid relative">
      {/* Decorative stickers */}
      <div className="absolute top-20 right-[10%] hidden lg:block">
        <Sticker icon={MapPin} color="destructive" size="md" rotation={-15} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">
              The <span className="doodle-underline">Anyedge</span> Network. 🌍
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our global edge network ensures your applications are always fast, 
              no matter where your users are. With 100+ points of presence worldwide, 
              we deliver content from the location closest to your users. ⚡
            </p>

            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => {
                const borderColors = {
                  primary: 'border-primary/30',
                  secondary: 'border-secondary/30',
                  destructive: 'border-destructive/30',
                };
                
                return (
                  <div
                    key={index}
                    className={`bg-card border-2 ${borderColors[region.color]} rounded-xl p-4 shadow-lg transform hover:scale-105 transition-all`}
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{region.emoji}</span>
                      <div className="text-lg">{region.name}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{region.count}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border-4 border-primary/40 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform" style={{ transform: 'rotate(1deg)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548244250-9aa08b58f204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbiUyMGdsb2JlfGVufDF8fHx8MTc2MzM4NTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global network"
                className="w-full aspect-square object-cover"
              />
              {/* Polaroid-style caption */}
              <div className="bg-card p-4 text-center border-t-2 border-primary/20">
                <p className="text-sm">Our global network 🌐 ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}