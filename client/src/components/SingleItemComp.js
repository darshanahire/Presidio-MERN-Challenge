import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'

import Https from '../servises/Https'


export default function SingleItemComp(props) {
    const USER = localStorage.getItem("rentifyuser");
    const [likeed, disLike] = useState(false);

    // console.log("props.val",props.val);
    const [idtopass, setidtopass] = useState(props.val._id);

    return (
        <>
            <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px" }}>
                <div className="like-div">
                    <a className="nav-link active cursor d-flex justify-content-end p-0" >
                        <div>

                        </div>
                    </a>
                    <div className="item d-flex justify-content-center my-0">
                        <img className="itemPng mt-0" src={props.val.propimg} alt="" /></div>
                    <div>
                        <h6 style={{ 'margin': '3px 0' }}> Name :{props.val.name}</h6>
                        <h6 style={{ 'margin': '3px 0' }}>Area :{props.val.area}</h6>
                        <h6 style={{ 'margin': '3px 0' }}>Type :{props.val.type}</h6>
                        <p className="star_para">{props.val.type} <br />  ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                        <h5>Price : <span className="star_para">Rs.{props.val.price}</span></h5>
                        <Link className="linkDecoretionNone" to={"/seeProperty/" + idtopass}>
                            <button id={props.val._id} className="btnOrange mx-auto my-3 w-75" >View Item</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
