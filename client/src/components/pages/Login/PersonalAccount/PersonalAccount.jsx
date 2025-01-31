import Form from 'react-bootstrap/Form';
import styles from './PersonalAccount.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../../api/axiosInstance';

export default function PersonalAccount() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(null);
  const [wearAndTear, setWearAndTear] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  console.log('image', image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        '/card/create',
        {
          name: title,
          price: price,
          wearLevel: wearAndTear,
          img: image,
          city: city,
        },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
     
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Название</label>
        <Form.Control
          placeholder="Введите название"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Изображение</label>
        <Form.Control
          type="file"
          className={styles.input}
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Цена</label>
        <Form.Control
          placeholder="Введите цену"
          className={styles.input}
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Степень изношенности</label>
        <Form.Control
          placeholder="Введите степень изношенности"
          className={styles.input}
          value={wearAndTear}
          onChange={(e) => setWearAndTear(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Город</label>
        <Form.Control
          placeholder="Введите город"
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <Button variant="primary" className={styles.btn} type="submit">
        Добавить
      </Button>
    </form>
  );
}
