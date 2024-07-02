import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg1 from "../../../../public/My Pic.png";
import { SiFacebook } from "react-icons/si";
import { FaDiscord, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Banner = () => {
    return (
        <div>
            <section className="lg:mt-0 pt-20 overflow-hidden text-white  md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center justify-between grid-cols-1 md:grid-cols-2">

                        <div className="">
                            <h2 className="text-3xl font-bold leading-tight text-yellow-600  ">Hey 👋 I am <br className="block sm:hidden" /> <br />
                                <span className="lg:text-5xl"> OMAR FARUK </span> <br />
                                <span className="text-green-200 text-xl">MERN Stack Web Developer</span>
                            </h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed  md:mt-8">I am developing a full-featured website using the MERN stack (MongoDB, Express.js, React, Node.js)
                                to modernize and enhance user experience with a friendly, efficient, and contemporary design.</p>

                            <p className="mt-4 text-xl text-green-400  md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-1 bg-red-700"></span>
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidden" /> Ask me through the <Link href="#" title="" className="transition-all duration-200 text-slate-200 hover:text-slate-50 hover:underline">Contact</Link>
                            </p>
                            <div className="mt-6 flex justify-center gap-6 ">

                                {/* Facebook */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://www.facebook.com/profile.php?id=100010438080711&mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> Facebook </span>
                                    <SiFacebook className="h-6 w-6" />
                                </Link>

                                {/* Instagram */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://www.instagram.com/promoter_hridoy?igsh=ODdsbGJoZTJ0dmRj"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> Instagram </span>
                                    <FaInstagramSquare className="h-6 w-6" />
                                </Link>

                                {/* Twiter/X */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://x.com/Farukk2059?s=09"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> Twiter/X </span>
                                    <BsTwitterX className="h-6 w-6" />
                                </Link>

                                {/* GitHub */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://github.com/FARUK2059"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> GitHub </span>
                                    <FaGithub className="h-6 w-6" />
                                </Link>

                                {/* Linkedin */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://www.linkedin.com/in/omar-faruk7920?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BX7zN4PjASC6UkPE%2FI0Oslg%3D%3D"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> LinkedIn </span>
                                    <FaLinkedin className="h-6 w-6" />
                                </Link>

                                {/* Discord */}
                                <Link
                                    className=" transition hover:text-yellow-200"
                                    href="https://www.discordapp.com/users/1247190729042956341"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="sr-only"> Discord </span>
                                    <FaDiscord className="h-6 w-6" />
                                </Link>

                            </div>

                            <div>
                                <Link href="https://drive.google.com/file/d/1f712sf-H0d3PENlWP0m9u_I6SzdE0UhL/view?usp=sharing" 
                                download="M_Resume.pdf"
                                target="blank"
                                className="btn btn-primary bg-none p-2 m-6">Download Resume</Link>
                                <Link href="/" className="btn btn-primary bg-none p-2 m-6">Hire Me</Link>
                            </div>

                        </div>

                        <div className="relative">
                            <Image className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="My Responsive Image"
                                layout="responsive"
                                width={500}
                                height={300} />

                            <Image className="relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={bg1} alt="My Responsive Image"
                                layout="responsive"

                                width={500}
                                height={300} />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;