import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these AMAZING Characters!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/im-v.jpg'
              text='Marvel announces Spiderman 4 in early development'
              label='Spiderman'
              path='/services'
            />
            <CardItem
              src='images/im-iv.jpg'
              text='Robert Downey jr and Scarlett Johansson may return to MCU'
              label='Iron-man'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/im-vii.jpg'
              text="X-Men '97 is scheduled to premiere in early 2024."
              label='X-MEN'
              path='/services'
            />
            <CardItem
              src='images/im-vi.jpg'
              text='F4 delayed to 2025. Casts ready to be announced'
              label='Fantastic 4'
              path='/products'
            />
            <CardItem
              src='images/im-i.jpg'
              text='Pick up issue #1 of Batman: Red Hood at our local outlet'
              label='Batman: Red Hood #1'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;