import React, { useState } from "react";

const Form = ({ addGrocery }) => {
  const [newGrocery, setNewGrocery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newGrocery) return;
    addGrocery(newGrocery);
    setNewGrocery("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>Grocery List</h4>
      <div className="input-container">
        <input
          type="text"
          value={newGrocery}
          onChange={(e) => setNewGrocery(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
