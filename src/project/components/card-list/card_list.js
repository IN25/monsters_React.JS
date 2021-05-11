import React from "react";
import "./card_list.css";
import { Card } from "../card/card";
import "../card/card.css";

//we can pass properties(parameters to components and access them in the components using props). Also, if we place some elements between <CardList> </CardList>, we can access these elements in the component using props.children
export const CardList = (props) => {
  return (
    <>
      <div className="card_list">
        {props.monsters.map((monster) => {
          return <Card key={monster.id} monster={monster}></Card>;
        })}
      </div>
    </>
  );
};
