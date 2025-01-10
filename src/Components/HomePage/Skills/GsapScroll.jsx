// "use client";

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";

// import Image from "next/image";
// import html from "../../../../public/Icon/html-5.png";
// import css from "../../../../public/Icon/css-3.png";
// import js from "../../../../public/Icon/js.png";
// import ts from "../../../../public/Icon/typescript.png";
// import tailwind from "../../../../public/Icon/Tailwind CSS.svg";
// import bootstrap from "../../../../public/Icon/Bootstrap.svg";
// import react from "../../../../public/Icon/React.svg";
// import mongoDB from "../../../../public/Icon/MongoDB.svg";
// import Express from "../../../../public/Icon/Express.svg";
// import node from "../../../../public/Icon/Node.js.svg";
// import next from "../../../../public/Icon/Next.js.svg";
// import firebase from "../../../../public/Icon/Firebase.svg";
// import axios from "../../../../public/Icon/Axios.svg";
// import eslint from "../../../../public/Icon/ESLint.svg";
// import canva from "../../../../public/Icon/Canva.svg";
// import figma from "../../../../public/Icon/Figma.svg";
// import git from "../../../../public/Icon/Git.svg";
// import github from "../../../../public/Icon/GitHub.svg";
// import googleCloud from "../../../../public/Icon/Google Cloud.svg";
// import json from "../../../../public/Icon/JSON.svg";
// import npm from "../../../../public/Icon/NPM.svg";
// import vercel from "../../../../public/Icon/Vercel.svg";
// import vscode from "../../../../public/Icon/VS Code.svg";
// import wordpress from "../../../../public/Icon/WordPress.svg";
// import postman from "../../../../public/Icon/Postman.svg";


// const skillIcons = [
//     { title: 'HTML', id: 1, icon: html },
//     { title: 'CSS', id: 2, icon: css },
//     { title: 'JavaScript', id: 3, icon: js },
//     { title: 'TypeScript', id: 4, icon: ts },
//     { title: 'Tailwind', id: 5, icon: tailwind },
//     { title: 'Bootstrap', id: 6, icon: bootstrap },
//     { title: 'React', id: 7, icon: react },
//     { title: 'MongoDB', id: 8, icon: mongoDB },
//     { title: 'Express', id: 9, icon: Express },
//     { title: 'Node', id: 10, icon: node },
//     { title: 'Next', id: 11, icon: next },
//     { title: 'Firebase', id: 12, icon: firebase },
//     { title: 'Axios', id: 13, icon: axios },
//     { title: 'ESLint', id: 14, icon: eslint },
//     { title: 'Canva', id: 15, icon: canva },
//     { title: 'Figma', id: 16, icon: figma },
//     { title: 'Git', id: 17, icon: git },
//     { title: 'GitHub', id: 18, icon: github },
//     { title: 'Google Cloud', id: 19, icon: googleCloud },
//     { title: 'JSON', id: 20, icon: json },
//     { title: 'NPM', id: 21, icon: npm },
//     { title: 'Vercel', id: 22, icon: vercel },
//     { title: 'VS Code', id: 23, icon: vscode },
//     { title: 'WordPress', id: 24, icon: wordpress },
//     { title: 'Postman', id: 25, icon: postman },
// ];

// const GsapScroll = () => {

//     return (
//         <div className="">

//             {/* <div className="flex flex-wrap justify-center gap-4">
//                 {skillIcons.map((sk) => (
//                     <div
//                         key={sk.id}
//                         className="group hover:-rotate-0 [transform:rotate3d(1,-1,1,15deg)] duration-500 overflow-hidden h-[12em] w-[12em] border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800 your-text-wrapper-class"
//                     >
//                         <div className="p-2">
//                             <div className="avatar grid justify-center">
//                                 <div className="shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] p-4">
//                                     <Image
//                                         src={sk.icon}
//                                         alt={`${sk.title} Icon`}
//                                         width={64}
//                                         height={64}
//                                         layout="fixed"
//                                     />
//                                 </div>
//                                 <p className="text-xl font-semibold text-yellow-600 pacifico-regular mt-2">
//                                     {sk.title}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div> */}

//             <div className="">
//                 <HorizontalScrollCarousel />
//             </div>

//         </div>
//     );
// };

// const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//     });

//     const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//     return (
//         <section ref={targetRef} className="">
//             <div className="sticky  flex   overflow-hidden">
//                 <motion.div style={{ x }} className="flex gap-4">
//                     <div className="h-[20rem] flex rounded-md gap-10 p-4">
//                         {skillIcons.map((sk) => (
//                             <div
//                                 key={sk.id}
//                                 className="group hover:-rotate-0 [transform:rotate3d(1,-1,1,15deg)] duration-500 overflow-hidden h-[12em] w-[12em] border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800 your-text-wrapper-class"
//                             >
//                                 <div className="p-2">
//                                     <div className="avatar grid justify-center">
//                                         <div className="shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] p-4">
//                                             <Image
//                                                 src={sk.icon}
//                                                 alt={`${sk.title} Icon`}
//                                                 width={64}
//                                                 height={64}
//                                                 layout="fixed"
//                                             />
//                                         </div>
//                                         <p className="text-xl font-semibold text-yellow-600 pacifico-regular mt-2">
//                                             {sk.title}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };


