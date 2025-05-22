import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice';

const Cart = () => {
  let cartProducts=useSelector(state=> state.cart);
  let dispatch=useDispatch();

  function removeFromCart(product){
    dispatch(remove(product));
  }
  const cards = cartProducts.map((product) =>(
          <div className='col-12'>
              <Card key={product.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                      <Card.Title>{product.id} {product.title}</Card.Title>
                      <Card.Text>
                          {product.price}
                      </Card.Text>
                      <Button variant="danger" onClick={()=>{removeFromCart(product)}}>Remove Item</Button>
                  </Card.Body>
              </Card>
          </div>
      ))
  return (
    <div>
      <h1>Cart</h1>


    <div className="row">
      {cards}
    </div>
    </div>
  )
}

export default Cart
