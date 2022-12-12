import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDemoCategoryAction } from "../../redux/actions";
import CardHomePage from "../CardHomePage";
import "./styles.scss";
function ListCard() {
  const listCard = useSelector((state) => state.CategoryReducer.getAllDemoCategory);
  const renderListCard = () =>{
    return listCard.map((item, index) =>{
     return <div className="card_item_mg">
        {
          index % 2 === 0 ? <CardHomePage data={item}/> : <CardHomePage data={item} reverse />
        }
      </div>
    })
  }
  return (
    <div className="listCard">
      <div className="listCard_content">
        {renderListCard()}
      </div>
    </div>
  );
}

export default ListCard;
