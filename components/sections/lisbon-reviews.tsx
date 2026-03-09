"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";
import { ArrowRight } from "lucide-react";

const REVIEWS = [
    {
        hotel: "Belcanto",
        chef: "José Avillez",
        rating: 4.9,
        description: "Uma viagem sensorial no coração do Chiado. A reinterpretação da cozinha portuguesa atinge aqui o seu expoente máximo.",
        img: "/images/lisbon2.png",
    },
    {
        hotel: "Alma",
        chef: "Henrique Sá Pessoa",
        rating: 4.8,
        description: "Cozinha de autor refinada onde o produto é herói. Um espaço onde a elegância e o sabor se fundem numa simbiose perfeita.",
        img: "/images/lisbon1.png",
    },
    {
        hotel: "Sublime Lisboa",
        chef: "Tiago Bonito",
        rating: 4.7,
        description: "Um refúgio de sofisticação com uma carta que celebra o melhor do Atlântico com um toque contemporâneo.",
        img: "/images/lisbon3.png",
    },
];

export const LisbonReviewsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".lisbon-card", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-20 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-primary" />
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Curadoria Local</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Lisboa <span className="text-primary italic">Secret</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-xl font-serif italic">
                            "Os melhores roteiros gastronómicos na capital, selecionados por quem não aceita menos que a perfeição."
                        </p>
                    </div>
                    <button className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest border-b-2 border-primary pb-2">
                        Ver Guia Lisboa <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {REVIEWS.map((item, idx) => (
                        <div key={idx} className="lisbon-card group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl mb-8">
                                <Image
                                    src={item.img}
                                    alt={item.hotel}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                                        Exclusive Review
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mt-4">{item.hotel}</h3>
                                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Chef {item.chef}</p>
                                </div>
                            </div>
                            <div className="space-y-4 px-2">
                                <RabbitTeethRating rating={item.rating} size="md" className="text-primary" />
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
