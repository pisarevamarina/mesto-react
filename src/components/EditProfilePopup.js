import React from 'react';
import PopupWithForm from './PopupWithForn'

export default function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type='text'
        className='popup__input popup__input_type_name'
        defaultValue='Жак-Ив Кусто'
        placeholder=' Введите имя'
        name='name'
        required
        minLength='2'
        maxLength='40'
        id='name-input'
      />
      <span className='popup__input-error' id='name-input-error'></span>
      <input
        type='text'
        className='popup__input popup__input_type_info'
        defaultValue='Исследователь океана'
        placeholder=' Чем вы занимаетесь?'
        name='about'
        required
        minLength='2'
        maxLength='200'
        id='info-input'
      />
      <span className='popup__input-error' id='info-input-error'></span>
    </PopupWithForm>
  );
}
