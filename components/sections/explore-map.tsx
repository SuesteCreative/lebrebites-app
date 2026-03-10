"use client";

import React from "react";
import { RESTAURANTS } from "@/lib/mock-data";

export const ExploreMap = () => {
    // We focus on Lisbon
    // Since we can't easily generate a custom multi-marker map without a JS API key,
    // we use a large embed of Lisbon and list the restaurants below as "Active Markers" visual cues.
    return (
        <section className="w-full py-20 px-6 md:px-20 bg-zinc-50 dark:bg-zinc-950 border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-[2px] bg-primary" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Exploração Geográfica</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                        Lisboa <span className="text-primary italic">Interativa</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl font-serif italic text-zinc-500">
                        "Navega pelos bairros, descobre as esquinas com alma e planeia a tua próxima rota gastronómica."
                    </p>
                </div>

                <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99616.4866632759!2d-9.230243!3d38.7436057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1773096520271!5m2!1spt-PT!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(0.5) contrast(1.2)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Visual Overlay of "Markers" in list form for interactivity feel */}
                    <div className="absolute top-8 right-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 dark:border-white/5 w-80 hidden xl:block shadow-2xl">
                        <h3 className="text-xs font-black uppercase tracking-widest mb-6 opacity-40">Pontos de Interesse</h3>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {RESTAURANTS.filter(r => r.city.includes("Lisboa")).map((res) => (
                                <div key={res.id} className="group cursor-pointer">
                                    <p className="text-sm font-bold group-hover:text-primary transition-colors">{res.name}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-black opacity-60">{res.cuisine}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Restaurantes", val: "120+" },
                        { label: "Bairros", val: "18" },
                        { label: "Estrelas", val: "15" },
                        { label: "Esplanadas", val: "45" },
                    ].map((s, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">{s.label}</span>
                            <span className="text-3xl font-black text-primary">{s.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
