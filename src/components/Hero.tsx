import React from 'react';

interface Props {
  logo: string;
}

const Hero: React.FC<Props> = ({ logo }) => (
  <div className="content">
    <div className="text-box">
      <h2>
        It's not just Coffee
        <br />
        It's <span>Starbucks</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur? Ad
        consequuntur minima voluptatibus amet cum architecto neque dolorem
        aliquam dignissimos dolore fuga, aperiam, natus atque quae voluptatum
        dicta obcaecati!
      </p>
      <a href="#">Learn More</a>
    </div>
    <div className="img-box">
      <img src={logo} alt="coffe1" className="starbucks" />
    </div>
  </div>
);

export default Hero;
