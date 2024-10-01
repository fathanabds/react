export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input checked={item.checked} onChange={() => onToggleItem(item.id)} type="checkbox" />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
