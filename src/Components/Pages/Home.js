import React from 'react';
import '../../App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';


function Home() {
  return  (
    <>
      <HeroSection></HeroSection>
      <Cards></Cards>
    <div style = {{textAlign: "center"}}>
      <h1>Welcome to My Website!</h1>

      <h2>I hope you enjoy your stay!</h2>
    </div>
    </>
  );
}

export default Home;