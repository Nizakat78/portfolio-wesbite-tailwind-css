import React, { useState, useEffect } from 'react';
import { CgMenuOreos } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium text-center" data-aos="zoom-in-up">
          Nizakat Ali
        </div>
        <ul className="gap-10 lg:gap-16 hidden md:flex" data-aos="zoom-out">
          <li className="Menulink">
            <a href="#Heros">Home</a>
          </li>
          <li className="Menulink">
            <a href="#About">About</a>
          </li>
          <li className="Menulink">
            <a href="#projects">Projects</a>
          </li>
          <li className="Menulink">
            <a href="#Skills">Skills</a>
          </li>
          <li className="Menulink">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="Menulink">
            <a href="#Heros" onClick={toggleMenu}>Home</a>
          </li>
          <li className="Menulink">
            <a href="#About" onClick={toggleMenu}>About</a>
          </li>
          <li className="Menulink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="Menulink">
            <a href="#Skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="Menulink">
            <a href="#Contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
