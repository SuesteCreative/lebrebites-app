"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANTS } from "@/lib/mock-data";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { ArrowRight, Star, Award, Gem } from "lucide-react";

export default function RestaurantsPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".res-card", {
            opacity: 0,
            scale: 0.95,
            y: 20,
            stagger: 0.15,
            duration: 1,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Page Hero */}
                <div className="flex flex-col space-y-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="w-10 h-[1px] bg-primary" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Directório de Elite</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Os Meus <span className="text-primary italic">Favoritos</span>
                    </h1>
                    <p className="max-w-2xl text-xl text-muted-foreground font-serif italic leading-relaxed">
                        "Para uma ocasião especial ou para um almoço descontraído, aqui encontras os restaurantes onde confio plenamente."
                    </p>
                </div>

                {/* Categories Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main List */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {RESTAURANTS.map((res) => (
                            <Link
                                key={res.id}
                                href={`/restaurants/${res.slug}`}
                                className="res-card block group"
                            >
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3rem] shadow-sm mb-6 border border-black/5">
                                    <Image
                                        src={res.image}
                                        alt={res.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end h-1/2">
                                        <div className="flex items-center gap-2 mb-2">
                                            {res.priceRange.length >= 4 ? <Award className="w-4 h-4 text-primary" /> : <Gem className="w-4 h-4 text-primary" />}
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">{res.cuisine}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">{res.name}</h2>
                                    </div>
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-5 py-2 rounded-full shadow-2xl">
                                        <RabbitTeethRating rating={res.rating} size="sm" className="text-primary" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{res.city}</span>
                                        <span className="w-1 h-1 rounded-full bg-primary/30" />
                                        <span className="text-xs font-black text-primary/60">{res.priceRange}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all text-primary">
                                        Explorar <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer Context */}
                <div className="p-12 md:p-20 rounded-[4rem] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="space-y-6 relative z-10 max-w-xl text-center md:text-left">
                        <h3 className="text-4xl font-bold tracking-tight">Não encontras o que procuras?</h3>
                        <p className="text-white/60 font-medium italic">
                            "Novas reviews são adicionadas todas as semanas. Subscreve a newsletter
                            premium para receberes atualizações exclusivas antes de todos."
                        </p>
                    </div>
                    <div className="relative z-10 w-full md:w-auto">
                        <button className="w-full md:w-auto h-16 px-12 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">
                            Subscrever Guia
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
