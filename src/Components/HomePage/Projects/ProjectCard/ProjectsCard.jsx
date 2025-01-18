
"use client";

import Image from "next/image";
import medicare from "../../../../../public/MediCare/Medicare-home.jpeg"
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectGalarySlide from "./ProjectsGalary/ProjectGalarySlide";
import PreviewButton from "./PreviewButton";
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
                        className="justify-start items-center flex text-base max-w-sm mb-4 text-fuchsia-500 font-medium"
                    >
                        As a Multivandor Website
                    </CardItem>

                    {/* Project Image */}
                    <div>
                        <ProjectGalarySlide></ProjectGalarySlide>
                    </div>

                    <div className="flex justify-center items-center mt-6 gap-2">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://medicare-2059.web.app"
                            target="__blank"
                            className=""
                        >
                            <PreviewButton title="Live Preview"></PreviewButton>
                        </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://github.com/developerfarukk/mediCare-Client"
                                target="__blank"
                                className=""
                            >
                                <PreviewButton title="GitHub Client"></PreviewButton>
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://github.com/developerfarukk/mediCare-Server"
                                target="__blank"
                                className=""
                            >
                                <PreviewButton title="GitHub Server"></PreviewButton>
                            </CardItem>
                    </div>
                    
                </CardBody>
            </CardContainer>
        </div>
    );
};

export default ProjectsCard;