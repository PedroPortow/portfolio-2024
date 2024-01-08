import React, { useRef } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import pomdoroImg from "../../assets/pomodoro.png"
import postmanImg from "../../assets/postman-temp.png"
import pointerMapImg from "../../assets/map-points.png"
import { useInView, motion } from 'framer-motion';

interface ProjectsProps {
  // You can add specific props if needed
}

interface AnimatedCardProps {
  isVisible: boolean;
  children: React.ReactNode;
  delay?: number | 0.5
  width?: string | "w-full"
}


const Projects: React.FC<ProjectsProps> = () => {
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);
  const fourthCardRef = useRef(null);
  
  const isFirstCardInView = useInView(firstCardRef, { once: true });
  const isSecondCardInView = useInView(secondCardRef, { once: true });
  const isThirdCardInView = useInView(thirdCardRef, { once: true });
  const isFourthCardInView = useInView(fourthCardRef, { once: true });
  
  return (
      <div className="md:container md:mx-auto flex flex-col h-fit justify-around gap-y-8 mt-36">
       <AnimatedCard isVisible={isFirstCardInView} ref={firstCardRef}>
          <ProjectCard 
            img={pomdoroImg} 
            stacks={["react", "sass"]} 
            isHorizontal={true} 
            title="Pomodoro Task Manager" 
            description="Pomodoro Timer integrated with a task management system. Each task's state persistently stored in the browser's localStorage."
          />
        </AnimatedCard>
        <div 
        className='md:container md:mx-auto flex flex-row justify-between gap-x-8'>
          <AnimatedCard isVisible={isSecondCardInView} ref={secondCardRef} width='w-1/2'>
            <ProjectCard img={pointerMapImg} stacks={["react", "sass"]} isHorizontal={false} title="Map Points Management" description='Projeto de pomodoro com tarefas'/>
          </AnimatedCard>
          <AnimatedCard isVisible={isThirdCardInView} ref={thirdCardRef} delay={1} width='w-1/2' >
            <ProjectCard img={postmanImg} stacks={["html", "css"]} isHorizontal={false} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
          </AnimatedCard>
        </div>
        <AnimatedCard isVisible={isFourthCardInView} ref={fourthCardRef}>
           <ProjectCard img={pomdoroImg}  stacks={["html", "css"]} isHorizontal={true} title="Pomodoro" description='Projeto de pomodoro com tarefas'/>
        </AnimatedCard>
      </div>
  );
};

// Define the ref type, in this case, it's an HTMLDivElement
const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(({ isVisible, children, delay = 0.5, width = "w-full" }, ref) => {
  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 100 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={width}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: delay }}
    >
      {children}
    </motion.div>
  );
});


export default Projects;
