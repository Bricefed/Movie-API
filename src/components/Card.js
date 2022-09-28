import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <img src={"https://picsum.photos/200/250"} alt="t" />
      <div className="text-container">
        <h2>Title</h2>
        <p className="date">
          Sortie le : <span>21/11/2012</span>
        </p>
        <p className="rate">8/10 ⭐</p>
        <ul className="category-container">
          <li>Action</li>
          <li>Humour</li>
          <li>Fiction</li>
        </ul>
        <h2>Synopsis</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dolorem facere assumenda necessitatibus voluptate quidem a, nam alias.
          Iste accusamus quod reiciendis minus quis nostrum, voluptatum nesciunt
          perferendis non dolores dolorem temporibus. Corporis perferendis autem
          corrupti magni! Laudantium suscipit, cumque alias, aliquid iusto ipsam
          amet minus atque libero iste consequatur?
        </p>
      </div>
      <button>Ajouter au coups de coeur</button>
    </div>
  );
};

export default Card;
