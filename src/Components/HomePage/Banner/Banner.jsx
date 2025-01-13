// "use client"

// import Image from "next/image";
// import Link from "next/link";
// // import React, { useState } from "react";
// import bg1 from "../../../../public/My Pic.png";
// import { Typewriter } from "react-simple-typewriter";
// import { TextRevealCard } from "@/components/ui/text-reveal-card";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import LinkIcon from "@/components/Sheard/LinkIcon";
// import HoverButton from "@/components/Sheard/HoverButton";
// import HireButton from "@/components/Sheard/HireButton";

// // Web Iamge
// import wave from "../../../../public/wave.gif"
// // import BannerLamp from "./BannerLamp";

// // import { useLottie } from "lottie-react";
// // import { downloadIcon } from "../../../../public/LottifyFile/Download.json"



// const Banner = () => {

//     // const [isCountStopped, setIsCountStopped] = useState(false); // State to stop count

//     // const handleType = (count) => {
//     //     if (!isCountStopped) {
//     //         console.log(count); // Log count only once
//     //         setIsCountStopped(true); // Stop further counting
//     //     }
//     // };

//     const handleType = (count) => {
//         // access word count number
//         console.log(count)
//     }

//     const handleDone = () => {
//         console.log(`Done after 5 loops!`)
//     }

//     // Lottefile Animation function
//     // const options = {
//     //     animationData: downloadIcon,
//     //     loop: true
//     // };

//     // const { View } = useLottie(options);

//     return (
//         <div>

//             <section className="lg:mt-0 pt-20 lg:pt-0 overflow-hidden text-white  md:pt-16 sm:pt-20 ">
//                 <div className="">
//                     <div className="grid lg:mt-20 items-center text-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

//                         {/* Left side section */}
//                         <div className="">
//                             <h2 className=" text-3xl font-bold leading-tight  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">
//                                 <div className="flex items-center justify-center gap-2 p-1">
//                                     <h2> Hey </h2>
//                                     <h2> <Image src={wave} alt="wave" height="40" className="-rotate-12 "></Image></h2>
//                                     <h2> I am </h2>
//                                 </div>

//                                 <br className="block sm:hidden" />

//                                 {/* Name Section */}
//                                 <div className="flex items-center justify-center p-1">
//                                     <TextRevealCard
//                                         text="OMAR FARUK"
//                                         revealText="Developer FARUK"
//                                         className='text-yellow-600 '
//                                     >
//                                     </TextRevealCard>
//                                 </div>

//                                 {/* Title Type Section */}
//                                 <span style={{ paddingTop: '0', margin: '0 0', fontWeight: 'normal' }}>
//                                     {/* Life is simple{' '} */}
//                                     <span style={{ color: 'red', fontWeight: 'bold' }}>
//                                         {/* Style will be inherited from the parent element */}
//                                         <Typewriter className="text-green-200 text-xl"
//                                             words={[
//                                                 'MERN Stack Web Developer',
//                                                 'Web Developer',
//                                                 'React Developer',
//                                                 'JavaScript Developer',
//                                                 'Front-End Developer',
//                                                 'Backend Developer',
//                                                 'Next.js Developer',
//                                                 'Full Stack Developer',
//                                             ]}
//                                             loop={1000}
//                                             cursor
//                                             cursorStyle='_'
//                                             typeSpeed={200}
//                                             deleteSpeed={100}
//                                             delaySpeed={3000}
//                                             onLoopDone={handleDone}
//                                             onType={handleType}
//                                         />
//                                     </span>
//                                 </span>

//                             </h2>

//                             <p className="mt-1 text-xl text-green-400 hover:ml-2 hover:mb-4 md:mt-8 arima-font">
//                                 <span className="relative inline-block">
//                                     <span className="absolute inline-block w-full bottom-0.5 h-1 bg-red-700"></span>
//                                     <span className="relative"> Have a question? </span>
//                                 </span>
//                                 <br className="block sm:hidden" /> Ask me through the <Link href="#contact" title="" className="transition-all duration-200 text-slate-200 hover:text-slate-50 hover:underline">Contact</Link>
//                             </p>

//                             {/* Link Section */}
//                             <div className="mt-10">
//                                 <LinkIcon></LinkIcon>
//                             </div>

//                             <div className="flex gap-2 justify-center items-center mt-2">

//                                 {/* <div className="">
//                                     {View}
//                                 </div> */}

//                                 <Link href="https://drive.google.com/file/d/1f712sf-H0d3PENlWP0m9u_I6SzdE0UhL/view?usp=sharing" target="_blank" >
//                                     <HoverButton></HoverButton>
//                                 </Link>

//                                 <div>
//                                     <HireButton></HireButton>
//                                 </div>

//                                 {/* <Link href="/" className="btn btn-primary bg-none p-2 m-6">Hire Me</Link> */}
//                             </div>

//                         </div>

//                         {/* Right side section */}
//                         <div className="relative  flex items-center justify-center text-center p-2">

//                             {/* <div className="relative w-auto">
//                                 <BannerLamp></BannerLamp>
//                             </div> */}

//                             <div className="absolute ">
//                                 <Image className="  opacity-70   wrapperimg rounded-full lg:p-16 md:p-12 p-8 " width={400} height={150} src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
//                             </div>

//                             <div>
//                                 <BackgroundLines className=" ">
//                                     <div className="">
//                                         <Image className="relative  " src={bg1} alt="My Responsive Image"
//                                             height={500}
//                                         // width={450}

//                                         />
//                                     </div>
//                                 </BackgroundLines>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default Banner;



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

                            <p className="mt-1 text-xl text-green-400 hover:ml-2 hover:mb-4 md:mt-8 arima-font">
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
                            </p>

                            {/* Link Section */}
                            <div className="mt-10">
                                <LinkIcon></LinkIcon>
                            </div>

                            <div className="flex gap-2 justify-center items-center mt-2">
                                <Link
                                    href="https://drive.google.com/file/d/1f712sf-H0d3PENlWP0m9u_I6SzdE0UhL/view?usp=sharing"
                                    target="_blank"
                                >
                                    <HoverButton></HoverButton>
                                </Link>

                                <div>
                                    <HireButton></HireButton>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Section */}
                        <div className="relative flex items-center justify-center text-center p-2">
                            <div className="absolute ">
                                <Image
                                    className="  opacity-70   wrapperimg rounded-full lg:p-16 md:p-12 p-8 "
                                    width={400}
                                    height={150}
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                    alt=""
                                />
                            </div>

                            <div>
                                <BackgroundLines className=" ">
                                    <div className="">
                                        <Image
                                            className="relative  "
                                            src={bg1}
                                            alt="My Responsive Image"
                                            height={500}
                                        />
                                    </div>
                                </BackgroundLines>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
