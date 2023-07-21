import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import "./index.css";

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
  return (
    <section className="center-section">
      <Form items={items} addGrocery={addGrocery} />
    </section>
  );
}

export default App;
