"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";

export const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax effect on image
        gsap.to(imageRef.current, {
            yPercent: 30,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Reveal text
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-text-item", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1.2,
        })
            .from(".hero-badge", {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                delay: -0.8
            });
    }, { scope: heroRef });

    return (
        <section
            ref={heroRef}
            className="relative min-h-[95vh] w-full flex items-center overflow-hidden px-6 md:px-20 pt-20"
        >
            {/* Background Image Parallax */}
            <div
                ref={imageRef}
                className="absolute inset-x-0 -top-40 -z-10 h-[140%] w-full"
            >
                <Image
                    src="/images/hero_dish.png"
                    alt="Premium Culinary Experience"
                    fill
                    className="object-cover brightness-40 saturate-[0.8]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-background" />
            </div>

            <div ref={textRef} className="max-w-4xl space-y-10 relative z-10 w-full text-white">
                <div className="space-y-6">
                    <div className="hero-badge inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/20 text-xs font-bold tracking-[0.2em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Vencedor 2026: Guia LebreBites
                    </div>

                    <h1 className="hero-text-item text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-[0.85] uppercase">
                        A Gastronomia <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic">
                            Exigente
                        </span>
                    </h1>

                    <div className="hero-text-item space-y-2">
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-medium leading-relaxed">
                            Reviews gastronómicas para quem leva a comida a sério. Descobre as
                            pérolas escondidas e os pratos icónicos dos melhores chefs do mundo.
                            Onde cada detalhe, e cada dentinho, conta.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <span className="text-sm font-bold uppercase tracking-widest text-white/40">Rating Popular:</span>
                            <RabbitTeethRating rating={4.8} size="lg" className="text-primary" />
                        </div>
                    </div>
                </div>

                <div className="hero-text-item flex flex-wrap gap-5 pt-4">
                    <Button size="lg" className="h-16 rounded-full px-12 text-lg font-bold bg-white text-black hover:bg-white/90">
                        Explorar Pratos
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 rounded-full px-12 text-lg font-bold text-white border-white/30 backdrop-blur-md hover:bg-white/10 uppercase tracking-widest">
                        Guia Premium
                    </Button>
                </div>
            </div>

            {/* Side Decorative Element */}
            <div className="absolute right-10 bottom-20 flex-col items-center gap-10 hidden xl:flex text-white/30 text-xs font-bold uppercase tracking-widest rotate-90 origin-right">
                <span>Scroll para Descobrir</span>
                <div className="w-24 h-px bg-white/20" />
            </div>

            {/* Social Proof Stats */}
            <div className="absolute bottom-10 left-6 md:left-20 flex gap-12 text-white/50 py-8 border-t border-white/10 w-full lg:w-3/4">
                <div>
                    <span className="block text-2xl font-bold text-white">50k+</span>
                    <span className="text-xs font-bold tracking-widest uppercase">Foodies Ativos</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold text-white">2.5k</span>
                    <span className="text-xs font-bold tracking-widest uppercase">Restaurantes de Elite</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold text-white">15k</span>
                    <span className="text-xs font-bold tracking-widest uppercase">Pratos Premiados</span>
                </div>
            </div>
        </section>
    );
};
