import React from 'react';
import "./HeaderComponent.css"
import {useHistory} from "react-router-dom";


function HeaderComponent() {

    var history = useHistory();
    var userEmail = localStorage.getItem("userEmail");


    return (
        <div className="header__solid">
                
                <div onClick={()=>{
                    history.push('/')
                }} className="header__name">
                <p className="header__nameWhite">Tech<span className="header__nameOrange">Hub</span></p>
                </div>
                

                <p className="user__email">Welcome, <span className="user__emailOrange">{userEmail}</span></p>

            <div className="navbtn__cont">
                    <button onClick={()=>{
                        var r = window.confirm("Are you sure you want to logout?");
                        if (r===true){
                            localStorage.clear();
                            history.push('/Login')
                        }
                        else{
                            
                        }
                        
                    }} className="nav__btnLogout">Logout</button>
                
                <p style={{right: "115px"}} className="nav__btn">About</p>
                <p style={{right: "200px"}} className="nav__btn">Contact</p>
                
            </div>
    
    </div>
    );
}

export default HeaderComponent;