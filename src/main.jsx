import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.scss'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './redux/store'
import Home from './containers/Home'
import Layout from './containers/Layout'
import Products from './containers/Products'
import ShoppingCar from './containers/ShoppingCar'
import ShippingForm from './components/ShippingForm'
import Payment from './containers/Payment'
import Succses from './containers/Succes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'products',
        element: <Products/>
      },
      {
        path: 'shopping-car',
        element: <ShoppingCar/>
      },
      {
        path: 'shipping',
        element: <ShippingForm/>
      },
      {
        path: 'payment',
        element: <Payment/>,
      },
      {
        path: 'payment/succes',
        element: <Succses/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
)
