import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';
import { firebaseContext } from './store/firebaseContext.jsx'
import { Outlet } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser({
        name: user.displayName,
        userId: user.uid,
      });
      else setUser(null);
    })
  }, [user]);
  const handleUser = (val) => {
    setUser(val);
  }

  return (
    <>
      <firebaseContext.Provider value={{name:user?.name, userId:user?.userId, handleUser}}>
        <Outlet />
      </firebaseContext.Provider>
    </>
  )
}

export default App
