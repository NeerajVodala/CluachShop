import cap from "../../assets/images/cap.jpg";
import "./Cart.css";

export const Cart = () => {
  return (
    <>
      <main>
        <p class="text-l text-bold text-center">MY CART (2)</p>
        <div class="cart-container flex-row flex-wrap">
          <div class="cart-product-section flex-col">
            <div class="card card-horizontal shadow-1 br-s">
              <div class="card-horizontal-media">
                <img src={cap} alt="card media" />
              </div>
              <div class="card-badge">33% off</div>
              <div class="card-horizontal-nonmedia">
                <div class="card-horizontal-details flex-col">
                  <p class="text-l text">DR3 - Daniel Ricciardo Cap</p>
                  <p class="text-xl text-bold">
                    ₹3350{" "}
                    <span class="text-l text-regular text-strike">₹5000</span>
                  </p>
                  <p class="text-span-1 text-l text-bold">33% off</p>
                  <p>
                    Quantity: <span class="operator text-center">-</span>{" "}
                    <span class="text-bold">1</span>
                    <span class="operator text-center">+</span>
                  </p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-fill btn-m br-s solid">
                    Remove from cart
                  </button>
                  <button class="btn btn-fill btn-m br-s outline">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>

            <div class="card card-horizontal shadow-1 br-s">
              <div class="card-horizontal-media">
                <img src={cap} alt="card media" />
              </div>
              <div class="card-badge">33% off</div>
              <div class="card-horizontal-nonmedia">
                <div class="card-horizontal-details flex-col">
                  <p class="text-l text">LN4 - Lando Norris Cap</p>
                  <p class="text-xl text-bold">
                    ₹3350{" "}
                    <span class="text-l text-regular text-strike">₹5000</span>
                  </p>
                  <p class="text-span-1 text-l text-bold">33% off</p>
                  <p>
                    Quantity: <span class="operator text-center">-</span>{" "}
                    <span class="text-bold">1</span>
                    <span class="operator text-center">+</span>
                  </p>
                </div>
                <div class="card-actions">
                  <button class="btn btn-fill btn-m br-s solid">
                    Remove from cart
                  </button>
                  <button class="btn btn-fill btn-m br-s outline">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-price-section">
            <div class="price-card flex-col shadow-1 br-s">
              <p class="text-l text-bold">PRICE DETAILS</p>
              <hr />
              <div class="flex-row justify-between">
                <p>Price (2 items)</p>
                <p>₹ 10000</p>
              </div>
              <div class="flex-row justify-between">
                <p>Discount</p>
                <p>- ₹ 3300</p>
              </div>
              <div class="flex-row justify-between">
                <p>Delivery Charges</p>
                <p>₹ 1000</p>
              </div>
              <hr />
              <div class="text-bold flex-row justify-between">
                <p class="text-l">TOTAL AMOUNT</p>
                <p class="text-l">₹ 7700</p>
              </div>
              <hr />
              <p>You will save ₹3300 on this order</p>
              <button class="btn btn-m solid br-s">Place order</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
