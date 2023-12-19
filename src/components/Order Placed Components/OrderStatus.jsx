import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from '../../utils/ApiService';
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function OrderStatus() {

    const tableHead = ["S.No", "Order ID", "Food Ordered", "Food ID", "Price", "Ordered By", "Address to Deliver", "Status", "Ordered At", "Status Update"]
    const logout = useLogout()
    const navigate = useNavigate()

    const [orderStatusData, setOrderDataStatus] = useState([])
    const [buttonClick, setButtonClick] = useState(false);
    const [buttonDisabledState, setButtonDisabledState] = useState({});
    

    let OrderStatus = async () => {
        try {
            let res = await AxiosService.get("/order/getorderedFood");
            console.log(res.data.food)
            setOrderDataStatus(res.data.food)
        } catch (error) {
            logout()
            navigate("/")
        }
    }

 
    const handleInprocessStateUpdate = async (orderId) =>{
        try {
            let res = await AxiosService.put('/order/updateOrderedFood',{
                orderId: orderId,
                status:"InProcess"
            })
            if(res.status===200){
                console.log("Inprocess")
                setButtonClick(!buttonClick); 
                setButtonDisabledState(prevState => ({ ...prevState, [orderId]: { inProcess: true, delivered: false } }));
            }
        } catch (error) {
            console.log(error.response)
            console.log(orderId)
        }
    }

    const handleDeliveredStateUpdate = async (orderId) =>{
        try {
            let res = await AxiosService.put('/order/updateOrderedFood',{
                orderId: orderId,
                status:"Delivered"
            })
            if(res.status===200){
                console.log("Delivered")
                setButtonClick(!buttonClick); 
                setButtonDisabledState(prevState => ({ ...prevState, [orderId]: { inProcess: true, delivered: true } }));
            }
        } catch (error) {
            console.log(error.response)
            console.log(orderId)
        }
    }

    useEffect(() => {
        OrderStatus()
    }, [buttonClick])

    return <>
        <Table responsive>
            <thead>
                <tr>
                    {tableHead.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
               {
                orderStatusData.map((eachData,i)=>{
                    const formattedDate = new Date(eachData.createdAt).toLocaleString(); 
                    const isDisabled = buttonDisabledState[eachData._id] || { inProcess: false, delivered: false };
                    return <tr key={eachData._id}>
                        <td>{i+1}</td>
                        <td>{eachData._id}</td>
                        <td>{eachData.foodOrdered}</td>
                        <td>{eachData.foodId}</td>
                        <td>{eachData.price}</td>
                        <td>{eachData.OrderedCustomerName}</td>
                        <td>{eachData.address}</td>
                        <td>{eachData.status}</td>
                        <td>{formattedDate}</td>
                        <td>
                        {
                            <>
                                <Button variant='warning' className='mb-1' onClick={()=>handleInprocessStateUpdate(eachData._id)}  disabled={isDisabled.inProcess}>Inprocess</Button>
                                <Button variant='success'onClick={()=>handleDeliveredStateUpdate(eachData._id)}  disabled={isDisabled.delivered}>Delivered</Button>
                            </> 
                        }
                        </td>
                    </tr>
                })
               }
            </tbody>
        </Table>
    </>
}

export default OrderStatus