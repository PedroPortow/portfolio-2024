import React from 'react';

interface Props {
  title: string;
  description: string;
  period: string;
  stacks: string[];
}

const WorkExperienceCard: React.FC<Props> = ({ title, description, period, stacks }) => {
  return (
    <div className='container mt-8 flex flex-col justify-between gap-8 p-4 rounded bg-white shadow'>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-2xl font-semibold text-strong-black'>{title}</h2>
          <p className='text-sm text-gray-400'>
            {period}
          </p>
        </div>
        <p className='text-lg text-light-gray text-justify mt-4'>{description}</p>
      </div>
      <div className='mt-2'>
        <div className='flex flex-row flex-wrap'>
          {stacks.map((stack, index) => (
            <div key={index} className="badge badge-outline mr-2 mb-2">{stack}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
