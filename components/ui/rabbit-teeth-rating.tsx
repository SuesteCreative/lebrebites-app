"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RabbitTeethRatingProps {
    rating: number; // 0 to 5
    maxRating?: number;
    className?: string;
    size?: "sm" | "md" | "lg";
    showNumber?: boolean;
}

const Paw = ({ filled, half, className }: { filled: boolean; half?: boolean; className?: string }) => {
    return (
        <div className={cn("relative inline-block", className)}>
            {/* Background (Empty Paw) */}
            <svg
                viewBox="0 0 24 24"
                className="h-full w-full fill-zinc-200 dark:fill-zinc-800 transition-colors"
            >
                <ellipse cx="12" cy="16" rx="6" ry="5" />
                <circle cx="7" cy="8" r="2.5" />
                <circle cx="10.5" cy="5" r="2.5" />
                <circle cx="14.5" cy="5" r="2.5" />
                <circle cx="18" cy="8" r="2.5" />
            </svg>

            {/* Filled Overlay */}
            {(filled || half) && (
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: half ? "50%" : "100%" }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-full fill-primary"
                        style={{ width: half ? "200%" : "100%" }}
                    >
                        <ellipse cx="12" cy="16" rx="6" ry="5" />
                        <circle cx="7" cy="8" r="2.5" />
                        <circle cx="10.5" cy="5" r="2.5" />
                        <circle cx="14.5" cy="5" r="2.5" />
                        <circle cx="18" cy="8" r="2.5" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export const RabbitTeethRating: React.FC<RabbitTeethRatingProps> = ({
    rating,
    maxRating = 5,
    className,
    size = "md",
    showNumber = true,
}) => {
    const sizeClasses = {
        sm: "h-3.5 w-2 mx-[1px]",
        md: "h-6 w-3.5 mx-[2px]",
        lg: "h-8 w-5 mx-[3px]",
    };

    return (
        <div className={cn("inline-flex items-center", className)} aria-label={`Rating: ${rating} out of ${maxRating}`}>
            <div className="flex">
                {Array.from({ length: maxRating }).map((_, i) => {
                    const fullAmount = i + 1;
                    const isFilled = rating >= fullAmount;
                    const isHalf = !isFilled && rating >= fullAmount - 0.5;

                    return (
                        <Paw
                            key={i}
                            filled={isFilled}
                            half={isHalf}
                            className={sizeClasses[size]}
                        />
                    );
                })}
            </div>
            {showNumber && (
                <span className="ml-3 text-sm font-bold tracking-tighter text-foreground/70">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};
