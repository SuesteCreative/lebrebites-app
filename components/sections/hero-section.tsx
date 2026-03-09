"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";

export const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax
        gsap.to(imageRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Coordination Entrance
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".reveal-tag", { opacity: 0, y: 30, duration: 1 })
            .from(".reveal-title", {
                opacity: 0,
                y: 80,
                rotateX: -30,
                stagger: 0.1,
                duration: 1.5
            }, "-=0.6")
            .from(".reveal-sub", { opacity: 0, y: 30, duration: 1 }, "-=1")
            .from(".reveal-btns", { opacity: 0, scale: 0.9, duration: 1 }, "-=0.8")
            .from(".reveal-stats", { opacity: 0, y: 40, stagger: 0.1, duration: 1 }, "-=1");

    }, { scope: heroRef });

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden px-6 pt-20"
        >
            {/* Background Image */}
            <div ref={imageRef} className="absolute inset-0 -z-10 h-[120%] w-full">
                <Image
                    src="/images/hero_dish.png"
                    alt="Premium Culinary Experience"
                    fill
                    className="object-cover brightness-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
            </div>

            <div className="max-w-5xl z-10 w-full text-white space-y-12">
                <div className="space-y-6">
                    <div className="reveal-tag inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Vencedor 2026: Guia LebreBites
                    </div>

                    <h1 className="flex flex-col">
                        <span className="reveal-title text-5xl md:text-8xl lg:text-[11rem] font-black tracking-tight leading-none uppercase">
                            Gastronomia
                        </span>
                        <span className="reveal-title text-5xl md:text-8xl lg:text-[11rem] font-black tracking-tight leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic -mt-4">
                            Exigente
                        </span>
                    </h1>

                    <div className="reveal-sub max-w-2xl mx-auto space-y-4">
                        <p className="text-2xl md:text-3xl font-serif italic text-white/80">
                            "Críticas para paladares exigentes"
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed font-medium">
                            Descobre as pérolas escondidas e os pratos icónicos dos melhores chefs.
                            Onde cada detalhe, e cada dentinho, conta.
                        </p>
                    </div>
                </div>

                <div className="reveal-btns flex flex-wrap justify-center gap-6">
                    <Link href="/top-dishes" className="cursor-pointer">
                        <Button size="lg" className="h-16 rounded-full px-12 text-lg font-bold bg-white text-black hover:bg-white/90 cursor-pointer">
                            Explorar Pratos
                        </Button>
                    </Link>
                    <Link href="/explore" className="cursor-pointer">
                        <Button size="lg" variant="outline" className="h-16 rounded-full px-12 text-lg font-bold text-white border-white/60 bg-white/10 backdrop-blur-md hover:bg-white/20 uppercase tracking-widest cursor-pointer">
                            Guia Premium
                        </Button>
                    </Link>
                </div>

                {/* Coordinated Stats */}
                <div className="grid grid-cols-3 gap-12 pt-16 border-t border-white/10 max-w-3xl mx-auto">
                    <div className="reveal-stats">
                        <span className="block text-3xl font-black text-white">50k+</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Foodies</span>
                    </div>
                    <div className="reveal-stats">
                        <span className="block text-3xl font-black text-white">2.5k</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Restaurantes</span>
                    </div>
                    <div className="reveal-stats">
                        <span className="block text-3xl font-black text-white">15k</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Pratos</span>
                    </div>
                </div>
            </div>

            {/* Decorative */}
            <div className="absolute left-10 bottom-20 flex-col items-center gap-10 hidden xl:flex text-white/20 text-[10px] font-black uppercase tracking-[0.4em] -rotate-90 origin-left">
                <span>The Art of Tasting</span>
                <div className="w-24 h-px bg-white/10" />
            </div>
        </section>
    );
};
