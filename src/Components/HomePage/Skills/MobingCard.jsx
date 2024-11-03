"use client";


import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import html from "../../../../public/Icon/html-5.png";
import css from "../../../../public/Icon/css-3.png";
import js from "../../../../public/Icon/js.png";
import ts from "../../../../public/Icon/typescript.png";
import tailwind from "../../../../public/Icon/Tailwind CSS.svg";
import bootstrap from "../../../../public/Icon/Bootstrap.svg";
import react from "../../../../public/Icon/React.svg";
import mongoDB from "../../../../public/Icon/MongoDB.svg";
import Express from "../../../../public/Icon/Express.svg";
import node from "../../../../public/Icon/Node.js.svg";
import next from "../../../../public/Icon/Next.js.svg";
import firebase from "../../../../public/Icon/Firebase.svg";
import axios from "../../../../public/Icon/Axios.svg";
import eslint from "../../../../public/Icon/ESLint.svg";
import canva from "../../../../public/Icon/Canva.svg";
import figma from "../../../../public/Icon/Figma.svg";
import git from "../../../../public/Icon/Git.svg";
import github from "../../../../public/Icon/GitHub.svg";
import googleCloud from "../../../../public/Icon/Google Cloud.svg";
import json from "../../../../public/Icon/JSON.svg";
import npm from "../../../../public/Icon/NPM.svg";
import vercel from "../../../../public/Icon/Vercel.svg";
import vscode from "../../../../public/Icon/VS Code.svg";
import wordpress from "../../../../public/Icon/WordPress.svg";
import postman from "../../../../public/Icon/Postman.svg";



const MobingCard = () => {
    return (
        <div>
            <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={skillIcon}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default MobingCard;


const skillIcon = [
    {
        title: 'HTML',
        id: 1,
        icon: <div className="p-1"><Image className=" " src={html} alt="My Responsive Image" layout="responsive" /></div>

    },
    {
        title: 'CSS',
        id: 2,
        icon: <div className="p-4"><Image className=" " src={css} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'JavaScript',
        id: 2,
        icon: <div className="p-6 rounded-xl"><Image className="rounded-xl " src={js} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'TypeScript',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={ts} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Tailwind',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={tailwind} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Bootstrap',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={bootstrap} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'React',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={react} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'MongoDB',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={mongoDB} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Express',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={Express} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Node',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={node} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Next',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={next} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Firebase',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={firebase} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Axios',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={axios} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Eslint',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={eslint} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Canva',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={canva} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Figma',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={figma} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Git',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={git} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'GitHub',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={github} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Google Cloud',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={googleCloud} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'JSON',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={json} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'NPM',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={npm} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Vercel',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={vercel} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'VS Code',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={vscode} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'WordPress',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={wordpress} alt="My Responsive Image" layout="responsive" /></div>
    },
    {
        title: 'Postman',
        id: 2,
        icon: <div className="p-6"><Image className=" " src={postman} alt="My Responsive Image" layout="responsive" /></div>
    },
];