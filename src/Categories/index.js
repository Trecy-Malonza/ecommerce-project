// import './index.css';
// import React from 'react';
// import { useGetProducts } from './hooks/useGetProducts';

// // import homepod from '../Images/homepod.png';


// const Products =() =>{
//     const{products,error} =useGetProducts();
//     console.log(Products);
    
        
//         if (error) 
//             return <div>Error: {error}</div>;
//     }
//     return(
//       <div>
//         <h1>Products</h1>
//         <ul>
//           {products.map(product => (
//             <li key={product.id}>
//               <h2>{product.title}</h2>
//               <img src={product.image} alt={product.title} style={{width: '200px'}} />
//               <p>{product.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
    
//     );


//   export default Products;
    




// // function Categories(){
// //     return(
// //         <div>
// //             <div>
// //                 <div>
// //             <h3>Shop Our Top Categories</h3>
// //             </div>
// //             <div>
// //             <h5>Furniture</h5>
// //             <h5>Hand Bag</h5>
// //             <h5>Books</h5>
// //             <h5>Tech</h5>
// //             <h5>Sneakers</h5>
// //             <h5>Travel</h5>
// //             </div>
// //             </div>
// //             <div>
// //                 <div>
// //                     <h3>Todays Best Deals For You!</h3>
// //                 </div>
// //                 <div>
// //                     <img src={homepod} alt='homepod img'/>
                    
// //                 </div>

// //             </div>

// //         </div>
// //     )
// // }
// // export default Categories;


import React from 'react';
import { useGetProducts } from './hooks/useGetProducts'; 

const Products = () => {
  const { products, error } = useGetProducts();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
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
