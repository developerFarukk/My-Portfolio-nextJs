"use client"

import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Image from "next/image";

import html from "../../../../../public/Icon/html-5.png";
import css from "../../../../../public/Icon/css-3.png";
import js from "../../../../../public/Icon/js.png";
import ts from "../../../../../public/Icon/typescript.png";
import tailwind from "../../../../../public/Icon/Tailwind CSS.svg";
import bootstrap from "../../../../../public/Icon/Bootstrap.svg";
import react from "../../../../../public/Icon/React.svg";
import next from "../../../../../public/Icon/Next.js.svg";
import canva from "../../../../../public/Icon/Canva.svg";
import figma from "../../../../../public/Icon/Figma.svg";
import wordpress from "../../../../../public/Icon/WordPress.svg";

const FrontEndSkills = () => {
    return (
        <div>
            <div className="">
                <Splide
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        perPage: 6,
                        gap: "1rem",
                        autoScroll: {
                            speed: 0.3,
                            interval: 3000,
                        },
                        pagination: false,
                        arrows: false,
                        breakpoints: {
                            480: { perPage: 2, gap: "0.5rem" },
                            640: { perPage: 3, gap: "0.5rem" },
                            768: { perPage: 4, gap: "1rem" },
                            960: { perPage: 5, gap: "1.5rem" },
                            1280: { perPage: 6, gap: "2rem" },
                        },
                    }}
                    extensions={{ AutoScroll }}
                    className="scroller scroll-container relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] "
                >
                    {
                        skillIcon.map(sk => <>
                            <SplideSlide key={sk.id} className="h-60 croll-content scroll-m-5 grid justify-center items-center lg:grid-cols-6 md:grid-cols-4 grid-cols-3 cursor-grabbing ...">
                                <div
                                    className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden  h-[10em] w-[10em]  border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col  hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                                >
                                    <div className="p-3">

                                        <div className="avatar grid justify-center">
                                            <div className=" shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
                                                {sk.icon}


                                            </div>
                                            <p className="text-xl  font-semibold text-yellow-600 pacifico-regular">{sk.title}</p>
                                        </div>
                                    </div>


                                </div>
                            </SplideSlide>
                        </>)
                    }
                    <div div className="divider divider-horizontal divider-warning pt-12 pb-12 flex justify-center items-center text-center mr-14">🌟</div>
                </Splide >
            </div >
        </div>
    );
};

export default FrontEndSkills;


const skillIcon = [
    {
        title: 'HTML',
        id: 1,
        icon: <div className="p-1"><Image className=" " src={html} alt="My Responsive Image" layout="responsive" /></div>

    },
    {
        title: 'CSS',
        id: 2,
        icon: <div className="p-4"><Image className=" " src={css} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'JavaScript',
        id: 3,
        icon: <div className="p-6 rounded-xl"><Image className="rounded-xl " src={js} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'TypeScript',
        id: 4,
        icon: <div className="p-6"><Image className=" " src={ts} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Tailwind',
        id: 5,
        icon: <div className="p-6"><Image className=" " src={tailwind} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Bootstrap',
        id: 6,
        icon: <div className="p-6"><Image className=" " src={bootstrap} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'React',
        id: 7,
        icon: <div className="p-6"><Image className=" " src={react} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Next',
        id: 8,
        icon: <div className="p-6"><Image className=" " src={next} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Canva',
        id: 9,
        icon: <div className="p-6"><Image className=" " src={canva} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Figma',
        id: 10,
        icon: <div className="p-6"><Image className=" " src={figma} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'WordPress',
        id: 11,
        icon: <div className="p-6"><Image className=" " src={wordpress} alt="My Responsive Image" layout="responsive" /></div>
    },
    
];