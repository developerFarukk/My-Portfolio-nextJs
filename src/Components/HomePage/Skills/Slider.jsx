"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

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
import { useRef } from "react";

const skillIcon = [
    { title: 'HTML', id: 1, icon: html },
    { title: 'CSS', id: 2, icon: css },
    { title: 'JavaScript', id: 3, icon: js },
    { title: 'TypeScript', id: 4, icon: ts },
    { title: 'Tailwind', id: 5, icon: tailwind },
    { title: 'Bootstrap', id: 6, icon: bootstrap },
    { title: 'React', id: 7, icon: react },
    { title: 'MongoDB', id: 8, icon: mongoDB },
    { title: 'Express', id: 9, icon: Express },
    { title: 'Node', id: 10, icon: node },
    { title: 'Next', id: 11, icon: next },
    { title: 'Firebase', id: 12, icon: firebase },
    { title: 'Axios', id: 13, icon: axios },
    { title: 'Eslint', id: 14, icon: eslint },
    { title: 'Canva', id: 15, icon: canva },
    { title: 'Figma', id: 16, icon: figma },
    { title: 'Git', id: 17, icon: git },
    { title: 'GitHub', id: 18, icon: github },
    { title: 'Google Cloud', id: 19, icon: googleCloud },
    { title: 'JSON', id: 20, icon: json },
    { title: 'NPM', id: 21, icon: npm },
    { title: 'Vercel', id: 22, icon: vercel },
    { title: 'VS Code', id: 23, icon: vscode },
    { title: 'WordPress', id: 24, icon: wordpress },
    { title: 'Postman', id: 25, icon: postman },
];

const MobingCard = () => {
    const swiperRef = useRef(null);
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
            nMouseEnter={() => swiperRef.current?.swiper?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.swiper?.autoplay.start()}
        >
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={6}
                spaceBetween={4}
                navigation={true}
                // autoplay={true}
                autoplaySpeed= {2000}
                // speed={50}
                loop={true}

                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}

                modules={[Pagination, Autoplay, Navigation]}
                className="swiper"
            >
                {skillIcon.map(sk => (
                    <SwiperSlide key={sk.id}>
                        <div
                            className="group hover:-rotate-0 [transform:rotate3d(1,-1,1,15deg)] duration-500 overflow-hidden h-[12em] w-[12em] border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                        >
                            <div className="p-2">
                                <div className="avatar grid justify-center">
                                    <div className="shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] p-4">
                                        <Image
                                            src={sk.icon}
                                            alt={`${sk.title} Icon`}
                                            width={64}
                                            height={64}
                                            layout="fixed"
                                        />
                                    </div>
                                    <p className="text-xl font-semibold text-yellow-600 pacifico-regular mt-2">
                                        {sk.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobingCard;
