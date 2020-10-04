import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css'

const ShowCard = (props) => {
    const {img,name}= props.cp;
    return (
       <div className="cardBody"> 
            <Link to={`/register/${name}`} className="col-md-3 register">
                <img className="cardImage" src={img} alt="" />
                <h6 className="text">{name}</h6>
        </Link>
       </div>
    );
};

export default ShowCard;