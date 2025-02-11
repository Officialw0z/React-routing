import React from 'react';
import { useParams } from 'react-router-dom';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

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

const Product: React.FC = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id) : null;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
