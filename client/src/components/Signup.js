import React ,{useState} from 'react'
import { BrowserRouter as Router,Route, Link, Switch,useNavigate } from 'react-router-dom'
import Https from '../servises/Https';


const Signup = () => {
    const navigate = useNavigate();
    let initdata={
        fname:"",
        lname:"",
        email:"",
        mobile :"",
        password:"",
        usertype :"buyer"
    }
    const [userData,setUserData] =useState(initdata)
    function handleChange(e){
        const {name ,value}=e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    function sendData(){
        Https.signup(userData).then(async(res)=>{
            if(res.status==200){
            alert("User created Successful");
            navigate('/login')
            }
            else if(res.status==201){
            alert("Error occurred");  
            }

        })
        setUserData(initdata);
    }
    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto  main_logo" to={"/"} >Rentify</Link>
            <div className="loginForm">
                <h3>SignUp</h3>
                <label htmlFor="loginInputEmail" className="lable">First Name</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="fname" value={userData.fname} onChange={handleChange}/>
                <label htmlFor="loginInputEmail" className="lable">Last Name</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="lname" value={userData.lname} onChange={handleChange}/>
                <label htmlFor="loginInputEmail" className="lable">Email</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="email" value={userData.email} onChange={handleChange}/>
                <label htmlFor="loginInputEmail" className="lable">Mobile No.</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="mobile" value={userData.mobile} onChange={handleChange}/>
                <label htmlFor="loginInputPass" className="lable">Password</label>
                <input type="password" className="loginInput" id="loginInputPass" name="password" value={userData.password} onChange={handleChange}/>

                <label htmlFor="" className="lable">Create account as </label>
               <div className='d-flex'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="usertype" id="inlineRadio1" value="buyer" selected/>
                    <label class="form-check-label" for="inlineRadio1">Buyer</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="usertype" id="inlineRadio2" value="seller" />
                    <label class="form-check-label" for="inlineRadio2">Seller</label>
                </div>                
                </div>   
                <button className="btnOrange" onClick={sendData}>Create Account</button>
                    </div>
            <div className="newToAmazon">
                <hr /><p style={{ "fontSize": "12px", "margin": "0 2px" }}> Already have an account ? </p><hr />
                </div>
            <Link className="btnNocolor linkDecoretionNone" to={"/Login"}>Login</Link>
        </div>
    )
}

export default Signup
