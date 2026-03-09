"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEED_ACTIVITIES, CRITIC } from "@/lib/mock-data";
import { RabbitTeethRating } from "@/components/ui/rabbit-teeth-rating";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { MessageSquare, Heart, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeedPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".feed-post", {
            opacity: 0,
            x: -30,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-3xl mx-auto space-y-12">
                {/* Feed Header */}
                <div className="text-center space-y-4 mb-20">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        O <span className="text-primary italic">Diário</span>
                    </h1>
                    <p className="text-muted-foreground font-serif italic text-lg leading-relaxed">
                        "Acompanha as minhas mais recentes descobertas e pensamentos diários sobre a gastronomia portuguesa."
                    </p>
                </div>

                {/* Posts Timeline */}
                <div className="space-y-16 relative">
                    {/* Vertical line decoration */}
                    <div className="absolute left-6 md:left-0 top-0 bottom-0 w-px bg-black/5 hidden md:block" />

                    {FEED_ACTIVITIES.map((post) => (
                        <div key={post.id} className="feed-post group relative md:pl-16">
                            {/* Activity dot */}
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-zinc-950 z-10 hidden md:block" />

                            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                                {/* Post Header */}
                                <div className="p-6 md:p-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
                                            <img src={CRITIC.avatar} alt={CRITIC.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{CRITIC.name}</h3>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{post.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-muted-foreground hover:text-primary transition-colors">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Post Text */}
                                <div className="px-6 md:px-8 pb-6">
                                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-foreground/90">
                                        "{post.content}"
                                    </p>
                                </div>

                                {/* Post Media (Optional) */}
                                {post.image && (
                                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.restaurant || "Food"}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-black uppercase text-black">
                                            {post.restaurant}
                                        </div>
                                    </div>
                                )}

                                {/* Post Actions & Meta */}
                                <div className="p-6 md:p-8 flex items-center justify-between border-t border-black/5">
                                    <div className="flex items-center gap-8">
                                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/btn">
                                            <Heart className="w-5 h-5 group-hover/btn:fill-primary" />
                                            <span className="text-xs font-bold">{Math.floor(Math.random() * 50 + 10)}</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                            <span className="text-xs font-bold">{Math.floor(Math.random() * 20)}</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {post.rating && (
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Veredito</span>
                                            <RabbitTeethRating rating={post.rating} size="sm" showNumber={false} className="text-primary" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Feed Placeholder */}
                <div className="text-center pt-8">
                    <Button variant="ghost" className="text-xs font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 italic transition-all">
                        Ver Experiências Anteriores
                    </Button>
                </div>
            </div>
        </div>
    );
}
