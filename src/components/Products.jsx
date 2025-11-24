import React from "react";
import useFetch from "../hooks/useFetch";
import '../styles/Products.css';

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div className="products-container">
      <h1>Products List</h1>
      <div className="products-grid">
        {data?.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images?.[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

