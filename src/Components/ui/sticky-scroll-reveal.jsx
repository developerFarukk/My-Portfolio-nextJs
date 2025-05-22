

"use client";
import React, { useRef } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const cardLength = content.length;

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="relative flex h-[32rem] justify-center space-x-10 overflow-y-auto rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            ref={ref}
        >
            {/* Left Content with Timeline */}
            <div className="relative flex items-start px-6">
                <div className="max-w-2xl">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/70 to-purple-500/30"></div>
                    
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-16 pl-10 relative">
                            {/* Timeline Dot */}
                            <motion.div
                                className={`absolute left-0 top-3 h-5 w-5 rounded-full ${
                                    activeCard === index 
                                        ? ' shadow-[0_0_15px_3px_rgba(168,85,247,0.6)]' 
                                        : ''
                                } transition-all duration-300`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: activeCard === index ? 1 : 0.6,
                                    scale: activeCard === index ? 1.1 : 0.9
                                }}
                            />
                            
                            {/* Content Title */}
                            <motion.h2
                                className="text-2xl font-bold  mb-4"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                    opacity: activeCard === index ? 1 : 0.7,
                                    x: activeCard === index ? 0 : -10
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.title}
                            </motion.h2>
                            
                            {/* Content Description */}
                            <motion.p
                                className="text-lg text-gray-300 leading-relaxed max-w-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    
                    <div className="h-20" />
                </div>
            </div>
            
            {/* Dark Mode Timeline Card */}
            <motion.div
                className={cn(
                    "sticky top-10 hidden h-64 w-80 overflow-hidden rounded-xl bg-gray-900 border-2 border-gray-700 shadow-2xl lg:block",
                    contentClassName
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeCard}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                    {content[activeCard]?.content ?? null}
                </div>
            </motion.div>
        </motion.div>
    );
};