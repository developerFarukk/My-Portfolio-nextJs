import Image from "next/image";
import img1 from "../../../../public/My Img.png"



const MyAchivment = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl lg:leading-tight">My 
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full h-1 bg-yellow-300 bottom-1"></span>
                                <span className="relative ml-3">web development  </span>
                            </span>
                           <span className="ml-3"> activities</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <Image className=" mx-auto rounded-full  sm:max-w-xs" src={img1}  alt="" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-green-100">Hey! I am OMAR FARUK, Work as a MERN Web Developer in Bangladesh</h3>
                            <p className="mt-4 text-lg ">Since beginning my journey as a freelance MERN web developer nearly 3 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</p>
                            <p className="mt-4 text-lg ">As a MERN web developer, I work closely with clients to understand their needs and goals for their software or website.</p>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyAchivment;