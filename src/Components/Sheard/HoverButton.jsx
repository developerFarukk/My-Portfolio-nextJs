import { HoverBorderGradient } from "../ui/hover-border-gradient";
import download from "../../../public/download.png"
import Image from "next/image";



const HoverButton = () => {
    return (
        <div>
            <div className=" flex justify-center text-center">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className=" text-black dark:text-white flex items-center"
                >
                    <div className="">
                        <Image src={download} alt="download" height={25} className="">
                        </Image>
                    </div>
                    <span className="ml-2 pacifico-regular text-[17px]">Download Resume</span>
                </HoverBorderGradient>
            </div>
        </div>
    );
};


export default HoverButton;