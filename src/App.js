import "./styles/styles.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductListing } from "./pages/ProductListing/ProductListing.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { Login } from "./pages/Auth/Login/Login";
import { Signup } from "./pages/Auth/Signup/Signup";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ProductListing />
      <Cart />
      <Wishlist />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
