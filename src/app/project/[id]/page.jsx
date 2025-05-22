

import ProjectDetails from '@/components/HomePage/Projects/projectDetails';
import { getSingleProject } from '@/service/projectService';
import React from 'react';

const ProjectDetailsServer = async ({ params }) => {

    const { id } = params;
    const project = await getSingleProject(id);

    if (!project) {
        return <div>Blog not found</div>;
    }

    // console.log(project);
    

    return (
        <div className='min-h-screen'>
            <ProjectDetails projects={project} />
        </div>
    );
};

export default ProjectDetailsServer;