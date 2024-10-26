'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { BsFillQuestionDiamondFill } from "react-icons/bs";



const According = () => {

    const accordings = [
        {
            title: <div className=" border-none flex items-center justify-center gap-3"> <span><BsFillQuestionDiamondFill className="h-6 w-6" /></span> How do you approach a new project to ensure it meets both client and user expectations?</div>,
            id: 1,
            ariaLable: <div className="border-none"> According 1</div>,
            Answer: <div className="text-start ml-4"><h2> <span className="text-sky-300 font-semibold"> Answer :</span> I begin by thoroughly understanding the client’s goals and the target audience’s needs. I prioritize creating a responsive and accessible design, focusing on usability, functionality, and aesthetics. Leveraging tools like Figma for prototyping, I map out a user-friendly design that aligns with the client’s brand and requirements. This way, I ensure the project serves both the client’s goals and user expectations.</h2></div>
        },
        {
            title: <div className=" border-none flex items-center justify-center gap-3"> <span><BsFillQuestionDiamondFill className="h-6 w-6" /></span> How does your background in mathematics contribute to your approach to web development?</div>,
            id: 2,
            ariaLable: <div className="border-none"> According 2</div>,
            Answer: <div className="text-start ml-4"><h2> <span className="text-sky-300 font-semibold"> Answer :</span> My background in mathematics enhances my problem-solving skills, enabling me to approach complex coding tasks with analytical precision. It aids in structuring efficient algorithms and understanding backend logic, especially in databases like MySQL and PostgreSQL. This knowledge is also valuable in optimizing code for performance and scalability.</h2></div>
        },
        {
            title: <div className=" border-none flex items-center justify-center gap-3"> <span><BsFillQuestionDiamondFill className="h-6 w-6" /></span> How do you ensure a seamless and high-performance user experience in your web applications?</div>,
            id: 3,
            ariaLable: <div className="border-none"> According 3</div>,
            Answer: <div className="text-start ml-4"><h2> <span className="text-sky-300 font-semibold"> Answer :</span> I implement code-splitting in Next.js, optimize images, and use lazy loading to enhance performance. On the server side, I manage data fetching effectively, and on the client side, I use React Query for state management, reducing unnecessary re-renders. By focusing on performance from both server and client perspectives, I deliver a fast, seamless user experience.</h2></div>
        },
        {
            title: <div className=" border-none flex items-center justify-center gap-3"> <span><BsFillQuestionDiamondFill className="h-6 w-6" /></span> How do you stay updated with the latest trends and best practices in web development?</div>,
            id: 4,
            ariaLable: <div className="border-none"> According 4</div>,
            Answer: <div className="text-start ml-4"><h2> <span className="text-sky-300 font-semibold"> Answer :</span> I stay current by following tech blogs, attending online workshops, and participating in developer communities. I actively learn and integrate new tools and frameworks where relevant. For example, keeping up with updates in Next.js, Tailwind CSS, and React ensures my projects are modern, optimized, and aligned with industry standards.</h2></div>
        },
        {
            title: <div className=" border-none flex items-center justify-center gap-3"> <span><BsFillQuestionDiamondFill className="h-6 w-6" /></span> What is your process for managing the frontend and backend integration in full-stack applications?</div>,
            id: 5,
            ariaLable: <div className="border-none"> According 5</div>,
            Answer: <div className="text-start ml-4"><h2> <span className="text-sky-300 font-semibold"> Answer :</span> I maintain a clear separation between frontend and backend concerns, ensuring secure and efficient API communication using RESTful principles and sometimes GraphQL. For frontend state management, I use Redux or React Query, making data flow seamless. In the backend, I prioritize clean and scalable code in Node.js and Express. This structure allows easy maintenance and scalability.</h2></div>
        },

    ]

    return (
        <div>

            <div>
                <div className="text-start p-1">
                    <span className="relative inline-block text-xl font-bold  text-orange-700 ">
                        <span className="absolute inline-block w-full h-[1px] bg-white bottom-1 "></span>
                        <span className="relative jersey-20-charted-regular "> Your common questions abut me</span>
                    </span>
                    <span className="font-bold text-xl text-slate-100"> : </span>
                </div>
            </div>

            <Accordion variant="splitted" className="border-none text-start  ">

                {
                    accordings.map((accor) => (

                        <AccordionItem key={accor.id} aria-label={accor.ariaLable} title={accor.title} className="text-sky-300 font-semibold text-lg border border-none bg-gradient-to-r from-slate-800 to-[#000428] rounded-xl">
                            <span className="text-sky-400  text-md "> {accor.Answer}</span>
                        </AccordionItem>
                    ))
                }

            </Accordion>
            <p>jcjcjc</p>

        </div>
    );
};

export default According;