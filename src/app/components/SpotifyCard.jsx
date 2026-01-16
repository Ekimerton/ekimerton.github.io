"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

const SpotifyCard = () => {
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const res = await fetch("/axwpi/spotify");
                const data = await res.json();
                setSong(data);
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSong();
        const interval = setInterval(fetchSong, 30000); // Update every 30s
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-pulse rounded-full bg-stone-300 dark:bg-stone-700" />
            </div>
        );
    }

    const isPlaying = song?.isPlaying;

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-stone-200/50 dark:bg-stone-800/50">
            <div className="absolute left-4 top-2 z-20">
                <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400">
                    [ what I'm listening to ]
                </span>
            </div>

            {isPlaying ? (
                <>
                    {/* Background Album Art (Blurry) */}
                    <div
                        className="absolute inset-0 z-0 opacity-10 blur-2xl"
                        style={{
                            backgroundImage: `url(${song.albumImageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    <div className="relative z-10 flex h-full w-full flex-row items-center justify-between p-4">
                        <div className="flex flex-col gap-0 overflow-hidden pr-2 pt-4">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="flex h-3 w-3 items-end gap-[1.5px]">
                                    <motion.div
                                        animate={{ height: ["20%", "100%", "20%"] }}
                                        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                                        className="w-[2px] bg-[#1DB954]"
                                    />
                                    <motion.div
                                        animate={{ height: ["40%", "80%", "40%"] }}
                                        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
                                        className="w-[2px] bg-[#1DB954]"
                                    />
                                    <motion.div
                                        animate={{ height: ["60%", "30%", "60%"] }}
                                        transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                                        className="w-[2px] bg-[#1DB954]"
                                    />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#1DB954]">
                                    Live
                                </span>
                            </div>
                            <span className="truncate text-sm font-bold text-stone-900 dark:text-stone-100 leading-tight">
                                {song.title}
                            </span>
                            <span className="truncate text-[11px] text-stone-600 dark:text-stone-400">
                                {song.artist}
                            </span>
                        </div>

                        <div className="flex flex-col items-end gap-2 shrink-0">
                            <a
                                href={song.songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform"
                            >
                                <svg className="h-4 w-4 fill-[#1DB954]" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.291c-.217.356-.678.469-1.034.252-2.863-1.748-6.463-2.143-10.704-1.176-.407.093-.815-.164-.908-.571-.093-.407.164-.815.571-.908 4.636-1.06 8.607-.611 11.823 1.349.356.217.468.678.252 1.034zm1.468-3.257c-.273.443-.853.581-1.296.308-3.276-2.013-8.271-2.597-12.146-1.421-.497.151-1.022-.132-1.173-.629-.151-.498.132-1.022.629-1.173 4.419-1.341 9.923-.687 13.679 1.62.443.272.581.852.308 1.295zm.126-3.411c-3.928-2.333-10.413-2.548-14.186-1.402-.603.184-1.242-.163-1.426-.765-.184-.602.163-1.242.765-1.426 4.331-1.314 11.492-1.062 16.002 1.614.542.321.721 1.025.399 1.567-.321.542-1.025.721-1.567.412z" />
                                </svg>
                            </a>
                            <img
                                src={song.albumImageUrl}
                                alt={song.album}
                                className="h-14 w-14 flex-shrink-0 rounded-md shadow-lg transition-all duration-500"
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div className="relative z-10 flex h-full w-full flex-row items-center justify-between p-4">
                    <div className="flex flex-col pt-4">
                        <span className="text-sm font-medium text-stone-500 dark:text-stone-500">
                            Nothing at the moment
                        </span>
                        <span className="text-[10px] text-stone-400 dark:text-stone-600 uppercase tracking-widest mt-1">
                            Spotify Offline
                        </span>
                    </div>
                    <div className="h-20 w-20 flex-shrink-0 rounded-md bg-stone-300 dark:bg-stone-700 mr-4" />
                </div>
            )}
        </div>
    );
};

export default SpotifyCard;
