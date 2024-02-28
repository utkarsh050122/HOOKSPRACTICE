import React from 'react';
import FetchDataComponent from './components/FetchDataComponent';
import FullNameForm from './components/FullNameForm';
import Memo from './components/Memo/Memo';
import Counter from './components/callback/callback';
import ItemList from './components/reducer/Reducer';
import Menu from './components/menu/Menu';

function App() {
  // const { state, dispatch } = useCart();
  return (
    <div>
      {/* <h1>Shopping Cart</h1>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Product 1' } })}>
        Add Item to Cart
      </button>
      <div>
        Cart Items:
        {state.cart.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div> */}
      <Menu/>
      <h1>API Data Fetch Example</h1>
      <FetchDataComponent />
      <h2>Full Name Submission Form</h2>
      <FullNameForm />
      <h2>Memo</h2>
      <Memo/>
      <h2>COUNTER</h2>
      <Counter/>
      <h2>ITEMLIST</h2>
      <ItemList/>
    </div>
  );
}

export default App;
