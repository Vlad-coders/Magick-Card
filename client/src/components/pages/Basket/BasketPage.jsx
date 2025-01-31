import { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import BasketComponent from './BasketComponent';
import styles from './BasketPage.module.css';

export default function BasketPage({ user }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance(`/basket/getCard`)
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
    <div className={styles.container}>
      <h1>Добавить в корзину</h1>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <BasketComponent key={card.id} card={card.Card} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}


