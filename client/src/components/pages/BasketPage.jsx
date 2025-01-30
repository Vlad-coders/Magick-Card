import { useEffect, useState } from 'react';
import BasketComponent from '../ui/BasketComponent';
import axiosInstance from '../../api/axiosInstance';
export default function BasketPage({ user }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance(`/basket/`)
      .then(({ data }) => setCards(data))
      .catch((error) => console.log(error));
  }, []);

  const deleteHandler = async (id) => {
    console.log(id);

    try {
      await axiosInstance.delete(`/basket/${id}`);
      setCards(cards.filter((card) => card.Card.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Добавить в корзину</h1>
      <div>
        {cards.map((card) => (
          <BasketComponent
            key={card.id}
            user={user}
            card={card}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}
