import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import  Stats  from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }
  function handelRemoveItem(id) {
    setItems((i) => i.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((i) => i.map((item) => (item.id === id ? { ...item, packed: !item.packed } : { ...item })));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handelRemoveItem} onToggleItem={handleToggleItem} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
