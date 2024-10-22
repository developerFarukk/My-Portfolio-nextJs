


import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import Image from "next/image";


const About = () => {
    return (
        <div>

            <section className="mt-6">
                <div className="w-[90%] px-4 mx-auto sm:px-6 lg:px-8 container border-yellow-600 border-2 shadow-lg rounded-lg">

                    {/* About Button */}
                    <div>
                        <MobingBorderButton />
                    </div>

                    <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center ">
                        <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
                            Experienced Full-Stack
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                                <span className="relative"> Web Developer</span>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <Image className="w-full mx-auto sm:max-w-xs" width={300} height={300} src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold ">Hey! I am OMAR FARUK,</h3>
                            <p className="mt-4 text-lg">I work as a professional in the web development sector, creating full-featured websites. With years of hands-on experience, I am committed to modernizing and improving user experiences through friendly, efficient, and contemporary designs.</p>


                            <p className="mt-4 text-lg">I am an experienced web developer with years of hands-on expertise, currently pursuing a BSc in Mathematics. I have a strong foundation in both front-end and back-end technologies, enabling me to design, build, and maintain robust web applications. My skill set spans a wide range of technologies, including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Node.js, MongoDB, Express.js, React, Redux, and Next.js, as well as proficiency in databases such as MySQL, PostgreSQL, and GraphQL.</p>

                            <h3 className="mt-8 text-lg font-semibold ">How do I do this without any investment?</h3>
                            <p className="mt-4 text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default About;