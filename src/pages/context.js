import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ContextApp = createContext();

export default function ContextComponent({ children }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const data = (await axios.get('https://fakestoreapi.com/products')).data;

      const newarr = [];

      data.map((j) => {
        const oldcount = j.rating.count;
        const newj = { ...j, count: oldcount };
        newarr.push(newj);
        setproducts([...newarr]);
      });
    }
    fetchdata();
  }, []);

  return (
    <ContextApp.Provider value={[products, setproducts]}>
      {children}
    </ContextApp.Provider>
  );
}
