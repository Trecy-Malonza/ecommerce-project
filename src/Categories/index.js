


import React from 'react';


const Products = ({products}) => {
 
  if (!products || !Array.isArray(products)) {
         return <div>No products available</div>;

 
  }

  return (
    <div>
    
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;



