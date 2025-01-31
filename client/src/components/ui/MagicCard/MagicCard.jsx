import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import styles from '../MagicCard/MagicCard.module.css';
import axiosInstance from '../../../api/axiosInstance';

export default function MagicCard({ card }) {
  const [buttonState, setButtonState] = useState('Добавить в корзину');

  const addToCart = async (cardId) => {
    try {
      const response = await axiosInstance.post(`/basket/${cardId}`);
      if (response.status == 201) {
        setButtonState('Добавлено в корзину');
      }
    } catch {
      console.error('Ошибка при добавлении карточки:', error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={`/img/${card.img}`} alt="Наименование карточки" />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>Наименование карточки: {card.name}</div>
        <div className={styles.price}>Цена: {card.price} руб</div>
        <div className={styles.wear}>Степень изношенности: {card.wearLevel}</div>
        <div className={styles.city}>Город продавца: {card.city}</div>
        <button className={styles.button} onClick={() => addToCart(card.id)}>
          {buttonState}
        </button>
      </div>
    </div>
  );
}
