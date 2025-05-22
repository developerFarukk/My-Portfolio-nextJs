"use server"

import app_axios from "@/lib/axios";


export const getAllProject = async () => {
    try {
        const res = await app_axios.get(`/projects`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting Projects";
        return new Error(message);
    }
};




export const getSingleProject = async (id) => {
    try {
        const res = await app_axios.get(`/projects/${id}`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting a project!";
        return new Error(message);
    }
};