import React from 'react';
import './Categories.css'; 
import furnitureImage from '../Images/furn.jpeg';
import handbagImage from '../Images/handbag.jpeg';
import booksImage from '../Images/booksImage.jpeg';
import techImage from '../Images/techImage.jpeg';
import sneakersImage from '../Images/sneakersImage.jpeg';
import travelImage from '../Images/travel.jpeg';

const categories = [
  { name: 'Furniture', image: furnitureImage },
  { name: 'Hand Bag', image: handbagImage },
  { name: 'Books', image: booksImage },
  { name: 'Tech', image: techImage },
  { name: 'Sneakers', image: sneakersImage },
  { name: 'Travel', image: travelImage }
];

const Categories = () => (
  <div className="categories-wrapper">
    <h2>Shop Our Top Categories</h2>
    <div className="categories-list">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Categories;
