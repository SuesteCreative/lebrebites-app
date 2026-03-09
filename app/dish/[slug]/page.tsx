"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils, Award, Share2, Bookmark, ArrowLeft, Phone, Lock } from "lucide-react";
import { TOP_DISHES, RESTAURANTS } from "@/lib/mock-data";

export default function DishDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const containerRef = useRef<HTMLDivElement>(null);

    // Find dish from mock or default to first one
    const dish = TOP_DISHES.find(d => d.id === slug) || TOP_DISHES[0];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".reveal-img", {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
        })
            .from(".reveal-content", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
            }, "-=0.8")
            .from(".reveal-stat", {
                scale: 0.5,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
            }, "-=0.5");
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-background pb-20">
            {/* Top Navigation */}
            <div className="fixed top-24 left-6 md:left-20 z-50">
                <Link
                    href="/top-dishes"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-black uppercase text-xs tracking-widest bg-black/50 backdrop-blur px-4 py-2 rounded-full"
                >
                    <ArrowLeft className="w-4 h-4" /> Voltar
                </Link>
            </div>

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full flex items-end">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover brightness-50 reveal-img scale-100"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-full px-6 md:px-20 pb-20 space-y-6">
                    <div className="reveal-content space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded">
                                Prato Assinatura
                            </span>
                            <div className="h-px w-10 bg-white/30" />
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                            {dish.name}
                        </h1>
                    </div>

                    <div className="reveal-content flex flex-wrap items-center gap-8 pt-4">
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Localização</span>
                            <p className="text-xl text-white font-medium flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> {dish.restaurant}, {dish.city}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Rating Global</span>
                            <RabbitTeethRating rating={dish.rating} size="lg" className="text-primary" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 px-6 md:px-20 -mt-10 relative z-20 max-w-[1900px] mx-auto">

                {/* Main Info */}
                <div className="lg:col-span-8 space-y-12">
                    <div className="p-10 md:p-16 rounded-[3rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl">
                        <div className="flex justify-between items-start mb-10">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold tracking-tight">Sobre esta experiência</h2>
                                <div className="h-1 w-20 bg-primary" />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-full"><Share2 /></Button>
                                <Button variant="outline" size="icon" className="rounded-full"><Bookmark /></Button>
                            </div>
                        </div>

                        <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                            {dish.description} Esta especialidade do {dish.restaurant} é uma verdadeira obra de arte gastronómica.
                            Utilizando ingredientes de origem controlada e técnicas que respeitam a tradição,
                            consegue um equilíbrio perfeito que define o padrão de excelência da nossa crítica.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-black/5 mt-16">
                            {[
                                { label: "Qualidade", val: 4.9, icon: Utensils },
                                { label: "Apresentação", val: 4.7, icon: Award },
                                { label: "Serviço", val: 5.0, icon: Utensils },
                                { label: "Preço/Valor", val: 4.2, icon: Utensils },
                            ].map((stat, i) => (
                                <div key={i} className="reveal-stat space-y-2">
                                    <stat.icon className="w-5 h-5 text-primary opacity-50" />
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                        {stat.label}
                                    </span>
                                    <div className="text-2xl font-bold flex items-center gap-2">
                                        {stat.val} <span className="text-xs opacity-30">🐰</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews Section Placeholder */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-black uppercase tracking-tight">O que diz a comunidade</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-8 rounded-[2rem] bg-white border border-black/5 flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-black/5 overflow-hidden flex-shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between w-full">
                                            <h4 className="font-bold">Utilizador #{i}04</h4>
                                            <RabbitTeethRating rating={4.5} size="sm" showNumber={false} />
                                        </div>
                                        <p className="text-muted-foreground italic">"Experiência absolutamente divinal. Voltarei sem dúvida para repetir este prato ícone."</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="p-8 rounded-[2.5rem] bg-zinc-950 text-white space-y-8 sticky top-32 overflow-hidden relative group">
                        {RESTAURANTS.find(r => r.id === dish.restaurantId)?.isExclusive && (
                            <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center space-y-6">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                    <Lock className="w-8 h-8 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black uppercase tracking-tighter">Acesso Restrito</h4>
                                    <p className="text-sm text-zinc-400 font-serif italic">Subscreve o Guia Premium para aceder aos detalhes de reserva deste prato.</p>
                                </div>
                                <div className="space-y-4 w-full">
                                    <Button className="w-full h-14 rounded-full bg-primary text-white font-black uppercase tracking-widest text-xs">
                                        Subscrever - 15€/mês
                                    </Button>
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-black">Conteúdo Ultra-Exclusivo</p>
                                </div>
                            </div>
                        )}

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-primary italic">Reserva já</h3>
                            <p className="text-zinc-400">Este restaurante é muito concorrido. Recomendamos reservar com antecedência.</p>
                            {dish.restaurantId && (
                                <a
                                    href={`tel:${RESTAURANTS.find(r => r.id === dish.restaurantId)?.phone || "211346101"}`}
                                    className="flex items-center justify-center w-full h-16 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                                >
                                    Contactar Restaurante
                                </a>
                            )}
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest opacity-50">Localização</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Ver Mapa</span>
                            </div>
                            <div className="w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/5">
                                {RESTAURANTS.find(r => r.id === dish.restaurantId)?.mapIframe ? (
                                    <iframe
                                        src={RESTAURANTS.find(r => r.id === dish.restaurantId)?.mapIframe}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs opacity-30 italic">
                                        Mapa INDISPONÍVEL
                                    </div>
                                )}
                            </div>
                            <p className="text-sm font-medium">{dish.city}, Portugal</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
