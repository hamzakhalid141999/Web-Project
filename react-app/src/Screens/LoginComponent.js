import React, {useState} from 'react';
import axios from 'axios';
import "./LoginComponent.css";
import AdminScreen from "../Screens/AdminScreen";
import phone from "../assets/phone.png";
import {
    Link
  } from "react-router-dom";
import App from "../App";
import { useHistory } from 'react-router';


localStorage.setItem("isLoggedIn", false);
var userType, userEmail;

function LoginComponent() {
    
    const [status, setStatus] = useState(false);
    const history = useHistory();
   
    const printUser=()=>{

        const email = document.getElementById("email");
        console.log(email.value);

        const password = document.getElementById("password");
        console.log(password.value);

        axios.get('http://localhost:4000/user-auth/'+email.value+'/'+password.value)
        .then(response => {
            console.log('user-auth!!!');
            if(!response.data){
                alert("Invalid Email/Password");
                
            }else if (response.data){
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userEmail",response.data.email);
                userEmail = localStorage.getItem("userEmail");
                localStorage.setItem("userRole", response.data.role)
                userType = localStorage.getItem("userRole");
                setStatus(true);
                alert("User Logged In Successfully");
                if (userType==="Customer"){
                    history.push("/");
                }
                else{
                    history.push("/AdminScreen")
                }
            }
           
        })
        .catch(function (error){
            console.log(error);
        })
    }


    return (

        <>

    {status===true?
        userType==="Customer"? <App/>
        :  
        userType==="Administrator"? <p>No Such User Found</p>
        : <AdminScreen/> : 
  
        
        <div className="login">

            <div className="login__left">
                <div className="img__container">
                <img src={phone} alt="phone" style={{maxWidth: "100%"}}/>
                </div>
                <div className="desc__container">
                <h1 className="upper__text">One stop</h1>
                <h1 className="lower__text">For all your electronics</h1>
                </div>

            </div>

            <div style={{height: "450px"}} className="login__container">

                <div className="login__form">
                    <h1 className="form__heading">Login</h1>
                    <label style={{color: "white"}}>Email</label>
                    <input type="email" id="email" className="login__field" placeholder="Enter email"/>
                    <label style={{color: "white"}}>Password</label>
                    <input type="password" id="password" className="login__field" placeholder="Enter password"/>      
                    <button style={{bottom: "135px"}} className="input__btn" onClick={printUser}>Login</button>

                    <div style={{bottom: "60px"}} className="register__cont">
                        <h2 style={{margin: "5px", color: "white"}}>OR</h2>
                        <Link to="/Signup">
                        <button className="register__btn">Register Now</button>
                        </Link>
                        

                    </div>
                </div>

                
            </div>
         
        </div>

    }
    
        </>
    );
}

export default LoginComponent;