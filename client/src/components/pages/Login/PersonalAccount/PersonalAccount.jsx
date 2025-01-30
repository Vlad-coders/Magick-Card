// import Form from "react-bootstrap/Form";

// import styles from "./PersonalAccount.module.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";

// export default function PersonalAccount() {
//   const [title, setTaitle] = useState("");
//   const [image, setImage] = useState("");
//   const [price, setPrice] = useState(null);
//   const [wearAndTear, setwearAndTear] = useState("");
//   const [city, setCity] = useState("");
//   const navigate = useNavigate();

//   const handlerTitle = (e) => {
//     setTaitle(e.target.value);
//   };
//   // console.log(title);

//   const handlerImage = (e) => {
//     setImage(e.target.value);
//   };

//   const handlerPrice = (e) => {
//     setPrice(e.target.value);
//   };
//   const handlerWearAndTear = (e) => {
//     setwearAndTear(e.target.value);
//   };
//   const handlerCity = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //TODO: URL/API спросить какой для добаления новых карточек
//       const response = await fetch("/api/card/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           // TODO: Спросить у Влада какие параметры он ждёт

//           name: title,
//           price: price,
//           wearLevel: wearAndTear,
//           img: image,
//           city: city,
//         }),
//       });

//       if (response.ok) {
//         // TODO: ПОМЕНЯТЬ НА ПРАВИЛЬНЫЙ ПУТЬ
//         navigate("/card");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form className={styles.container} onSubmit={handleSubmit}>
//       <Form.Control
//         placeholder="Название"
//         className="input"
//         onChange={(e) => handlerTitle(e)}
//       />

//       <Form.Control
//         placeholder="Изображение"
//         className="input"
//         onChange={(e) => handlerImage(e)}
//       />

//       <Form.Control
//         placeholder="Цена"
//         className="input"
//         onChange={(e) => handlerPrice(e)}
//       />

//       <Form.Control
//         placeholder="Степень изношености"
//         className="input"
//         onChange={(e) => handlerWearAndTear(e)}
//       />

//       <Form.Control
//         placeholder="Город"
//         className="input"
//         onChange={(e) => handlerCity(e)}
//       />
//       <Button variant="primary" className={styles.btn} type="submit">
//         Добавить
//       </Button>
//     </form>
//   );
// }

import Form from "react-bootstrap/Form";
import styles from "./PersonalAccount.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function PersonalAccount() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [wearAndTear, setWearAndTear] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/card/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: title,
          price: price,
          wearLevel: wearAndTear,
          img: image,
          city: city,
        }),
      });

      if (response.ok) {
        navigate("/card");
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
          placeholder="Введите URL изображения"
          className={styles.input}
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
