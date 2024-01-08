import React from 'react';

interface ContactProps {
  // You can add specific props if needed
}

const Contact: React.FC<ContactProps> = () => {
  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32">
        <h2 className='text-5xl font-semibold text-strong-black'>Contact</h2>
        <div className='container  mt-4 flex flex-row gap-8'>
          <p className='text-lg text-light-gray text-justify w-4/6'>Hey! I'm a 20-year-old Full Stack Web Developer and Computer Science student at Universidade Federal de Pelotas. I have a passion for creating and designing software that not only functions efficiently but also provides an intuitive user experience. </p>
          <div className='flex flex-col gap-y-4 w-1/3'>
            <div className='flex flex-row gap-x-2 items-center'>
              <i className="fa-brands fa-github text-xl text-strong-black" />
              <p className='text-lg text-light-gray text-strong-black'>Github</p>
            </div>
            <div className='flex flex-row gap-x-2 items-center'>
              <i className="fa-brands fa-linkedin text-xl text-strong-black"></i>
              <p className='text-lg text-light-gray text-strong-black'>Linkedin</p>
            </div>
            <div className='flex flex-row gap-x-2 items-center'>
              <i className="fa-solid fa-envelope  text-xl text-strong-black"></i>
              <p className='text-lg text-light-gray text-strong-black'>Github</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;


