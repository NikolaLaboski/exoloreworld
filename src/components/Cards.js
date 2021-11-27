import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose from our destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img9.jpg'
              text='Plan your holiday in Austria with free guides and videos'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Discover Dubai with world class tourism'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Enjoy the fjords, mountain air, and marvel at the northern lights. '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Probably one of the most iconic Greek islands to visit'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img8.jpg'
              text='Ohrid is a tourist treasure trove just waiting to be discovered'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
