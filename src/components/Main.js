import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

export default function Main({
  handleEditAvatar,
  handleAddPlace,
  handleEditProfile,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([user, data]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(data);
        console.log(data);
      }
    );
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
         
        <button
          className='profile__avatar'
          type='button'
          onClick={handleEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></button>
        <div className='profile__info'>
          <h1 className='profile__title'>{userName}</h1>
          <button
            className='profile__edit-button'
            type='button'
            onClick={handleEditProfile}
          ></button>
          <p className='profile__subtitle'>{userDescription}</p>
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
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
