import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function OrderPlaced() {
  const location = useLocation();
  const receivedData = location.state?.data || 'Default Data';
  let orderData = useSelector((state) => state.orderData)


  return <>
    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "80vh" }}>
      <h3>Order Placed Successfully 🎉</h3>
      {orderData.length > 0 && (
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title>Food Ordered: {orderData[0].food}</Card.Title>
            <Card.Text>Food Description: {orderData[0].des}</Card.Text>
            <Card.Text>Price: {orderData[0].price}</Card.Text>
            Delivering to: {receivedData}
          </Card.Body>
        </Card>
      )}
    </div>
  </>
}

export default OrderPlaced