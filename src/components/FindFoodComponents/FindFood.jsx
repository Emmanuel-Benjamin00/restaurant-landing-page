import React, { useEffect, useState } from 'react'
import FindFoodsCard from '../HomeComponents/Cards/FindFoodsCard'
import AxiosService from '../../utils/ApiService'


function FindFood() {

    let [foodData, setfoodData] = useState([])
    let [loading, setLoading] = useState(true)

    let getFoods = async () => {
        try {
            let res = await AxiosService.get("/food/getAllFoods")
            if (res.status === 200) {
                setfoodData(res.data.foods)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFoods()
    }, [])
    return <>
        <div className='container-fluid mt-5 px-5'>
            <h3>Find Foods</h3>
            <div className='container-fluid pt-4'>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-4">
                    {
                        loading ?
                         <>
                            <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "70vh" }}>
                                <div class="spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                            :
                            foodData.map((e, i) => {
                                return <FindFoodsCard data={e} key={i} />
                            })
                    }
                </div>
            </div>
        </div>
    </>
}

export default FindFood