"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CURSOR_COLORS = [
    { name: "Red", color: "#ef4444" },
    { name: "Blue", color: "#3b82f6" },
    { name: "Green", color: "#22c55e" },
    { name: "Yellow", color: "#eab308" },
    { name: "Purple", color: "#a855f7" },
    { name: "Pink", color: "#ec4899" },
];

const CursorCard = () => {
    const [activeColor, setActiveColor] = useState(null);

    const getCursorUrl = (color, type = "default") => {
        let path = "";
        let hotspot = "0 0";

        if (type === "pointer") {
            // Hand/Pointer SVG path
            path = `M10 2a2 2 0 0 0-2 2v6.62l-.71-.71a2 2 0 0 0-2.83 2.83l5.07 5.07c.1.1.2.17.31.22 1.58.74 3.29 1.1 5.04 1.1h.12a8 8 0 0 0 5.66-2.34l2.34-2.34a2 2 0 0 0 0-2.83l-2.12-2.12a2 2 0 0 0-2.83 0L14 9.12V5a2 2 0 0 0-2-2h-2z`;
            // Tip is at (10, 2) in 24x24 viewbox. For 22px image: 10 * (22/24) = 9.16
            hotspot = "9 2";
        } else {
            // Standard Arrow SVG path
            path = `M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 2.87 6.71a.5.5 0 0 0 .69.28l1.72-.74a.5.5 0 0 0 .28-.69l-2.87-6.71 6.37-.2a.5.5 0 0 0 .32-.89L6.35 2.86a.5.5 0 0 0-.85.35z`;
            // Tip is at (5.5, 3.21) in 24x24 viewbox. For 22px image: 5.5 * (22/24) = 5.04
            hotspot = "5 3";
        }

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1.5">
                <path d="${path}"/>
            </svg>
        `.trim();
        return { url: `data:image/svg+xml;base64,${btoa(svg)}`, hotspot };
    };

    const handleCursorClick = (color) => {
        const defaultCursor = getCursorUrl(color, "default");
        const pointerCursor = getCursorUrl(color, "pointer");

        // Remove existing style tag if it exists
        const existingStyle = document.getElementById("custom-cursor-styles");
        if (existingStyle) existingStyle.remove();

        // Create new style tag to handle both default and pointer cursors
        const style = document.createElement("style");
        style.id = "custom-cursor-styles";
        style.innerHTML = `
            html, body, * {
                cursor: url('${defaultCursor.url}') ${defaultCursor.hotspot}, auto !important;
            }
            a, a *, button, button *, [role="button"], [role="button"] *, input[type="submit"], input[type="button"], select {
                cursor: url('${pointerCursor.url}') ${pointerCursor.hotspot}, pointer !important;
            }
        `;
        document.head.appendChild(style);
        setActiveColor(color);
    };

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-stone-200/50 dark:bg-stone-800/50 p-3 pt-10">
            <div className="absolute left-3 top-2 z-20">
                <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400">
                    [ custom cursors ]
                </span>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-full w-full">
                {CURSOR_COLORS.map((item) => (
                    <motion.button
                        key={item.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCursorClick(item.color)}
                        className={`group relative flex items-center justify-center rounded-lg border cursor-pointer transition-all duration-200 ${activeColor === item.color
                            ? "border-stone-400 dark:border-stone-500 bg-stone-300/80 dark:bg-stone-700/80 shadow-inner"
                            : "border-transparent bg-stone-300/30 dark:bg-stone-700/30 hover:bg-stone-300/50 dark:hover:bg-stone-700/50"
                            }`}
                        title={`Select ${item.name} cursor`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={item.color}
                            stroke="white"
                            strokeWidth="1"
                            className="drop-shadow-sm pointer-events-none"
                        >
                            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 2.87 6.71a.5.5 0 0 0 .69.28l1.72-.74a.5.5 0 0 0 .28-.69l-2.87-6.71 6.37-.2a.5.5 0 0 0 .32-.89L6.35 2.86a.5.5 0 0 0-.85.35z" />
                        </svg>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default CursorCard;
