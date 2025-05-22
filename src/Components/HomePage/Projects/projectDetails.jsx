// "use client"

import Image from "next/image";
import Link from "next/link";


const ProjectDetails = (projects) => {

    const project = projects?.projects?.data
    // console.log(project);

    return (
        <div className="pt-24">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                {/* Header with Image */}
                <div className="relative h-96 w-full">
                    <div className="">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-auto h-auto"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h1 className="text-3xl font-bold text-white text-start">{project.title}</h1>
                        <p className="text-indigo-200 mt-1 text-start">{project.descriptions}</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    {/* Tech Stack */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-start">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className=" text-indigo-800 dark:text-indigo-100 rounded-full text-sm font-medium"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-start">Features</h2>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            {project.features[0].split(',').map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            className="flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </Link>

                        <Link
                            href={project.githubClient}
                            target="_blank"
                            className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Client Code
                        </Link>
                    </div>

                    {/* Video Demo Link */}
                    {project.videoDemo && (
                        <div className="mt-6 flex gap-4 justify-between">
                            <div className="flex gap-4">
                                <Link
                                    href={project.githubClient}
                                    target="_blank"
                                    className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    server Code
                                </Link>
                                <Link
                                    href={project.videoDemo}
                                    target="_blank"
                                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Watch Video Demo
                                </Link>
                            </div>
                            <div>
                                <button className="btn btn-primary">
                                    <Link href="/" >
                                        Back to Home
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;