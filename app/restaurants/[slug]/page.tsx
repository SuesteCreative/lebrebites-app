"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { TOP_DISHES } from "@/lib/mock-data";
import { MapPin, Star, Clock, Globe, ArrowRight } from "lucide-react";

export default function RestaurantDetailPage({ params }: { params: { slug: string } }) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mock restaurant info based on the dishes we have
    const restaurantName = "Tasca do Zé";
    const restaurantDishes = TOP_DISHES.filter(d => d.restaurant === restaurantName);

    useGSAP(() => {
        gsap.from(".reveal", {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-24 bg-background pb-20">

            {/* Restaurant Header */}
            <div className="px-6 md:px-20 py-12 border-b border-black/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="space-y-6">
                        <div className="reveal flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary">
                            <Star className="w-4 h-4 fill-primary" /> Restaurante Selecionado
                        </div>
                        <h1 className="reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            {restaurantName}
                        </h1>
                        <div className="reveal flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lisboa, Portugal</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Aberto • Fecha às 23h</span>
                            <span className="flex items-center gap-2 text-primary"><Globe className="w-4 h-4" /> tascadoze.pt</span>
                        </div>
                    </div>
                    <div className="reveal p-8 rounded-3xl bg-secondary flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-black uppercase tracking-widest opacity-50 mb-2">Rating Médio</span>
                        <div className="text-5xl font-black mb-2">4.8</div>
                        <RabbitTeethRating rating={4.8} size="md" showNumber={false} className="text-primary" />
                    </div>
                </div>
            </div>

            {/* Signature Dishes Section */}
            <section className="px-6 md:px-20 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal mb-16 space-y-4">
                        <h2 className="text-4xl font-black uppercase tracking-tight">Signature <span className="text-primary italic">Dishes</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            As criações que tornam o {restaurantName} um destino obrigatório.
                            Cada prato é uma review individual.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {restaurantDishes.map((dish) => (
                            <Link
                                key={dish.id}
                                href={`/dish/${dish.id}`}
                                className="reveal group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                        <div className="text-white flex items-center gap-2 font-black uppercase text-xs tracking-widest">
                                            Ver Review Completa <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-xl">
                                        <RabbitTeethRating rating={dish.rating} size="sm" className="text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{dish.name}</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1">
                                    Sobremesa • {Math.floor(Math.random() * 50 + 20)} reviews
                                </p>
                            </Link>
                        ))}

                        {/* Add more mockup dishes for visual density */}
                        <div className="reveal p-8 rounded-[2.5rem] border-2 border-dashed border-black/5 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                            <Utensils className="w-10 h-10" />
                            <p className="font-bold uppercase tracking-widest text-xs">Mais pratos a serem avaliados</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="px-6 md:px-20 py-24 bg-zinc-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8 aspect-video relative rounded-3xl overflow-hidden">
                        <Image src="/images/hero_dish.png" alt="Interior" fill className="object-cover opacity-60" />
                    </div>
                    <div className="col-span-12 md:col-span-4 aspect-square relative rounded-3xl overflow-hidden">
                        <Image src="/images/carbonara.png" alt="Table" fill className="object-cover opacity-60" />
                    </div>
                </div>
            </section>

        </div>
    );
}

const Utensils = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
);
