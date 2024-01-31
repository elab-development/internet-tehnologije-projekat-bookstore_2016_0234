
import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/ShopService';
import { Product } from '../components/ShopItem';
import '../styles/shop.css';


export const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.books);
      } catch (error) {
        console.error('Failed to fetch books:', error.message);
      }
    };

    fetchBooks();
  }, []); 

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Explore the shop</h1>
      </div>

      <div className="products">
        {books.map((book) => (
          <Product key={book.id} data={book} />
        ))}
      </div>
    </div>
  );
};