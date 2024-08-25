import React from 'react'
import { cartState } from '../context/Context'
import SingleProduct from '../components/SingleProduct'

const Home = () => {
  const{state : {products}, dispatch} = cartState()
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex", width : "100%", padding:"20px", flexWrap:"wrap", justifyContent:"space-around"}}>
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
