import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch,useNavigate } from 'react-router-dom'
import Https from '../servises/Https';

const AddProperty = () => {
    const navigate = useNavigate();
    const initDat = {
        name: "",
        propimg: "",
        type :"",
        price: "",
        city: "",
        area :"",
        owner :""
    }
    let [allData, setAllData] = useState(initDat)
    let [prodImg, setProdImg] = useState();

    function handleChanges(e) {
        const { name, value } = e.target;
        if(value != "" || value != undefined || value != null){
        setAllData({
            // spread operator
            ...allData,
            [name]: value,
        })
    }
    }
    function handleImgChanges(e) {
        setProdImg(e.target.files[0])
    }


    const uploadProd = () => {

        const formdata = new FormData();
        formdata.append("file", prodImg);
        formdata.append("upload_preset", "b1mhgyub")
        
        axios.post("https://api.cloudinary.com/v1_1/darshanscloud/image/upload", formdata).then(async (res) => {
            let propertyData = {
                ...allData,
                propimg: res?.data?.secure_url,
                owner : localStorage.getItem("rentifyuser")
            }
            Https.addProperty(propertyData).then(async(res)=>{
                if (res.status == 200) {
                    alert("Property Uploaded")
                    navigate("/home")
                }
                else if (res.status == 201) {
                    alert(
                        'Property Not Uploaded',
                    )
                }


            })

        })
        setAllData = initDat;
    }

    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto  main_logo" to={"/"} >Rentify</Link>
             <div className="loginForm">
                <h4 className="text-center mb-3">Add Property On Rentify</h4>
                <label htmlFor="prodName" className="lable">Name of Property</label>
                <input type="text" className="loginInput" id="prodName" name="name" value={allData.name} onChange={handleChanges} />
                <label htmlFor="prodImg" className="lable">Please Upload Image of Property</label>
                <input className="mx-auto my-2" type="file" id="prodImg" name="propimg" accept="image/*" onChange={handleImgChanges} />
                <label htmlFor="prodBrand" className="lable">Type of Property</label>
                <input type="text" className="loginInput" id="prodBrand" name="type" value={allData.type} onChange={handleChanges} />
                <label htmlFor="prodBrand" className="lable">Area in Sq. Feet</label>
                <input type="text" className="loginInput" id="prodBrand" name="area" value={allData.area} onChange={handleChanges} />
                {/* <label htmlFor="prodRating" className="lable">Rating of Project</label>
        <input type="text" className="loginInput" id="prodRating" /> */}
                <div className="row d-flex">
                    <div className="col-6 text-center">
                        <label htmlFor="highPrice" className="lable mb-2">Price</label>
                        <input type="text" className="loginInput w-100" name="price" id="highPrice" value={allData.price} onChange={handleChanges} />
                    </div>
                    <div className="col-6 text-center">
                        <label htmlFor="lowPrice" className="lable mb-2">City</label>
                        <input type="text" className="loginInput w-100" name="city" id="lowPrice" value={allData.city} onChange={handleChanges} />
                    </div>
                </div>
                <button className="btnOrange" onClick={uploadProd}>Add Property</button><br />
            </div>
        </div>
    )
}
export default AddProperty
