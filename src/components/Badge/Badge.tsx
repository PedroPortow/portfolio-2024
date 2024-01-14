import React from 'react';


interface BadgeProps {
	key: number;
	text: string;
}

const Badge: React.FC<BadgeProps> = ({key, text}) => {
  return (
    <span key={key} className="border lowercase rounded-full py-1 px-2 text-sm text-neutral-500 text-light-gray ">
      {text}
    </span>
  );
};


export default Badge;
