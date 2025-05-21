"use server"

import app_axios from "@/lib/axios";

// get all skils
// export const getAllSkills = async () => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills}`, {
//             next: {
//                 tags: ["Skills"],
//                 revalidate: 10,
//             },
//         });
//         const data = await res.json();
//         console.log(data);

//         return data;
//     } catch (error) {
//         return Error(error.message);
//     }
// };



export const getAllSkills = async () => {
    try {
        const res = await app_axios.get(`/skills`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting skills";
        return new Error(message);
    }
};