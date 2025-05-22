


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg1 from "../../../../public/My Pic.png";
import { Typewriter } from "react-simple-typewriter";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import LinkIcon from "@/components/Sheard/LinkIcon";
import HoverButton from "@/components/Sheard/HoverButton";
import HireButton from "@/components/Sheard/HireButton";
import { motion } from "framer-motion";

// Web Image
import wave from "../../../../public/wave.gif";

const Banner = () => {
    // const handleType = (count) => {
    //     console.log("Word count:", count);
    // };

    // const handleDone = () => {
    //     console.log("Typing animation completed.");
    // };

    return (
        <div>
            <section className="lg:mt-0 pt-20 lg:pt-0 overflow-hidden text-white md:pt-16 sm:pt-20">
                <div className="">
                    <div className="grid lg:mt-20 items-center text-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Left Side Section */}
                        <div className="">
                            <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">
                                <div className="flex items-center justify-center gap-2 p-1">
                                    <h2> Hey </h2>
                                    <h2>
                                        {" "}
                                        <Image
                                            src={wave}
                                            alt="wave"
                                            height="40"
                                            className="-rotate-12 "
                                        ></Image>
                                    </h2>
                                    <h2> I am </h2>
                                </div>

                                <br className="block sm:hidden" />

                                {/* Name Section */}
                                <div className="flex items-center justify-center p-1">
                                    <TextRevealCard
                                        text="OMAR FARUK"
                                        revealText="Developer FARUK"
                                        className="text-yellow-600 "
                                    ></TextRevealCard>
                                </div>

                                {/* Title Type Section */}
                                <span
                                    style={{
                                        paddingTop: "0",
                                        margin: "0 0",
                                        fontWeight: "normal",
                                    }}
                                >
                                    <span style={{ color: "red", fontWeight: "bold" }}>
                                        <Typewriter
                                            className="text-green-200 text-xl"
                                            words={[
                                                "MERN Stack Web Developer",
                                                "Web Developer",
                                                "React Developer",
                                                "JavaScript Developer",
                                                "Front-End Developer",
                                                "Backend Developer",
                                                "Next.js Developer",
                                                "Full Stack Developer",
                                            ]}
                                            loop={1000}
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={200}
                                            deleteSpeed={100}
                                            delaySpeed={3000}
                                        // onLoopDone={handleDone}
                                        // onType={handleType}
                                        />
                                    </span>
                                </span>
                            </h2>

                            {/* <p className="mt-1 text-xl text-green-400 hover:ml-2 hover:mb-4 md:mt-8 arima-font">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-1 bg-red-700"></span>
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidden" /> Ask me through the{" "}
                                <Link
                                    href="#contact"
                                    title=""
                                    className="transition-all duration-200 text-slate-200 hover:text-slate-50 hover:underline"
                                >
                                    Contact
                                </Link>
                            </p> */}

                            {/* Link Section */}
                            <div className="mt-10">
                                <LinkIcon></LinkIcon>
                            </div>

                            <div className="flex gap-2 justify-center items-center mt-2">
                                {/* <Link
                                    href="https://drive.google.com/file/d/1f712sf-H0d3PENlWP0m9u_I6SzdE0UhL/view?usp=sharing"
                                    target="_blank"
                                >
                                    <HoverButton></HoverButton>
                                </Link> */}

                                <HoverButton></HoverButton>

                                <div>
                                    <Link href="#contact" >
                                        <HireButton />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Section */}
                        <div className="relative flex justify-center p-4">
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <BackgroundLines className="absolute inset-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <Image
                                            src={bg1}
                                            alt="Omar Faruk"
                                            fill
                                            className="object-cover object-center"
                                            style={{ filter: "grayscale(20%) contrast(110%)" }}
                                        />
                                    </motion.div>
                                </BackgroundLines>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;


