

"use client";

import Image from "next/image";
import medicare from "../../../../../../public/MediCare/Medicare-home.jpeg";
import { Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";
import { motion } from "framer-motion";
import { CardItem } from "@/components/ui/3d-card";
import { useState } from "react";
import ProjectsGalary from "./ProjectsGalary";
import PreviewButton from "../PreviewButton";
import Link from "next/link";

const ProjectGalarySlide = (project) => {
    // const [isOpen, setIsOpen] = useState(false);

    const pro = project?.project

    // console.log(pro);
    


    // Animation Variants
    // const dialogVariants = {
    //     hidden: { opacity: 0, scale: 0.9 },
    //     visible: { opacity: 1, scale: 1 },
    //     exit: { opacity: 0, scale: 0.9 },
    // };

    return (
        <>
            {/* Image Card */}
            <Link href={`/project/${pro?._id}`}>
                <CardItem
                    translateZ="100"
                    className="w-auto mt-2 relative group"
                    // onClick={() => setIsOpen(true)}
                >
                    <Image
                        src={pro?.image}
                        height="1000"
                        width="1000"
                        className="h-72 flex justify-start items-start object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PreviewButton title="See Details..."></PreviewButton>
                    </div>


                </CardItem>
            </Link>


        </>
    );
};

export default ProjectGalarySlide;

// hjdfg

{/* Dialog */ }
// {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//     {/* Background Overlay */}
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"></div>

//     {/* Animated Dialog Panel */}
//     <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//         <motion.div
//             variants={dialogVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//             <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-lg shadow-lg">
//                 <DialogTitle className="font-bold text-lg">Deactivate Account</DialogTitle>


//                 <ProjectsGalary></ProjectsGalary>


//                 <Description className="text-gray-600">
//                     This will permanently deactivate your account.
//                 </Description>
//                 <p className="text-gray-700">
//                     Are you sure you want to deactivate your account? All of your data will be permanently removed.
//                 </p>
//                 <div className="flex gap-4">
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
//                     >
//                         Deactivate
//                     </button>
//                 </div>
//             </DialogPanel>
//         </motion.div>
//     </div>
// </Dialog> */}