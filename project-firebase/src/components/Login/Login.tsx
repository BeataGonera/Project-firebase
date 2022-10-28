import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {StoreContext} from '../../StoreProvider';
import styles from './Login.module.css';

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername } = useContext(StoreContext);

  const onLogin = (): void => {
    const user = { login, password };
    localStorage.setItem('user', JSON.stringify(user));
    setUsername(login);
    navigate('/home');
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Proszę zaloguj się żeby korzystać z aplikacji</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <input
            type='text'
            name='login'
            placeholder='Type login'
            onChange={(event) => setLogin(event.target.value)}
          />
          <input
            type='password'
            name='Password'
            placeholder='Type password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type='button' onClick={onLogin}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}