import styles from './ProductList.module.css';
import {useContext, useEffect, useRef, useState} from 'react';
import {StoreContext} from '../../StoreProvider';

export const ProductList = () => {
  const { products, setProducts } = useContext(StoreContext);
  const [currentProduct, setCurrentProduct] = useState('');
  const inputRef = useRef<HTMLInputElement|null>(null);

  const addProduct = (): void => {
    const updatedProducts = [...products, currentProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.addProductContainer}>
        <input
          ref={inputRef}
          type='text'
          name='Product'
          placeholder='Add product'
          onChange={(event) => setCurrentProduct(event.target.value)}
          />
        <button type='button' onClick={addProduct}>Dodaj produkt</button>
      </div>
      <div className={styles.list}>
        {
          products.map((product, index) =>
            <p className={styles.product} key={index}>{product}</p>
          )
        }
      </div>
    </div>
  );
}