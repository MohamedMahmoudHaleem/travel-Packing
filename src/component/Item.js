export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  console.log(itemObj);
  return (
    <li>
      <input type="checkbox" value={itemObj.packed} onChange={() => onToggleItem(itemObj.id)} />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>{itemObj.packed ? "✅ " : "❌"}</button>
    </li>
  );
}
