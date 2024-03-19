export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list! 🧳</em>
      </p>
    );
  const totalItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed);
  const percentage = Math.round((numberOfPacked.length / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼 You have ${totalItems} items on your list and you already packed
        ${numberOfPacked.length} (${percentage}%)`
          : `You got everything! Ready to go ✈`}
      </em>
    </footer>
  );
}
