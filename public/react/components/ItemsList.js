import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items }) => {
  if (!items) {
    return <h1>no Items</h1>;
  } else {
	console.log("Items length: " + items.length);
  }
  return (
    <div>
      {items.map((item, idx) => (
        <Item item={item} key={idx} />
      ))}
    </div>
  );
};
