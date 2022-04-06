export const ProductFilters = () => {
  return (
    <>
      <div className="filter-section flex-col gp-2xl">
        <div className="flex-row justify-between">
          <p className="text-l text-bold">FILTERS</p>
          <p
            className="text-m text-underline"
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
          >
            CLEAR ALL
          </p>
        </div>
        <div className="flex-col gp-xl">
          <p className="text-l text-bold">COLLECTIONS</p>
          <div>
            <input
              type="checkbox"
              id="mclaren"
              onChange={() =>
                dispatch({ type: "COLLECTION_FILTER", payload: "MCL" })
              }
              checked={collections.MCL}
            />
            <label htmlFor="mclaren"> McLaren F1</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ferrari"
              onChange={() =>
                dispatch({ type: "COLLECTION_FILTER", payload: "SF" })
              }
              checked={collections.SF}
            />
            <label htmlFor="ferrari"> Scuderia Ferrari</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mercedes"
              onChange={() =>
                dispatch({ type: "COLLECTION_FILTER", payload: "MB" })
              }
              checked={collections.MB}
            />
            <label htmlFor="mercedes"> Mercedes-AMG Petronas</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="redbull"
              onChange={() =>
                dispatch({ type: "COLLECTION_FILTER", payload: "RBR" })
              }
              checked={collections.RBR}
            />
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
              value={price}
              onChange={(e) =>
                dispatch({ type: "PRICE_FILTER", payload: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex-col gp-xl">
          <p className="text-l text-bold">DISCOUNT</p>
          <div>
            <input
              type="radio"
              id="10percent"
              name="discount"
              value="10"
              onChange={() =>
                dispatch({ type: "DISCOUNT_FILTER", payload: 10 })
              }
            />
            <label htmlFor="10percent"> 10% and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="20percent"
              name="discount"
              value="20"
              onChange={() =>
                dispatch({ type: "DISCOUNT_FILTER", payload: 20 })
              }
            />
            <label htmlFor="20percent"> 20% and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="30percent"
              name="discount"
              value="30"
              onChange={() =>
                dispatch({ type: "DISCOUNT_FILTER", payload: 30 })
              }
            />
            <label htmlFor="30percent"> 30% and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="40percent"
              name="discount"
              value="40"
              onChange={() =>
                dispatch({ type: "DISCOUNT_FILTER", payload: 40 })
              }
            />
            <label htmlFor="40percent"> 40% and above</label>
          </div>
          <div>
            <input
              type="radio"
              id="50percent"
              name="discount"
              value="50"
              onChange={() =>
                dispatch({ type: "DISCOUNT_FILTER", payload: 50 })
              }
            />
            <label htmlFor="50percent"> 50% and above</label>
          </div>
        </div>
        <div className="flex-col gp-xl">
          <p className="text-l text-bold">SORT BY</p>
          <div>
            <input
              type="radio"
              id="price-h2l"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT_FILTER", payload: "HIGH_TO_LOW" })
              }
            />
            <label htmlFor="price-h2l"> Price - High to Low</label>
          </div>
          <div>
            <input
              type="radio"
              id="price-l2h"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT_FILTER", payload: "LOW_TO_HIGH" })
              }
            />
            <label htmlFor="price-l2h"> Price - Low to High </label>
          </div>
        </div>
      </div>
    </>
  );
};
