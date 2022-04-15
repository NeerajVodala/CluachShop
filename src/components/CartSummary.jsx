import { useCart } from "../contexts";
import { getDiscountPrice, getTotalPrice } from "../utils";

export const CartSummary = () => {
  const { cart } = useCart();
  const totalPrice = getTotalPrice(cart);
  const discountPrice = getDiscountPrice(cart);
  return (
    <>
      <div className="cart-price-section">
        <div className="price-card flex-col shadow-1 br-s">
          <p className="text-m text-bold">PRICE DETAILS</p>
          <hr />
          <div className="flex-row justify-between">
            <p>
              Price ({`${cart.length} ${cart.length > 1 ? "items" : "item"}`})
            </p>
            <p>₹{totalPrice}</p>
          </div>
          <div className="flex-row justify-between">
            <p>Discount</p>
            <p>- ₹{discountPrice}</p>
          </div>
          <div className="flex-row justify-between">
            <p>Delivery Charges</p>
            <p>₹499</p>
          </div>
          <hr />
          <div className="text-bold flex-row justify-between">
            <p className="text-l">TOTAL AMOUNT</p>
            <p className="text-l">₹{totalPrice - discountPrice + 499}</p>
          </div>
          <hr />
          <p>You will save ₹{discountPrice} on this order</p>
          <button className="btn btn-m solid br-s">Place order</button>
        </div>
      </div>
    </>
  );
};
