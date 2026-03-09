"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap-setup";

export const Navbar = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            gsap.to(mobileMenuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power4.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power4.in",
                onComplete: () => setIsOpen(false),
            });
        }
    };

    const menuItems = [
        { name: "Explore", href: "/explore" },
        { name: "Top Dishes", href: "/top-dishes" },
        { name: "Restaurants", href: "/restaurants" },
        { name: "Feed", href: "/feed" },
    ];

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5",
                "bg-white/80 backdrop-blur-2xl border-b border-black/5 dark:bg-black/80 dark:border-white/10 transition-all duration-300",
                className
            )}>
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl md:rounded-2xl bg-black transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/images/logo.png"
                                alt="LebreBites Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap leading-none flex items-center">
                                LEBREBITE<span className="relative">
                                    S
                                    <span className="absolute -top-[3px] -right-[3px] flex gap-[1px]">
                                        <span className="w-2.5 h-2.5 bg-white dark:bg-black rounded-full" />
                                        <span className="w-2 h-2 bg-white dark:bg-black rounded-full mt-1 -ml-1" />
                                    </span>
                                </span>
                            </span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10 font-serif text-lg tracking-wide lowercase italic opacity-80">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.href} className="hover:text-primary hover:opacity-100 transition-all">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 hidden md:flex">
                        <Search className="w-5 h-5 text-foreground/70" />
                    </Button>
                    <div className="h-8 w-px bg-foreground/10 mx-1 hidden md:block" />
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5">
                        <User className="w-5 h-5 text-foreground/70" />
                    </Button>
                    <Button className="rounded-full px-6 md:px-8 h-10 md:h-11 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black font-black uppercase tracking-widest text-[10px] hidden sm:flex">
                        Join
                    </Button>
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-full bg-secondary text-primary transition-all hover:scale-105"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    ref={mobileMenuRef}
                    className="fixed inset-0 z-[200] bg-white dark:bg-zinc-950 flex flex-col p-12 translate-x-full opacity-0"
                >
                    <div className="flex justify-between items-center mb-20">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap leading-none flex items-center">
                                LEBREBITE<span className="relative">
                                    S
                                    <span className="absolute -top-[4px] -right-[4px] flex gap-[1.5px]">
                                        <span className="w-3 h-3 bg-white dark:bg-black rounded-full" />
                                        <span className="w-2.5 h-2.5 bg-white dark:bg-black rounded-full mt-1.5 -ml-1.5" />
                                    </span>
                                </span>
                            </span>
                        </div>
                        <button onClick={toggleMenu} className="p-4 rounded-full bg-secondary">
                            <X className="w-8 h-8 text-primary" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-8 font-serif text-5xl italic tracking-tighter lowercase">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.href} onClick={toggleMenu} className="hover:text-primary transition-all">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pt-12 border-t border-black/5 flex flex-col gap-6">
                        <p className="text-xl font-medium italic opacity-40">"Críticas para paladares exigentes"</p>
                        <div className="flex gap-4">
                            <Button className="flex-grow h-16 rounded-full bg-primary text-white font-black uppercase tracking-[0.2em] text-xs">
                                Subscrever
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
