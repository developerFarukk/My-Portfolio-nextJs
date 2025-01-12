
"use client"

import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import mongoDB from "../../../../../public/Icon/MongoDB.svg";
import Express from "../../../../../public/Icon/Express.svg";
import node from "../../../../../public/Icon/Node.js.svg";
import firebase from "../../../../../public/Icon/Firebase.svg";
import googleCloud from "../../../../../public/Icon/Google Cloud.svg";
import json from "../../../../../public/Icon/JSON.svg";
import npm from "../../../../../public/Icon/NPM.svg";
import postman from "../../../../../public/Icon/Postman.svg";
import axios from "../../../../../public/Icon/Axios.svg";
import eslint from "../../../../../public/Icon/ESLint.svg";
import Image from "next/image";

const BackendSkills = () => {
    return (
        <div>
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
                                speed: 1,
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
                        className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] "
                    >
                        {
                            skillIcon.map(sk => <>
                                <SplideSlide key={sk.id} className="h-60 grid justify-center items-center lg:grid-cols-6 md:grid-cols-4 grid-cols-3 cursor-grabbing ...">
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
        </div>
    );
};

export default BackendSkills;


const skillIcon = [
 
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
        title: 'Firebase',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={firebase} alt="My Responsive Image" layout="responsive" /></div>
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
        title: 'Postman',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={postman} alt="My Responsive Image" layout="responsive" /></div>
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

];