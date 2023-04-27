import { ContextApp } from '@/pages/context';
import { ShoppingCartContext } from '@/pages/cartContext';
import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Shopping() {
  const [products, setproducts] = useContext(ContextApp);
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
  const inptVal = useRef();
  console.log(ShoppingCart);

  function setcount() {
    const value = inptVal.current.value;

    ShoppingCart.map((i) => {
      setShoppingCart({ ...i, count: value });
      const newarr = [];
      products.map((j) => {
        if (i.item.id == j.id) {
          const newcount = parseInt(j.count) - parseInt(value);

          const newj = { ...j, count: newcount };
          console.log(newj);
          newarr.push(newj);
        } else {
          newarr.push(j);
        }
      });
      console.log(newarr);
      setproducts(newarr);
      setShoppingCart([]);
      console.log(products);
    });
  }
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {ShoppingCart?.map((item) => {
        return (
          <div className="cart-item" key={item.item.id}>
            <Link className="cart-item-title" href={`/item/${item.item.id}`}>
              <h3>{item.item.title}</h3>
            </Link>
            <div className="cart-count">Items left {item.item.count}</div>
            <input
              defaultValue={1}
              className="cart-input"
              type="number"
              ref={inptVal}
              placeholder="1"
              min={1}
            />
          </div>
        );
      })}
      <button className="cart-btn" onClick={setcount}>
        PLACE ORDER
      </button>
    </div>
  );
}
