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
            {/* Background (Empty Paw) - More realistic elongated rabbit foot */}
            <svg
                viewBox="0 0 24 24"
                className="h-full w-full fill-zinc-200 dark:fill-zinc-800 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Main elongated pad */}
                <path d="M12 22C14.5 22 17 19.5 17 17C17 14.5 14.5 10 12 10C9.5 10 7 14.5 7 17C7 19.5 9.5 22 12 22Z" />
                {/* Toes - elongated like a rabbit */}
                <path d="M6 9C5 9 4 7 4 5C4 3 5 2 6 2C7 2 8 3 8 5C8 7 7 9 6 9Z" />
                <path d="M10 7C9.2 7 8.5 5.5 8.5 4C8.5 2.5 9.2 1.5 10 1.5C10.8 1.5 11.5 2.5 11.5 4C11.5 5.5 10.8 7 10 7Z" />
                <path d="M14 7C13.2 7 12.5 5.5 12.5 4C12.5 2.5 13.2 1.5 14 1.5C14.8 1.5 15.5 2.5 15.5 4C15.5 5.5 14.8 7 14 7Z" />
                <path d="M18 9C17 9 16 7 16 5C16 3 17 2 18 2C19 2 20 3 20 5C20 7 19 9 18 9Z" />
            </svg>

            {/* Filled Overlay */}
            {(filled || half) && (
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: half ? "50%" : "100%" }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-full fill-primary text-primary"
                        style={{ width: half ? "200%" : "100%" }}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 22C14.5 22 17 19.5 17 17C17 14.5 14.5 10 12 10C9.5 10 7 14.5 7 17C7 19.5 9.5 22 12 22Z" />
                        <path d="M6 9C5 9 4 7 4 5C4 3 5 2 6 2C7 2 8 3 8 5C8 7 7 9 6 9Z" />
                        <path d="M10 7C9.2 7 8.5 5.5 8.5 4C8.5 2.5 9.2 1.5 10 1.5C10.8 1.5 11.5 2.5 11.5 4C11.5 5.5 10.8 7 10 7Z" />
                        <path d="M14 7C13.2 7 12.5 5.5 12.5 4C12.5 2.5 13.2 1.5 14 1.5C14.8 1.5 15.5 2.5 15.5 4C15.5 5.5 14.8 7 14 7Z" />
                        <path d="M18 9C17 9 16 7 16 5C16 3 17 2 18 2C19 2 20 3 20 5C20 7 19 9 18 9Z" />
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
