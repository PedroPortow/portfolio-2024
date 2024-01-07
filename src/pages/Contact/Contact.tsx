import React from 'react';

interface ContactProps {
  // You can add specific props if needed
}

const Contact: React.FC<ContactProps> = () => {
  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32">
        <h2 className='text-5xl font-semibold text-strong-black'>Contact</h2>
       
      </div>
  );
};

export default Contact;


