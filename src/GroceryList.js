import React from "react";
import SingleGrocery from "./SingleGrocery";

const GroceryList = ({ items, removeGrocery, editGrocery }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <SingleGrocery
            key={item.id}
            item={item}
            removeGrocery={removeGrocery}
            editGrocery={editGrocery}
          />
        );
      })}
    </div>
  );
};

export default GroceryList;
