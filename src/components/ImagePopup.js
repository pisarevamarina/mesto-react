import React from 'react';

export default function ImagePopup () {
  return(
    <section className='popup popup_type_image'>
    <div className='popup__container'>
      <button
        className='popup__exit-button popup__exit-button_type_image-popup'
        type='button'
      ></button>
      <img
        src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        alt=''
        className='popup__image'
      />
      <h3 className='popup__bottom-title'>Крым</h3>
    </div>
  </section>
  )
 
}