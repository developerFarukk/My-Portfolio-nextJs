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