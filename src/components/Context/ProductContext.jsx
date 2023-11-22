import React, { createContext, useContext, useState, useEffect } from "react";
import { database } from "../../firebase.js";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const snapshot = await database.ref("products").once("value");
        const data = snapshot.val();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        clearProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
