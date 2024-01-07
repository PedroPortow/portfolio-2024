import React, { useRef } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import pomdoroImg from "../../assets/pomodoro.png"
import { useInView, motion } from 'framer-motion';

interface ProjectsProps {
  // You can add specific props if needed
}

const Projects: React.FC<ProjectsProps> = () => {
  const firstCardRef = useRef(null);
  const secondCardsRef = useRef(null);
  const thirdCardRef = useRef(null);
  
  const isFirstCardInView = useInView(firstCardRef, { once: true });
  const isThirdCardInView = useInView(thirdCardRef, { once: true });
  const areSecondCardsInView = useInView(secondCardsRef, { once: true });
  
  
  
  return (
      <div className="md:container md:mx-auto flex flex-col h-fit justify-around gap-y-8 mt-36">
         <div ref={firstCardRef}
            style={{
              transform: isFirstCardInView ? "none" : "translateY(100px)",
              opacity: isFirstCardInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <ProjectCard img={pomdoroImg} stacks={["html", "css"]} isHorizontal={true} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
          </div >
        <motion.div  
          style={{
            transform: areSecondCardsInView ? "none" : "translateY(100px)",
            opacity: areSecondCardsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        className='md:container md:mx-auto flex flex-row justify-between gap-x-8'>
          <ProjectCard img={pomdoroImg} stacks={["html", "css"]}  isHorizontal={false} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
          <ProjectCard img={pomdoroImg} stacks={["html", "css"]} isHorizontal={false} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
        </motion.div>
        <div ref={thirdCardRef}
            style={{
              transform: isThirdCardInView ? "none" : "translateY(100px)",
              opacity: isThirdCardInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
           <ProjectCard img={pomdoroImg}  stacks={["html", "css"]} isHorizontal={true} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
          </div >
      </div>
  );
};



export default Projects;