// export default GsapScroll;



// "use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import Image from "next/image";

// // Import icons
// import html from "../../../../public/Icon/html-5.png";
// import css from "../../../../public/Icon/css-3.png";
// import js from "../../../../public/Icon/js.png";
// import ts from "../../../../public/Icon/typescript.png";
// import tailwind from "../../../../public/Icon/Tailwind CSS.svg";
// import bootstrap from "../../../../public/Icon/Bootstrap.svg";
// import react from "../../../../public/Icon/React.svg";
// import mongoDB from "../../../../public/Icon/MongoDB.svg";
// import Express from "../../../../public/Icon/Express.svg";
// import node from "../../../../public/Icon/Node.js.svg";
// import next from "../../../../public/Icon/Next.js.svg";
// import firebase from "../../../../public/Icon/Firebase.svg";
// import axios from "../../../../public/Icon/Axios.svg";
// import eslint from "../../../../public/Icon/ESLint.svg";
// import canva from "../../../../public/Icon/Canva.svg";
// import figma from "../../../../public/Icon/Figma.svg";
// import git from "../../../../public/Icon/Git.svg";
// import github from "../../../../public/Icon/GitHub.svg";
// import googleCloud from "../../../../public/Icon/Google Cloud.svg";
// import json from "../../../../public/Icon/JSON.svg";
// import npm from "../../../../public/Icon/NPM.svg";
// import vercel from "../../../../public/Icon/Vercel.svg";
// import vscode from "../../../../public/Icon/VS Code.svg";
// import wordpress from "../../../../public/Icon/WordPress.svg";
// import postman from "../../../../public/Icon/Postman.svg";

// // Skill icons data
// const skillIcons = [
//     { title: "HTML", id: 1, icon: html },
//     { title: "CSS", id: 2, icon: css },
//     { title: "JavaScript", id: 3, icon: js },
//     { title: "TypeScript", id: 4, icon: ts },
//     { title: "Tailwind", id: 5, icon: tailwind },
//     { title: "Bootstrap", id: 6, icon: bootstrap },
//     { title: "React", id: 7, icon: react },
//     { title: "MongoDB", id: 8, icon: mongoDB },
//     { title: "Express", id: 9, icon: Express },
//     { title: "Node", id: 10, icon: node },
//     { title: "Next", id: 11, icon: next },
//     { title: "Firebase", id: 12, icon: firebase },
//     { title: "Axios", id: 13, icon: axios },
//     { title: "ESLint", id: 14, icon: eslint },
//     { title: "Canva", id: 15, icon: canva },
//     { title: "Figma", id: 16, icon: figma },
//     { title: "Git", id: 17, icon: git },
//     { title: "GitHub", id: 18, icon: github },
//     { title: "Google Cloud", id: 19, icon: googleCloud },
//     { title: "JSON", id: 20, icon: json },
//     { title: "NPM", id: 21, icon: npm },
//     { title: "Vercel", id: 22, icon: vercel },
//     { title: "VS Code", id: 23, icon: vscode },
//     { title: "WordPress", id: 24, icon: wordpress },
//     { title: "Postman", id: 25, icon: postman },
// ];

// const GsapScroll = () => {
//     useEffect(() => {
//         gsap.registerPlugin(Draggable);

//         Draggable.create("#wrapperBoxes", {
//             bounds: "#dragSpace",
//             type: "x",
//             throwProps: true,
//         });

//         const scrollSpeed = 0.5; // Control scroll speed
//         const scrollHeight = 10;

//         gsap.set("body", { height: scrollHeight, overflowY: "scroll" });

//         const handleScroll = () => {
//             const pixels = document.documentElement.scrollTop || document.body.scrollTop;
//             gsap.to("#wrapperBoxes", { duration: 1, x: -scrollSpeed * pixels });
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div className="  text-white">
//             <div id="dragSpace" className="fixed top-0 left-20px w-auto h-[30px] ">
//                 <div
//                     id="wrapperBoxes"
//                     className="absolute  flex space-x-8 items-center justify-center"
//                 >
//                     {skillIcons.map((sk) => (
//                         <div
//                             key={sk.id}
//                             className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden h-[12em] w-[12em] border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex flex-col justify-center items-center hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
//                         >
//                             <div className="p-2">
//                                 <div className="avatar grid justify-center">
//                                     <div className="shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
//                                         <Image
//                                             src={sk.icon}
//                                             alt={sk.title}
//                                             width={80}
//                                             height={80}
//                                             className="object-contain"
//                                         />
//                                     </div>
//                                     <p className="text-xl font-semibold text-yellow-600 pacifico-regular mt-2">
//                                         {sk.title}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GsapScroll;


