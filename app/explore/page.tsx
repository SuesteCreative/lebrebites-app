"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANTS, CRITIC } from "@/lib/mock-data";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Search, SlidersHorizontal, Map as MapIcon, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExploreMap } from "@/components/sections/explore-map";

export default function ExplorePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<"grid" | "list">("grid");

    useGSAP(() => {
        gsap.from(".explore-item", {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header & Personal Context */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                            O Meu <span className="text-primary italic">Mapa</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-serif italic max-w-xl leading-relaxed">
                            "Todos os locais que visitei, avaliei e recomendo para quem não transige na qualidade."
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto gap-2">
                        <div className="relative flex-grow md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Pesquisar restaurante ou prato..."
                                className="w-full h-12 pl-12 pr-4 rounded-full bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none text-sm font-medium"
                            />
                        </div>
                        <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full border border-black/5">
                            <SlidersHorizontal className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Filters & View Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-6 border-b border-black/5 pb-8">
                    <div className="flex flex-wrap gap-2">
                        {["Lisboa", "Setúbal", "Porto", "Todos"].map((city) => (
                            <button key={city} className="px-5 py-2 rounded-full bg-secondary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                {city}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center bg-secondary rounded-full p-1">
                        <button
                            onClick={() => setView("grid")}
                            className={cn("p-2 rounded-full transition-all", view === "grid" ? "bg-white shadow-md text-primary" : "text-muted-foreground")}
                        >
                            <Grid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={cn("p-2 rounded-full transition-all", view === "list" ? "bg-white shadow-md text-primary" : "text-muted-foreground")}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className={cn(
                    "grid gap-8 md:gap-12",
                    view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                )}>
                    {RESTAURANTS.map((res) => (
                        <Link
                            key={res.id}
                            href={`/restaurants/${res.slug}`}
                            className="explore-item group block"
                        >
                            <div className={cn(
                                "overflow-hidden rounded-[2.5rem] bg-white border border-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20",
                                view === "list" ? "flex flex-col md:flex-row h-auto md:h-64" : "h-full"
                            )}>
                                <div className={cn("relative overflow-hidden", view === "list" ? "w-full md:w-80 h-64 md:h-full" : "aspect-[4/5]")}>
                                    <Image
                                        src={res.image}
                                        alt={res.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-black">
                                            {res.cuisine}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col justify-between flex-grow">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{res.name}</h3>
                                            <span className="text-xs font-black text-primary/40">{res.priceRange}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                            {res.description}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <MapIcon className="w-3 h-3 text-primary/60" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{res.city}</span>
                                        </div>
                                    </div>
                                    <div className="pt-6 flex items-center justify-between border-t border-black/5 mt-6">
                                        <RabbitTeethRating rating={res.rating} size="sm" className="text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Ler Crítica</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <ExploreMap />
        </div>
    );
}
