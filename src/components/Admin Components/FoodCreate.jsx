import React, { useEffect, useRef, useState } from 'react'
import AxiosService, { AxiosServiceWithFileUpload } from '../../utils/ApiService'
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';


function FoodCreate() {
 
  let navigate = useNavigate()
  let [dish, setDish] = useState("")
  let [des, setDes] = useState("")
  let [price, setPrice] = useState("")
  let [category, setCategory] = useState("")
  let [showInWeb, setShowInWeb] = useState("None")
  const [selectedFile, setSelectedFile] = useState(null);
  const [validated, setValidated] = useState(false);
  const fileInputRef = useRef(null);
  let logout = useLogout()


  const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file)
      setSelectedFile(file);
  };



  let AddDish = async (e) => {
      try {
          let res = await AxiosServiceWithFileUpload.post('/food/createfood', {
              image: selectedFile,
              food: dish,
              des: des,
              price: price,
              category: category,
              webPageSHowFoods: showInWeb
          })
          if (res.status === 201) {
              console.log("Success")
              setDish("")
              setDes("")
              setPrice("")
              setCategory("")
              setShowInWeb("None")
              setSelectedFile(null)
              setValidated(false);
              fileInputRef.current.value = '';
          }
      } catch (error) {
          if (error.response.status === 409) {
              console.log(`${dish} already exists`)
              setValidated(true);
          }
          else if (error.response.status === 422) {
              console.log(`Fill all the fiels`)
              setValidated(true);
          }else if(error.response.status === 401){
            logout()
            navigate("/")
          }
          else {
              setValidated(false);
          }
          console.log(error)
      }
  }

  const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
      } else {

          await AddDish()
      }

  }

  return <>
    <div className="container pt-4">
      <div className="row">
        <div className="col" style={{ height: "100%" }} >
          <>
        <h4 className='text-center'>Create Food</h4>
        <Form noValidate validated={validated}  >
            <Form.Group controlId="img" className="mb-1">
                <Form.Label>Upload Img of the dish</Form.Label>
                <Form.Control ref={fileInputRef} required type="file" onChange={handleFileChange} />
                <Form.Control.Feedback type="invalid">Please add a image</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="dish" className="mb-1">
                <Form.Label>Dish/Food</Form.Label>
                <Form.Control required type="text" onChange={(e) => setDish(e.target.value)} value={dish} />
                <Form.Control.Feedback type="invalid">Please choose Food Name</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="des" className="mb-1">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" onChange={(e) => setDes(e.target.value)} value={des} />
                <Form.Control.Feedback type="invalid">Please choose a Description</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="price" className="mb-1">
                <Form.Label>Price</Form.Label>
                <Form.Control required type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                <Form.Control.Feedback type="invalid">Please choose a Price</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="category" className="mb-1">
                <Form.Label>Category</Form.Label>
                <Form.Select required onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option></option>
                    <option value="Tiffen">Tiffen</option>
                    <option value="Sweet">Sweet</option>
                    <option value="Evenings Crackers">Evenings Crackers</option>
                    <option value="Rice">Rice</option>
                    <option value="Cool Drinks">Cool Drinks</option>
                    <option value="Kaaram">Kaaram</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">Please choose a category</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="showInPage" className="mb-1">
                <Form.Label>Show in webpage</Form.Label>
                <Form.Select required onChange={(e) => setShowInWeb(e.target.value)} value={showInWeb}>
                    <option>None</option>
                    <option value="Popular Items">Popular Items</option>
                    <option value="30 Min Delivery">30 Min Delivery</option>
                </Form.Select>
            </Form.Group>

            <Button className='me-3' variant="warning" type="button" onClick={handleSubmit} >
                Add Dish
            </Button>
            <Button className='ms-3' variant="primary" type="button" onClick={()=>navigate("/admin/allfood")} >
                Back to All Food
            </Button>
        </Form>
     
    </>
        </div>
      </div>
    </div>
  </>
}

export default FoodCreate