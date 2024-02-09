import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Categories } from "./pages/Categories";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductByCategory } from "./pages/ProductByCategory";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { SearchResult } from "./pages/SearchResult";
import { PageNotFound } from "./components/PageNotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<ProductByCategory />} />
        <Route path="/cart" element={<Cart />}>
          <Route path="/cart/checkout" element={<Checkout />} />
        </Route>
        <Route path="/search" element={<SearchResult />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
