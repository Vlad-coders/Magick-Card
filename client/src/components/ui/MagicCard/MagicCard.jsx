import React from 'react'
import { Card, CardHeader } from 'semantic-ui-react'
import styles from './MagicCard.module.css'


export default function MagicCard({card}) {
    const addToCart = () => {
        console.log('Добавлено в корзину');
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
    <button className={styles.button}>Добавить в корзину</button>
  </div>
</Card>

  )
}
