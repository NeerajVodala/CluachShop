export const ProductCard = ({ productDetail }) => {
  const { title, collection, price, discount, discountPrice, imageUrl } =
    productDetail;

  return (
    <>
      <div className="card card-vertical flex-col shadow-1 br-s">
        <div className="card-media br-s">
          <img src={imageUrl} alt="card media" />
        </div>
        <div className="card-badge">{discount}% off</div>
        <div className="card-nonmedia">
          <div className="card-details flex-col">
            <p className="text-center text-m">{title}</p>
            <p className="text-center text-bold text-l">
              ₹{discountPrice}{" "}
              <span className="text-s text-regular text-strike">₹{price}</span>
            </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-s btn-fill br-s outline">
              Save to Wishlist
            </button>
            <button className="btn btn-s btn-fill br-s solid">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
