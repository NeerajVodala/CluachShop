import "./Home.css";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useCategory, useFilters } from "../../contexts";

export const Home = () => {
  const navigate = useNavigate();
  const { filterDispatch: dispatch } = useFilters();
  const { dbCategories } = useCategory();
  const categoryHandler = (category) => {
    dispatch({ type: "CLEAR_ALL" });
    dispatch({ type: "COLLECTION_FILTER", payload: category });
    navigate("/products");
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div
          className="homepage-banner"
          onClick={() => {
            dispatch({ type: "CLEAR_ALL" });
            navigate("/products");
          }}
        >
          <img
            src="https://raw.githubusercontent.com/NeerajVodala/cluachshop/homepage-new/src/assets/images/f1-banner-1.jpg"
            alt="responsive image"
            className="img-responsive"
          ></img>
        </div>
        {dbCategories.map((category) => {
          return (
            <div
              key={category.collectionId}
              onClick={() => categoryHandler(category.collectionId)}
            >
              <img
                src={category.imageUrl}
                alt="responsive image"
                className="img-responsive"
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
};
