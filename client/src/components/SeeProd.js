import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link,useParams,useNavigate } from "react-router-dom";
import Https from '../servises/Https';

function SeeProd() {
    const navigate = useNavigate();
    let [prodData, setProdData] = useState({});

    let { id } = useParams();
    // console.log(id);

    useEffect(() => {
        Https.seeProperty(id).then((res) => {
            console.log(res);
            
            setProdData(res.data)
        }).catch((e)=>{
            navigate("/")
        })
    }, [setProdData])




    // require('@/img' + "seeprod1.png" + '')


    return (
                <>
                    <div className="prodContainer" style={{ "backgroundColor": "white" }} >
                        <div className="SeeProdSideBar  " style={{ "position": "initial" }}>

                            <div className="d-flex cursor">
                                <i className="fas fa-arrow-left  fa-lg my-auto mx-2"></i> <h5 className="my-auto">Go back</h5>

                            </div>
                            <img className="seeFullItem" src={prodData.propimg} alt="" />
                            <div className="row mx-4 my-3">
                                {/* <div className="col text-center">
                                    <img src={window.location.origin + '/img/seeprod1.png'} alt="" width="50px" /><p className="font-12 bold-6"> Pay on delivary</p>
                                </div>
                                <div className="col text-center">
                                    <img src={window.location.origin + '/img/seeprod2.png'} alt="" width="50px" /><p className="font-12 bold-6"> 7 Days Replacement</p>
                                </div>
                                <div className="col text-center">
                                    <img src={window.location.origin + '/img/seeprod3.png'} alt="" width="50px" /><p className="font-12 bold-6"> Amazon Delivered</p>
                                </div>
                                <div className="col text-center">
                                    <img src={window.location.origin + '/img/seeprod4.png'} alt="" width="50px" /><p className="font-12 bold-6"> 1 Year Warranty</p>
                                </div> */}
                            </div></div>

                        <div className="SeeProdSideBar  allDetails my-md-4 my-0" >
                            <h5>{prodData.name} 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                            <h6>Type of Property: {prodData.prodtype}
                            </h6>

                            <p className="star_para bold-6"><br />  ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                            <div className="my-md-3 my-0">
                                <h6 className="text-center my-3">Price :	<span style={{ "textDecoration": "line-through", "fontSize": "16px" }}>${prodData.highPrice}</span></h6>
                                <h4 className="text-center">M.R.P. :${prodData.price}</h4>
                                <h6 className="text-center">Area:	${prodData.area}
                                    </h6>
                                <Link className="Link">
                                    <button className="btnOrange mx-auto my-3 w-75 " >Contact Owner</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            
        </>
    )
}

export default SeeProd
