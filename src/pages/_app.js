import ContextComponent from './context';
import Navbar from '@/components/navbar';
import ShoppingCART from './cartContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ContextComponent>
        <ShoppingCART>
          <Component {...pageProps} />
        </ShoppingCART>
      </ContextComponent>
    </>
  );
}
