import React, { useEffect, useState } from 'react'
import { cartState } from '../context/Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  const[total, setTotal] = useState(0);

  const {state:{cart}, dispatch} = cartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price.toFixed(0)), 0))
  }, [cart])

  return (
    <div style={{display:"flex", gap:"10px"}}>
      <div style={{display:"flex", width : "50%", padding:"20px", flexWrap:"wrap", justifyContent:"space-around"}}>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod?.thumbnail} alt={prod.title} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>₹ {prod.price.toFixed(0)}</Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div style={{display : "flex", flexDirection:'column', gap:"10px", width : "50%"}}>
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
