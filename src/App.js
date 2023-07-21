import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import "./index.css";
import GroceryList from "./GroceryList";

function App() {
  const [items, setItems] = useState([]);

  const addGrocery = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };
  const removeGrocery = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };
  return (
    <section className="center-section">
      <Form items={items} addGrocery={addGrocery} />
      <GroceryList items={items} removeGrocery={removeGrocery} />
    </section>
  );
}

export default App;
