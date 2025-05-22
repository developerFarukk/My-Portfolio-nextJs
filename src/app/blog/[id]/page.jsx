
import BlogDetails from "@/components/HomePage/Blogs/BlogDetails";
import { getSingleBlog } from "@/service/blogService";



const BlogDetailsServer = async ({ params }) => {

    const { id } = params;
    const blog = await getSingleBlog(id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    // console.log(blog);

    return (
        <div className="min-h-screen">
            <BlogDetails blo={blog} />
        </div>
    );
};

export default BlogDetailsServer;