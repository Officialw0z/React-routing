import React from 'react';
import { Link } from 'react-router-dom';
import { ProductInterface } from './Product';

const products: ProductInterface[] = [
  { id: 1, name: 'Alice', price: 57 },
  { id: 2, name: 'Vendela', price: 8634 },
  { id: 3, name: 'Maria', price: 5799 },
  { id: 4, name: 'Ludwig', price: 213 },
  { id: 5, name: 'Lucas', price: 2135 },
  { id: 6, name: 'Jesper', price: 1324 },
  { id: 7, name: 'Gino', price: 512 },
  { id: 8, name: 'Emilia', price: 234 },
  { id: 9, name: 'Simon', price: 1234 },
];

const Products: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
