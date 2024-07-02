import Image from "next/image";


const Skills = () => {
    return (
        <div className="mt-10">
            <div>
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">My Skills</h2>
                </div>
            </div>
            <div>
                <div>
                    <div className="mt-10 flex gap-6 justify-center items-center">

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
                                <Image className=" relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo-thumbnail.png" alt="My Responsive Image" layout="responsive" width={500} height={500} />

                            </div>
                            <p className="text-xl font-semibold text-yellow-600">Next.js</p>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;