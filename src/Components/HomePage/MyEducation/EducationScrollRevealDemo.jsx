
"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";


const content = [
    {
        title: (
            <div>
                <h2 className="text-2xl font-bold  md:text-3xl">
                    I am currently studying in BSC <br /> <Link href="https://www.sugc.edu.bd/" target="blank" className="text-yellow-200 hover:text-yellow-600">Sunamganj Government College</Link>
                </h2>
            </div>
        ),
        description:
            "My journey to college started with higher secondary education. Currently, I am a fourth-year student in the Mathematics Department of this college. One of my favorite subjects is mathematics and computer science. Therefore, I am working on programming alongside my studies.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-semibold">
                2020 to Present...
            </div>
        ),
    },
    {
        title: "HSC",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-black font-semibold">
                2020 to 2019
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Running out of content
            </div>
        ),
    },
];
export function EducationScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}
