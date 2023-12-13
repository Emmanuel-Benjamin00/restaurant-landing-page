import React from 'react'
import FindFoodsCard from '../HomeComponents/Cards/FindFoodsCard'


function FindFood() {
    const foodData = [
        {
            _id:123,
            img:"https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F611416%2F0.jpg",
            food:"briyani",
            des:"tasty",
            price:"100"
        },
        {
            food:"briyani1",
            des:"tasty1"
        },
        {
            food:"briyani1",
            des:"tasty1"
        },
        {
            food:"briyani1",
            des:"tasty1"
        }
    ]
    return <>
        <div className='container-fluid mt-5 px-5'>
            <h3>Find Foods</h3>
            <div className='container-fluid pt-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        foodData.map((e,i)=>{
                            return <FindFoodsCard data={e} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default FindFood