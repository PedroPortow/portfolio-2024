import React from 'react';
import Badge from '../Badge/Badge';

interface Props {
  title: string;
  description: string;
  period: string; 
  stacks: string[];
}

const WorkExperienceCard: React.FC<Props> = ({ title, description, period, stacks }) => {
  return (
    <div className='container flex flex-col h-full justify-between gap-8 p-4 rounded bg-white shadow'>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-xl font-semibold text-strong-black'>{title}</h2>
          <p className='text-sm text-gray-400'>
            {period}
          </p>
        </div>
        <p className='text-md text-light-gray text-justify mt-1'>{description}</p>
      </div>
      <div className='mt-2'>
        <div className='flex flex-row flex-wrap gap-x-2'>
          {stacks.map((stack, index) => (
            <Badge key={index} text={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
