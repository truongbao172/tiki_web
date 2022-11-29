import React from "react";
import CardHomePage from "../CardHomePage";
import "./styles.scss";
function ListCard() {
  return (
    <div className="listCard">
      <div className="listCard_content">
        <div className="card_item_mg">
          <CardHomePage />
        </div>
        <div className="card_item_mg">
          <CardHomePage reverse />
        </div>
        <div className="card_item_mg">
          <CardHomePage />
        </div>
        <div className="card_item_mg">
          <CardHomePage reverse />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
