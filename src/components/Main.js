import React from 'react';

export default function Main() {

    function handleAddPlaceClick () {
        const popupNewCard = document.querySelector('.popup_form_type_new-card');
        popupNewCard.classList.add('popup_opened')
    }
// document.querySelector('.profile__add-button').addEventListener('click', () => {
//     handleAddPlaceClick ()


  return (
    <main className='content'>
      <section className='profile'>
         <button className='profile__avatar' type='button'></button>
        <div className='profile__info'>
          <h1 className='profile__title'>Жак-Ив Кусто</h1>
          <button className='profile__edit-button' type='button'></button>
          <p className='profile__subtitle'>Исследователь океана</p>
        </div>
        <button className='profile__add-button' onClick={handleAddPlaceClick} type='button'></button>
      </section>
      <section className='grid-elements'>
        <template className='template-cards'>
          <div className='grid-element'>
            <img
              src='images/baikal.jpg'
              alt='Скалы и чайки на озере Байкал'
              className='grid-element__image'
            />
            <button
              className='grid-element__trash-button'
              type='button'
            ></button>
            <div className='grid-element__description'>
              <h3 className='grid-element__title'></h3>
              <div className='grid-element__like-container'>
                <button
                  className='grid-element__like-button'
                  type='button'
                ></button>
                <h3 className='grid-element__like-count'>1</h3>
              </div>
            </div>
          </div>
        </template>
      </section>
      
    </main>
  );
}
