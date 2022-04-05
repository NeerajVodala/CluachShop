import cap from "../../assets/images/cap.jpg";
import "./ProductListing.css";

export const ProductListing = () => {
  return (
    <>
      <main className="flex-row">
        <div className="filter-section flex-col gp-2xl">
          <div className="flex-row justify-between">
            <p className="text-l text-bold">Filters</p>
            <p className="text-l text-underline">clear</p>
          </div>
          <div className="flex-col gp-xl">
            <p className="text-l text-bold">Price</p>
            <div className="flex-row gp-s">
              <span>₹1000</span>
              <input
                type="range"
                min="1000"
                max="10000"
                step="1000"
                className="price-slider"
              />
              <span>₹10000</span>
            </div>
          </div>
          <div className="flex-col gp-xl">
            <p className="text-l text-bold">Collections</p>
            <div>
              <input type="checkbox" id="mclaren" />
              <label htmlFor="mclaren"> McLaren</label>
            </div>
            <div>
              <input type="checkbox" id="ferrari" />
              <label htmlFor="ferrari"> Ferrari</label>
            </div>
          </div>
          <div className="flex-col gp-xl">
            <p className="text-l text-bold">Rating</p>
            <div>
              <input type="radio" id="4-star" name="rating" value="4" />
              <label htmlFor="4-star"> 4 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="3-star" name="rating" value="3" />
              <label htmlFor="3-star"> 3 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="2-star" name="rating" value="2" />
              <label htmlFor="2-star"> 2 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label htmlFor="1-star"> 1 Stars & above</label>
            </div>
          </div>
          <div className="flex-col gp-xl">
            <p className="text-l text-bold">Sort by</p>
            <div>
              <input type="radio" id="price-l2h" name="sort" />
              <label htmlFor="price-l2h"> Price - Low to High </label>
            </div>
            <div>
              <input type="radio" id="price-h2l" name="sort" />
              <label htmlFor="price-h2l"> Price - High to Low</label>
            </div>
          </div>
        </div>
        <div className="product-section flex-row flex-wrap gp-2xl">
          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
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
                <button className="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button className="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div className="card-badge">33% off</div>
            <div className="card-nonmedia">
              <div className="card-details flex-col">
                <p className="text-center text-l">LN4 - Lando Norris Cap</p>
                <p className="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span className="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button className="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
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
                <button className="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button className="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="card card-vertical flex-col shadow-1 br-s">
            <div className="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div className="card-badge">33% off</div>
            <div className="card-nonmedia">
              <div className="card-details flex-col">
                <p className="text-center text-l">CS5 - Carlos Sainz Cap</p>
                <p className="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span className="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button className="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
