
import React from "react"
import { PRODUCTS } from '../additional/ShopList'
import { Product } from '../components/ShopItem'
import "../styles/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Explore the shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};