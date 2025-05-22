"use client"
import Image from "next/image";
import Link from "next/link";



const BlogDetails = (blo) => {
    const blogs = blo?.blo?.data
    // console.log(blogs);

    return (
        <div className="p-8 pt-24">
            <article
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
            >
                <div className="flex justify-center items-center text-center">
                    <Image
                        alt={blogs?.image}
                        className=" p-2"
                        // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        src={blogs?.image}
                        height={1000}
                        width={1000}
                    />
                </div>

                <div className="p-4 sm:p-6">
                    <div >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {blogs?.title}
                        </h3>
                    </div>
                    <div>
                        <p
                            className="text-slate-400 text-start "
                            dangerouslySetInnerHTML={{ __html: blogs?.content || '' }}
                        />
                    </div>
                    <div className="p-4 mt-2">
                        <button className="btn btn-primary">
                            <Link href="/">Back to Home</Link>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogDetails;