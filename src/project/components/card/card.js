import React from "react";

export const Card = (props) => {
  return (
    <div key={props.monster.id} className="card_container">
      <img
        //we can add a &size url parameter size to custom the size of imported images
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt={`monster${props.monster.id}`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
