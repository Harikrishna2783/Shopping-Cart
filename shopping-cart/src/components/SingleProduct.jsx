
import { cartState } from '../context/Context'

import { Button, Card } from 'react-bootstrap'

const SingleProduct = ({prod}) => {
    const{state : {cart}, dispatch} = cartState()

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.thumbnail} alt={prod.title} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.toFixed(0)}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
               Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
