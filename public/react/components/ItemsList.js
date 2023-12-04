import React from "react";
import { Sauce } from "./Sauce";

export const ItemsList = ({ items }) => {
  if (!items) {
    return <h1>no Items</h1>;
  } else {
	console.log("Items length: " + items.length);
  }
  return (
    <div>
      {items.map((sauce, idx) => (
        <Sauce sauce={sauce} key={idx} />
      ))}
    </div>
  );
};
