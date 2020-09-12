import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'


function App() {
  return (
    <div className="page-container">
<Header/>
<Main/>
<Footer/>
<section className='popup popup_type_edit-profile'>
        <form
          className='popup__form popup__form_type_edit-profile'
          name='edit-profile'
          method='GET'
          action='#'
          novalidate
        >
          <button className='popup__exit-button' type='button'></button>
          <h3 className='popup__title'>Редактировать профиль</h3>
          <input
            type='text'
            className='popup__input popup__input_type_name'
            value='Жак-Ив Кусто'
            placeholder=' Введите имя'
            name='name'
            required
            minlength='2'
            maxlength='40'
            id='name-input'
          />
          <span className='popup__input-error' id='name-input-error'></span>
          <input
            type='text'
            className='popup__input popup__input_type_info'
            value='Исследователь океана'
            placeholder=' Чем вы занимаетесь?'
            name='about'
            required
            minlength='2'
            maxlength='200'
            id='info-input'
          />
          <span className='popup__input-error' id='info-input-error'></span>
          <button
            className='popup__submit-button popup__submit-button_type_save'
            type='submit'
          >
            Сохранить
          </button>
        </form>
      </section>
      <section className='popup popup_type_new-card'>
        <form
          className='popup__form popup_form_type_new-card'
          name='add-new-cart'
          method='POST'
          action='#'
          novalidate
        >
          <button className='popup__exit-button' type='button'></button>
          <h3 className='popup__title'>Новое место</h3>
          <input
            type='text'
            className='popup__input popup__input_type_title'
            value=''
            placeholder='Название'
            name='name'
            required
            minlength='1'
            maxlength='30'
            id='title-input'
          />
          <span className='popup__input-error' id='title-input-error'></span>
          <input
            type='url'
            className='popup__input popup__input_type_image-link'
            value=''
            placeholder='Ссылка на картинку'
            name='link'
            required
            id='link-input'
          />
          <span className='popup__input-error' id='link-input-error'></span>
          <button
            className='popup__submit-button popup__submit-button_type_create'
            type='submit'
          >
            Создать
          </button>
        </form>
      </section>
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
      <section className='popup popup_type_confirm-deleting'>
        <form
          action=''
          method=''
          className='popup__form popup_form_type_confirm-deleting'
        >
          <button
            className='popup__exit-button popup__exit-button_type_confirm-deleting'
            type='button'
          ></button>
          <h3 className='popup__title popup__title_type_confirm-deleting'>
            Вы уверены?
          </h3>
          <button className='popup__submit-button popup__submit-button_type_confirm-deleting'>
            Да
          </button>
        </form>
      </section>
      <section className='popup popup_type_avatar'>
        <form
          action=''
          method=''
          className='popup__form popup_form_type_avatar'
        >
          <button
            className='popup__exit-button popup__exit-button_type_avatar'
            type='button'
          ></button>
          <h3 className='popup__title popup__title_type_avatar'>
            Обновить аватар
          </h3>
          <input
            type='url'
            className='popup__input popup__input_type_avatar'
            value=''
            placeholder='Ссылка на картинку'
            name='avatar'
            required
            id='avatar-input'
          />
          <span className='popup__input-error' id='avatar-input-error'></span>
          <button className='popup__submit-button popup__submit-button_type_avatar'>
            Сохранить
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
