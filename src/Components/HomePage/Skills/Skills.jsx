import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
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


const Skills = () => {

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
    ];

    return (
        <div className="mt-12">

            {/* Skills Button */}
            <div>
                <MobingBorderButton title="My Skills" />
            </div>

            {/* Card */}
            <div className="justify-center items-center text-center flex">
                <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-10 items-center justify-center mt-12">
                    {
                        skillIcon.map(sk => <>
                            <div key={sk.id}
                                className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden  h-[12em] w-[12em]  border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col  hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                            >
                                <div className="p-2">

                                    <div className="avatar grid justify-center">
                                        <div className=" shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
                                            {sk.icon}


                                        </div>
                                        <p className="text-xl  font-semibold text-yellow-600 pacifico-regular">{sk.title}</p>
                                    </div>
                                </div>

                            </div>
                        </>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Skills;