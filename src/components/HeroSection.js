import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return ( 
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>BEAUTIFUL WORLD</h1>
      <p>WE ARE HERE TO HELP YOU</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT <i className='fas fa-phone-square' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
