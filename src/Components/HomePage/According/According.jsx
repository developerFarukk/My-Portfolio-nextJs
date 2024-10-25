'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";



const According = () => {

    const accordings = [
        {
            title: <div className=""> According 1</div>,
            id: 1,
            ariaLable: <div className="border-none"> According 1</div>,
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: 'According 2',
            id: 2,
            ariaLable: 'According 2',
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: 'According 3',
            id: 3,
            ariaLable: 'According 3',
            Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]

    return (
        <div>
            <div>
                <div className="text-start">
                    <span className="relative inline-block text-xl font-bold  text-orange-700 ">
                        <span className="absolute inline-block w-full h-[1px] bg-white bottom-1 "></span>
                        <span className="relative jersey-20-charted-regular "> Qustion</span>
                    </span>
                    <span className="font-bold text-xl text-slate-100"> : </span>
                </div>
            </div>
            <Accordion variant="splitted" className="border-none  rounded-xl">

                {
                    accordings.map((accor) => (

                        <AccordionItem key={accor.id} aria-label={accor.ariaLable} title={accor.title} className="text-sky-300 font-semibold text-lg ">
                            <span className="text-sky-600 text-start text-md"> {accor.Answer}</span>
                        </AccordionItem>
                    ))
                }

            </Accordion>
        </div>
    );
};

export default According;