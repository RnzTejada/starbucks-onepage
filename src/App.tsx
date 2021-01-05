import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thumb from './components/Thumb';
import Sidebar from './components/Sidebar';
import Coffee1 from './assets/img/img1.png';
import Coffee2 from './assets/img/img2.png';
import Coffee3 from './assets/img/img3.png';

function App() {
  const [coffee, setCoffee] = useState<string>(Coffee1);
  const coffees = [Coffee1, Coffee2, Coffee3];
  const handleCoffee = (index: number) => {
    setCoffee(coffees[index]);
  };
  return (
    <div className="App">
      <section>
        <div className="circle">
          <></>
        </div>
        <Navbar />
        <Hero logo={coffee} />
        <Thumb handleCoffee={handleCoffee} />
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
