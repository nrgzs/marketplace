import { createContext, useEffect, useState } from 'react';

export const ContextApp = createContext();

export default function ContextComponent({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      const newarr = [];

      data.map((j) => {
        const oldcount = j.rating.count;
        const newj = { ...j, count: oldcount };
        newarr.push(newj);
        setproducts([...newarr]);
      });
    }
    fetchdata();
    console.log(products);
  }, []);

  return (
    <ContextApp.Provider value={[products, setproducts]}>
      {children}
    </ContextApp.Provider>
  );
}
