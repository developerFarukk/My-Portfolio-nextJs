
import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import ProjectsCard from "./ProjectCard/ProjectsCard";
import { getAllProject } from "@/service/projectService";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectGalarySlide from "./ProjectCard/ProjectsGalary/ProjectGalarySlide";
import PreviewButton from "./ProjectCard/PreviewButton";



const Projects = async () => {

    const projectData = await getAllProject();

    const allData = projectData?.data;

    console.log("skills data", allData);

    return (
        <div className="mt-1">

            {/*Project Title Button */}
            <div>
                <MobingBorderButton title="My Projects" />
            </div>

            {/* Project Card */}
            <div >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center lg:p-2 p-4 mt-4">

                    {
                        allData?.length > 0 ? (
                            allData.map(pro => (
                                <div key={pro._id}>
                                    <CardContainer className="inter-var group">
                                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border shadow-[0px_0px_30px_1px_rgba(204,0,255,0.3)]  group-hover:shadow-[0px_0px_30px_1px_rgba(60,88,255,0.8)] hover:border-yellow-800 transition-all duration-3000">
                                            {/* Title */}
                                            <CardItem
                                                translateZ="50"
                                                className="text-rgb text-2xl font-bold "
                                            >
                                                {pro?.title}
                                            </CardItem>

                                            {/* Title Description */}
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="justify-start items-center flex text-base max-w-sm mb-4 text-fuchsia-500 font-medium"
                                            >
                                                {pro?.descriptions}
                                            </CardItem>

                                            {/* Project Image */}
                                            <div>
                                                <ProjectGalarySlide images={pro?.image} />
                                            </div>

                                            {/* Skills of Card */}
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="justify-start text-start  text-base max-w-sm mb-4 text-fuchsia-500 font-medium mt-3" >
                                                <div className="flex text-center">Technologies Used :</div>
                                                <div className="flex gap-2 p-2">

                                                    {pro.techStack?.map((tech, index) => (
                                                        <div key={index} >
                                                            <div className="badge badge-primary">{tech}</div>
                                                        </div>
                                                    ))}

                                                    {/* {pro?.techStack && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {typeof pro?.techStack === 'string'
                                                                ? pro.techStack.split(',').map((tech, index) => (
                                                                    <div key={index} className="badge badge-primary">
                                                                        {tech.trim()}
                                                                    </div>
                                                                ))
                                                                : pro.techStack.map((tech, index) => (
                                                                    <div key={index} className="badge badge-primary">
                                                                        {tech}
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    )} */}

                                                    {/* <div className="badge badge-primary">JavaScript</div>
                                                    <div className="badge badge-primary">MongoDB</div>
                                                    <div className="badge badge-primary">Express</div>
                                                    <div className="badge badge-primary">Node</div> */}
                                                </div>
                                            </CardItem>

                                            <div className="flex justify-center items-center mt-6 gap-2">
                                                <CardItem
                                                    translateZ={20}
                                                    as="a"
                                                    href={pro?.liveLink}
                                                    target="__blank"
                                                    className=""
                                                >
                                                    <PreviewButton title="Live Preview"></PreviewButton>
                                                </CardItem>
                                                <CardItem
                                                    translateZ={20}
                                                    as="a"
                                                    href={pro?.githubClient}
                                                    target="__blank"
                                                    className=""
                                                >
                                                    <PreviewButton title="GitHub Client"></PreviewButton>
                                                </CardItem>
                                                <CardItem
                                                    translateZ={20}
                                                    as="a"
                                                    href={pro?.githubServer}
                                                    target="__blank"
                                                    className=""
                                                >
                                                    <PreviewButton title="GitHub Server"></PreviewButton>
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </div>
                            ))
                        ) : (
                            <div>data no implement</div>
                        )
                    }

                    {/* <div><ProjectsCard /></div> */}
                </div>
            </div>


        </div>
    );
};

export default Projects;