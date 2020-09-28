import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import Card from './Card';


export default function Main({
  handleEditAvatar,
  handleAddPlace,
  handleEditProfile,
  onCardClick,
}) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()]).then(
      ([data]) => {
        setCards(data);
      
      }
    );
  }, []);
const currentUser = React.useContext(CurrentUserContext);

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard)=> {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards)
  });
}

function handleCardDelete (card) {
  api.deleteCard(card._id).then(()=>{
    const newCards = cards.filter((c) => c._id !==card._id);
    setCards(newCards) 
  })
}
  return (
    <main className='content'>
      <section className='profile'>
         
        <button
          className='profile__avatar'
          type='button'
          onClick={handleEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></button>
        <div className='profile__info'>
          <h1 className='profile__title'>{currentUser.name}</h1>
          <button
            className='profile__edit-button'
            type='button'
            onClick={handleEditProfile}
          ></button>
          <p className='profile__subtitle'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={handleAddPlace}
        ></button>
      </section>
      <section className='grid-elements'>
        <ul className='grid-elements__list'>
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
