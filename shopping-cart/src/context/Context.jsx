import { createContext, useContext, useEffect, useReducer } from "react"
import { reducer } from "./reducers";

const Cart = createContext();

const Context = ({children}) => {

    const[state, dispatch] = useReducer(reducer, {
        products : [],
        cart : []
    });

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        dispatch({
            type : "DATA_FROM_API",
            payload : data.products,
        })
    }

    useEffect(() => {
        fetchProducts();
    }, [])

  return (
    <Cart.Provider value={{state, dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const cartState = () => {
    return useContext(Cart);
}
