import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { change } from '../../../redux/orderDataSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import AxiosService from '../../../utils/ApiService';
import { getData } from "../../../redux/getDataSlice"
import { Alert, Button, Modal } from 'react-bootstrap';


function FindFoodsCard(props) {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let token = useSelector((state) => state.token)
    const [error, setError] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleShowModal = () => setShowDeleteModal(true);
    const handleCloseModal = () => setShowDeleteModal(false);

    console.log(props.data)
    let handleClick = (value) => {
        if (props.editButton) {
            navigate(`/admin/editfood/${props.data._id}`)
        } else {
            if (token) {
                dispatch(change(value))
                navigate("/checkout")
            }
            else {
                navigate("/login", { state: { OrderedFoodData: value } })
            }
        }
    }

    let handleDelete = async (id) => {
        try {
            let res = await AxiosService.delete(`/food/${id}`)
            if (res.status === 202) {
                console.log("deleted")
                dispatch(getData())
                handleCloseModal(); 
            }
        } catch (error) {
            console.log(error)
            setError('Error occurred while deleting the food. Please try again.');
        }
    }

    const handleConfirmDelete = () => {
        handleDelete(props.data._id);
    };


    return <>
        <div className="col">
            <div className="card h-100">
                <img src={`data:image/jpeg;base64,${props.data.img}`} className="card-img-top" alt="img" style={{ height: "50%" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.data.food}</h5>
                    <p className="card-text">{props.data.des}</p>
                    <p>Rs. {props.data.price}</p>
                    <Button onClick={() => handleClick(props.data)} variant='warning'>
                        {
                            props.editButton ? "Edit" : "Order Now"
                        }
                    </Button>
                    {props.editButton && (
                        <>
                            <Button className="ms-3" onClick={handleShowModal} variant="warning">
                                Delete
                            </Button>
                            <Modal show={showDeleteModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Deletion</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to delete {props.data.food}?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        Cancel
                                    </Button>
                                    <Button variant="danger" onClick={handleConfirmDelete}>
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    )}
                    <br/>
                    <p className='text-danger'>{error}</p>
                </div>
            </div>
        </div>
    </>
}

export default FindFoodsCard