export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Daftar Belanja Masih Kosong</footer>;
  }

  const checkedItems = items.filter((e) => {
    return e.checked == true;
  });

  return (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, {checkedItems.length} barang sudah dibeli ({Math.round((checkedItems.length / items.length) * 100)}%)
    </footer>
  );
}
