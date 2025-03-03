'use client';
import { createContext, useContext, useState } from 'react';

interface QnaContextProps {
  productName: string;
  productImage: string;
  setProduct: (name: string, image: string) => void;
}

const QnaContext = createContext<QnaContextProps | undefined>(undefined);

export const QnaProvider = ({ children }: { children: React.ReactNode }) => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');

  const setProduct = (name: string, image: string) => {
    setProductName(name);
    setProductImage(image);
  };

  return (
    <QnaContext.Provider value={{ productName, productImage, setProduct }}>
      {children}
    </QnaContext.Provider>
  );
};

export const useQna = () => {
  const context = useContext(QnaContext);
  if (!context) throw new Error('useQna must be used within a QnaProvider');
  return context;
};
