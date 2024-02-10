import { useContext, createContext } from 'react';

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

export const LoadingContext = createContext<LoadingState>({
  isLoading: false,
  setIsLoading: () => {
    console.error('Using LoadingContext without Provider is forbidden!');
  },
});

export const useLoadingContext = () => useContext(LoadingContext);
