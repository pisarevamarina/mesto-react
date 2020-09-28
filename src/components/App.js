import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForn';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

 React.useEffect(() => {
  api.getInitialCards().then(
    ([data]) => {
      setCards(data);
 })
 }, [])

  React.useEffect(() => {
   api.getUserInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    
    <div className='page-container'>
      <Header />
      <Main
        handleEditAvatar={handleEditAvatarClick}
        handleAddPlace={handleAddPlaceClick}
        handleEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>

      <PopupWithForm
        name='new-card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='text'
          className='popup__input popup__input_type_title'
          defaultValue=''
          placeholder='Название'
          name='name'
          required
          minLength='1'
          maxLength='30'
          id='title-input'
        />
        <span className='popup__input-error' id='title-input-error'></span>
        <input
          type='url'
          className='popup__input popup__input_type_image-link'
          defaultValue=''
          placeholder='Ссылка на картинку'
          name='link'
          required
          id='link-input'
        />
        <span className='popup__input-error' id='link-input-error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='confirm-deleting'
        title='Вы уверены?'
        buttonText='Да'
      />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='url'
          className='popup__input popup__input_type_avatar'
          defaultValue=''
          placeholder='Ссылка на картинку'
          name='avatar'
          required
          id='avatar-input'
        />
        <span className='popup__input-error' id='avatar-input-error'></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
