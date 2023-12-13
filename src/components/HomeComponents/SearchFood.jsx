import React from 'react'
import aapamImg from "../../assets/images/Search-by-food/aapam.png"
import dosaImg from "../../assets/images/Search-by-food/dosa.png"
import idiyappamImg from "../../assets/images/Search-by-food/idiyappam.png"
import pongalImg from "../../assets/images/Search-by-food/pongal.png"
import puttuImg from "../../assets/images/Search-by-food/puttu.png"
import vegRiceImg from "../../assets/images/Search-by-food/veg rice.png"
import SearchByFoodCard from "../HomeComponents/Cards/SearchByFoodCard"

function SearchFood() {

  const SearchByFood = [
    {
      img: dosaImg,
      dish: "Dosa"
    },
    {
      img: aapamImg,
      dish: "Aappam"
    },
    {
      img: puttuImg,
      dish: "Puttu"
    },
    {
      img: idiyappamImg,
      dish: "Idiyappam"
    },
    {
      img: pongalImg,
      dish: "Pongal"
    },
    {
      img: vegRiceImg,
      dish: " Veg Rice"
    },

  ]

  return <>
    <div className="d-flex flex-column flex-wrap py-5 align-items-center search-by-food-content">
      <h3 className="mb-4 ms-5">Search by Food</h3>
      <div className="d-flex gap-5 justify-content-center flex-wrap ">
        {
          SearchByFood.map((e,i)=>{
            return <SearchByFoodCard data={e} key={i}/>
          })
        }
      </div>
    </div>
  </>
}

export default SearchFood