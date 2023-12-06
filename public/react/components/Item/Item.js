import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (props) => {

  return <>
    <Link to={`/${props.item.id}`}>
      <h3>{props.item.name}</h3>
      <img src={props.item.image} alt={props.item.name} />
    </Link>
  </>
} 
	