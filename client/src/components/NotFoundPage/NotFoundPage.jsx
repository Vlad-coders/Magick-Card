import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const handlerGetBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Button primary onClick={handlerGetBack}>
          {'<- Вернуться назад'}
        </Button>
      </div>
      <img
        src="MV5BOGVmZTZmYTctZDU1Ni00ZTA1LWI0NTktYjQ4NWViNWYwOWFiXkEyXkFqcGdeQXVyNjcwNDUyODM@._V1_-fotor-bg-remover-2025013110510.png"
        alt="Not Found"
        className={styles.img}
      />
      <h1>Я расскажу твоей маме, что ты балуешься!</h1>
    </div>
  );
}
