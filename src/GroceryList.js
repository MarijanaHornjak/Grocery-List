import React from "react";
import SingleGrocery from "./SingleGrocery";

const GroceryList = ({ items, removeGrocery }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <SingleGrocery
            key={item.id}
            item={item}
            removeGrocery={removeGrocery}
          />
        );
      })}
    </div>
  );
};

export default GroceryList;
