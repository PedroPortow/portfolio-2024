import React from 'react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  // Você pode adicionar props específicas se necessário
}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useTranslation();

  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32">
        <h2 className='text-5xl font-semibold text-strong-black'>{t('contact')}</h2>
        <div className='container mt-4 flex flex-row gap-8'>
          <p className='text-lg text-light-gray text-justify w-4/6'>{t('contact_description')}</p>
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
