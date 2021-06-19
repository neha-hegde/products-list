import React from "react";
import './App.css';
import Products from "./Products";
import ProductsData from "./ProductsData";

const ProductsComponent = ProductsData.map((item) => {
  return (
      <Products key={item.id} product={item} />
  );
})

const App = () => {
  return (
    <div>
    <h1 className="header">Products</h1>
      {ProductsComponent}
    </div>
  );
}

export default App;
