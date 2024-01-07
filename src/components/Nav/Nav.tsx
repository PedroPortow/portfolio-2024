import React, { useState } from 'react';
import logo from "../../assets/logo.png"

interface NavProps {
  // You can add specific props if needed
}

const Nav: React.FC<NavProps> = () => {
  
  return (
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Project</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <img src={logo} width="90px" height="90px"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <li><a className='text-base text-strong-black'>Projects</a></li>
            <li><a className='text-base text-strong-black'>About</a></li>
            <li><a className='text-base text-strong-black'>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">PT-BR</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        </div>
      </div>
  );
};


export default Nav;
