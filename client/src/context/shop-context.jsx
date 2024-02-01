import { createContext, useState, useEffect } from 'react'
import { getBooks } from '../services/ShopService';



export const ShopContext = createContext(null)

const getDefaultCart = (books) => {
  let cart = {};
  books.forEach((book) => {
    cart[book.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.books);
        // Initialize cart items based on fetched books
        setCartItems(getDefaultCart(response.books));
      } catch (error) {
        console.error('Failed to fetch books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const book = books.find((book) => book.id === Number(itemId));
        totalAmount += cartItems[itemId] * book.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(books));
  };

  const contextValue = {
    books,
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
