/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <header>
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <div
          onClick={() => setActive((prevState) => !prevState)}
          className={`toggle${active ? ' active' : ' '}`}
        >
          <></>
        </div>
        <ul className={`navigation${active ? ' active' : ' '}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Whats's New</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
