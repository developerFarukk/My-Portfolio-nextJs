"use client"

import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaDiscord, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import MobingBorderButton from "@/components/Sheard/MobingBorderButton";

const Message = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        description: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email input
        if (!formData.email) {
            alert("Email is required");
            return;
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.error(error.text);
                alert('Failed to send email, please try again.');
            });

        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            description: ''
        });
    };

    return (
        <div>
            <section className="sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2> */}
                        {/*Project Title Button */}
                        <div>
                            <MobingBorderButton title="Contact Me" />
                        </div>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Message me directly to learn about any topic of web development.</p>
                    </div>

                    <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-gradient-to-r from-[#000000] to-[#130F40] rounded-2xl shadow-md lg:mt-20">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-2xl font-semibold ">Send  message</h3>

                                    <form ref={form} onSubmit={handleSubmit} className="mt-8 text-start">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label className="text-base font-medium ">Your name</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="block w-full px-4 py-4  
                                                     transition-all duration-200 border border-gray-200 rounded-md  focus:outline-none focus:border-blue-600  " />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-base font-medium ">Your email</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full px-4 py-4  transition-all duration-200 border border-gray-200 rounded-md  focus:outline-none focus:border-blue-600 " required />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-base font-medium ">Phone number</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block w-full px-4 py-4  transition-all duration-200 border border-gray-200 rounded-md  focus:outline-none focus:border-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-base font-medium ">Company name</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="block w-full px-4 py-4  transition-all duration-200 border border-gray-200 rounded-md  focus:outline-none focus:border-blue-600" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="text-base font-medium ">Description</label>
                                                <div className="mt-2.5 relative">
                                                    <textarea name="description" value={formData.description} onChange={handleChange} className="block w-full px-4 py-4  transition-all duration-200 border border-gray-200 rounded-md resize-y  focus:outline-none focus:border-blue-600 " rows="4"></textarea>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <button type="submit" className="inline-flex items-center justify-center w-full   font-bold  text-lg  btn rounded-md focus:outline-none  bg-gradient-to-r from-blue-900 to-blue-900 ">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="lg:col-span-2 lg:border-l-4 lg:border-pink-700 lg:mt-4 lg:mb-4">
                                <div className="h-full p-6 sm:p-10">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 className="text-2xl font-semibold ">Contact info</h4>

                                            <div className="mt-8 space-y-7">
                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="block ml-3 text-base text-start ">ROTARGAON-3000, BISHWAMBARPUR, SUNAMGNJ, SYLHET DEVIATION, BANGLADESH</span>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.21 0L21 8m-9 12h.01M12 19h.01M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
                                                    </svg>
                                                    <span className="block ml-3 text-base text-start ">web.omarfaruk.dev@gmail.com</span>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <div className="ml-3">
                                                        <span className="block mt-1 text-base ">+880 1917540405</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-start">

                                                    <div className=" flex items-center gap-3">  <FaWhatsapp className="text-blue-700 w-8 h-8" />
                                                        <span className="block mt-1 text-base ">+880 1917540405</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 lg:mt-auto">
                                            <hr className="border-gray-200" />
                                            <div className="flex items-center justify-between mt-7">
                                                <p className="text-lg font-semibold ">Follow us on</p>

                                                <ul className="flex items-center justify-end space-x-3">
                                                    {/* Facebook */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://www.facebook.com/profile.php?id=100010438080711&mibextid=ZbWKwL"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">Facebook</span>
                                                            <SiFacebook className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Instagram */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://www.instagram.com/promoter_hridoy?igsh=ODdsbGJoZTJ0dmRj"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">Instagram</span>
                                                            <FaInstagramSquare className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Twitter/X */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://x.com/Farukk2059?s=09"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">Twitter/X</span>
                                                            <BsTwitterX className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* GitHub */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://github.com/FARUK2059"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">GitHub</span>
                                                            <FaGithub className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* LinkedIn */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://www.linkedin.com/in/omar-faruk7920?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BX7zN4PjASC6UkPE%2FI0Oslg%3D%3D"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">LinkedIn</span>
                                                            <FaLinkedin className="h-6 w-6" />
                                                        </Link>
                                                    </li>

                                                    {/* Discord */}
                                                    <li>
                                                        <Link
                                                            className="transition hover:text-yellow-200"
                                                            href="https://www.discordapp.com/users/1247190729042956341"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <span className="sr-only">Discord</span>
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

export default Message;
