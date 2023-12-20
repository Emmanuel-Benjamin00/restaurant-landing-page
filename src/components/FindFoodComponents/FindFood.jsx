import React, { useEffect, useState } from 'react'
import FindFoodsCard from '../HomeComponents/Cards/FindFoodsCard'
import AxiosService from '../../utils/ApiService'
import { useLocation } from 'react-router-dom'

function FindFood() {

    let [loading, setLoading] = useState(true)
    const location = useLocation();
    let receivedData = location.state?.data || null
    const [error, setError] = useState(null);


    function processString(inputString) {
        if (inputString && inputString.includes(' ')) {
            const resultString = inputString.split(' ').join('-');
            return resultString;
        } else {
            return inputString;
        }
    }
    console.log(processString(receivedData))


    let [tiffenData, setTiffenData] = useState([])
    let [riceData, setRiceData]= useState([])
    let [eveData, setEveData] = useState([])
    let [sweetData, setSweetData] = useState([])
    let [kaaramData, setKaaramData] = useState([])
    let [coolsData, setCoolsData] = useState([])

    let getTiffen = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForTiffen");
            if (res.status === 200) {
                setTiffenData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    let getRice = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForRice");
            if (res.status === 200) {
                setRiceData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    let getEveCrk = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForEveCrk");
            if (res.status === 200) {
                setEveData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    let getSweet = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForSwt");
            if (res.status === 200) {
                setSweetData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    let getKaaram = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForKaaram");
            if (res.status === 200) {
                setKaaramData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    let getCool = async () => {
        try {
            setLoading(true);
            let res = await AxiosService.get("/food/getForCools");
            if (res.status === 200) {
                setCoolsData(res.data.foods);
                setTimeout(() => {
                    const myLink = document.getElementById(`${processString(receivedData)}`);
                    if (myLink) {
                        console.log(myLink);
                        myLink.click();
                    }
                }, 100);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTiffen()
        getRice()
        getSweet()
        getCool()
        getKaaram()
        getEveCrk()
    }, [])
    return <>
        <div className='container-fluid mt-5 px-5'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2" href="#">Find Foods</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link fs-5 pe-4" href="#tiffenId" id="Tiffen">Tiffen</a>
                            <a className="nav-link fs-5 pe-4" href="#riceId" id="Rice">Rice</a>
                            <a className="nav-link fs-5 pe-4" href="#eveId" id="Evenings-Crackers">Evenings Crackers</a>
                            <a className="nav-link fs-5 pe-4" href="#sweetId" id="Sweet">Sweet</a>
                            <a className="nav-link fs-5 pe-4" href="#kaaramId" id="Kaaram">Kaaram</a>
                            <a className="nav-link fs-5 pe-4" href="#drinksId" id="Drinks-and-Cools">Drinks and Cools</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container-fluid pt-4'>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-4">
                    {
                        loading ? (
                            <div className='d-flex flex-column justify-content-center align-items-center text-warning' style={{ width: "100%" }}>
                                <div className="spinner-border text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="ms-2 mt-3">Loading...</p>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger" role="alert" style={{ width: "100%" }}>
                                {error}
                            </div>
                        ) : (
                            <>
                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-3' id="tiffenId">Tiffen</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {tiffenData.map((e, i) => (
                                    <FindFoodsCard data={e} key={i} />
                                ))}

                                <div style={{ margin: '20px' }}></div>

                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-4' id="riceId">Rice</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {
                                    riceData.map((e, i) => {
                                        return <FindFoodsCard data={e} key={i} />
                                    })
                                }

                                <div style={{ margin: '20px' }}></div>

                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-4' id="eveId">Evenings Crackers</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {
                                    eveData.map((e, i) => {
                                        return <FindFoodsCard data={e} key={i} />
                                    })
                                }

                                <div style={{ margin: '20px' }}></div>

                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-4' id="sweetId">Sweet</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {
                                    sweetData.map((e, i) => {
                                        return <FindFoodsCard data={e} key={i} />
                                    })
                                }

                                <div style={{ margin: '20px' }}></div>

                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-4' id="kaaramId">Kaaram</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {
                                    kaaramData.map((e, i) => {
                                        return <FindFoodsCard data={e} key={i} />
                                    })
                                }

                                <div style={{ margin: '20px' }}></div>

                                <h4 style={{ width: "100%" }} className='pb-0 mb-0 mt-4' id="drinksId">Drinks and Cools</h4>
                                <hr style={{ width: "100%" }} className='p-0 mt-3' />
                                {
                                    coolsData.map((e, i) => {
                                        return <FindFoodsCard data={e} key={i} />
                                    })
                                }
                            </>
                        )}
                </div>
            </div>
        </div>
    </>
}

export default FindFood