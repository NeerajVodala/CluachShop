export const ProductFilters = () => {
  return (
    <>
      <div className="filter-section flex-col gp-2xl">
        <div className="flex-row justify-between">
          <p className="text-l text-bold">FILTERS</p>
          <p className="text-m text-underline">CLEAR ALL</p>
        </div>
        <div className="flex-col gp-xl">
          <p className="text-l text-bold">COLLECTIONS</p>
          <div>
            <input type="checkbox" id="mclaren" />
            <label htmlFor="mclaren"> McLaren F1</label>
          </div>
          <div>
            <input type="checkbox" id="ferrari" />
            <label htmlFor="ferrari"> Scuderia Ferrari</label>
          </div>
          <div>
            <input type="checkbox" id="mercedes" />
            <label htmlFor="mercedes"> Mercedes-AMG Petronas</label>
          </div>
          <div>
            <input type="checkbox" id="redbull" />
            <label htmlFor="redbull"> Red Bull Racing</label>
          </div>
        </div>
        <div className="flex-col gp-xl">
          <p className="text-l text-bold">PRICE</p>
          <div className="flex-col flex-end gp-s">
            <div className="flex-row justify-between">
              <span>₹1k</span>
              <span>₹2k</span>
              <span>₹3k</span>
              <span>₹4k</span>
              <span>₹5k</span>
            </div>
            <input
              type="range"
              min="1000"
              max="5000"
              step="1000"
              className="price-slider"
            />
          </div>
        </div>

        <div className="flex-col gp-xl">
          <p className="text-l text-bold">DISCOUNT</p>
          <div>
            <input type="radio" id="10percent" name="discount" value="10" />
            <label htmlFor="10percent"> 10% and above</label>
          </div>
          <div>
            <input type="radio" id="20percent" name="discount" value="20" />
            <label htmlFor="20percent"> 20% and above</label>
          </div>
          <div>
            <input type="radio" id="30percent" name="discount" value="30" />
            <label htmlFor="30percent"> 30% and above</label>
          </div>
          <div>
            <input type="radio" id="40percent" name="discount" value="40" />
            <label htmlFor="40percent"> 40% and above</label>
          </div>
          <div>
            <input type="radio" id="50percent" name="discount" value="50" />
            <label htmlFor="50percent"> 50% and above</label>
          </div>
        </div>
        <div className="flex-col gp-xl">
          <p className="text-l text-bold">SORT BY</p>
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
    </>
  );
};
