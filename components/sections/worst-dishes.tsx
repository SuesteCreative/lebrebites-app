"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORST_DISHES, RESTAURANTS } from "@/lib/mock-data";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { AlertTriangle, ThumbsDown } from "lucide-react";

export const WorstDishesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

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
        <section ref={sectionRef} className="py-24 md:py-40 bg-zinc-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <AlertTriangle className="w-3 h-3" />
                            Alerta Gastronómico
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            O Salão da <br /> <span className="text-red-600 italic">Vergonha</span>
                        </h2>
                        <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-serif italic leading-relaxed">
                            "Nem tudo o que brilha é ouro. Aqui exponho as experiências que nunca deveriam ter saído da cozinha."
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 opacity-20">
                        <ThumbsDown className="w-20 h-20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Evitar a todo o custo</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {WORST_DISHES.map((dish) => {
                        const restaurant = RESTAURANTS.find(r => r.id === dish.restaurantId);
                        return (
                            <div key={dish.id} className="worst-card group relative">
                                <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 border border-white/5 aspect-[16/10]">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500">
                                                        {restaurant?.name || "Desconhecido"} • {restaurant?.city}
                                                    </span>
                                                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
                                                        {dish.name}
                                                    </h3>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    <RabbitTeethRating rating={dish.rating} size="sm" className="text-red-600" />
                                                    <span className="text-[10px] font-black text-red-600/50 uppercase">Veredito Fatal</span>
                                                </div>
                                            </div>

                                            <p className="text-zinc-400 font-medium leading-relaxed max-w-md border-l-2 border-red-600/30 pl-6">
                                                {dish.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
