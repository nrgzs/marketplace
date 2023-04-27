import { createContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext();

export default function ShoppingCART({ children }) {
  const [ShoppingCart, setShoppingCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={[ShoppingCart, setShoppingCart]}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
