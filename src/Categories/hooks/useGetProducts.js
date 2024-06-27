
  
import React, { useState, useEffect } from 'react';
import { getCategories } from '../utils';


export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{width: '200px'}} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default useGetProducts;
