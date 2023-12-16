import React, { useEffect, useState } from 'react'
import AxiosService, { AxiosServiceWithFileUpload } from '../../utils/ApiService'
import { Form, Button, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function FoodEdit() {
    let navigate = useNavigate()
    let params = useParams()
    let [food, setFood] = useState("")
    let [dish, setDish] = useState("")
    let [des, setDes] = useState("")
    let [price, setPrice] = useState("")
    let [category, setCategory] = useState("")
    let [showInWeb, setShowInWeb] = useState("None")
    const [selectedFile, setSelectedFile] = useState(null);
    const [validated, setValidated] = useState(false);
    let [imageText, setImageText] = useState(true)

    let getFoodById = async () => {
        try {
            let res = await AxiosService.get(`/food/${params.id}`)
            if (res.status === 200) {
                console.log(res.data.food)
                setDish(res.data.food.food)
                setDes(res.data.food.des)
                setPrice(res.data.food.price)
                setCategory(res.data.food.category)
                setShowInWeb(res.data.food.webPageSHowFoods)
                setFood(res.data.food)
            }
        } catch (error) {
            if (error.response.status === 401) {
                logout()
            }
        }
    }

    useEffect(() => {
        if (params.id) {
            getFoodById()
        }
        else {
            logout()
        }
    }, [])

    const handleFileChange = (event) => {
        console.log(event)
        const file = event.target.files[0];
        console.log(file)
        setSelectedFile(file);
        setImageText(false)
    };

    let EditDish = async (e) => {
        try {
            let res = await AxiosServiceWithFileUpload.put(`/food/editfood/${food._id}`, {
                image: selectedFile,
                food: dish,
                des: des,
                price: price,
                category: category,
                webPageSHowFoods: showInWeb
            })
            if (res.status === 200) {
                console.log("Success")
                navigate("/admin/allfood")
            }
        } catch (error) {
            if (error.response.status === 409) {
                console.log(`${dish} already exists`)
                setValidated(true);
            }
            else if (error.response.status === 422) {
                console.log(`Fill all the fiels`)
                setValidated(true);
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
            await EditDish()
        }

    }

    return <>
        <div class="container pt-4">
            <div class="row">
                <div class="col" style={{ height: "100%" }} >
                    <>
                        <h4 className='text-center'>Edit Food</h4>
                        <Form noValidate validated={validated}  >
                            <Form.Group controlId="img" className="mb-1">
                                <Form.Label>Upload Img of the dish</Form.Label>
                                <Form.Control type="file" onChange={handleFileChange} />
                                <Form.Text className="text-muted">
                                    {
                                       imageText ?  `Image Selected : ${food.img?.substring(0, 30)}...` : ""
                                    }
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="dish" className="mb-1">
                                <Form.Label>Dish/Food</Form.Label>
                                <Form.Control type="text" onChange={(e) => setDish(e.target.value)} value={dish} />
                            </Form.Group>

                            <Form.Group controlId="des" className="mb-1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={(e) => setDes(e.target.value)} value={des} />
                            </Form.Group>

                            <Form.Group controlId="price" className="mb-1">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                            </Form.Group>

                            <Form.Group controlId="category" className="mb-1">
                                <Form.Label>Category</Form.Label>
                                <Form.Select onChange={(e) => setCategory(e.target.value)} value={category}>
                                    <option></option>
                                    <option value="Tiffen">Tiffen</option>
                                    <option value="Sweet">Sweet</option>
                                    <option value="Evenings Crackers">Evenings Crackers</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Cool Drinks">Cool Drinks</option>
                                    <option value="Kaaram">Kaaram</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="showInPage" className="mb-1">
                                <Form.Label>Show in webpage</Form.Label>
                                <Form.Select onChange={(e) => setShowInWeb(e.target.value)} value={showInWeb}>
                                    <option>None</option>
                                    <option value="Popular Items">Popular Items</option>
                                    <option value="30 Min Delivery">30 Min Delivery</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={handleSubmit} >
                                Update Dish
                            </Button>
                        </Form>
                    </>
                </div>
            </div>
        </div>
    </>
}

export default FoodEdit