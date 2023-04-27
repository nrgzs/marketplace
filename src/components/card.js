import { ContextApp } from '@/pages/context';
import { ShoppingCartContext } from '@/pages/cartContext';
import { useContext, useEffect } from 'react';
import Link from 'next/link';

export default function Card() {
  const [products, setproducts] = useContext(ContextApp);
  const [ShoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

  function add(item) {
    /*  localStorage.setItem('item', JSON.stringify(item)); */
    setShoppingCart((prev) => {
      return [...prev, { item: item, count: 1 }];
    });
    console.log(ShoppingCart);
  }
  return (
    <div className="container">
      {products.map((item) => {
        return (
          <div className="card-container" key={item.id}>
            <Link className="card-link" href={`./item/${item.id}`}>
              <img
                className="card-img"
                src={item.image}
                width={400}
                height={400}
                alt="image"
              ></img>
              <div className="card-title">
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </div>
            </Link>
            <Link className="card-link" href={'/cart'}>
              <button className="card-btn" onClick={() => add(item)}>
                ADD
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
