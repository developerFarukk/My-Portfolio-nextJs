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
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow hover:bg-blue-800 bg-blue-500 rounded-box w-52">
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