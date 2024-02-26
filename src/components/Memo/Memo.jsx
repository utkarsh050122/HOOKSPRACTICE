import React, { useMemo, useState } from 'react';

const LargeList = ({ items }) => {
  const processedList = useMemo(() => {
    return items.map(item => `Item: ${item}`).join(', ');
  }, [items]);

  return <div>{processedList}</div>;
};

const Memo = () => {
  const [items, setItems] = useState(Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`));

  const addItem = () => {
    setItems(currentItems => [...currentItems, `Item ${currentItems.length + 1}`]);
  };

  return (
    <div>
      <LargeList items={items} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default Memo;
