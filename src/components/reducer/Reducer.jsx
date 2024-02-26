import React, { useReducer, useState } from 'react';

const initialState = {
  items: []
};


function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.payload] };
    case 'remove':
      return { items: state.items.filter((_, index) => index !== action.payload) };
    default:
      throw new Error();
  }
}


function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    dispatch({ type: 'add', payload: inputValue });
    setInputValue(''); // Clear input field after adding
  };

  const handleRemoveItem = (index) => {
    dispatch({ type: 'remove', payload: index });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
