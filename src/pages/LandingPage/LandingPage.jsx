import { Link } from "react-router-dom";
import landingPageImg from "../../assets/images/landingPageImg.jpg";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <header className="header header-home">
        <Link to="/home">
          <div className="header-logo">
            <i className="fas fa-cogs fa-2x"></i>
            <h2>cluachShop</h2>
          </div>
        </Link>
        <div className="header-nav">
          <Link to="/login" className="btn outline btn-s br-s">
            Login
          </Link>
        </div>
      </header>
      <main className="lp-container flex-row justify-center align-center">
        <div className="lp-img-container">
          <img src={landingPageImg} className="img-responsive" alt="mclaren" />
        </div>
        <div className="flex-col justify-center align-center gp-2xl">
          <p className="lp-heading text-center text-bold">
            Formula 1 Caps at
            <br />
            33% Discount
          </p>
          <Link to="/products" className="btn btn-l outline br-s">
            Buy Now
          </Link>
        </div>
      </main>
    </>
  );
};
