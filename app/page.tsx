import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      {/* Dynamic Sections to be implemented */}
      <section className="w-full py-24 px-6 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Pratos <span className="text-primary italic">Lendários</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl">
                Não avaliamos apenas o restaurante. Avaliamos a estrela da companhia.
                Os sabores que ficam na memória.
              </p>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              Ver Rankings Completos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Placeholder for Signature Dishes */}
            {[
              { name: "Mousse de Chocolate", restaurant: "Tasca do Zé", city: "Lisboa", rating: 4.8, img: "/images/mousse.png" },
              { name: "Carbonara Autêntica", restaurant: "Mamamia", city: "Corroios", rating: 4.5, img: "/images/carbonara.png" },
              { name: "Pastel de Nata", restaurant: "Padaria Lisboa Doce", city: "Lisboa", rating: 4.9, img: "/images/pastelnata.png" }
            ].map((dish, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-black">
                    {dish.rating} 🐰
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{dish.restaurant} • {dish.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
