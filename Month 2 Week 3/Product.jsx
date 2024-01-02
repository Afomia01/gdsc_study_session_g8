// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  // Fetch product details based on the id from your data or API

  return (
    <div>
      <h2>Product Details</h2>
      {/* Display product details */}
      <p>Product ID: {id}</p>
      {/* Add more details as needed */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
