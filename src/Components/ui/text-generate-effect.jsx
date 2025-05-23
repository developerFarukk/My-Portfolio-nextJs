
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        }, {
            duration: duration ? duration : 1,
            delay: stagger(0.1),
        });
    }, [filter, animate, duration]);

    const renderWords = () => {
        return (
            (<motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        (<motion.span
                            key={word + idx}
                            className="text-sky-300 text-lg arima-font  opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}>
                            {word}{" "}
                        </motion.span>)
                    );
                })}
            </motion.div>)
        );
    };

    return (
        (<div className={cn("font-medium", className)}>
            <div className="mt-0">
                <div
                    className=" leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>)
    );
};
