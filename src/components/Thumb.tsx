/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Thumb1 from '../assets/img/thumb1.png';
import Thumb2 from '../assets/img/thumb2.png';
import Thumb3 from '../assets/img/thumb3.png';

interface Props {
  handleCoffee: (index: number) => void;
}

const Thumb: React.FC<Props> = ({ handleCoffee }) => (
  <ul className="thumb">
    <li
      onClick={() => {
        handleCoffee(0);
      }}
    >
      <img src={Thumb1} alt="" />
    </li>
    <li
      onClick={() => {
        handleCoffee(1);
      }}
    >
      <img src={Thumb2} alt="" />
    </li>
    <li
      onClick={() => {
        handleCoffee(2);
      }}
    >
      <img src={Thumb3} alt="" />
    </li>
  </ul>
);

export default Thumb;
