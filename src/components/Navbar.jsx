import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
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
          <Link to="/wishlist">
            <div className="badge-container">
              <i className="far fa-heart icon"></i>
              <span className="badge-number br-full">2</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="badge-container">
              <i className="fas fa-shopping-cart icon"></i>
              <span className="badge-number br-full">2</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};
