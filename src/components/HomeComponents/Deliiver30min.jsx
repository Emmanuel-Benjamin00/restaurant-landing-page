import React, { useEffect, useState } from 'react'
import Deliver30Card from './Cards/Deliver30Card'
import AxiosService from '../../utils/ApiService'


function Deliiver30min() {

  let [Deliver30Data, setDeliver30Data] = useState([])
  let [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  let filteredData = Deliver30Data.filter((e) => e.webPageSHowFoods === "30 Min Delivery")

  let getFoods = async () => {
    try {
      let res = await AxiosService.get("/food/getAllFoods")
      if (res.status === 200) {
        setDeliver30Data(res.data.foods)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError('Failed to fetch data. Please try again.');
      setLoading(false);
    }
  }

  useEffect(() => {
    getFoods()
  }, [])

  return <>
    <div className=" container-fluid mt-5 mb-3 py-5 col-auto col-xxl-10 px-4 _30-min">
      <div className="album py-3">
        {loading ? (<>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className="spinner-border text-warning " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Fetching data...</p>
          </div>
        </>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <div className="album py-3">
            <div className="">
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 justify-content-center">
                {filteredData.map((e, i) => {
                  return <Deliver30Card data={e} key={i} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
}

export default Deliiver30min