import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Sell from './pages/Sell.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModalBody from './components/Modal/childrens/ModalBody';
import Signup from './components/Modal/childrens/Signup.jsx';
import Login from './components/Modal/childrens/Login.jsx';
import { auth } from './config/firebase.jsx';
import SellFirstStage from './components/SellFirstStage/SellFirstStage.jsx';
import CreatePost from './components/CreatePost/CreatePost.jsx';
import Modal from './components/Modal/Modal.jsx';
import Product from './pages/Product.jsx';
import Post from './pages/Post.jsx';
import Wishlist from './pages/Wishlist.jsx'

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element: <Home />,
        children:[
          {
            path: 'auth',
            element: <Modal />,
            children: [
              {
                path: '',
                element: <ModalBody />
              },
              {
                path: 'login',
                element: <Login />
              },
              {
                path: 'signup',
                element: <Signup />
              }
            ]
          }
        ]
      },
      {
        path:'sell',
        element: <Sell />,
        children:[
          {
            path:'',
            element:<SellFirstStage />
          },
          {
            path:'post',
            element: <CreatePost />
          }
        ]
      },
      {
        path:'product',
        element:<Product />
      },
      {
        path:'mypost',
        element: <Post />
      },
      {
        path:'wishlist',
        element: <Wishlist />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={userRouter} />
  </React.StrictMode>,
)
