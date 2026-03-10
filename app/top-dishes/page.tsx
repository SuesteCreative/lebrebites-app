"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TOP_DISHES } from "@/lib/mock-data";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Filter, ChevronRight } from "lucide-react";

export default function TopDishesPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".dish-card", {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 md:px-20 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Lista de <span className="text-primary italic">Elite</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Os pratos que definem a gastronomia contemporânea. Ordenados pelo rigor
                            dos nossos críticos e o feedback da comunidade.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-bold uppercase text-xs tracking-widest">
                            <Filter className="w-4 h-4" />
                            Filtrar
                        </button>
                    </div>
                </div>

                {/* Dishes List */}
                <div className="space-y-6">
                    {TOP_DISHES.map((dish, idx) => (
                        <Link
                            key={dish.id}
                            href={`/dish/${dish.id}`}
                            className="dish-card block group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 md:p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">

                                {/* Ranking Number */}
                                <div className="hidden md:flex md:col-span-1 text-5xl font-black opacity-10 group-hover:opacity-30 transition-opacity">
                                    #{(idx + 1).toString().padStart(2, "0")}
                                </div>

                                {/* Dish Image */}
                                <div className="md:col-span-3 aspect-square relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Dish Info */}
                                <div className="md:col-span-5 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded">
                                            {dish.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                                        {dish.name}
                                    </h2>
                                    <p className="text-lg font-medium text-muted-foreground uppercase tracking-widest">
                                        {dish.restaurant} <span className="text-primary/30 mx-2">•</span> {dish.city}
                                    </p>
                                </div>

                                {/* Rating & Action */}
                                <div className="md:col-span-3 flex md:flex-col justify-between md:items-end gap-4 h-full">
                                    <div className="text-right">
                                        <RabbitTeethRating rating={dish.rating} size="lg" className="text-primary" />
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">
                                            {Math.floor(Math.random() * 200 + 50)} Reviews
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-[0.2em] transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                        Detalhes <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
