import React, { useRef } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import pomdoroImg from "../../assets/pomodoro.png";
import postmanImg from "../../assets/postman-temp.png";
import pointerMapImg from "../../assets/map-points.png";
import foodDeliveryImg from "../../assets/comida-delivery.png";
import { useInView, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface AnimatedCardProps {
  isVisible: boolean;
  children: React.ReactNode;
  delay?: number | 0.5;
  width?: string | "w-full";
}

const Projects = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);
  const fourthCardRef = useRef(null);

  // todo: passar essas coisas pra dentro do próprio project card
  const isFirstCardInView = useInView(firstCardRef, { once: true });
  const isSecondCardInView = useInView(secondCardRef, { once: true });
  const isThirdCardInView = useInView(thirdCardRef, { once: true });
  const isFourthCardInView = useInView(fourthCardRef, { once: true });

  return (
    <div className="md:container md:mx-auto flex flex-col h-fit justify-around gap-y-8 mt-36" ref={ref}>
      <AnimatedCard isVisible={isFirstCardInView} ref={firstCardRef}>
        <ProjectCard
          img={pomdoroImg}
          stacks={["react", "sass"]}
          isHorizontal={true}
          title={t("pomodoro_title")}
          description={t("pomodoro_description")}
          icon="clock"
          deployLink="https://pomodoro-tasks-cyan.vercel.app/"
          githubLink="https://github.com/PedroPortow/pomodoro-tasks"
        />
      </AnimatedCard>
      <div className="md:container md:mx-auto flex flex-col lg:flex-row justify-between gap-x-8 gap-y-8">
        <AnimatedCard
          isVisible={isSecondCardInView}
          ref={secondCardRef}
          width="w-fill lg:w-1/2"
        >
          <ProjectCard
            img={pointerMapImg}
            stacks={["react", "sass"]}
            isHorizontal={false}
            title={t("map_points_title")}
            icon={"map"}
            description={t("map_points_description")}
            deployLink='https://front-end-challengee.vercel.app/'
            githubLink="https://github.com/PedroPortow/FrontEnd-Challenge"
          />
        </AnimatedCard>
        <AnimatedCard
          isVisible={isThirdCardInView}
          ref={thirdCardRef}
          delay={1}
          width="w-fill lg:w-1/2"
        >
          <ProjectCard
            icon="pencil"
            img={postmanImg}
            stacks={["ruby on rails"]}
            isHorizontal={false}
            title={t("todo_api_title")}
            description={t("todo_api_description")}
            // deployLink='https://pomodoro-tasks-cyan.vercel.app/'
            githubLink="https://github.com/PedroPortow/tasks-api"
          />
        </AnimatedCard>
      </div>
      <AnimatedCard isVisible={isFourthCardInView} ref={fourthCardRef}>
        <ProjectCard
          icon="burger"
          img={foodDeliveryImg}
          stacks={["react"]}
          isHorizontal={true}
          title={t("food_delivery")}
          description={t("food_delivery_description")}
          deployLink='https://comida-delivery.vercel.app/'
          githubLink="https://github.com/PedroPortow/ComidaDelivery"
        />
      </AnimatedCard>
    </div>
  );
});

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ isVisible, children, delay = 0.5, width = "w-full" }, ref) => {
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
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

export default Projects;
