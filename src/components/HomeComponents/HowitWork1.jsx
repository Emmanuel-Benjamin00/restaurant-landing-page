import React from 'react'
import percentImg from "../../assets/images/How-does-it-work/percent.svg"
import locationImg from "../../assets/images/How-does-it-work/location big.svg"
import clockImg from "../../assets/images/How-does-it-work/clock.svg"
import HowItWorkCard from '../HomeComponents/Cards/HowItWorkCard'

function HowitWork1() {

    const data = [
        {
            img: percentImg,
            word: "Daily Discounts"
        },
        {
            img: locationImg,
            word: "Live Tracking"
        },
        {
            img: clockImg,
            word: "Quick Delivery"
        }]

    return <>
        <div className='container-fluid mb-3'>
            <div className="d-flex justify-content-center mb-2 how-does-work text-center">
                <h2>How does it work</h2>
            </div>
            <div className=" col-auto px-2  _30-min">
                <div className="album">
                    <div className="pt-4">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3 justify-content-center"></div>
                        <div className='container-fluid d-flex gap-4 justify-content-center flex-wrap how-work'>
                            {
                                data.map((e, i) => {
                                    return <HowItWorkCard data={e} key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HowitWork1