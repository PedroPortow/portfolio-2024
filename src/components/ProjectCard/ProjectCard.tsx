import React from 'react';
import { motion } from "framer-motion";
import Badge from '../Badge/Badge';
import { FollowerPointerCard } from '../FollowingPointer/FollowingPointer';
interface ProjectCardProps {
  isHorizontal: boolean;
  title: string;
  description: string;
  img?: string;
  stacks: string[]; // Define stacks as an array of strings
  iconType?: string;
  icon: string;
  deployLink?: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ isHorizontal, title, description, img, stacks, iconType = "solid", icon, githubLink, deployLink }) => {

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  
  return (
    <div className={`flex ${isHorizontal ? "flex-col lg:flex-row" : "flex-col"} container bg-white p-2.5 gap-x-2 gap-y-2 shadow rounded-lg`}>
      <div className={`first-section-wrapper  m-2.5 flex flex-col justify-center ${isHorizontal ? "w-fill lg:w-1/2" : "w-fill"}`}>
        <div className='flex flex-col gap-y-8 '>
          <i className={`fa-${iconType} fa-${icon} text-gray-90 button w-12 h-12 rounded-lg flex border items-center justify-center bg-darker-gray`} />
          <motion.div 
            className='flex flex-col'  
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.5,  }}>
            <p className="text-strong-black text-xl font-semibold " >{title} </p>
            <p className='text-light-gray text-lg mb-20 font-light'>{description}</p>
          </motion.div>
          <div className='flex flex-row gap-x-8 justify-between'>
            <div className='flex flex-row gap-x-8 '>
              {deployLink && 
              <div className='flex flex-row gap-x-2 items-center cursor-pointer' onClick={() => openLink(deployLink)}>
                <p className="text-strong-black  transition ease-in-out hover:text-gray-200 font-semilight">Deploy</p>
                <i className="fa-solid fa-up-right-from-square text-strong-black" ></i>
              </div>
              }
              <div className='flex flex-row gap-x-2 items-center cursor-pointer ' onClick={() => openLink(githubLink)}>
                <p className="text-strong-black  ease-in-out hover:text-gray-20 hover:text-gray-200 font-semilight">Github</p>
                <i className="fa-solid fa-up-right-from-square text-strong-black" ></i>
              </div>
            </div>
            <div className='flex flex-row gap-x-2'>
              {stacks.map((stack, index) => (
                <Badge key={index} text={stack} />
              ))}
            </div>
          </div>
        </div>
      </div>
        <FollowerPointerCard title={title} className={`bg-darker-gray ${isHorizontal ? "w-fill lg:w-1/2" : "w-fill"} rounded-md overflow-hidden p-10`}>
          <img src={img} alt={title} className="w-[700px] h-[300px] object-cover rounded-md" />
        </FollowerPointerCard>
    </div>
  );
};

export default ProjectCard;
