import React, { useState, useEffect } from 'react'
import SingleItemComp from './SingleItemComp'
import Https from "../servises/Https"
function ItemComp() {
    const [allProps,setallProps] = useState();
    useEffect(() => {
        Https.getAllProperties().then((res) => {
            setallProps(res.data);
        })
    }, [])

    const SingleItem = allProps?.map((val, i, arr) => {
        
        return <SingleItemComp key={i} val={val} ind={i} arr={arr} />

    });
    return (
        <>
            <div className="row d-flex justify-content-center mx-2 my-3">
                {
                  <>{SingleItem }</>
                }
            </div>
        </>
    )
}

export default ItemComp;

