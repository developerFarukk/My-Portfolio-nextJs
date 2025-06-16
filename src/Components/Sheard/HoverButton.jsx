'use client'

import { HoverBorderGradient } from "../ui/hover-border-gradient";
import download from "../../../public/download.gif"
import Image from "next/image";



const HoverButton = () => {

    const handleDownload = () => {

        const fileUrl = "/resume.pdf";
        const fileName = "resume";


        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();


        document.body.removeChild(link);
    };

    return (
        <div>
            <div className=" flex justify-center text-center">
                <HoverBorderGradient
                    containerClassName=""
                    as="button"
                    className=" text-white flex items-center"
                    onClick={handleDownload}
                >
                    <div className="">
                        <Image src={download} alt="download" height={30} className="">
                        </Image>
                    </div>
                    <span className="ml-2 pacifico-regular text-[16px]">Download Resume</span>
                </HoverBorderGradient>
            </div>
        </div>
    );
};


export default HoverButton;