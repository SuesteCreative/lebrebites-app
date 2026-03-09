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
            "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4",
            "bg-white/70 backdrop-blur-xl border-b border-black/5 dark:bg-black/70 dark:border-white/10 transition-all duration-300",
            className
        )}>
            <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-black">
                        <Image
                            src="/images/logo.png"
                            alt="LebreBites Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                        Lebre<span className="text-primary italic">Bites</span>
                    </span>
                    <div className="h-4 w-px bg-foreground/20 hidden md:block" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hidden md:block whitespace-nowrap">
                        Gastronomia & Roteiros
                    </span>
                </Link>
                <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase opacity-70">
                    <Link href="/explore" className="hover:opacity-100 transition-opacity">Explore</Link>
                    <Link href="/top-dishes" className="hover:opacity-100 transition-opacity">Top Dishes</Link>
                    <Link href="/restaurants" className="hover:opacity-100 transition-opacity">Restaurants</Link>
                    <Link href="/feed" className="hover:opacity-100 transition-opacity">Feed</Link>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Search className="w-5 h-5 text-foreground/70" />
                </Button>
                <div className="h-6 w-px bg-foreground/10 mx-2" />
                <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="w-5 h-5 text-foreground/70" />
                </Button>
                <Button className="rounded-full px-6 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black">
                    Join
                </Button>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
};
