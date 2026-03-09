"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { RESTAURANTS, TOP_DISHES } from "@/lib/mock-data";
import { MapPin, Star, Clock, Globe, ArrowRight, Phone } from "lucide-react";

export default function RestaurantDetailPage({ params }: { params: { slug: string } }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const restaurant = RESTAURANTS.find(r => r.slug === params.slug) || RESTAURANTS[0];
    const restaurantDishes = TOP_DISHES.filter(d => d.restaurantId === restaurant.id);

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
                            {restaurant.name}
                        </h1>
                        <div className="reveal flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {restaurant.city}, Portugal</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Aberto • Fecha às 23h</span>
                            {restaurant.phone && (
                                <a href={`tel:${restaurant.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Phone className="w-4 h-4" /> {restaurant.phone}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="reveal p-8 rounded-3xl bg-secondary flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-black uppercase tracking-widest opacity-50 mb-2">Rating Médio</span>
                        <div className="text-5xl font-black mb-2">{restaurant.rating.toFixed(1)}</div>
                        <RabbitTeethRating rating={restaurant.rating} size="md" showNumber={false} className="text-primary" />
                    </div>
                </div>
            </div>

            {/* Signature Dishes Section */}
            <section className="px-6 md:px-20 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal mb-16 space-y-4">
                        <h2 className="text-4xl font-black uppercase tracking-tight">Signature <span className="text-primary italic">Dishes</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            As criações que tornam o {restaurant.name} um destino obrigatório.
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
                                    {dish.category} • Review Pedro
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Contact Section */}
            <section className="px-6 md:px-20 py-24 bg-zinc-950 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Onde <span className="text-primary italic">Encontrar</span></h2>
                            <p className="text-xl text-zinc-400 font-serif italic">
                                "{restaurant.description}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-xl">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <MapPin />
                                </div>
                                <span>{restaurant.city}, Portugal</span>
                            </div>
                            {restaurant.phone && (
                                <div className="flex items-center gap-4 text-xl">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Phone />
                                    </div>
                                    <a href={`tel:${restaurant.phone}`} className="hover:underline">{restaurant.phone}</a>
                                </div>
                            )}
                        </div>

                        <Button className="h-16 px-10 rounded-full bg-primary text-white font-black uppercase tracking-widest">
                            Reservar Mesa
                        </Button>
                    </div>

                    <div className="aspect-square w-full relative rounded-[3rem] overflow-hidden border border-white/10">
                        {restaurant.mapIframe ? (
                            <iframe
                                src={restaurant.mapIframe}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-500 italic">
                                Mapa não disponível
                            </div>
                        )}
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
