import landingPageImg from "../../assets/images/landingPageImg.jpg";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <header class="header header-home">
        <a href="/index.html">
          <div class="header-logo">
            <i class="fas fa-cogs fa-2x"></i>
            <h2>cluachShop</h2>
          </div>
        </a>
        <div class="header-nav">
          <a
            href="/pages/authentication/login.html"
            class="btn outline btn-s br-s"
          >
            Login
          </a>
        </div>
      </header>
      <main class="lp-container flex-row justify-center align-center">
        <div class="lp-img-container">
          <img src={landingPageImg} class="img-responsive" alt="mclaren" />
        </div>
        <div class="flex-col justify-center align-center gp-2xl">
          <p class="lp-heading text-center text-bold">
            Formula 1 Caps at
            <br />
            33% Discount
          </p>
          <a
            href="../ProductListing/ProductListing.html"
            class="btn btn-l outline br-s"
          >
            Buy Now
          </a>
        </div>
      </main>
    </>
  );
};
