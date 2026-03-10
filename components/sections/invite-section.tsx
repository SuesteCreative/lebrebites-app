"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Mail, UtensilsCrossed, Send } from "lucide-react";

export const InviteSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const rabbitRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        // The Rabbit Jump Entrance
        tl.fromTo(rabbitRef.current,
            { x: -300, y: 200, opacity: 0, rotate: -40 },
            {
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
                duration: 1.5,
                ease: "back.out(2)"
            }
        )
            // Elements follow
            .from(".invite-content > *", {
                x: -50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full py-32 px-6 md:px-20 bg-white text-zinc-900 overflow-hidden border-t border-zinc-100">
            <div className="max-w-7xl mx-auto relative">

                {/* Jumping Rabbit Anchor */}
                <div ref={rabbitRef} className="absolute -left-10 md:-left-20 -top-10 opacity-0 z-10 pointer-events-none">
                    <Image
                        src="/images/SVG/lebrebites-rabbit2.svg"
                        alt="Rabbit"
                        width={200}
                        height={200}
                        className="w-32 h-32 md:w-48 md:h-48 grayscale opacity-20"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                    <div className="invite-content space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-primary" />
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Parcerias & Convites</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Convida-nos para <span className="italic text-primary">jantar</span>
                        </h2>
                        <p className="text-xl text-zinc-500 font-serif italic max-w-lg leading-relaxed">
                            "Acreditamos que as melhores experiências nascem da paixão. Se o teu restaurante tem uma história para contar e um sabor impossível de esquecer, queremos estar lá."
                        </p>

                        <div className="space-y-6 pt-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Crítica Profissional</p>
                                    <p className="text-lg font-medium">Avaliação honesta e detalhada</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Contacto Direto</p>
                                    <p className="text-lg font-medium">hello@lebrebites.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="invite-content">
                        <form className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[3rem] shadow-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-4">O Teu Nome</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Carlos Silva"
                                        className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-2xl px-6 focus:outline-none focus:border-primary/50 transition-colors text-zinc-900 placeholder:text-zinc-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-4">Nome do Restaurante</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: O Solar dos Sabores"
                                        className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-2xl px-6 focus:outline-none focus:border-primary/50 transition-colors text-zinc-900 placeholder:text-zinc-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-4">E-mail de Contacto</label>
                                <input
                                    type="email"
                                    placeholder="exemplo@restaurante.com"
                                    className="w-full h-14 bg-zinc-50 border border-zinc-100 rounded-2xl px-6 focus:outline-none focus:border-primary/50 transition-colors text-zinc-900 placeholder:text-zinc-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-4">A Tua Mensagem</label>
                                <textarea
                                    placeholder="Diz-nos porque devíamos visitar-vos..."
                                    rows={4}
                                    className="w-full bg-zinc-50 border border-zinc-100 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-zinc-900 placeholder:text-zinc-300 resize-none"
                                />
                            </div>

                            <Button className="w-full h-16 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3">
                                <Send className="w-4 h-4" /> Enviar Convite
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
