import { useEffect, useState } from 'react';
import MagicCard from '../../ui/MagicCard/MagicCard';
import styles from './MainPage.module.css';

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [basket, setBasket] = useState([]);
  const [isSorted, setIsSoretd] = useState(true);
  useEffect(() => {
    fetch('/api/card') // axios -> res.data
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const sortHandler = () => {
    setIsSoretd((p) => !p);
    setCards(
      cards.sort((a, b) =>
        isSorted ? a.city.localeCompare(b.city) : b.city.localeCompare(a.city),
      ),
    );

    // if(isSorted) {
    //   const sortedCards = [...cards].sort((a, b) => a.name.localeCompare(b.name));
    //   setCards(sortedCards);
    //   setIsSoretd(false)
    // }else{
    //   const sortedCards = [...cards].sort((a, b) => b.name.localeCompare(a.name));
    //   setCards(sortedCards);
    //   setIsSoretd(true)
    // }
  };

  // const addHandler = (card) = {
  //   setBasket((prev) => [...prev, card])

  // }

  // добавить кнопку, при нажатии на которую все карточки будут сортироваться в алфавитном порядке названия
  return (
    <>
      <button onClick={() => sortHandler()}>Sort</button>
      <div className={styles.container}>
        {cards.map((card) => (
          <MagicCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
