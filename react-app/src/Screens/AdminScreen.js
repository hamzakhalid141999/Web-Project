import React from 'react';
import HeaderComponent from "../Components/HeaderComponent";
import ProductScreen from '../Components/ProductScreen';
import "./AdminScreen.css";
import {Link} from "react-router-dom";


function AdminScreen() {
    return (
        <>
        <HeaderComponent/>
        <div className="adminscreen">
            <h1>Admin Actions</h1>

            <div className="admin__btnsCont">
                <Link to="/AdminScreen/AddProduct">
                <button className="admin__btns">Add Product</button>
                </Link>
                
                <Link to="/AdminScreen/DeleteProduct">
                <button className="admin__btns">Delete Product</button>
                </Link>
                
                <Link to='/AdminScreen/UpdateProduct'>
                <button className="admin__btns">Update Product</button>
                </Link>
                
            </div>
            <ProductScreen/>

        </div>

        </>
    );
}

export default AdminScreen;