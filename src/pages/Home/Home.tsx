import React from 'react';
import PaperPlaneAnim from "../../components/PaperPlaneAnim/PaperPlaneAnim.jsx"
import './Home.css'

interface HomeProps {
  // You can add specific props if needed
}

const Home: React.FC<HomeProps> = () => {
  return (
      <div className="md:container md:mx-auto flex h-fit justify-around">
        <div className='flex flex-col mt-12 '>
          <p className="text-strong-black text-7xl font-semibold mt-32">Welcome!</p>
          <p className="text-strong-black text-7xl font-semibold ">I'm Pedro Porto</p>
          <p className='text-light-gray text-lg font-light w-2/3 mt-4'>I'm a Full stack web developer and a Computer Science student passionate about building seamless user experiences</p>
          <p className='text-light-gray text-lg font-light w-2/3 mt-12 cursor-pointer underline-from-left'>You can check out some of my personal projects below  </p>
        </div>
        <div className='mr-4'>
          <PaperPlaneAnim />
        </div>
      </div>
  );
};

export default Home;
