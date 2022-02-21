import React from 'react';
import ProjectItem from './ProjectItem';
import { MainContainer, ProjectsContainer, ProjectsWrapper, H1 } from './Projects.styled';
import projects from '../../data/projects.json';

const Projects = () => {
    return (
        <MainContainer>
            <H1>Projekty</H1>
            <ProjectsContainer>
                <ProjectsWrapper>
                    {projects.map((project) => {
                        return <ProjectItem key={project.id} project={project} />;
                    })}
                </ProjectsWrapper>
            </ProjectsContainer>
        </MainContainer>
    );
};

export default Projects;
