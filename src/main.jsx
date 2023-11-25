import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { userRouter } from './config/router';
import { FirebaseProvider } from './store/firebaseContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={userRouter} />
    </FirebaseProvider>
  </React.StrictMode>,
)

