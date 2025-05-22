

"use client";

import { getAllDashboardData } from "@/service/dashboardService";
import { useState, useEffect } from "react";

const State = () => {
    const [dashboardData, setDashboardData] = useState({
        totalBlog: 0,
        totalProjects: 0,
        totalSkills: 0,
        totalTachnicalSkills: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allDashboard = await getAllDashboardData();
                const dashboards = allDashboard?.data;

                setDashboardData({
                    totalBlog: dashboards?.totalBlog || 0,
                    totalProjects: dashboards?.totalProjects || 0,
                    totalSkills: dashboards?.totalSkills || 0,
                    totalTachnicalSkills: dashboards?.totalTacknicalSkills || 0
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchData();
    }, []);

    const stats = [
        {
            value: dashboardData.totalBlog,
            id: 1,
            description: "Total Blogs",
        },
        {
            value: dashboardData.totalProjects,
            id: 2,
            description: "Total Projects",
        },
        {
            value: dashboardData.totalSkills,
            id: 3,
            description: "Total Skills",
        },
        {
            value: dashboardData.totalTachnicalSkills,
            id: 4,
            description: "Total Technical Skills",
        },
    ];

    return (
        <div>
            <section>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <div className="cards__inner">
                                    <div className="cards__card card bg-gradient-to-r from-slate-600 to-[#000428] rounded-xl p-1 grid grid-rows-[auto_auto_auto_1fr] hover:text-white transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(0,8,20,0.6)] hover:bg-gradient-to-r hover:from-slate-700 hover:to-[#000a38]">
                                        <div className="flex justify-center items-center">
                                            <div className="hover:-translate-y-1 group duration-500 w-36 h-36 flex text-neutral-200 flex-col justify-center items-center relative rounded-xl overflow-hidden">
                                                <svg
                                                    viewBox="0 0 200 200"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="absolute blur z-10 fill-slate-500/30 duration-500 group-hover:blur-none group-hover:scale-105"
                                                >
                                                    <path
                                                        transform="translate(100 100)"
                                                        d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                                                    ></path>
                                                </svg>

                                                <div className="z-20 flex flex-col justify-center items-center">
                                                    <span className="font-bold text-6xl ml-2 text-white">{stat.value}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-bold mb-2 text-xl text-white/90">{stat.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default State;