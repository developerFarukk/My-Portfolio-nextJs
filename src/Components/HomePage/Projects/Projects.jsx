import Image from "next/image";
import medicare from "../../../../public/MediCare/Medicare-home.jpeg"
import properit from "../../../../public/ProperIt/Properit.png"
import Art from "../../../../public/ArtAndCraft/Art.png"
import Link from "next/link";
import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import ProjectsCard from "./ProjectCard/ProjectsCard";
// import ProjectsGalary from "./ProjectCard/ProjectsGalary/ProjectsGalary";


const Projects = () => {
    return (
        <div className="mt-1">

            {/*Project Title Button */}
            <div>
                <MobingBorderButton title="My Projects" />
            </div>

            {/* Project Card */}
            <div >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center lg:p-2 p-4 mt-4">
                    <div><ProjectsCard></ProjectsCard></div>
                    <div><ProjectsCard></ProjectsCard></div>
                    <div><ProjectsCard></ProjectsCard></div>
                    <div><ProjectsCard></ProjectsCard></div>
                </div>
            </div>

            {/* <ProjectsGalary></ProjectsGalary> */}

            <div className="p-4 gap-4 justify-center items-center text-center mt-6 grid lg:grid-cols-3 md:grid-cols-2">

                {/* MediCare */}
                <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 h-max w-96 rounded-2xl">
                    <article className="overflow-hidden rounded-2xl">
                        <Image
                            src={medicare}
                            className="h-56 w-full object-cover"
                            alt="My Responsive Image"
                            layout="responsive"
                            width={300}
                            height={300}
                        />

                        <div className="text-gray-950 p-4 sm:p-6 text-start">
                            <Link href="https://medicare-2059.web.app" target="blank">
                                <h3 className="mt-0.5 text-lg">
                                    Project Name : <span className="text-yellow-100 hover:text-yellow-500">MediCare</span>
                                </h3>
                            </Link>
                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Link :
                                <Link href="https://github.com/FARUK2059/mediCare-Client" target="blank" className="text-yellow-100 hover:text-yellow-500 p-1 ">
                                    GitHub Client
                                </Link>
                            </p>

                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Description : <br />
                                <span className="text-fuchsia-100">
                                    MediCare offers secure user authentication, detailed medicine browsing, easy cart management, and a seamless checkout process. Users can track orders, manage profiles, and receive email notifications. Admins benefit from a comprehensive dashboard with sales analytics and data export features.
                                </span>
                            </p>
                            <div>
                                <h3 className="mt-0.5 text-lg">Features :</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    <ul className="list-disc list-inside">
                                        <li>User Authentication: Secure login and registration using Firebase.</li>
                                        <li>Checkout Process: Secure payments via Stripe.</li>
                                        <li>Order Tracking: Real-time order updates.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="mt-0.5 text-lg">Technologies Used:</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    React, Tailwind CSS, Firebase, Stripe, Axios, React Query, DaisyUI, SweetAlert2, React Hook Form, React Table
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* ProperIt */}
                <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 h-max w-96 rounded-2xl">
                    <article className="overflow-hidden rounded-2xl">
                        <Image
                            src={properit}
                            className="h-56 w-full object-cover"
                            alt="My Responsive Image"
                            layout="responsive"
                            width={300}
                            height={300}
                        />

                        <div className="text-gray-950 p-4 sm:p-6 text-start">
                            <Link href="https://proper-it-55963.web.app/" target="blank">
                                <h3 className="mt-0.5 text-lg">
                                    Project Name : <span className="text-yellow-100 hover:text-yellow-500">ProperIT</span>
                                </h3>
                            </Link>
                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Link :
                                <Link href="https://github.com/FARUK2059/properIT-Client-2059" target="blank" className="text-yellow-100 hover:text-yellow-500 p-1 ">
                                    GitHub Client
                                </Link>
                            </p>

                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Description : <br />
                                <span className="text-fuchsia-100">
                                    Query base Web - Welcome to the Product Query Website! This website helps users make informed purchasing decisions with comprehensive product reviews and recommendations.
                                </span>
                            </p>
                            <div>
                                <h3 className="mt-0.5 text-lg">Features :</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    <ul className="list-disc list-inside">
                                        <li>Comprehensive Product Reviews: Extensive database of product reviews across categories.</li>
                                        <li>User Authentication: Secure login and registration with exclusive features.</li>
                                        <li>Intuitive Navigation: User-friendly navbar and footer for easy navigation..</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="mt-0.5 text-lg">Technologies Used:</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    dotenv, firebase, flowbite, flowbite-react, localforage, match-sorter, moment, react, react-dom, react-helmet, react-icons, react-router-dom, react-toastify, react-tooltip, sort-by, sweetalert2
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Art And Craft */}
                <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 h-max w-96 rounded-2xl">
                    <article className="overflow-hidden rounded-2xl">
                        <Image
                            src={Art}
                            className="h-56 w-full object-cover"
                            alt="My Responsive Image"
                            layout="responsive"
                            width={300}
                            height={300}
                        />

                        <div className="text-gray-950 p-4 sm:p-6 text-start">
                            <Link href="https://art-and-craft-store-7c527.web.app" target="blank">
                                <h3 className="mt-0.5 text-lg">
                                    Project Name : <span className="text-yellow-100 hover:text-yellow-500">CraftXtor</span>
                                </h3>
                            </Link>
                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Link :
                                <Link href="https://github.com/FARUK2059/Art-and-Craft-Client" target="blank" className="text-yellow-100 hover:text-yellow-500 p-1 ">
                                    GitHub Client
                                </Link>
                            </p>

                            <p className="mt-2 line-clamp-4 text-sm/relaxed">
                                Description : <br />
                                <span className="text-fuchsia-100">
                                    Explore over 6 subcategories of stunning handcrafted items in the Art & Craft Categories Section. Enjoy a personalized experience with features to manage your craft list, including add, update, and delete options. Our responsive design ensures seamless browsing across all devices.
                                </span>
                            </p>
                            <div>
                                <h3 className="mt-0.5 text-lg">Features :</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    <ul className="list-disc list-inside">
                                        <li>User Authentication: Secure login/register for exclusive features.</li>
                                        <li>Artisan Showcase: Discover unique artisanal creations.</li>
                                        <li>Theme Toggle: Dark/light theme toggle for enhanced readability.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="mt-0.5 text-lg">Technologies Used:</h3>
                                <div className="text-fuchsia-100 text-sm">
                                    animate.css, AOS, dotenv, firebase, localforage, lottie-react, match-sorter, react, react-dom, react-helmet, react-icons, react-router-dom, react-toastify, react-tooltip, sort-by, sweetalert2, react-simple-typewriter, swiper
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </div>

        </div>
    );
};

export default Projects;