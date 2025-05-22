// "use client"

// import Image from "next/image";
// import img1 from "../../../../public/My Img.png"
// import MobingBorderButton from "@/components/Sheard/MobingBorderButton";



// const MyAchivment = () => {
//     return (
//         <div>
//             <section className="py-10 sm:py-16 lg:py-24">
//                 <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">

//                     {/* <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
//                         <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl lg:leading-tight">My
//                             <span className="relative inline-block">
//                                 <span className="absolute inline-block w-full h-1 bg-yellow-300 bottom-1"></span>
//                                 <span className="relative ml-3">web development  </span>
//                             </span>
//                             <span className="ml-3"> activities</span>
//                         </h2>
//                     </div> */}

//                     {/*Project Title Button */}
//                     <div>
//                         <MobingBorderButton title="My Activities" />
//                     </div>

//                     <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10 text-white">
//                         <div>
//                             <Image className=" mx-auto rounded-full  sm:max-w-xs" src={img1} alt="" />
//                         </div>

//                         <div>
//                             <h3 className="text-lg font-semibold text-yellow-200">Hey! I am OMAR FARUK, Work as a MERN Web Developer in Bangladesh</h3>
//                             <p className="mt-4 text-lg ">Since beginning my journey as a freelance MERN web developer nearly 3 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</p>
//                             <p className="mt-4 text-lg ">As a MERN web developer, I work closely with clients to understand their needs and goals for their software or website.</p>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default MyAchivment;



"use client"

import Image from "next/image";
import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import { motion } from "framer-motion";

const MyAchivment = () => {
    const skills = [
        { name: "React.js", color: "purple" },
        { name: "Node.js", color: "blue" },
        { name: "MongoDB", color: "green" },
        { name: "Next.js", color: "gray" },
        { name: "Express", color: "yellow" },
        { name: "PostgreSQL", color: "indigo" },
        { name: "TypeScript", color: "blue" },
        { name: "Tailwind CSS", color: "cyan" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=""
        >
            <section className="py-12 sm:py-20 lg:py-28">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    {/* Title Button with Animation */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-12 sm:mb-20"
                    >
                        <MobingBorderButton title="My Activities" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20"
                    >
                        {/* Image with Enhanced Glow Effect */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center items-center"
                        >
                            <motion.div
                                className="relative  overflow-hidden border-2 border-purple-500/30 shadow-2xl"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute inset-0  bg-gradient-to-br from-purple-600/20 to-blue-500/20 blur-xl animate-pulse"></div>
                                <Image
                                    className="relative z-10 object-cover "
                                    src="https://img.freepik.com/free-vector/coding_53876-25854.jpg?ga=GA1.1.1943003916.1738404104&semt=ais_hybrid&w=740"
                                    alt="Omar Faruk"
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                />
                                <div className="absolute inset-0 rounded-full border border-white/10 z-20"></div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ opacity: 0.2 }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col justify-center"
                        >
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl font-bold "
                            >
                                Hey! I am OMAR FARUK, Full Stack Developer
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                className="mt-6 space-y-6"
                            >
                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                                >
                                    Since beginning my journey as a freelance MERN developer nearly 3 years ago,
                                    I've created digital products for businesses and consumers, collaborating
                                    with talented professionals worldwide.
                                </motion.p>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                                >
                                    I specialize in transforming ideas into robust web applications, focusing
                                    on performance, accessibility, and user experience.
                                </motion.p>

                                <motion.div
                                    variants={itemVariants}
                                    className="pt-4"
                                >
                                    <div className="w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0"></div>
                                </motion.div>

                                <motion.div
                                    variants={containerVariants}
                                    className="flex flex-wrap gap-3 pt-2"
                                >
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-4 py-2 text-sm font-medium rounded-full bg-gray-800/80 border ${skill.color === "purple" ? "text-purple-300 border-purple-500/30" :
                                                skill.color === "blue" ? "text-blue-300 border-blue-500/30" :
                                                    skill.color === "green" ? "text-green-300 border-green-500/30" :
                                                        skill.color === "yellow" ? "text-yellow-300 border-yellow-500/30" :
                                                            skill.color === "indigo" ? "text-indigo-300 border-indigo-500/30" :
                                                                skill.color === "cyan" ? "text-cyan-300 border-cyan-500/30" :
                                                                    "text-gray-300 border-gray-500/30"
                                                }`}
                                        >
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default MyAchivment;