"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

// Skill icons data
// Import icons
import html from "../../../../public/Icon/html-5.png";
import css from "../../../../public/Icon/css-3.png";
import js from "../../../../public/Icon/js.png";
import ts from "../../../../public/Icon/typescript.png";
import tailwind from "../../../../public/Icon/Tailwind CSS.svg";
import bootstrap from "../../../../public/Icon/Bootstrap.svg";
import react from "../../../../public/Icon/React.svg";
import mongoDB from "../../../../public/Icon/MongoDB.svg";
import Express from "../../../../public/Icon/Express.svg";
import node from "../../../../public/Icon/Node.js.svg";
import next from "../../../../public/Icon/Next.js.svg";
import firebase from "../../../../public/Icon/Firebase.svg";
import axios from "../../../../public/Icon/Axios.svg";
import eslint from "../../../../public/Icon/ESLint.svg";
import canva from "../../../../public/Icon/Canva.svg";
import figma from "../../../../public/Icon/Figma.svg";
import git from "../../../../public/Icon/Git.svg";
import github from "../../../../public/Icon/GitHub.svg";
import googleCloud from "../../../../public/Icon/Google Cloud.svg";
import json from "../../../../public/Icon/JSON.svg";
import npm from "../../../../public/Icon/NPM.svg";
import vercel from "../../../../public/Icon/Vercel.svg";
import vscode from "../../../../public/Icon/VS Code.svg";
import wordpress from "../../../../public/Icon/WordPress.svg";
import postman from "../../../../public/Icon/Postman.svg";

// Skill icons data
const skillIcons = [
    { title: "HTML", id: 1, icon: html },
    { title: "CSS", id: 2, icon: css },
    { title: "JavaScript", id: 3, icon: js },
    { title: "TypeScript", id: 4, icon: ts },
    { title: "Tailwind", id: 5, icon: tailwind },
    { title: "Bootstrap", id: 6, icon: bootstrap },
    { title: "React", id: 7, icon: react },
    { title: "MongoDB", id: 8, icon: mongoDB },
    { title: "Express", id: 9, icon: Express },
    { title: "Node", id: 10, icon: node },
    { title: "Next", id: 11, icon: next },
    { title: "Firebase", id: 12, icon: firebase },
    { title: "Axios", id: 13, icon: axios },
    { title: "ESLint", id: 14, icon: eslint },
    { title: "Canva", id: 15, icon: canva },
    { title: "Figma", id: 16, icon: figma },
    { title: "Git", id: 17, icon: git },
    { title: "GitHub", id: 18, icon: github },
    { title: "Google Cloud", id: 19, icon: googleCloud },
    { title: "JSON", id: 20, icon: json },
    { title: "NPM", id: 21, icon: npm },
    { title: "Vercel", id: 22, icon: vercel },
    { title: "VS Code", id: 23, icon: vscode },
    { title: "WordPress", id: 24, icon: wordpress },
    { title: "Postman", id: 25, icon: postman },
];

const GsapScroll = () => {
    const containerRef = useRef(null); // Reference for the scroll container
    const wrapperRef = useRef(null);  // Reference for the draggable wrapper

    useEffect(() => {
        // Register Plugins
        gsap.registerPlugin(Draggable);

        // Define bounds for the draggable container
        Draggable.create(wrapperRef.current, {
            bounds: containerRef.current, // Restrict scrolling within this container
            type: "x", // Horizontal drag
            throwProps: true,
        });

        // Scroll sync logic
        const handleScroll = () => {
            const container = containerRef.current;
            const pixels = container.scrollTop; // Detect vertical scroll inside container
            const scrollSpeed = 0.5; // Adjust speed
            gsap.to(wrapperRef.current, { duration: 0.5, x: -scrollSpeed * pixels });
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative overflow-y-scroll h-[400px] w-full bg-gray-800 text-white p-4"
        >
            <div
                ref={wrapperRef}
                id="wrapperBoxes"
                className="flex space-x-8"
            >
                {skillIcons.map((sk) => (
                    <div
                        key={sk.id}
                        className="group hover:-rotate-0 transform rotate-[15deg] duration-500 overflow-hidden h-[12em] w-[12em] border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-center flex-col hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                    >
                        <div className="p-2">
                            <div className="avatar grid justify-center">
                                <div className="shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
                                    <Image src={sk.icon} alt={sk.title} width={100} height={100} />
                                </div>
                                <p className="text-xl font-semibold text-yellow-600 pacifico-regular mt-2">
                                    {sk.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GsapScroll;

