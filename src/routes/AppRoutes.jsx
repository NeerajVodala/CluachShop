import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  Home,
} from "../pages";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
