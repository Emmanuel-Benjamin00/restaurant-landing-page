import React, { useEffect, useState } from 'react'
import PopularItemsCard from './Cards/PopularItemsCard'
import AxiosService from '../../utils/ApiService'
import { Spinner } from 'react-bootstrap';

function Popularitems() {

  let [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // let filteredData = data.filter((e)=>e.webPageSHowFoods === "Popular Items"  )
  let getFoods = async () =>{
    try {
      let res = await AxiosService.get("/food/getForPopular")
      if(res.status === 200){
        setData(res.data.foods)
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      setError('Failed to fetch data. Please try again.');
    }
  }

  useEffect(()=>{
    getFoods()
  },[])

  return <>
    <div className="popular-items container-fluid col-xxl-10" >
      <div className=" marketing col-auto px-5 py-4  my-5 d-flex flex-column justify-content-md-start align-items-center">
        <div>
          <h2 className="ps-5 fs-2 ">Popular Items</h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
        {loading ? (
          // Display a spinner while loading
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          // Display an error message if data cannot be fetched
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
            {data.map((e, i) => (
              <PopularItemsCard data={e} key={i} />
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  </>
}

export default Popularitems