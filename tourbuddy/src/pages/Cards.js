
import React from 'react';
import "./cards.css"
import { Link } from 'react-router-dom';

const Cards = ({item, handleClick}) => {
    const {name,description} = item;
  return (
    <div className="cards">

        <div className="details">
            <p>{name}</p>
            <p>{description}</p>
            <Link to="/Payment"><button>Pay now!!</button></Link>
            <Link to="/Description"><button>know more!!</button></Link>
        </div>
    </div>
  )
}

export default Cards
