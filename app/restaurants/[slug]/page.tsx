"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { RESTAURANTS, TOP_DISHES } from "@/lib/mock-data";
import { MapPin, Star, Clock, ArrowRight, Phone, Lock, X, HelpCircle, AlertCircle } from "lucide-react";

export default function RestaurantDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const containerRef = useRef<HTMLDivElement>(null);
    const [showPaywall, setShowPaywall] = useState(false);

    const restaurant = RESTAURANTS.find(r => r.slug === slug) || RESTAURANTS[0];
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
            {/* Paywall Modal */}
            {showPaywall && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowPaywall(false)} />
                    <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 p-12 rounded-[3rem] shadow-2xl text-center space-y-8">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                            <Lock className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Conteúdo Exclusivo</h3>
                            <p className="text-zinc-400 font-serif italic text-lg leading-relaxed">
                                Este restaurante faz parte do nosso Guia Premium. Subscreve para aceder aos detalhes de reserva e localização exata.
                            </p>
                        </div>
                        <div className="py-6 border-y border-white/5 space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Preço Mensal</span>
                            <div className="text-4xl font-black text-white">15,00€ <span className="text-sm font-medium text-zinc-500 italic">/ mês</span></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button className="h-16 rounded-full bg-primary text-white font-black uppercase tracking-widest hover:scale-105 transition-transform">
                                Subscrever Agora
                            </Button>
                            <Link href="/explore" className="h-16 flex items-center justify-center rounded-full bg-white/5 text-white/50 font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                                Explorar Outros
                            </Link>
                        </div>
                        <button onClick={() => setShowPaywall(false)} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}

            {/* Restaurant Header */}
            <div className="px-6 md:px-20 py-12 border-b border-black/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="space-y-6 w-full">
                        <div className="reveal flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary">
                            {restaurant.isExclusive ? <Lock className="w-4 h-4" /> : <Star className="w-4 h-4 fill-primary" />}
                            {restaurant.isExclusive ? "Clube Ultra Exclusivo" : "Restaurante Selecionado"}
                        </div>
                        <h1 className="reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex flex-wrap items-center gap-4">
                            {restaurant.name}
                            {restaurant.isExclusive && <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full tracking-widest">PRIVATE</span>}
                        </h1>
                        <div className="reveal flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {restaurant.city}</span>
                            {restaurant.isExclusive ? (
                                <span className="flex items-center gap-2 text-red-600"><AlertCircle className="w-4 h-4" /> {restaurant.exclusiveDetails}</span>
                            ) : (
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Aberto • Fecha às 23h</span>
                            )}
                            {restaurant.phone && !restaurant.isExclusive && (
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
                            {restaurant.isExclusive
                                ? "Experiências raras acessíveis apenas a poucos convidados."
                                : `As criações que tornam o ${restaurant.name} um destino obrigatório.`}
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
                            {restaurant.isExclusive && (
                                <div className="p-6 rounded-2xl bg-red-600/10 border border-red-600/20 text-red-500 space-y-2">
                                    <div className="flex items-center gap-2 font-black uppercase text-xs">
                                        <AlertCircle className="w-4 h-4" /> Aviso de Exclusividade
                                    </div>
                                    <p className="text-sm opacity-80">{restaurant.exclusiveDetails}</p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-xl group cursor-pointer" onClick={() => restaurant.isExclusive && setShowPaywall(true)}>
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {restaurant.isExclusive ? <HelpCircle /> : <MapPin />}
                                </div>
                                <span>{restaurant.isExclusive ? "Localização Sigilosa" : `${restaurant.city}, Portugal`}</span>
                            </div>

                            <div className="flex items-center gap-4 text-xl group cursor-pointer" onClick={() => setShowPaywall(true)}>
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {restaurant.isExclusive ? <Lock /> : <Phone />}
                                </div>
                                <span>{restaurant.isExclusive ? "Contacto Protegido" : (restaurant.phone || "Contactar")}</span>
                            </div>
                        </div>

                        <Button
                            className="h-16 px-10 rounded-full bg-primary text-white font-black uppercase tracking-widest"
                            onClick={() => setShowPaywall(true)}
                        >
                            {restaurant.isExclusive ? "Solicitar Convite" : "Reservar Mesa"}
                        </Button>
                    </div>

                    <div className="aspect-square w-full relative rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer" onClick={() => restaurant.isExclusive && setShowPaywall(true)}>
                        {restaurant.isExclusive ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 group-hover:bg-zinc-800 transition-colors">
                                <HelpCircle className="w-32 h-32 text-zinc-800 group-hover:text-zinc-700" />
                                <div className="text-center">
                                    <p className="text-4xl font-black text-white">?</p>
                                    <p className="text-xs uppercase tracking-[0.4em] opacity-40 mt-4">Localização sob sigilo</p>
                                </div>
                            </div>
                        ) : restaurant.mapIframe ? (
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
                            <div className="w-full h-full flex items-center justify-center text-zinc-500 italic">
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
