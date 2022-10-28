import {createContext, FC, ReactElement, useState} from 'react';

interface StoreContextState {
  username: string;
  setUsername: (username: string) => void;
  products: string[];
  setProducts: (products: string[]) => void;
}

interface StoreProviderProps {
  children: ReactElement;
}

const defaultStoreContextValue = {} as StoreContextState;

export const StoreContext = createContext(defaultStoreContextValue);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [products, setProducts] = useState<string[]>([]);

  return (
    <StoreContext.Provider value={{username, setUsername, products, setProducts}}>
      {children}
    </StoreContext.Provider>
  );
}