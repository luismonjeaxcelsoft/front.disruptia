import React from 'react';

export interface MyContextType {
    myMethod: () => void;
    pasos: number[];
    setActualizarPreview: any
  }

const MyContext = React.createContext<MyContextType | undefined>(undefined);

export default MyContext;