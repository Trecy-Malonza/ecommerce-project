


import React from 'react';
import { useGetProducts } from './hooks/useGetProducts'; 

const Products = ({products}) => {
  // const { products, error } = useGetProducts();
  if (!products || !Array.isArray(products)) {
         return <div>No products available</div>;

  // if (error) {
  //   return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* <h1>Products</h1> */}
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


// const Products = ({ products }) => {
//   if (!products || !Array.isArray(products)) {
//     return <div>No products available</div>;
//   }

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Products;