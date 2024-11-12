"use client";

import React from 'react';
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import Image from "next/image";
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
        id: 2,
        icon: <div className="p-6 rounded-xl"><Image className="rounded-xl " src={js} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'TypeScript',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={ts} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Tailwind',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={tailwind} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Bootstrap',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={bootstrap} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'React',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={react} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'MongoDB',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={mongoDB} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Express',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={Express} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Node',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={node} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Next',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={next} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Firebase',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={firebase} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Axios',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={axios} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Eslint',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={eslint} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Canva',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={canva} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Figma',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={figma} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Git',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={git} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'GitHub',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={github} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Google Cloud',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={googleCloud} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'JSON',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={json} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'NPM',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={npm} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Vercel',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={vercel} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'VS Code',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={vscode} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'WordPress',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={wordpress} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Postman',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={postman} alt="My Responsive Image" layout="responsive" /></div>
    },
];

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                navigation={true}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="swiper "
            >
            
                    <div className='h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>

                        {
                            skillIcon.map(sk => <>

                                <SwiperSlide key={sk.id}
                                    className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden  h-[12em] w-[12em]  border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito m-10 flex justify-center items-left flex-col  hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800 "
                                >
                                    <div className="p-2">

                                        <div className="avatar grid justify-center">
                                            <div className=" shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
                                                {sk.icon}


                                            </div>
                                            <p className="text-xl  font-semibold text-yellow-600 pacifico-regular">{sk.title}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </>)
                        }

                    </div>
                
            </Swiper>
        </>
    );
};

export default Slider;
