import cap from "../../assets/images/cap.jpg";
import { Navbar } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
  return (
    <>
      <Navbar />
      <main>
        <p className="text-l text-bold text-center">MY WISHLIST</p>
        <div className="wishlist-container flex-row justify-center flex-wrap">
          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div className="card-cross">
              <i className="fas fa-times-circle"></i>
            </div>
            <div className="card-badge">33% off</div>
            <div className="card-nonmedia">
              <div className="card-details flex-col">
                <p className="text-center text-l">DR3 - Daniel Ricciardo Cap</p>
                <p className="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span className="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-m btn-fill solid br-s">
                  Move to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div className="card-cross">
              <i className="fas fa-times-circle"></i>
            </div>
            <div className="card-badge">33% off</div>
            <div className="card-nonmedia">
              <div className="card-details flex-col">
                <p className="text-center text-l">CL16 - Charles Leclerc Cap</p>
                <p className="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span className="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-m btn-fill solid br-s">
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
