import Link from "next/link";

import { SiFacebook } from "react-icons/si";
import { FaDiscord, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Messege = () => {
    return (
        <div>
            <section class="  sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Message me directly to learn about any topic of web development.</p>
                    </div>

                    <div class="max-w-6xl mx-auto mt-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-2xl shadow-md lg:mt-20">
                        <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <div class="lg:col-span-3">
                                <div class="p-6 sm:p-10">
                                    <h3 class="text-2xl font-semibold text-black">Send us a message</h3>

                                    <form action="#" method="POST" class="mt-8 text-start">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Your email </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="email" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="tel" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label for="" class="text-base font-medium  text-gray-900"> Company name </label>
                                                <div class="mt-2.5 relative">
                                                    <input type="text" name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="" class="text-base font-medium text-gray-900">Description</label>
                                                <div class="mt-2.5 relative">
                                                    <textarea
                                                        name=""
                                                        id=""
                                                        placeholder=""
                                                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class=" lg:col-span-2 lg:border-l-4 lg:border-pink-700 lg:mt-4 lg:mb-4">
                                <div class="h-full p-6 sm:p-10">
                                    <div class="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 class="text-2xl font-semibold text-black">Contact info</h4>

                                            <div class="mt-8 space-y-7">
                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span class="block ml-3 text-base text-start text-gray-900"> ROTARGAON-3000, BISHWAMBARPUR, SUNAMGNJ, SYLHET DEVIATION, BANGLADESH </span>
                                                </div>

                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span class="block ml-3 text-base text-gray-900"> omarfaruk34552@gmail.com </span>
                                                </div>

                                                <div class="flex items-start">
                                                    <svg class="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <div class="ml-3">
                                                        <span class="block text-base text-gray-900"> +880 1516742802 </span>
                                                        <span class="block mt-1 text-base text-gray-900"> +880 1917540405 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-8 lg:mt-auto">
                                            <hr class="border-gray-200" />
                                            <div class="flex items-center justify-between mt-7">
                                                <p class="text-lg font-semibold text-black">Follow us on</p>

                                                <ul class="flex items-center justify-end space-x-3">

                                                    {/* Facebook */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://www.facebook.com/profile.php?id=100010438080711&mibextid=ZbWKwL"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> Facebook </span>
                                                            <SiFacebook className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Instagram */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://www.instagram.com/promoter_hridoy?igsh=ODdsbGJoZTJ0dmRj"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> Instagram </span>
                                                            <FaInstagramSquare className="h-6 w-6" />
                                                        </Link>
                                                    </li>


                                                    {/* Twiter/X */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://x.com/Farukk2059?s=09"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> Twiter/X </span>
                                                            <BsTwitterX className="h-6 w-6" />
                                                        </Link>
                                                    </li>


                                                    {/* GitHub */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://github.com/FARUK2059"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> GitHub </span>
                                                            <FaGithub className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Linkedin */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://www.linkedin.com/in/omar-faruk7920?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BX7zN4PjASC6UkPE%2FI0Oslg%3D%3D"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> LinkedIn </span>
                                                            <FaLinkedin className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Discord */}
                                                    <li>
                                                        <Link
                                                            className=" transition hover:text-yellow-200"
                                                            href="https://www.discordapp.com/users/1247190729042956341"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only"> Discord </span>
                                                            <FaDiscord className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Messege;