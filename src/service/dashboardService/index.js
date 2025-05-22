

"use server"

import app_axios from "@/lib/axios";


export const getAllDashboardData = async () => {
    try {
        const res = await app_axios.get(`/dashboard`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting dashboard";
        return new Error(message);
    }
};