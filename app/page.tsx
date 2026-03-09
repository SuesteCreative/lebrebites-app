import { HeroSection } from "@/components/sections/hero-section";
import { LisbonReviewsSection } from "@/components/sections/lisbon-reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <LisbonReviewsSection />

      {/* Signature Dishes Section */}
      <section className="w-full py-32 px-6 md:px-20 bg-background overflow-hidden">
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
            <button className="text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors">
              Rankings Completos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Mousse de Chocolate", restaurant: "Tasca do Zé", city: "Lisboa", rating: 4.8, img: "/images/mousse.png" },
              { name: "Carbonara Autêntica", restaurant: "Mamamia", city: "Corroios", rating: 4.5, img: "/images/carbonara.png" },
              { name: "Pastel de Nata", restaurant: "Padaria Lisboa Doce", city: "Lisboa", rating: 4.9, img: "/images/pastelnata.png" }
            ].map((dish, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 shadow-xl">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black text-black shadow-lg">
                    {dish.rating} 🐰
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">{dish.restaurant} • {dish.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
