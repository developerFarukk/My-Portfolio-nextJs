import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import BlogCard from "./BlogCard";


const Blogs = () => {
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
                        <BlogCard />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;