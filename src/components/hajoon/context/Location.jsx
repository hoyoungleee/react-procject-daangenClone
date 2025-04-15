import AuthContext from './Location.js';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
  const [myLocation, setMyLocation] = useState('서초동');

  const pick = (choose) => setMyLocation(choose);

  return (
    <AuthContext.Provider value={{ myLocation, pick }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
