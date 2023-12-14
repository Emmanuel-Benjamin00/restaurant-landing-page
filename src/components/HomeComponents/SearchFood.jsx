import React from 'react'
import dosaImg from "../../assets/images/Search-by-food/dosa.png"
import coolsImg from "../../assets/images/Search-by-food/cools.jpg"
import vegRiceImg from "../../assets/images/Search-by-food/veg rice.png"
import SearchByFoodCard from "../HomeComponents/Cards/SearchByFoodCard"
import eveCrackersImg from "../../assets/images/Search-by-food/samosa.jpg"
import sweetImg from "../../assets/images/Search-by-food/sweet.jpg"
import karamImg from "../../assets/images/Search-by-food/karam.jpg"

function SearchFood() {

  const SearchByFood = [
    {
      img: dosaImg,
      food: "Tiffen"
    },
    {
      img: vegRiceImg,
      food: "Rice"
    },
    {
      img: eveCrackersImg,
      food: "Evenings Crackers"
    },
    {
      img: sweetImg,
      food: "Sweet"
    },
    {
      img: karamImg,
      food: "Kaaram"
    },    
    {
      img: coolsImg,
      food: `Drinks and Cools`
    }

  ]

  return <>
    <div className="d-flex flex-column flex-wrap py-5 align-items-center search-by-food-content">
      <h3 className="mb-4 ms-5">Search by Category</h3>
      <div className="d-flex gap-5 justify-content-center flex-wrap " style={{cursor:"pointer"}}>
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