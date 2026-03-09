"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { WORST_DISHES, RESTAURANTS } from "@/lib/mock-data";
import { gsap, useGSAP } from "@/lib/gsap-setup";

export const WorstDishesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Filter to show only the bread for now as requested
    const selectedDishes = WORST_DISHES.filter(d => d.id === "wd1");

    useGSAP(() => {
        gsap.from(".worst-card", {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full py-32 px-6 md:px-20 bg-zinc-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-red-600" />
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600">Alerta Gastronómico</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            O Salão da <span className="text-red-600 italic">Vergonha</span>
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-xl font-serif italic">
                            "Nem tudo o que brilha é ouro. Aqui exponho as experiências que nunca deveriam ter saído da cozinha."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {selectedDishes.map((dish, idx) => {
                        const restaurant = RESTAURANTS.find(r => r.id === dish.restaurantId);
                        return (
                            <Link key={idx} href={`/dish/${dish.id}`} className="worst-card group cursor-pointer block">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 shadow-2xl border border-white/5 bg-zinc-900">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="object-cover w-full h-full opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-6 right-6 bg-red-600 px-4 py-2 rounded-full text-[10px] font-black text-white shadow-lg">
                                        {dish.rating} 🐰
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                                </div>
                                <h3 className="text-3xl font-bold mb-1 group-hover:text-red-600 transition-colors uppercase tracking-tight">{dish.name}</h3>
                                <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-black">
                                    {restaurant?.name || "Desconhecido"} • {restaurant?.city}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
