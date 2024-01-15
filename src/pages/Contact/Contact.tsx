import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32" ref={ref}>
        <h2 className='text-5xl font-semibold text-strong-black'>{t('contact')}</h2>
        <div className='container mt-4 flex flex-col sm:flex-row gap-8'>
          <p className='text-lg text-light-gray text-justify w-4/6'>{t('contact_description')}</p>
          <div className='flex flex-col gap-y-4 w-fill sm:w-1/3'>
            <div className='flex flex-row gap-x-2 items-center cursor-pointer' onClick={() => openLink("https://github.com/PedroPortow")}>
              <i className="fa-brands fa-github text-lg text-strong-black" />
              <p className='text-lg text-light-gray text-strong-black'>/PedroPortow</p>
            </div>
            <div className='flex flex-row gap-x-2 items-center cursor-pointer' onClick={() => openLink("https://www.linkedin.com/in/pedroportow/")}>
              <i className="fa-brands fa-linkedin text-lg text-strong-black"></i>
              <p className='text-lg text-light-gray text-strong-black'>/PedroPortow</p>
            </div>
            <div className='flex flex-row gap-x-2 items-center'>
              <i className="fa-solid fa-envelope  text-lg text-strong-black"></i>
              <p className='text-lg text-light-gray text-strong-black'>pedrolportow@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
  );
});

export default Contact;
