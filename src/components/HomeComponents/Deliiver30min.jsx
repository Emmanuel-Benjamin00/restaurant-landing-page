import React from 'react'
import Deliver30Card from './Cards/Deliver30Card'
import IdlyImg from "../../assets/images/thirty-min-del/idly.png"
import KichadiImg from "../../assets/images/thirty-min-del/kichadi.png"
import ParotaImg from "../../assets/images/thirty-min-del/parotta.png"
import VadaImg from "../../assets/images/thirty-min-del/Vada.png"


function Deliiver30min() {

  const Deliver30Data = [
    {
        img:VadaImg,
        dish: "Vada",
        time: "30 min Delivery"
    },
    {
        img:IdlyImg,
        dish: "Idly",
        time: "30 min Delivery"
    },
    {
        img:ParotaImg,
        dish: "Parotta",
        time: "30 min Delivery"
    },
    {
        img:KichadiImg,
        dish: "Kichadi",
        time: "30 min Delivery"
    }
]

  return <>
    <div className=" container-fluid mt-5 mb-3 py-5 col-auto col-xxl-10 px-4 _30-min">
      <div className="album py-3">
        <div className="">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 justify-content-center">
            {
              Deliver30Data.map((e,i)=>{
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