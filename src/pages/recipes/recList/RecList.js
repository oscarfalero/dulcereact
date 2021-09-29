import React from "react";
import CardVertical from "../../../components/card_vertical/CardVertical";
import db from '../../../db/db.json';

const RecList = () => {

  const {recipes} = db;
  console.log(recipes);

  return (
    <div>
      <h2>Recetas</h2>
      <div>Aquí va una lista de recetas</div>
      {/* <CardVertical title={recipes.title} time={recipes.time} portions={recipes.portions} /> */}
    </div>
  );
};

export default RecList;
