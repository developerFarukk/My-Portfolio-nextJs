import Image from "next/image";
import { FloatingDock } from "../ui/floating-dock";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { SiFacebook } from "react-icons/si";
import Link from "next/link";
import { FaDiscord, FaInstagramSquare, FaLinkedin } from "react-icons/fa";



const LinkIcon = () => {

    const links = [
        {
            title: "Facebook",
            icon: (
                <SiFacebook className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://web.facebook.com/developerfarukk",
        },

        {
            title: "LinkedIn",
            icon: (
                <FaLinkedin className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://www.linkedin.com/in/developerfaruk",
        },

        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://github.com/developerFarukk",
        },

        {
            title: "Instagram",
            icon: (
                <FaInstagramSquare className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://www.instagram.com/developer_faruk",
        },

        {
            title: "Discord",
            icon: (
                <FaDiscord className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://discord.gg/developerfaruk",
        },

        {
            title: "Twiter/X",
            icon: (
                <IconBrandX className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "https://x.com/developerfarukk",
        },

    ];

    return (
        <div>
            <div className="flex items-center justify-center  w-full p-2">
                <FloatingDock
                    // mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                />
            </div>
        </div>
    );
};

export default LinkIcon;