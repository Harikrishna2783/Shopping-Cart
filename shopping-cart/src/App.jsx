
import './App.css'
import { cartState } from './context/Context'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from './layout/AppLayout'
import Home from "./pages/Home"
import Cart from './pages/Cart'

function App() {

  const{state : {products}} = cartState()

  console.log(products);

  const router = createBrowserRouter([{
    element : <AppLayout />,
    children : [
      {
        element : <Home />,
        path : "/",
      },
      {
        element : <Cart />,
        path : "/cart"
      }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
