import { Link } from "react-router-dom";
import { Navbar, CartCard, CartSummary } from "../../components";
import { useCart } from "../../contexts";
import "./Cart.css";

export const Cart = () => {
  const { cartState } = useCart();
  const { cart } = cartState;
  return (
    <>
      <Navbar />
      <main>
        <p className="text-l text-bold text-center">
          MY CART {cart.length ? `(${cart.length})` : ""}
        </p>
        {cart.length ? (
          <div className="cart-container flex-row flex-wrap">
            <div className="cart-product-section flex-col">
              {cart.map((product) => (
                <CartCard productDetails={product} key={product._id} />
              ))}
            </div>
            <CartSummary />
          </div>
        ) : (
          <div className="cart-container flex-col align-center gp-l">
            <span className="text-center">
              <p className="text-xl text-bold">Your cart is empty!</p>
              <p className="text-m">Add items to it now.</p>
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
