
"use server"

import app_axios from "@/lib/axios";


export const getAllBlogs = async () => {
    try {
        const res = await app_axios.get(`/blogs`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting blogs";
        return new Error(message);
    }
};



export const getSingleBlog = async (id) => {
    try {
        const res = await app_axios.get(`/blogs/${id}`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message ||
            "Something went wrong while getting a Blog!";
        return new Error(message);
    }
};