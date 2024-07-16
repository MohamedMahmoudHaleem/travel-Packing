import { useState } from "react";
import Item from "./Item.js";
export default function PackingList({ items, onDeleteItem, onToggleItem, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "des") sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sortedItem = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  function deleteList() {
    const confirmed = window.confirm("Are you sure to delete all items ?");
    if (confirmed) setItems((item) => item.splice(0, item.length));
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item itemObj={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="des">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
          <button onClick={deleteList}>CLEAR LIST</button>
        </div>
      </div>
    </>
  );
}
