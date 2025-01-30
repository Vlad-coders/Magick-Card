import { useEffect, useState } from 'react';
import MagicCard from '../../ui/MagicCard/MagicCard';
import styles from './MainPage.module.css';
import axiosInstance from '../../../api/axiosInstance';

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [isSorted, setIsSoretd] = useState(true);
  const[input, setInput] = useState('')
  const[search, setSearch] = useState([])

  useEffect(() => {
    fetch('/api/card') // axios -> res.data
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    let timeoutId
    if (input) {
      timeoutId = setTimeout(()=> {
        axiosInstance(`/search/?filter=${input}`).then((res)=>
          setSearch(res.data)
        )
      }, 500)
      return () => clearTimeout(timeoutId)
    }else{
      setSearch([])
    }
    }, [input])
      
    

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


  // добавить кнопку, при нажатии на которую все карточки будут сортироваться в алфавитном порядке названия
  return (
    <>
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        className={styles.searchInput}
        placeholder="Поиск..."
      />
      <button onClick={sortHandler} className={styles.sortButton}>
        Сортировать
      </button>
    </div>
    <div className={styles.container}>
      {search.length > 0
        ? search.map((card) => (
            <MagicCard key={card.id} card={card} />
          ))
        : cards.map((card) => (
            <MagicCard key={card.id} card={card} />
          ))}
    </div>
  </>
  );
}
