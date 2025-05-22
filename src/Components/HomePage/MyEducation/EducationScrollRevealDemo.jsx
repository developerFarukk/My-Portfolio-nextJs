

"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";

const content = [

    {

        title: (
            <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                    I am currently studying in BSC <br />
                    <Link
                        href="https://www.sugc.edu.bd/"
                        target="blank"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                        Sunamganj Government College
                    </Link>
                </h2>
            </div>
        ),
        description: "My journey to college started with higher secondary education. Currently, I am a fourth-year student in the Mathematics Department. I'm passionate about mathematics and computer science, and I balance my studies with programming work.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950 to-purple-950 text-white font-bold text-xl p-6 rounded-lg shadow-lg border border-gray-700">
                2020 - Present
            </div>
        ),
    },
    {
        title: "Higher Secondary Certificate (HSC)",
        description: "Completed my HSC in Science with excellent results. This period helped me develop strong analytical skills and sparked my interest in computer programming and problem-solving.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-900 to-cyan-900 text-white font-bold text-xl p-6 rounded-lg shadow-lg border border-gray-700">
                2018 - 2020
            </div>
        ),
    },
    {
        title: "Secondary School Certificate (SSC)",
        description: "Graduated with top marks in Science. Demonstrated early aptitude for mathematics and logical thinking, which became the foundation for my technical skills.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-900 to-orange-900 text-white font-bold text-xl p-6 rounded-lg shadow-lg border border-gray-700">
                2016 - 2018
            </div>
        ),
    }

];

export function EducationScrollRevealDemo() {
    return (
        <div className="w-full py-16 ">
            <div className="max-w-7xl mx-auto px-4">
                <StickyScroll content={content} />
            </div>
        </div>
    );
}