import React from 'react';
import WorkExperienceCard from '../../components/WorkExperienceCard/WorkExperienceCard';

interface AboutProps {
  // You can add specific props if needed
}

const About: React.FC<AboutProps> = () => {
  return (
      <div className="md:container md:mx-auto flex h-fit flex-col mt-32">
        <h2 className='text-5xl font-semibold text-strong-black'>About me</h2>
        <div className='container  mt-4 flex flex-row gap-8'>
          <p className='text-lg w-1/2 text-light-gray text-justify'>Hey! I'm a 20-year-old Full Stack Web Developer and Computer Science student at Universidade Federal de Pelotas. I have a passion for creating and designing software that not only functions efficiently but also provides an intuitive user experience. </p>
          <p className='text-lg w-1/2 text-light-gray text-justify'>
            My journey in web development started with basic HTML and CSS, and it quickly evolved into a love for JavaScript and full-stack technologies. 
            I've been honing my skills in both front-end and back-end development,
            with a particular interest in modern frameworks like React for the front-end and Ruby on Rails for the back-end. When I'm not coding, I enjoy exploring new technologies and keeping up with the latest trends in the tech world. My goal is to continually grow as a developer and contribute to meaningful projects that make a difference.
          </p>
        </div>
        <h2 className='text-4xl font-semibold mt-16 text-strong-black'>Professional experience</h2>
        <div className='container mt-4 flex flex-row gap-8 '>
          <WorkExperienceCard 
            title={"Fullstack Developer"}
            period="2022 may - now"
            stacks={["React", "Ruby on Rails" , "AngularJS", "Titanium"]}
            description={"Fullstack developer at Checkplant, working mostly with React and Ruby on Rails. Responsible for implementing new features and also helping with bugs "}
          />
          <WorkExperienceCard 
            title={"Bootcamp - Programa Emergir"}
            period="2022 may - now"
            stacks={["React", "Ruby on Rails"]}
            description={"Bolsista do Programa Emergir, um treinamento envolvendo conteúdos relacionados ao desenvolvimento Fullstack"}
          />
         
        </div>
        <p className='text-lg self-center text-light-gray text-justify mt-8 cursor-pointer '>Curriculum Vitae</p>
      </div>
  );
};

export default About;


