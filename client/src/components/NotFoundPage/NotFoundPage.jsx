import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const handlerGetBack = () => {
    window.history.back();
  };
  return (
    <div className={styles.container}>
      <div>
        <Button onClick={() => handlerGetBack()}>{'<- Вернуться назад'}</Button>
      </div>
      <h1>Я Раскажу твоей маме что ты балуешься</h1>
    </div>
  );
}
