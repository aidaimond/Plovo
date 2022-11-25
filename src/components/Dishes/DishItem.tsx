import React from 'react';
import {Dish} from "../../types";

interface Props {
  dish: Dish;
  onClick: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({dish, onClick}) => {
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmu_BwSPmqs3DhXvKCwO173jWbumk8AmYOqg&usqp=CAU';
  const image = dish.image || imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`
  };

  return (
    <div className="card mb-2" onClick={onClick}>
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text small">{dish.description}</p>
            <p className="card-text">{dish.price} KGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DishItem;