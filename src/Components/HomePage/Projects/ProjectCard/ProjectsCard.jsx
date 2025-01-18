
"use client";

import Image from "next/image";
import medicare from "../../../../../public/MediCare/Medicare-home.jpeg"
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import ProjectsGalary from "./ProjectsGalary/ProjectsGalary";


const ProjectsCard = () => {
    return (
        <div>
            <CardContainer className="inter-var group">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border shadow-[0px_0px_30px_1px_rgba(204,0,255,0.3)]  group-hover:shadow-[0px_0px_30px_1px_rgba(60,88,255,0.8)] hover:border-yellow-800 transition-all duration-3000">

                    {/* Title */}
                    <CardItem
                        translateZ="50"
                        className="text-rgb text-2xl font-bold "
                    >
                        MediCare
                    </CardItem>

                    {/* Title Description */}
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="justify-start items-center flex text-base max-w-sm mb-4 text-fuchsia-600 font-medium"
                    >
                        As a Multivandor Website
                    </CardItem>

                    {/* Project Image */}
                    <CardItem translateZ="100" className="w-full mt-2">
                        <Image
                            src={medicare}
                            height="1000"
                            width="1000"
                            className="max-h-72 flex justify-start items-start object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>

                    <div className="flex justify-between items-center mt-6">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="http://localhost:3000"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
};

export default ProjectsCard;