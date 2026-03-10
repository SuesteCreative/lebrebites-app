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

const Paw = ({ fillAmount, className }: { fillAmount: number; className?: string }) => {
    const id = React.useId();

    return (
        <div className={cn("relative inline-block", className)}>
            <svg
                viewBox="0 0 24 32"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id={`fill-clip-${id}`}>
                        <rect x="0" y="0" width={`${fillAmount * 24}`} height="32" />
                    </clipPath>

                    {/* Elongated Rabbit Foot Silhouette with cutouts (holes) */}
                    <path
                        id={`paw-shape-${id}`}
                        fillRule="evenodd"
                        d="M12 2C18 2 22 7 22 16C22 25 18 30 12 30C6 30 2 25 2 16C2 7 6 2 12 2ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8ZM10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6ZM14 6C15.1046 6 16 5.10457 16 4C16 2.89543 15.1046 2 14 2C12.8954 2 12 2.89543 12 4C12 5.10457 12.8954 6 14 6ZM18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8ZM12 25C15.3137 25 18 22.3137 18 19C18 15.6863 15.3137 13 12 13C8.68629 13 6 15.6863 6 19C6 22.3137 8.68629 25 12 25Z"
                    />
                </defs>

                {/* Empty State / Outline */}
                <use
                    href={`#paw-shape-${id}`}
                    className="fill-zinc-100 dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700 stroke-[1.5]"
                    style={{ transition: "all 0.3s ease" }}
                />

                {/* Filled Overlay (Clipped) */}
                <g clipPath={`url(#fill-clip-${id})`}>
                    <use
                        href={`#paw-shape-${id}`}
                        className="fill-primary stroke-primary stroke-[1.5]"
                    />
                </g>
            </svg>
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
        sm: "h-4 w-3 mx-[1px]",
        md: "h-7 w-5 mx-[2px]",
        lg: "h-10 w-7 mx-[3px]",
    };

    return (
        <div className={cn("inline-flex items-center", className)} aria-label={`Rating: ${rating} out of ${maxRating}`}>
            <div className="flex">
                {Array.from({ length: maxRating }).map((_, i) => {
                    // Calculate fill amount for this specific slot (0 to 1)
                    const fillAmount = Math.max(0, Math.min(1, rating - i));

                    return (
                        <Paw
                            key={i}
                            fillAmount={fillAmount}
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
