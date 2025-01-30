import React, { useState } from 'react'

function BasketComponent({user,card,deleteHandler}) {

return (
  <div className="card-card">
      <img src={card.img} alt={card.name} />
      <h2>{card.name}</h2>
      <p>Цена: {card.price} руб.</p>
      <p>Город: {card.city}</p>
      <p>Уровень износа: {card.wearLevel}</p>
      <button onClick={() => deleteHandler(card.id)}>Удалить</button>
      
    </div>
  );
};

export default BasketComponent;
    
  

