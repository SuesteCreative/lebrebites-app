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

const Tooth = ({ filled, half, className }: { filled: boolean; half?: boolean; className?: string }) => {
    return (
        <div className={cn("relative inline-block", className)}>
            {/* Empty Tooth (Outline) */}
            <svg
                viewBox="0 0 24 24"
                className="h-full w-full fill-muted/30 stroke-muted-foreground/30 stroke-2"
            >
                <path d="M6 2h12v14c0 4-3 6-6 6s-6-2-6-6V2z" />
            </svg>

            {/* Filled Tooth Overlay */}
            {(filled || half) && (
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: half ? "50%" : "100%" }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-full w-[100/width] fill-primary stroke-primary stroke-2"
                        style={{ width: half ? "200%" : "100%" }}
                    >
                        <path d="M6 2h12v14c0 4-3 6-6 6s-6-2-6-6V2z" />
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
        sm: "h-3 w-2.5 mx-0.5",
        md: "h-6 w-5 mx-0.5",
        lg: "h-8 w-6.5 mx-1",
    };

    return (
        <div className={cn("flex items-center", className)} aria-label={`Rating: ${rating} out of ${maxRating}`}>
            <div className="flex">
                {Array.from({ length: maxRating }).map((_, i) => {
                    const fullAmount = i + 1;
                    const isFilled = rating >= fullAmount;
                    const isHalf = !isFilled && rating >= fullAmount - 0.5;

                    return (
                        <Tooth
                            key={i}
                            filled={isFilled}
                            half={isHalf}
                            className={sizeClasses[size]}
                        />
                    );
                })}
            </div>
            {showNumber && (
                <span className="ml-2 text-sm font-semibold text-foreground/80">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};
