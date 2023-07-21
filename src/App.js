import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import "./index.css";
import GroceryList from "./GroceryList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  getLocalStorage();
  const [items, setItems] = useState(getLocalStorage());

  const addGrocery = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeGrocery = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const editGrocery = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="center-section">
      <Form items={items} addGrocery={addGrocery} />
      <GroceryList
        items={items}
        removeGrocery={removeGrocery}
        editGrocery={editGrocery}
      />
    </section>
  );
}

export default App;
