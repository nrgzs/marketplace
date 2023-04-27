import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link" href={'/'}>
        <h1 className="nav-title">MarketPlace</h1>
      </Link>
      <Link className="link" href={'/cart'}>
        <div className="nav-shop-link"> Shopping Cart</div>
      </Link>
    </nav>
  );
}
