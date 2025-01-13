
"use client"

import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMemo } from "react";
import Image from "next/image";

import html from "../../../../../public/Icon/html-5.png";
import css from "../../../../../public/Icon/css-3.png";
import tailwind from "../../../../../public/Icon/Tailwind CSS.svg";
import bootstrap from "../../../../../public/Icon/Bootstrap.svg";
import canva from "../../../../../public/Icon/Canva.svg";
import figma from "../../../../../public/Icon/Figma.svg";
import aceternity from "../../../../../public/Icon/UI/Aceternity.webp";
import shadcn from "../../../../../public/Icon/UI/Shadcn.png";
import ant from "../../../../../public/Icon/UI/Ant.jpg";
import bulma from "../../../../../public/Icon/UI/BulmaUI.png";
import chakra from "../../../../../public/Icon/UI/ChakraUI.png";
import css_Trick from "../../../../../public/Icon/UI/CSS-TricksUI.jpg";
import daisyUI from "../../../../../public/Icon/UI/dasyUI.png";
import float from "../../../../../public/Icon/UI/FloatUI.svg";
import flowbit from "../../../../../public/Icon/UI/flowbitUI.jpg";
import fontWosom from "../../../../../public/Icon/UI/fontWosom.png";
import gsap from "../../../../../public/Icon/UI/GSAP-Scrolling.jpg";
import headless from "../../../../../public/Icon/UI/headlessUI.jpg";
import hover_animat from "../../../../../public/Icon/UI/HoverAnimation-con.ico";
import hyperUI from "../../../../../public/Icon/UI/HyperUI.jpg";
import keen_slider from "../../../../../public/Icon/UI/Keen-SliderUI.png";
import mamba from "../../../../../public/Icon/UI/MambaUI.jpg";
import meraki from "../../../../../public/Icon/UI/MerakiUI.png";
import metariel_tailwind from "../../../../../public/Icon/UI/MetarialTailwindUI.png";
import motion_animation from "../../../../../public/Icon/UI/MotionAnimationUI.png";
import preline from "../../../../../public/Icon/UI/PrelineUI.png";
import ripple from "../../../../../public/Icon/UI/RippleUI.ico";
import sailboat from "../../../../../public/Icon/UI/SailboatUI.ico";
import swiper_slider from "../../../../../public/Icon/UI/swiper-logo.svg";
import tailbit from "../../../../../public/Icon/UI/TailbitUI.svg";
import tailkit from "../../../../../public/Icon/UI/TailkitUI.png";
import tech_icon from "../../../../../public/Icon/UI/tech-icons-logo.svg";
import uiverse from "../../../../../public/Icon/UI/Uiverse.jpg";
import wind from "../../../../../public/Icon/UI/windUI.jpg";
import xtend from "../../../../../public/Icon/UI/xtendUI.png";



const UiSkills = () => {

    const skillIcon = useMemo(() => [
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
            title: 'Tailwind',
            id: 3,
            icon: <div className="p-6"><Image className=" " src={tailwind} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Bootstrap',
            id: 4,
            icon: <div className="p-6"><Image className=" " src={bootstrap} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Canva',
            id: 5,
            icon: <div className="p-6"><Image className=" " src={canva} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Figma',
            id: 6,
            icon: <div className="p-6"><Image className=" " src={figma} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Aceternity',
            id: 7,
            icon: <div className="p-6"><Image className=" " src={aceternity} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Shadcn',
            id: 8,
            icon: <div className="p-6"><Image className=" " src={shadcn} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Bulma',
            id: 9,
            icon: <div className="p-6"><Image className=" " src={bulma} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Chakra',
            id: 10,
            icon: <div className="p-6"><Image className=" " src={chakra} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'CSS-Trick',
            id: 11,
            icon: <div className="p-6"><Image className=" " src={css_Trick} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Ant',
            id: 12,
            icon: <div className="p-6"><Image className=" " src={ant} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'DaisyUI',
            id: 13,
            icon: <div className="p-6"><Image className=" " src={daisyUI} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Float',
            id: 14,
            icon: <div className="p-6"><Image className=" " src={float} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Flowbit',
            id: 15,
            icon: <div className="p-6"><Image className=" " src={flowbit} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Font-Awesome',
            id: 16,
            icon: <div className="p-6"><Image className=" " src={fontWosom} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'GSAP',
            id: 17,
            icon: <div className="p-6"><Image className=" " src={gsap} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Headless',
            id: 18,
            icon: <div className="p-6"><Image className=" " src={headless} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Hover-Animat',
            id: 19,
            icon: <div className="p-6"><Image className=" " src={hover_animat} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Hyper',
            id: 20,
            icon: <div className="p-6"><Image className=" " src={hyperUI} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Keen-Slider',
            id: 21,
            icon: <div className="p-6"><Image className=" " src={keen_slider} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Mamba',
            id: 22,
            icon: <div className="p-6"><Image className=" " src={mamba} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Meraki',
            id: 23,
            icon: <div className="p-6"><Image className=" " src={meraki} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Metarial-Tailwind',
            id: 24,
            icon: <div className="p-6"><Image className=" " src={metariel_tailwind} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Motion-Animation',
            id: 25,
            icon: <div className="p-6"><Image className=" " src={motion_animation} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Preline',
            id: 26,
            icon: <div className="p-6"><Image className=" " src={preline} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Ripple',
            id: 27,
            icon: <div className="p-6"><Image className=" " src={ripple} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'sailboat',
            id: 28,
            icon: <div className="p-6"><Image className=" " src={sailboat} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Swiper-Slider',
            id: 29,
            icon: <div className="p-6"><Image className=" " src={swiper_slider} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Tailbit',
            id: 30,
            icon: <div className="p-6"><Image className=" " src={tailbit} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Tailkit',
            id: 31,
            icon: <div className="p-6"><Image className=" " src={tailkit} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Tech-Icon',
            id: 32,
            icon: <div className="p-6"><Image className=" " src={tech_icon} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Uiverse',
            id: 33,
            icon: <div className="p-6"><Image className=" " src={uiverse} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Wind',
            id: 34,
            icon: <div className="p-6"><Image className=" " src={wind} alt="My Responsive Image" layout="responsive" /></div>
        },
        {
            title: 'Xtend',
            id: 35,
            icon: <div className="p-6"><Image className=" " src={xtend} alt="My Responsive Image" layout="responsive" /></div>
        },

    ], []);

    const splideOptions = useMemo(() => ({
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
    }), []);


    return (
        <div>
            <div className="">
                <Splide
                    options={splideOptions}
                    extensions={{ AutoScroll }}
                    className="scroller scroll-container relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] "
                >
                    {
                        skillIcon.map(sk => <>
                            <SplideSlide key={sk.id} className="croll-content h-60 grid justify-center items-center lg:grid-cols-6 md:grid-cols-4 grid-cols-3 cursor-grabbing ...">
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

export default UiSkills;