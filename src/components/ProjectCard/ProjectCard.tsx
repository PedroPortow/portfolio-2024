import React from 'react';

interface ProjectCardProps {
  isHorizontal: boolean;
  title: string;
  description: string;
  img?: string;
  stacks: string[]; // Define stacks as an array of strings
}

const ProjectCard: React.FC<ProjectCardProps> = ({ isHorizontal, title, description, img, stacks}) => {
  
  return (
    <div className={isHorizontal ? "h-96 md:container flex flex-row bg-white p-2.5 shadow rounded-lg" :  "h-720 flex flex-col md:container p-2.5 bg-white shadow rounded-lg"}>
      <div className={isHorizontal ? 'w-1/2 ' : 'h-1/2'}>
        <div className='button w-12 h-12 rounded-lg flex border items-center justify-center bg-darker-gray mt-12 ml-8'>
         <i className="fa-solid fa-clock text-gray-900" />
        </div>
        <div className='flex flex-col mt-12 ml-8'>
          <p className="text-strong-black text-xl font-semibold ">{title} </p>
          <p className='text-light-gray text-lg mb-20 font-light'>{description}</p>
        </div>
        <div className='flex flex-row gap-x-8 ml-8 justify-between mr-8'>
          <div className='flex flex-row gap-x-8 '>
            <div className='flex flex-row gap-x-2 items-center cursor-pointer'>
              <p className="text-strong-black  transition ease-in-out hover:text-gray-200 font-semilight border-b-2 border-monotone-gray">Deploy</p>
              <i className="fa-solid fa-up-right-from-square text-strong-black" ></i>
            </div>
            <div className='flex flex-row gap-x-2 items-center cursor-pointer '>
              <p className="text-strong-black  ease-in-out hover:text-gray-20 hover:text-gray-200 border-b-2 border-monotone-gray font-semilight">Github</p>
              <i className="fa-solid fa-up-right-from-square text-strong-black" ></i>
            </div>
          </div>
          <div className='flex flex-row gap-x-2'>
            {stacks.map((stack, index) => (
              <div key={index} className="badge badge-outline">{stack}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={isHorizontal ? 'bg-darker-gray w-1/2 rounded-md overflow-hidden p-16' : 'bg-darker-gray h-1/2 rounded-md overflow-hidden p-12'}>
        <img src={img} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>
    </div>
  );
};

export default ProjectCard;
