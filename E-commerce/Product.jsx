
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const product = [
    {
      name: 'Fresh Apples',
      image: 'https://example.com/apples.jpg',
      price: 2.99,
      description: 'Sweet and juicy apples.',
    },
    {
      name: 'Cornflakes',
      image: 'https://example.com/cornflakes.jpg',
      price: 4.49,
      description: 'Crunchy cornflakes for a healthy breakfast.',
    },
    {
      name: 'Detergent',
      image: 'https://example.com/detergent.jpg',
      price: 8.99,
      description: 'Powerful detergent for clean clothes.',
    },
    {
      name: 'Refreshing Beverage',
      image: 'https://example.com/beverage.jpg',
      price: 1.99,
      description: 'A refreshing beverage to quench your thirst.',
    },
  ];


  const selectedProduct = products[id - 1]; 

  return (
    <div>
      <h2>Product Details</h2>
      {
        selectedProduct && (
          <>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price.toFixed(2)}</p>
          </>
        )
      }
      <p>Product ID: {id}</p>
      
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
