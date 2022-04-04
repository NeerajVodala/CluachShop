export const Navbar = () => {
  return (
    <>
      <header class="header">
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
          <a href="/pages/wishlist.html">
            <div class="badge-container">
              <i class="far fa-heart icon"></i>
              <span class="badge-number br-full">2</span>
            </div>
          </a>
          <a href="/pages/cart.html">
            <div class="badge-container">
              <i class="fas fa-shopping-cart icon"></i>
              <span class="badge-number br-full">2</span>
            </div>
          </a>
        </div>
      </header>
    </>
  );
};
