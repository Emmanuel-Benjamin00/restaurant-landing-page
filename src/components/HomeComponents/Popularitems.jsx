import React, { useEffect, useState } from 'react'
import PopularItemsCard from './Cards/PopularItemsCard'
import GulabImg from "../../assets/images/Popular Items/gulab jamun.png"
import HalwaImg from "../../assets/images/Popular Items/halwa.png"
import JangriImg from "../../assets/images/Popular Items/jangri.png"
import LadduImg from "../../assets/images/Popular Items/laddu.png"
import MixtureImg from "../../assets/images/Popular Items/mizture.png"
import MurukkuImg from "../../assets/images/Popular Items/Murukku.png"
import PaniyaramImg from "../../assets/images/Popular Items/paniyaram.png"
import PorivelamgaImg from "../../assets/images/Popular Items/porivelanga urundai.png"
import SeevalMurukkuImg from "../../assets/images/Popular Items/seeval murukku.png"
import VegSoupImg from "../../assets/images/Popular Items/veg soup.png"
import AxiosService from '../../utils/ApiService'

function Popularitems() {
  const data = [
    {
      img: MurukkuImg,
      food: "Murukku"
    },
    {
      img: PaniyaramImg,
      food: "Paniyaram"
    },
    {
      img: SeevalMurukkuImg,
      food: "Seeval Murukku"
    },
    {
      img: MixtureImg,
      food: "Mixture"
    },
    {
      img: VegSoupImg,
      food: "Veg Soup"
    },
    {
      img: GulabImg,
      food: "Gulab Jamun"
    },
    {
      img: PorivelamgaImg,
      food: "Porivellangai Urundai"
    },
    {
      img: JangriImg,
      food: "Jangri"
    },
    {
      img: LadduImg,
      food: "Laddu"
    },
    {
      img: HalwaImg,
      food: "Halwa"
    }
  ]

  // let [data, setData] = useState([])

  // let getFoods = async () =>{
  //   try {
  //     let res = await AxiosService.get("/food/getAllFoods")
  //     if(res.status === 200){
  //       setData(res.data.foods)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   getFoods()
  // },[])

  return <>
    <div className="popular-items container-fluid col-xxl-10" >
      <div className=" marketing col-auto px-5 py-4  my-5 d-flex flex-column justify-content-md-start align-items-center">
        <div>
          <h2 className="ps-5 fs-2 ">Popular Items</h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
          {
            data.map((e, i) => {
              return <PopularItemsCard data={e} key={i} />
            })
          }
        </div>
      </div>
    </div>
  </>
}

export default Popularitems