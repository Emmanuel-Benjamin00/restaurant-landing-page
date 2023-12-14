import React, { useEffect, useState } from 'react'
import Deliver30Card from './Cards/Deliver30Card'
import IdlyImg from "../../assets/images/thirty-min-del/idly.png"
import KichadiImg from "../../assets/images/thirty-min-del/kichadi.png"
import ParotaImg from "../../assets/images/thirty-min-del/parotta.png"
import VadaImg from "../../assets/images/thirty-min-del/Vada.png"
import AxiosService from '../../utils/ApiService'


function Deliiver30min() {

  let [ Deliver30Data, setDeliver30Data] = useState([])
  let [loading, setLoading] = useState(true)

  let filteredData = Deliver30Data.filter((e)=>e.webPageSHowFoods === "30 Min Delivery"  )

  let getFoods = async () => {
      try {
          let res = await AxiosService.get("/food/getAllFoods")
          if (res.status === 200) {
              setDeliver30Data(res.data.foods)
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
    <div className=" container-fluid mt-5 mb-3 py-5 col-auto col-xxl-10 px-4 _30-min">
      <div className="album py-3">
        <div className="">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 justify-content-center">
            {
              filteredData.map((e,i)=>{
                return <Deliver30Card data={e} key={i}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Deliiver30min