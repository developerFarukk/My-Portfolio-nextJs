"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        {
            title: 'Home',
            path: '/',

        },
        // {
        //     title: 'About',
        //     path: '#about',

        // },
        {
            title: 'Skills',
            path: '#skills',
        },
        {
            title: 'Education',
            path: '#education',
        },
        {
            title: 'Experience',
            path: '/',
        },
        {
            title: 'Project',
            path: '#projects',
        },
        {
            title: 'Blogs',
            path: '#blogs',
        },
        {
            title: 'Service',
            path: '#service',
        },
        {
            title: 'Contact',
            path: '#contact',
        },
    ];



    return (
        <div className="">
            <div className={`navbar fixed z-50  text-white transition-all duration-300 ${scrolled ? 'bg-[#112484] bg-opacity-90' : 'bg-[#090949] bg-opacity-10'
                }`}>
                <div className="navbar-start">

                    <div className="dropdown relative">
                        {/* Hamburger Button */}
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden p-2 hover:bg-purple-900/30 transition-all duration-200 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white hover:text-purple-300 transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-gray-900/95 backdrop-blur-sm border border-gray-600 rounded-box w-56 transition-all duration-300 origin-top transform opacity-0 scale-y-0 dropdown-open:opacity-100 dropdown-open:scale-y-100"
                        >
                            {navItems?.map((navItem) => (
                                <li key={navItem.path} className="group my-1 first:mt-0 last:mb-0">
                                    <Link
                                        className="font-medium akaya-regular text-gray-200 hover:text-white text-[15px] px-4 py-3 hover:bg-gray-800/80 rounded-lg transition-all duration-200 flex items-center"
                                        href={navItem.path}
                                    >
                                        <span className="relative overflow-hidden">
                                            <span className="block transition-transform duration-300 group-hover:translate-x-1">
                                                {navItem.title}
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                        </span>
                                        <svg
                                            className="w-4 h-4 ml-auto text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <div>
                        <MobileDropdownMenu navItems={navItems} />
                    </div> */}
                    <div className="">
                        <Link href="/" className="pacifico-regular btn  rounded-full lg:p-2 lg:text-xl block1 ">OMAR FARUK</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 ">
                        {/* {nav} */}
                        {navItems?.map((navItem) => (
                            <li key={navItem.path}>
                                <Link
                                    className=' font-bold akaya-regular inline-block hover-underline-animation text-[16px]'
                                    href={navItem.path}
                                >
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="sm:order-last sm:shrink-0">
                        <Link href="/">
                            <Image
                                alt=""
                                src="https://res.cloudinary.com/dmolqac67/image/upload/v1747737822/bg_dwy0g0.png"
                                className="size-16 rounded-full  border-2 border-blue-800 object-cover sm:size-[40px]"
                                height={50}
                                width={50}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

