// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCatergory } from "./Pages/ShopCatergory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
// import { ReactDOM } from "react-dom/client";
import { Footer } from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App"><Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<ShopCatergory banner={men_banner} category="men" />} />
          <Route path="womens" element={<ShopCatergory banner={women_banner} category="women" />} />
          <Route path="kids" element={<ShopCatergory banner={kid_banner} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
