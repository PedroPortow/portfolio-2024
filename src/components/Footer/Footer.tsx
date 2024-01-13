import React, { useState } from 'react';

interface FooterProps {
  // You can add specific props if needed
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <footer className="text-gray-600 body-font">
    <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
      <span className="ml-3 text-xl">Porto</span>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Porto —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">v1.0</a>
      </p>
    </div>
  </footer>
  );
};


export default Footer;
