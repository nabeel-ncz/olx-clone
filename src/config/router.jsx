import '../index.css';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Sell from '../pages/Sell.jsx'
import ModalBody from '../components/Modal/childrens/ModalBody';
import Signup from '../components/Modal/childrens/Signup.jsx';
import Login from '../components/Modal/childrens/Login.jsx';
import SellFirstStage from '../components/SellFirstStage/SellFirstStage.jsx';
import CreatePost from '../components/CreatePost/CreatePost.jsx';
import Modal from '../components/Modal/Modal.jsx';
import Product from '../pages/Product.jsx';
import Post from '../pages/Post.jsx';
import Wishlist from '../pages/Wishlist.jsx'

export const userRouter = createBrowserRouter([
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
          path:'mypost/:id',
          element: <Post />
        },
        {
          path:'wishlist',
          element: <Wishlist />
        }
      ]
    }
  ])