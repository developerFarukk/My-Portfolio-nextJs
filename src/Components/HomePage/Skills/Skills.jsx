import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import Image from "next/image";
import html from "../../../../public/Icon/html-5.png"


const Skills = () => {
    return (
        <div className="mt-12">

            {/* Skills Button */}
            <div>
                <MobingBorderButton title="My Skills" />
            </div>

            {/* Card */}
            <div className="flex gap-6 items-center justify-center">

                <div
                    className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden  h-[12em] w-[12em]  border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col  hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                >
                    <div className="p-2">
                        <div className="avatar grid justify-center">
                            <div className=" shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] ">
                                <Image className=" " src={html} alt="My Responsive Image" layout="responsive"  />

                            </div>
                            <p className="text-xl  font-semibold text-yellow-600 pacifico-regular">HTML</p>
                        </div>
                    </div>

                </div>


            </div>

            <div>
                <div className="">
                    <div className="mt-6 lg:grid justify-center items-center">

                        <div className="mt-10 grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-3 lg:gap-6 gap-2 justify-center items-center ">

                            {/* Html */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/HTML.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">HTML</p>
                            </div>

                            {/* Css */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/css.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">CSS</p>
                            </div>

                            {/* javaScrip */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/JavaScript.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">JavaScript</p>
                            </div>

                            {/* Tailwind */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/tailwind.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Tailwind</p>
                            </div>

                            {/* BootStrup */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/Bootsrap.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Bootstrap</p>
                            </div>

                            {/* React */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/react.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">React</p>
                            </div>



                            {/* Firebase */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/firebase.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Firebase</p>
                            </div>

                            {/* Node.js */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/node.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Node.js</p>
                            </div>

                            {/* Express */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/express.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Express</p>
                            </div>

                            {/* MOngoDB */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://github.com/FARUK2059/FARUK2059/blob/main/Icons/mongo.png?raw=true" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">MongoDB</p>
                            </div>

                            {/* Next.js */}
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-lg ">
                                    <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOYMtSMKxVApuqB5E7IjY9KuS15wUF4jtYg&s" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                                </div>
                                <p className="text-xl font-semibold text-yellow-600">Next.js</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;