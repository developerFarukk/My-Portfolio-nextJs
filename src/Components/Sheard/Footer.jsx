
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaDiscord, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {


    
    return (
        <div>

            <footer className="text-white max-w-full">
                <div className="mx-auto  pb-8 pt-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md">
                        <strong className="block text-center text-xl font-bold text-slate-300 sm:text-3xl">
                            Subscribe to be the first to get updates on all my latest projects.
                        </strong>

                        <form className="mt-6">
                            <div className="relative max-w-lg">
                                <label className="sr-only" htmlFor="email"> Email </label>

                                <input
                                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                                    id="email"
                                    type="email"
                                    placeholder="portfolio@gmail.com"
                                />

                                <button
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                        <div className="mx-auto max-w-sm lg:max-w-none">
                            <p className="mt-4 text-center  lg:text-left lg:text-lg">
                                Click the social icons below to contact me.
                            </p>

                            <div className="mt-6 flex justify-center gap-4 lg:justify-start">

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
                        </div>

                        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                            <div>
                                <strong className="font-medium text-green-300"> Services </strong>

                                <ul className="mt-6 space-y-1">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">Digital Marketing </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            Graphic Design
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            App Development
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            Web Development
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <strong className="font-medium text-green-300"> About </strong>

                                <ul className="mt-6 space-y-1">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> About </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Careers </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> History </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Our Team </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <strong className="font-medium text-green-300"> Support </strong>

                                <ul className="mt-6 space-y-1">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> FAQs </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Contact </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Live Chat </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-gray-100 pt-8">
                        <p className="text-center text-xs/relaxed ">
                            © Copyright 2024. All rights reserved.

                            <br />

                            Created with
                            <Link target="_blank" href="https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables" className="text-green-400  transition hover:text-white/75"> Next.js </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;