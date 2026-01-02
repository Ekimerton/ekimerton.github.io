"use client";

import { motion } from "framer-motion";

const CARDS = [
    { id: "one", area: "card-one" },
    { id: "two", area: "card-two" },
    { id: "three", area: "card-three" },
    { id: "four", area: "card-four" },
    { id: "five", area: "card-five" },
    { id: "six", area: "card-six" },
    { id: "seven", area: "card-seven" },
    { id: "eight", area: "card-eight" },
    { id: "nine", area: "card-nine" },
    { id: "ten", area: "card-ten" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export default function TheWall() {
    return (
        <main className="h-full w-full dark:bg-stone-950 bg-stone-100 flex flex-col p-4 pt-0 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid h-full w-full gap-4"
                style={{
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRows: "repeat(5, 1fr)",
                    gridTemplateAreas: `
                        "card-one card-one card-two card-two card-three"
                        "card-one card-one card-five card-four card-three"
                        "card-six card-seven card-five card-eight card-eight"
                        "card-six card-seven card-five card-eight card-eight"
                        "card-six card-nine card-ten card-ten card-ten"
                    `,
                }}
            >
                {CARDS.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={itemVariants}
                        className="rounded-xl bg-stone-200 dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 flex items-center justify-center focus:border-blue-200"
                        style={{ gridArea: card.area }}
                        tabIndex={0}
                    >
                        <span className="font-mono text-sm text-stone-500 dark:text-stone-400">
                            [ card {card.id} ]
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
