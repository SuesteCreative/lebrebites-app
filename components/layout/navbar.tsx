"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5",
            "bg-white/70 backdrop-blur-xl border-b border-black/5 dark:bg-black/70 dark:border-white/10 transition-all duration-300",
            className
        )}>
            <div className="flex items-center gap-12">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-black transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/images/logo.png"
                            alt="LebreBites Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap leading-none">
                            Lebre<span className="text-primary italic">Bites</span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 whitespace-nowrap mt-1">
                            Gastronomia & Roteiros
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-10 font-serif text-lg tracking-wide lowercase italic opacity-80">
                    <Link href="/explore" className="hover:text-primary hover:opacity-100 transition-all">Explore</Link>
                    <Link href="/top-dishes" className="hover:text-primary hover:opacity-100 transition-all">Top Dishes</Link>
                    <Link href="/restaurants" className="hover:text-primary hover:opacity-100 transition-all">Restaurants</Link>
                    <Link href="/feed" className="hover:text-primary hover:opacity-100 transition-all">Feed</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5">
                    <Search className="w-5 h-5 text-foreground/70" />
                </Button>
                <div className="h-8 w-px bg-foreground/10 mx-1" />
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5">
                    <User className="w-5 h-5 text-foreground/70" />
                </Button>
                <Button className="rounded-full px-8 h-11 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black font-bold uppercase tracking-widest text-xs">
                    Join
                </Button>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
};
