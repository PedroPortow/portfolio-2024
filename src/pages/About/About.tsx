import React from 'react';
import WorkExperienceCard from '../../components/WorkExperienceCard/WorkExperienceCard';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  // Você pode adicionar props específicas se necessário
}

const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32">
        <h2 className='text-5xl font-semibold text-strong-black'>{t('about_me_title')}</h2>
        <div className='container mt-4 flex flex-row gap-8'>
          <p className='text-lg w-1/2 text-light-gray text-justify'>{t('about_me_left_text')}</p>
          <p className='text-lg w-1/2 text-light-gray text-justify'>
            {t('about_me_right_text')}
          </p>
        </div>
        <h2 className='text-4xl font-semibold mt-16 text-strong-black'>{t('professional_experience_title')}</h2>
        <div className='container mt-4 flex flex-row gap-8 '>
          <WorkExperienceCard 
            title={t('fullstack_dev')}
            period="2022 maio - atualmente"
            stacks={["React", "Ruby on Rails" , "AngularJS", "Titanium"]}
            description={t('fullstack_dev_description')}
          />
          <WorkExperienceCard 
            title={t('internship_dev')}
            period="2022 maio - atualmente"
            stacks={["React", "Ruby on Rails"]}
            description={t('internship_dev_description')}
          />
         
        </div>
        <p className='text-lg self-center text-light-gray text-justify mt-8 cursor-pointer '>{t('contact')}</p>
      </div>
  );
};

export default About;
