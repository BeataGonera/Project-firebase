import {FC, useContext} from 'react';
import {StoreContext} from '../../StoreProvider';
import {useNavigate} from 'react-router-dom';
import styles from './Home.module.css';
import {ProductList} from '../ProductList/ProductList';

export const Home: FC = () => {
  const navigate = useNavigate();
  const { username, setUsername, setProducts } = useContext(StoreContext);

  const onLogout = (): void => {
    localStorage.removeItem('user');
    localStorage.removeItem('products');
    setUsername('');
    setProducts([]);
    navigate('/login');
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Witaj w naszej aplikacji {username}</p>
      <ProductList/>
      <button className={styles.logoutBtn} type='button' onClick={onLogout}>
        Wyloguj
      </button>
    </div>
  );
}