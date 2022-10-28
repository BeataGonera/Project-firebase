import React, {FC, useContext, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import {Login} from './components/Login/Login';
import {Home} from './components/Home/Home';
import {StoreContext} from './StoreProvider';

export const App: FC = () => {
  const navigate = useNavigate();
  const { username, setUsername, setProducts } = useContext(StoreContext);

  useEffect((): void => {
    const userFromStorage = localStorage.getItem('user');
    const productsFromStorage = localStorage.getItem('products');
    if (!userFromStorage) {
      return;
    }
    const parsedProducts = JSON.parse(productsFromStorage || '[]');
    const parsedUser = JSON.parse(userFromStorage);
    setProducts(parsedProducts);
    setUsername(parsedUser?.login || '');
  }, []);

  useEffect((): void => {
    if (username) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [username]);

  return (
    <Routes>
      <Route path='/login' element={<Login/>}>
      </Route>
      <Route path='/home' element={<Home/>}>
      </Route>
    </Routes>
  );
}
