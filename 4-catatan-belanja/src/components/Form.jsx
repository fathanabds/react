import { useState } from 'react';
import { groceryItems } from './groceryItems';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      return;
    }
    const newItem = {
      id: groceryItems.length > 0 ? groceryItems[groceryItems.length - 1].id + 1 : 1,
      name,
      quantity,
      checked: false,
    };

    onAddItem(newItem);

    setName('');
    setQuantity(0);
  }

  const quantityNum = [...Array(5)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Belanja Apa Hari Ini?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button>Tambah</button>
    </form>
  );
}
