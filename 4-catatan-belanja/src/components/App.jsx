import { useState } from 'react';
import Header from './Header';
import { groceryItems } from './groceryItems';
import Form from './Form';
import GroceryList from './GroceryList';
import Footer from './Footer';

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(
      items.filter((item) => {
        return item.id != id;
      })
    );
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) => {
        return item.id == id ? { ...item, checked: !item.checked } : item;
      })
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList onClearItems={handleClearItems} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} items={items} />
      <Footer items={items} />
    </div>
  );
}
