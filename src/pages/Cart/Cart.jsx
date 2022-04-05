import cap from "../../assets/images/cap.jpg";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Cart.css";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <main>
        <p className="text-l text-bold text-center">MY CART (2)</p>
        <div className="cart-container flex-row flex-wrap">
          <div className="cart-product-section flex-col">
            <div className="card card-horizontal shadow-1 br-s">
              <div className="card-horizontal-media">
                <img src={cap} alt="card media" />
              </div>
              <div className="card-badge">33% off</div>
              <div className="card-horizontal-nonmedia">
                <div className="card-horizontal-details flex-col">
                  <p className="text-l text">DR3 - Daniel Ricciardo Cap</p>
                  <p className="text-xl text-bold">
                    ₹3350{" "}
                    <span className="text-l text-regular text-strike">
                      ₹5000
                    </span>
                  </p>
                  <p className="text-span-1 text-l text-bold">33% off</p>
                  <p>
                    Quantity: <span className="operator text-center">-</span>{" "}
                    <span className="text-bold">1</span>
                    <span className="operator text-center">+</span>
                  </p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-fill btn-m br-s solid">
                    Remove from cart
                  </button>
                  <button className="btn btn-fill btn-m br-s outline">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-horizontal shadow-1 br-s">
              <div className="card-horizontal-media">
                <img src={cap} alt="card media" />
              </div>
              <div className="card-badge">33% off</div>
              <div className="card-horizontal-nonmedia">
                <div className="card-horizontal-details flex-col">
                  <p className="text-l text">LN4 - Lando Norris Cap</p>
                  <p className="text-xl text-bold">
                    ₹3350{" "}
                    <span className="text-l text-regular text-strike">
                      ₹5000
                    </span>
                  </p>
                  <p className="text-span-1 text-l text-bold">33% off</p>
                  <p>
                    Quantity: <span className="operator text-center">-</span>{" "}
                    <span className="text-bold">1</span>
                    <span className="operator text-center">+</span>
                  </p>
                </div>
                <div className="card-actions">
                  <button className="btn btn-fill btn-m br-s solid">
                    Remove from cart
                  </button>
                  <button className="btn btn-fill btn-m br-s outline">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-price-section">
            <div className="price-card flex-col shadow-1 br-s">
              <p className="text-l text-bold">PRICE DETAILS</p>
              <hr />
              <div className="flex-row justify-between">
                <p>Price (2 items)</p>
                <p>₹ 10000</p>
              </div>
              <div className="flex-row justify-between">
                <p>Discount</p>
                <p>- ₹ 3300</p>
              </div>
              <div className="flex-row justify-between">
                <p>Delivery Charges</p>
                <p>₹ 1000</p>
              </div>
              <hr />
              <div className="text-bold flex-row justify-between">
                <p className="text-l">TOTAL AMOUNT</p>
                <p className="text-l">₹ 7700</p>
              </div>
              <hr />
              <p>You will save ₹3300 on this order</p>
              <button className="btn btn-m solid br-s">Place order</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
