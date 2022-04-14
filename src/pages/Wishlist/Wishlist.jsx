import { Link } from "react-router-dom";
import { Navbar, WishlistCard } from "../../components";
import { useCart } from "../../contexts";
import "./Wishlist.css";

export const Wishlist = () => {
  const { cartState } = useCart();
  const { wishlist } = cartState;
  return (
    <>
      <Navbar />
      <main>
        <p className="text-l text-bold text-center">
          MY WISHLIST {wishlist.length ? `(${wishlist.length})` : ""}
        </p>
        {wishlist.length ? (
          <div className="wishlist-container flex-row justify-center flex-wrap">
            {wishlist.map((product) => (
              <WishlistCard productDetails={product} key={product._id} />
            ))}
          </div>
        ) : (
          <div className="cart-container flex-col align-center gp-l">
            <span className="text-center">
              <p className="text-xl text-bold">Empty Wishlist</p>
              <p className="text-m">
                You have no items in your wishlist. Start adding!
              </p>
            </span>
            <button className="btn btn-m solid br-s">
              <Link to="/products">Shop now</Link>
            </button>
          </div>
        )}
      </main>
    </>
  );
};
