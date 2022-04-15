import { Link } from "react-router-dom";
import { useCart } from "../contexts";

export const Navbar = () => {
  const { cart, wishlist } = useCart();

  return (
    <header className="header">
      <Link to="/home">
        <div className="header-logo">
          <i className="fas fa-cogs fa-2x"></i>
          <h2>cluachShop</h2>
        </div>
      </Link>

      <div className="header-nav">
        <Link to="/login" className="btn outline btn-s br-s">
          Login
        </Link>
        <Link to="/products">
          <i className="fas fa-store icon"></i>
        </Link>
        <Link to="/wishlist">
          <div className="badge-container">
            <i className="fas fa-heart icon"></i>
            {wishlist.length ? (
              <span className="badge-number br-full">{wishlist.length}</span>
            ) : (
              <></>
            )}
            {/* <span className="badge-number br-full">2</span> */}
          </div>
        </Link>
        <Link to="/cart">
          <div className="badge-container">
            <i className="fas fa-shopping-cart icon"></i>
            {cart.length ? (
              <span className="badge-number br-full">{cart.length}</span>
            ) : (
              <></>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};
