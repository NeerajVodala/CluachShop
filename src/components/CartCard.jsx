import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts";
import { checkProductIn } from "../utils";

export const CartCard = ({ productDetails }) => {
  const { _id, title, price, discount, discountPrice, imageUrl, quantity } =
    productDetails;
  const { wishlist, cartDispatch } = useCart();
  const navigate = useNavigate();
  const productInWishlist = checkProductIn(wishlist, _id);
  const moveToWishlist = () => {
    if (!productInWishlist)
      cartDispatch({ type: "ADD_TO_WISHLIST", payload: productDetails });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: _id });
  };
  return (
    <div className="card card-horizontal shadow-1 br-s">
      <div className="card-horizontal-media">
        <img src={imageUrl} alt="card media" />
      </div>
      <div className="card-badge">{discount}% off</div>
      <div className="card-horizontal-nonmedia flex-col">
        <p className="text-l text">{title}</p>
        <p className="text-l text-bold">
          ₹{discountPrice}{" "}
          <span className="text-m text-regular text-strike">₹{price}</span>
        </p>
        <p className="flex-row align-center gp-m">
          Quantity:{" "}
          <button
            className={`operator ${
              quantity === 1 ? "operator-disabled" : ""
            } br-full`}
            disabled={quantity === 1}
            onClick={() =>
              cartDispatch({ type: "DECREMENT_CART_ITEM", payload: _id })
            }
          >
            -
          </button>{" "}
          <span className="text-bold">{quantity} </span>
          <button
            className="operator br-full"
            onClick={() =>
              cartDispatch({ type: "INCREMENT_CART_ITEM", payload: _id })
            }
          >
            +
          </button>
        </p>
        <div className="card-actions">
          <button
            className="btn btn-fill btn-m br-s outline"
            onClick={moveToWishlist}
          >
            Move to Wishlist
          </button>
          <button
            className="btn btn-fill btn-m br-s outline"
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
            }
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
