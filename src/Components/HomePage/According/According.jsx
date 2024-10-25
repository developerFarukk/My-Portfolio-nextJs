'use client'


import { Accordion, AccordionItem } from "@nextui-org/react";


const According = () => {

    const accordings = [
        {
            title: 'According 1',
            id: 1,
            ariaLable: 'According 1',
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
            <Accordion variant="splitted">

                {
                    accordings.map((accor) => (
                        
                        <AccordionItem key={accor.id} aria-label={accor.ariaLable} title={accor.title} className="text-blue-100 bg-sky-950">
                            {accor.Answer}
                        </AccordionItem>
                    ))
                }

            </Accordion>
        </div>
    );
};

export default According;