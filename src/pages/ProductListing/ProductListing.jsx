import cap from "../../assets/images/cap.jpg";
import "./ProductListing.css";

export const ProductListing = () => {
  return (
    <>
      <main class="flex-row">
        <div class="filter-section flex-col gp-2xl">
          <div class="flex-row justify-between">
            <p class="text-l text-bold">Filters</p>
            <p class="text-l text-underline">clear</p>
          </div>
          <div class="flex-col gp-xl">
            <p class="text-l text-bold">Price</p>
            <div class="flex-row gp-s">
              <span>₹1000</span>
              <input
                type="range"
                min="1000"
                max="10000"
                step="1000"
                class="price-slider"
              />
              <span>₹10000</span>
            </div>
          </div>
          <div class="flex-col gp-xl">
            <p class="text-l text-bold">Collections</p>
            <div>
              <input type="checkbox" id="mclaren" />
              <label for="mclaren"> McLaren</label>
            </div>
            <div>
              <input type="checkbox" id="ferrari" />
              <label for="ferrari"> Ferrari</label>
            </div>
          </div>
          <div class="flex-col gp-xl">
            <p class="text-l text-bold">Rating</p>
            <div>
              <input type="radio" id="4-star" name="rating" value="4" />
              <label for="4-star"> 4 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="3-star" name="rating" value="3" />
              <label for="3-star"> 3 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="2-star" name="rating" value="2" />
              <label for="2-star"> 2 Stars & above</label>
            </div>
            <div>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star"> 1 Stars & above</label>
            </div>
          </div>
          <div class="flex-col gp-xl">
            <p class="text-l text-bold">Sort by</p>
            <div>
              <input type="radio" id="price-l2h" name="sort" />
              <label for="price-l2h"> Price - Low to High </label>
            </div>
            <div>
              <input type="radio" id="price-h2l" name="sort" />
              <label for="price-h2l"> Price - High to Low</label>
            </div>
          </div>
        </div>
        <div class="product-section flex-row flex-wrap gp-2xl">
          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
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
                <button class="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button class="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div class="card-badge">33% off</div>
            <div class="card-nonmedia">
              <div class="card-details flex-col">
                <p class="text-center text-l">LN4 - Lando Norris Cap</p>
                <p class="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span class="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div class="card-actions">
                <button class="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button class="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
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
                <button class="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button class="btn btn-m btn-fill br-s outline">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="card card-vertical flex-col shadow-1 br-s">
            <div class="card-media">
              <img src={cap} alt="card media" />
            </div>
            <div class="card-badge">33% off</div>
            <div class="card-nonmedia">
              <div class="card-details flex-col">
                <p class="text-center text-l">CS5 - Carlos Sainz Cap</p>
                <p class="text-center text-bold text-xl">
                  ₹3350{" "}
                  <span class="text-m text-regular text-strike">₹5000</span>
                </p>
              </div>
              <div class="card-actions">
                <button class="btn btn-m btn-fill br-s solid">
                  Add to Cart
                </button>
                <button class="btn btn-m btn-fill br-s outline">
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
