import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/service/blogService";


const Blogs = async () => {

    const blogData = await getAllBlogs();

    const allblogData = blogData?.data

    // console.log("blog", allblogData);


    return (
        <div>
            <div className="mt-1">

                {/*Project Title Button */}
                <div>
                    <MobingBorderButton title="My Blogs" />
                </div>

                {/* pBlog Card */}
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center lg:p-6 p-2 mt-4">
                        {
                            allblogData?.length > 0 ? (
                                allblogData?.map(blog => (
                                    <div key={blog?._id}>
                                        <BlogCard blogs={blog} />
                                    </div>
                                ))
                            ) : (
                                <div>
                                    No Blog data Implement
                                </div>
                            )
                        }
                        {/* <BlogCard /> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;