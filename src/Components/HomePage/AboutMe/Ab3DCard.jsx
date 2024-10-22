"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";




const Ab3DCard = () => {
    return (
        <div>
            <CardContainer className="inter-var">
                <CardBody className="bg-green-950 hover:bg-sky-950 relative group/card   w-auto sm:w-[30rem] h-auto rounded-xl p-4   hover:border-none">
                    
                    <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className=" "
                    >
                        <Image
                            src="https://i.ibb.co.com/bb4vhXV/My-About-Img.png"
                            height="500"
                            width="300"
                            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl mx-auto"
                            alt="thumbnail"
                        />
                    </CardItem>
                    
                </CardBody>
            </CardContainer>
        </div>
    );
};

export default Ab3DCard;