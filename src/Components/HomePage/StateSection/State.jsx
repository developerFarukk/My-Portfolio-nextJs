import Image from "next/image";
import img1 from "../../../../public/Avhivment.svg"
import img2 from "../../../../public/rating_896699.png"
import img3 from "../../../../public/laugh-wink_11035650.png"
import img4 from "../../../../public/project.png"



const State = () => {
    return (
        <div>
            <section className="">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">

                        <div>
                            <div className="cards__inner">
                                <div className="cards__card card bg-gradient-to-r from-slate-600 to-[#000428]  rounded-xl p-1 grid grid-rows-[auto_auto_auto_1fr]   hover:text-black hover:shadow-[inset_0_0_80px_whitesmoke,inset_20px_0_80px_rgba(20,0,20,0.8),inset_-20px_0_80px_cyan,inset_20px_0_300px_fuchsia,inset_-20px_0_300px_cyan,0_0_50px_white,-10px_0_80px_fuchsia,10px_0_80px_cyan] transition-all duration-300">

                                    <div className="flex justify-center items-center">
                                        <div
                                            className="hover:-translate-y-1 group  duration-500 w-36 h-36 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden "
                                        >
                                            <svg
                                                viewBox="0 0 200 200"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                                            >
                                                <path
                                                    transform="translate(100 100)"
                                                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                                                ></path>
                                            </svg>

                                            <div className="z-20 flex flex-col justify-center items-center">
                                                <span className="font-bold text-6xl ml-2">60%</span>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="font-bold mb-2 text-2xl ">Job achievements</p>

                                </div>
                                <div className="overlay cards__inner"></div>
                            </div>
                        </div>


                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 hover:bg-blue-600 rounded-md">
                            <div className="">
                                <Image className="p-4" src={img1} alt="My Responsive Image"
                                    layout="responsive"
                                    width={1}
                                    height={1} />
                                <p className="mt-4 text-6xl font-bold text-black">30%</p>
                                <ul className="flex flex-col  ">
                                    <li className="p-4 font-medium text-white lg:text-xl">Job achievements</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 hover:bg-blue-600 rounded-md">
                            <Image className="p-4" src={img2} alt="My Responsive Image"
                                layout="responsive"
                                width={1}
                                height={1} />
                            <div className="">
                                <p className="mt-4 text-6xl font-bold text-black">2 +</p>
                                <ul className="flex flex-col  ">
                                    <li className="p-4 font-medium text-white lg:text-xl">Years of Experience</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 hover:bg-blue-600 rounded-md">
                            <Image className="p-4" src={img3} alt="My Responsive Image"
                                layout="responsive"
                                width={1}
                                height={1} />
                            <div className="">
                                <p className="mt-4 text-6xl font-bold text-black">500 +</p>
                                <ul className="flex flex-col  ">
                                    <li className="p-4 font-medium text-white lg:text-xl">Happy Clients</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 hover:bg-blue-600 rounded-md">
                            <Image className="p-4" src={img4} alt="My Responsive Image"
                                layout="responsive"
                                width={1}
                                height={1} />
                            <div className="">
                                <p className="mt-4 text-6xl font-bold text-black">50 +</p>
                                <ul className="flex flex-col  ">
                                    <li className="p-4 font-medium text-white lg:text-xl">Project Completed</li>
                                </ul>
                            </div>
                        </div>




                    </div>

                </div>
            </section>

        </div>
    );
};

export default State;