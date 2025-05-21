"use client"

import ContentPriview from "./contentPriview";

const BlogCard = (blogs) => {
    const blo = blogs?.blogs
    // console.log(blo);

    return (
        <div>
            <div className="group relative w-[380px] hover:border-2 border-yellow-900 rounded-2xl">
                <div
                    className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10"
                >
                    <div
                        className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"
                    ></div>
                    <div
                        className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"
                    ></div>

                    <div className="relative p-6">
                        <div className="absolute right-6 top-6">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-12 w-12 text-indigo-500/10"
                            >
                                <path
                                    d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9c0-1.657 1.343-3 3-3s3.215.186 3.247.679zm5.498 0C20.945 7.773 21.5 9 21.5 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C15.091 12.322 13.67 10.841 13.67 9c0-1.657 1.343-3 3-3s3.215.186 3.245.679z"
                                ></path>
                            </svg>
                        </div>



                        <div className="mt-4 space-y-2">
                            <h3 className="text-xl font-semibold text-white">
                                {blo?.title}
                            </h3>
                            {/* <p className="text-slate-400 text-start">
                                {blo?.content}
                            </p> */}
                            {/* <p
                                className="text-slate-400 text-start"
                                dangerouslySetInnerHTML={{ __html: blo?.content || '' }}
                            /> */}
                            <div>
                                <ContentPriview content={blo} />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <div className="group/avatar relative">
                                <div
                                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur transition-all duration-300 group-hover/avatar:opacity-100"
                                ></div>
                                <div
                                    className="relative h-12 w-12 rounded-full bg-slate-950 ring-2 ring-slate-950"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="h-12 w-12 text-indigo-500"
                                    >
                                        <path
                                            d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">OMAR FARUK</h4>
                                <p className="text-sm text-slate-400">Full-Stack Developer</p>
                            </div>

                            <div className="ml-auto">
                                <div
                                    className="flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1"
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-8 w-8 text-indigo-500"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="text-md font-medium text-indigo-500">View</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <button
                                    className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white flex gap-2"
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                    <span className="text-sm font-medium text-white">50</span>
                                </button>
                                <button
                                    className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white flex gap-2"
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                    <span className="text-sm font-medium text-white">20</span>
                                </button>
                                <button
                                    className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white flex gap-2"
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                    <span className="text-sm font-medium text-white">10</span>
                                </button>
                            </div>
                            <span className="text-sm text-slate-400">Posted 2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;