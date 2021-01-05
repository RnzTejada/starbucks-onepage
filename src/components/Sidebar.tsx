import React from 'react';
import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Twitter from '../assets/img/twitter.png';

const Sidebar: React.FC = () => (
  <ul className="sidebar">
    <li>
      <a href="#">
        <img src={Facebook} alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={Twitter} alt="Twitter" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={Instagram} alt="Instagram" />
      </a>
    </li>
  </ul>
);

export default Sidebar;
