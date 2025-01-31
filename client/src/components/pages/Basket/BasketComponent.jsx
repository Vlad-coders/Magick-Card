// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../../api/axiosInstance';
// import { Card } from 'semantic-ui-react';
// import styles from './BasketPage.module.css';
// function BasketComponent({ card, deleteHandler }) {
//   console.log(card);

//   return (
//     <Card className={styles.card}>
//       <div className={styles.image}>
//         <img src={`/img/${card.img}`} alt="Наименование карточки" />
//       </div>
//       <div className={styles.details}>
//         <div className={styles.title}>Наименование карточки: {card.name}</div>
//         <div className={styles.price}>Цена: {card.price}</div>
//         <div className={styles.wear}>Степень изношенности: {card.wearLevel}</div>
//         <div className={styles.city}>Город продавца: {card.city}</div>
//         <button className={styles.button} onClick={() => deleteHandler(card.id)}>
//           Заказать
//         </button>
//       </div>
//     </Card>
//   );
// }

// export default BasketComponent;

import React from 'react';
import axiosInstance from '../../../api/axiosInstance';
import { Card } from 'semantic-ui-react';
import styles from './BasketPage.module.css';

function BasketComponent({ card, deleteHandler }) {
  // Функция для отправки письма
  const handleOrder = async () => {
    try {
      const response = await axiosInstance.post('/send-email', {
        cardId: card.id,
        email: 'mrn_0593@mail.ru', // Укажите email покупателя
        itemName: card.name,
        price: card.price,
      });
      alert('Письмо успешно отправлено!');
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      alert('Ошибка при отправке письма.');
    }
  };

  return (
    <Card className={styles.card}>
      <div className={styles.image}>
        <img src={`/img/${card.img}`} alt="Наименование карточки" />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>Наименование карточки: {card.name}</div>
        <div className={styles.price}>Цена: {card.price}</div>
        <div className={styles.wear}>Степень изношенности: {card.wearLevel}</div>
        <div className={styles.city}>Город продавца: {card.city}</div>
        <button className={styles.button} onClick={() => deleteHandler(card.id)}>
          Заказать
        </button>
        <button className={styles.buttonEmail} onClick={handleOrder}>
          Отправить письмо
        </button>
      </div>
    </Card>
  );
}

export default BasketComponent;
