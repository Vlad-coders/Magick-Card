import Form from "react-bootstrap/Form";

import styles from "./PersonalAccount.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function PersonalAccount() {
  const [title, setTaitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [wearAndTear, setwearAndTear] = useState("");

  const navigate = useNavigate();

  const handlerTitle = (e) => {
    setTaitle(e.target.value);
  };
  // console.log(title);

  const handlerImage = (e) => {
    setImage(e.target.value);
  };

  const handlerPrice = (e) => {
    setPrice(e.target.value);
  };
  const handlerWearAndTear = (e) => {
    setwearAndTear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //TODO: URL/API спросить какой для добаления новых карточек
      const response = await fetch("/api/products/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // TODO: Спросить у Влада какие параметры он ждёт

          some: title,
          some1: price,
          some2: wearAndTear,
          some3: image,
        }),
      });

      if (response.ok) {
        // TODO: ПОМЕНЯТЬ НА ПРАВИЛЬНЫЙ ПУТЬ
        navigate("/products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Form.Control
        placeholder="Username"
        className="input"
        onChange={(e) => handlerTitle(e)}
      />

      <Form.Control
        placeholder="Username"
        className="input"
        onChange={(e) => handlerImage(e)}
      />

      <Form.Control
        placeholder="Username"
        className="input"
        onChange={(e) => handlerPrice(e)}
      />

      <Form.Control
        placeholder="Username"
        className="input"
        onChange={(e) => handlerWearAndTear(e)}
      />
      <Button variant="primary" className={styles.btn} type="submit">
        Primary
      </Button>
    </form>
  );
}
