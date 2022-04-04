import cap from "../../assets/images/cap.jpg";
import "./Wishlist.css";

export const Wishlist = () => {
  return (
    <>
      <main>
        <p class="text-l text-bold text-center">MY WISHLIST</p>
        <div class="wishlist-container flex-row justify-center flex-wrap">
          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div class="card-cross">
              <i class="fas fa-times-circle"></i>
            </div>
            <div class="card-badge">33% off</div>
            <div class="card-nonmedia">
              <div class="card-details flex-col">
                <p class="text-center text-l">DR3 - Daniel Ricciardo Cap</p>
                <p class="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span class="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div class="card-actions">
                <button class="btn btn-m btn-fill solid br-s">
                  Move to Cart
                </button>
              </div>
            </div>
          </div>

          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div class="card-cross">
              <i class="fas fa-times-circle"></i>
            </div>
            <div class="card-badge">33% off</div>
            <div class="card-nonmedia">
              <div class="card-details flex-col">
                <p class="text-center text-l">CL16 - Charles Leclerc Cap</p>
                <p class="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span class="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div class="card-actions">
                <button class="btn btn-m btn-fill solid br-s">
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
