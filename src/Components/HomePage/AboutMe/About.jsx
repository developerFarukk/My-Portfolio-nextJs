


import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import TextEffect from "@/components/Sheard/TextEffect";
import Image from "next/image";
import Ab3DCard from "./Ab3DCard";
import According from "../According/According";

const objective = `I work as a professional in the web development sector, creating full-featured websites. With years of hands-on experience, I am committed to modernizing and improving user experiences through friendly, efficient, and contemporary designs.`;

const work = `I am an experienced web developer with years of hands-on expertise, currently pursuing a BSc in Mathematics. I have a strong foundation in both front-end and back-end technologies, enabling me to design, build, and maintain robust web applications. My skill set spans a wide range of technologies, including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Node.js, MongoDB, Express.js, React, Redux, and Next.js, as well as proficiency in databases such as MySQL, PostgreSQL, and GraphQL.`


const About = () => {
    return (
        <div>

            <section className="mt-6">
                <div className="w-[90%] px-4 mx-auto sm:px-6 lg:px-8 container border-yellow-600 border-2 shadow-lg rounded-lg">

                    {/* About Button */}
                    <div>
                        <MobingBorderButton />
                    </div>

                    <div className="mx-auto text-center ">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight text-center">
                            I am an expert in modern
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full h-1 bg-yellow-300  bottom-1.5 lg:ml-2 md:ml-2 "></span>
                                <span className="relative lg:ml-2 md:ml-2"> web development</span>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1   gap-y-6 md:grid-cols-2 gap-x-10 items-center ">

                        {/* Image Section */}
                        <div>
                            <Ab3DCard></Ab3DCard>
                        </div>

                        {/* Text details Section */}
                        <div className="text-sky-300 text-start">
                            <div className="text-start">
                                <span className="relative inline-block text-xl font-bold  text-orange-700 ">
                                    <span className="absolute inline-block w-full h-[1px] bg-white bottom-1 "></span>
                                    <span className="relative jersey-20-charted-regular "> Objective</span>
                                </span>
                                <span className="font-bold text-xl text-slate-100"> : </span>
                            </div>

                            <div className="text-sky-300 text-lg bg-gradient-to-r from-slate-800 to-[#000428] p-1  rounded-lg mt-1">
                                <TextEffect words={objective}></TextEffect>
                            </div>

                            <div className="text-start">
                                <span className="relative inline-block text-xl font-bold  text-orange-700 mt-4">
                                    <span className="absolute inline-block w-full h-[1px] bg-white bottom-1 "></span>
                                    <span className="relative jersey-20-charted-regular "> My Work</span>
                                </span>
                                <span className="font-bold text-xl text-slate-100"> : </span>
                            </div>

                            <div className="text-sky-300 text-lg  bg-gradient-to-r from-slate-800 to-[#000428] p-1 rounded-lg mt-1">
                                <TextEffect words={work}></TextEffect>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center lg:mt-0 mt-4 p-2">
                            <According></According>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default About;