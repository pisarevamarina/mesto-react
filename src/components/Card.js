import React from 'react';

export default function Card ({card}) {
    return (
        <li className='grid-element' >
          <img
            src={card.link}
            alt={card.name}
            className='grid-element__image'
          />
          <button
            className='grid-element__trash-button'
            type='button'
          ></button>
          <div className='grid-element__description'>
      <h3 className='grid-element__title'>{card.name}</h3>
            <div className='grid-element__like-container'>
              <button
                className='grid-element__like-button'
                type='button'
              ></button>
              <h3 className='grid-element__like-count'>1</h3>
            </div>
          </div>
        </li>
      );
}