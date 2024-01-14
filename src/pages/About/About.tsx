import React from 'react';
import WorkExperienceCard from '../../components/WorkExperienceCard/WorkExperienceCard';
import { useTranslation } from 'react-i18next';
import SlideUpAnimation from '../../components/SlideUpAnimation/SlideUpAnimation';
import myPic from "../../assets/me.png"
import { AnimatedTooltip } from '../../components/AnimatedTooltip/AnimatedTooltip';
import './About.css'

const About = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();


  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  

  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32" ref={ref}>
        <h2 className='text-5xl font-semibold text-strong-black'>{t('about_me_title')}</h2>
        <div className='container mt-12 flex flex-row gap-8'>
          <div className='flex flex-col w-fill lg:w-[60%] gap-y-8'>
            <p className='text-lg text-light-gray text-justify'>{t('about_me_left_text')} </p>
            
            <div className='flex flex-row items-center gap-x-2 hover:gap-x-3 cursor-pointer mt-4 transition-all'>
              <a onClick={() => openLink("")} className='cv-link text-lg text-strong-black text-justify'>
                Curriculum Vitae 
              </a>
              <i className="fa-solid fa-arrow-right text-strong-black "></i>
            </div>
          </div>
          <div className='w-[40%]  justify-center lg:flex hidden'>
            <AnimatedTooltip name='Thats me!' imageComponent={<SlideUpAnimation>
              <img src={myPic} className='rounded-full border w-[300px] h-[300px]' />
            </SlideUpAnimation>} />
          </div>
        </div>
        <h2 className='text-2xl font-semibold mt-16 text-strong-black self-center'>{t('professional_experience_title')}</h2>
        <div className='container mt-12 flex flex-row gap-8 flex flex-col lg:flex-row'>
          <SlideUpAnimation>
            <WorkExperienceCard 
              title={t('fullstack_dev')}
              period={t('fullstack_dev_date_period')}
              stacks={["React", "Ruby on Rails" , "AngularJS", "Titanium"]}
              description={t('fullstack_dev_description')}
            />
          </SlideUpAnimation>
          <SlideUpAnimation delay={1}>
            <WorkExperienceCard 
              title={t('internship_dev')}
              period={t('internship_dev_date_period')}
              stacks={["React", "Ruby on Rails"]}
              description={t('internship_dev_description')}
            />
          </SlideUpAnimation>
         
        
         
        </div>
      </div>
  );
});

export default About;
