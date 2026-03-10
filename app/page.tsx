import { HeroSection } from "@/components/sections/hero-section";
import { LisbonReviewsSection } from "@/components/sections/lisbon-reviews";
import { WorstDishesSection } from "@/components/sections/worst-dishes";
import { LENDARY_DISHES, LENDARY_DESSERTS, TAKEOUT_AWARDS } from "@/lib/mock-data";
import Link from "next/link";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <LisbonReviewsSection />

      {/* Pratos Lendários Section */}
      <section className="w-full py-32 px-6 md:px-20 bg-background overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Pratos Assinatura</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                Pratos <span className="text-primary italic">Lendários</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl font-serif italic">
                "Não avaliamos apenas o restaurante. Avaliamos a estrela da companhia. Os sabores que definem uma era."
              </p>
            </div>
            <Link href="/top-dishes" className="text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors">
              Rankings Completos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LENDARY_DISHES.map((dish, idx) => (
              <Link key={idx} href={`/dish/${dish.id}`} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 shadow-xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <RabbitTeethRating rating={dish.rating} size="sm" showNumber={true} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">{dish.restaurant} • {dish.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobremesas Lendárias Section */}
      <section className="w-full py-32 px-6 md:px-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Doces Pecados</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                Sobremesas <span className="text-primary italic">Lendárias</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl font-serif italic">
                "Onde a refeição atinge o seu clímax. Receitas que desafiam a gravidade e o bom senso."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LENDARY_DESSERTS.map((dish, idx) => (
              <Link key={idx} href={`/dish/${dish.id}`} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 shadow-xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <RabbitTeethRating rating={dish.rating} size="sm" showNumber={true} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">{dish.restaurant} • {dish.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prémios Take-Out Section */}
      <section className="w-full py-32 px-6 md:px-20 bg-background overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Comfort Food Delivery</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                Prémios <span className="text-primary italic">Take-Out</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl font-serif italic">
                "A excelência não precisa de toalhas de linho. Os heróis silenciosos que chegam à sua porta."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TAKEOUT_AWARDS.map((dish, idx) => (
              <Link key={idx} href={`/dish/${dish.id}`} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 shadow-xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <RabbitTeethRating rating={dish.rating} size="sm" showNumber={true} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">{dish.restaurant} • {dish.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorstDishesSection />
    </main>
  );
}


