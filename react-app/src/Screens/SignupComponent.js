import React from 'react';
import axios from 'axios';
import "./SignupComponent.css";
import phone from "../assets/phone.png";
import {
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router';



function SignupComponent() {

const history = useHistory();
    
    const signUpUser=(email, password, cpassword, role)=>{



        axios.get('http://localhost:4000/user-registeration/'+email+'/'+password+'/'+role)
        .then(response => {
            console.log('user-auth!!!');
            if(response.data.message==="fail"){

            }else{
                console.log(response.data);
            }
           
        })
        .catch(function (error){
            console.log(error);
        })
    }


    const validatePassword = ()=>{

        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const cpassword = document.getElementById("cpassword");
        const role = document.getElementById("role");

    
        if (password.value===cpassword.value){
            signUpUser(email.value, password.value, cpassword.value, role.value);
            history.push("/Login")
        }
        else{
            alert("Passwords don't match");
        }
    }

    return (
        <div className="signup">
           <div className="login__left">
                <div className="img__container">
                <img src={phone} alt="phone" style={{maxWidth: "100%"}}/>
                </div>
                <div className="desc__container">
                <h1 className="upper__text">One stop</h1>
                <h1 className="lower__text">For all your electronics</h1>
                </div>

            </div>

            <div className="login__container">

                <div className="login__form">
                    <h1 className="form__heading">Signup</h1>
                    <label style={{color: "white"}}>Email</label>
                    <input type="email" id="email" className="login__field" placeholder="Enter email"/>
                    <label style={{color: "white"}}>Password</label>
                    <input type="password" id="password" className="login__field" placeholder="Enter password"/>      
                    <label style={{color: "white"}}>Confirm Password</label>
                    <input type="password" id="cpassword" className="login__field" placeholder="Re-rnter password"/>      
                    <label style={{color: "white"}}>Select your role</label>
                    <select id="role" className="dropdown">
                        <option selected="true">Select your role</option>
                        <option value="Customer">Customer</option>
                        <option value="Administrator">Administrator</option>
                    </select>

                    <button className="input__btn" onClick={validatePassword}>Register</button>


                    <div className="register__cont">
                        <h2 style={{margin: "5px", color: "white"}}>OR</h2>
                        <Link to="/Login">
                        <button className="register__btn">Login!</button>
                        </Link>
                        

                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default SignupComponent;