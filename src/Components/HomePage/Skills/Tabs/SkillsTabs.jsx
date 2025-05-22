

"use client"

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AllSkills from "../Slide/AllSkills";
import FrontEndSkills from "../Slide/FrontEndSkills";
import BackendSkills from "../Slide/BackendSkills";
import UiSkills from "../Slide/UiSkills";

const SkillsTabs = (skillData) => {
    const data = [
        {
            label: "All",
            value: "All",
            desc: <FrontEndSkills />
        },
        {
            label: "Technical",
            value: "Technical",
            desc: <AllSkills datas={skillData} />,
        },
        {
            label: "Soft",
            value: "Soft",
            desc: <BackendSkills />
        },
        {
            label: "Front-end",
            value: "Front-end",
            desc: <FrontEndSkills />,
        },
        {
            label: "Backend",
            value: "Backend",
            desc: <BackendSkills />,
        },
        {
            label: "UI Tools",
            value: "UI Tools",
            desc: <UiSkills />
        },
    ];

    return (
        <div className="p-1">
            <Tabs value="All">
                <div className="lg:ml-36 lg:mr-36 md:ml-16 md:mr-16">
                    <TabsHeader
                        className="bg-transparent text-white bg-gradient-to-r from-slate-600 to-[#000428] p-2"
                        indicatorProps={{
                            className: "cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group items-center text-center justify-center flex",
                        }}
                    >
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:flex gap-2 w-full">
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    className="flex-1 min-w-[100px] text-sm sm:text-base"
                                >
                                    {label}
                                </Tab>
                            ))}
                        </div>
                    </TabsHeader>
                </div>

                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default SkillsTabs;