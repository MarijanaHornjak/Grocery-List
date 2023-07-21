import React, { useState } from "react";

const SingleGrocery = ({ item, removeGrocery }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-grocery">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => removeGrocery(item.id)}
        className="remove-btn"
      >
        remove
      </button>
    </div>
  );
};

export default SingleGrocery;
