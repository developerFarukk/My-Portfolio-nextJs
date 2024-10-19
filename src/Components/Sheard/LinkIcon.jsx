import Image from "next/image";
import { FloatingDock } from "../ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import { SiFacebook } from "react-icons/si";
// import { FaDiscord, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";



const LinkIcon = () => {

    const links = [
        {
            title: "Facebook",
            icon: (
                <SiFacebook className="h-full w-full  hover:text-yellow-200 transition" />
            ),
            href: "#",
            target: "_blank",
            rel: "noreferrer"
            
        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
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