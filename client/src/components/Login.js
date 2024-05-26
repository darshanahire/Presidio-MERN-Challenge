import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import Https from "../servises/Https"
const Login = () => {
    const navigate = useNavigate();
    let initdata = {
        email: "",
        password: "",
        usertype :""
    }
    const [userData, setUserData] = useState(initdata)
    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }
    function sendData() {

            Https.login(userData).then((res) => {
                console.log(res);

                if (res.status == 200) {
                    localStorage.setItem("rentifyuser", res.data)
                    navigate('/home')
                }
                else{
                    alert(res.data)
                }
                }
            )
    }
    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto  main_logo" to={"/"} >Rentify</Link>
            <div className="loginForm">
                <h3>Login</h3>
                <label htmlFor="loginInputEmail" className="lable">Email</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="email" value={userData.email} onChange={handleChange} />
                <label htmlFor="loginInputPass" className="lable">Password</label>
                <input type="password" className="loginInput" id="loginInputPass" name="password" value={userData.password} onChange={handleChange} />
                <label htmlFor="" className="lable">Login as </label>
               <div className='d-flex'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="usertype" id="inlineRadio1" value="buyer" onChange={handleChange}/>
                    <label class="form-check-label" for="inlineRadio1">Buyer</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="usertype" id="inlineRadio2" value="seller" onChange={handleChange} />
                    <label class="form-check-label" for="inlineRadio2">Seller</label>
                </div>                
                </div>                

                <button className="btnOrange" onClick={sendData}>Login</button>
            </div>
            <div className="newToAmazon">
                <hr /><p style={{ "fontSize": "12px", "margin": "0 5px" }}> New to Rentify ? </p><hr />
            </div>
            <Link rel="stylesheet" className="linkDecoretionNone btnNocolor" to={"/signUp"} > Create your Rentify account</Link>

        </div>
    )
}

export default Login
