import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/logo.png";
import { changeLanguage } from 'i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NavProps {
  setLoaderVisible: (isVisible: boolean) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProps> = ({setLoaderVisible, projectsRef, homeRef, aboutRef, contactRef}) => {
  const { i18n, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToPage = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // This type ensures TypeScript knows what kind of event it's dealing with
    const handleClickOutside = (event: MouseEvent) => {
      // TypeScript now knows dropdownRef.current is a div and has a contains method
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
  
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (language: string) => {
    setLoaderVisible(true);
    i18n.changeLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after changing language
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex justify-between items-center  py-4  ">
      <div className="flex-row-reverse flex items-center lg:flex-row">
        <img src={logo} width="90px" height="90px" alt="logo" className='ml-4 lg:ml-0' />
        <button className="lg:hidden" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex space-x-6">
        <li><a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => scrollToPage(projectsRef)}>Projects</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => scrollToPage(aboutRef)}>About</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900" onClick={() => scrollToPage(contactRef)}>Contact</a></li>
      </ul>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="m-1 text-gray-700">
          {i18n.language}
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute right-0 mt-2 p-2 shadow bg-white rounded-md w-fit z-50"
            >
          <li>
              <a onClick={() => { if (i18n.language !== "pt-BR") changeLanguage('pt-BR') }} 
                className={`text-nowrap ${i18n.language === "pt-BR" ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-gray-500 cursor-pointer"}`}>
                {t('pt-br')}
              </a>
            </li>
            <li>
              <a onClick={() => { if (i18n.language !== "en") changeLanguage('en') }} 
                className={`text-nowrap ${i18n.language === "en" ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-gray-500 cursor-pointer"}`}>
                {t('english')}
              </a>
            </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
