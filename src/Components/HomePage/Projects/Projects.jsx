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


        </div>
    );
};

export default Projects;