export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start To Packing you Bag 🏓</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100 ? (
          <em className="packed">You Packed EveryThing! Ready To Go ✈</em>
        ) : (
          `You have ${numItems} items on your list, and you already packed ${numPacked} (${percent > 0 ? percent : ""}%)`
        )}
      </em>
    </footer>
  );
}
