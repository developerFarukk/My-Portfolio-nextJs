"use client"

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import bg1 from "../../../../public/My Pic.png";



const BannerLamp = () => {
    return (
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="   bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    {/* <div className="lg:mt-48">
                        <BackgroundLines className=" ">
                            <Image className="relative  xl:max-w-lg  xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={bg1} alt="My Responsive Image"
                                layout="responsive"

                            // width={500}
                            // height={300}
                            />
                        </BackgroundLines>
                    </div> */}
                </motion.h1>
            </LampContainer>
        </div>
    );
};

export default BannerLamp;


