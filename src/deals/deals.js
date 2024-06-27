import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './deals.css';
import CategoryTabs from './CategoryTabs';
import ProductCard from './ProductCard';

function Deals() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
        setSelectedCategory(response.data[0]); 
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      
      axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>Today's Best Deals For You!</h1>
      <CategoryTabs 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Deals;
