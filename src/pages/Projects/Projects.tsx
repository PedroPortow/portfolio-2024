import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import pomdoroImg from "../../assets/pomodoro.png"

interface ProjectsProps {
  // You can add specific props if needed
}

const Projects: React.FC<ProjectsProps> = () => {
  return (
      <div className="md:container md:mx-auto flex flex-col h-fit justify-around gap-y-8 mt-36">
        <ProjectCard img={pomdoroImg} stacks={["html", "css"]} isHorizontal={true} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
        <div className='md:container md:mx-auto flex flex-row justify-between gap-x-8'>
          <ProjectCard img={pomdoroImg} stacks={["html", "css"]}  isHorizontal={false} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
          <ProjectCard img={pomdoroImg} stacks={["html", "css"]} isHorizontal={false} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
        </div>
        <ProjectCard img={pomdoroImg}  stacks={["html", "css"]} isHorizontal={true} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
      </div>
  );
};

export default Projects;
