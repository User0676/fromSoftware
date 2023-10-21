import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Barnes from "./components/Barnes/Barnes";
import Empty from "./components/Empty/Empty";
// import SingleProduct from "./components/SingleProduct/SingleProduct";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/barnes" element={<Barnes />} />
        <Route path="/find" element={<Empty />} />
        <Route path="/favourite" element={<Empty />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
