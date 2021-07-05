import React from 'react';
import "./UpdateProduct.css";
import HeaderComponent from '../Components/HeaderComponent';
import axios from "axios";

function UpdateProduct() {


    function sendProduct(){
//ADD PROD ID HERE!!

        var id = document.getElementById("prodID");
        var name = document.getElementById("prodName");
        var model = document.getElementById("prodModel");
        var price = document.getElementById("prodPrice");
        var type = document.getElementById("prodType");
        var website = document.getElementById("prodWebsite");
        var color = document.getElementById("prodColor");
        var rating = document.getElementById("prodRating");
        var description = document.getElementById("prodDesc");
    
    
        console.log("IN SEND PRODUCT FUNCTION");
        const prod = {
            id: id.value,
            name: name.value,
            model: model.value,
            price: price.value,
            type: type.value,
            website: website.value,
            color: color.value,
            rating: rating.value,
            description: description.value
        }
    
        console.log("Product: ",prod);
        
        axios.put('http://localhost:4000/update-product', prod)
                .then(res => console.log(res));
    
    }

    return (
        <>
        <HeaderComponent/>
        <div className="updateScreen">
        <h1>Update Product</h1>

            <div className="form__container">
                <div className = "form__left">


                    <div className="input__div">
                        <label className="labels">Product ID</label>
                        <input type="number" id="prodID" placeholder="Enter product ID" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Name</label>
                        <input id="prodName" placeholder="Enter product name" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Model</label>
                        <input id="prodModel" placeholder="Enter product model" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Price</label>
                        <input id="prodPrice" placeholder="Enter product price" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product type</label>
                        <select className="fields" id="prodType">
                            <option select="true">Choose Product Type</option>
                            <option value="phone">Phone</option>
                            <option value="tv">TV</option>
                            <option value="watch">Watch</option>
                            <option value="tablet">Tablet</option>
                        </select>
                    </div>

                    
                    <div className="input__div">
                        <label className="labels">Product Website</label>
                        <input id="prodWebsite" placeholder="Enter Website link" className="fields"></input>
                    </div>


                </div>
                <div className = "form__right">

                    <div className="input__div">
                        <label className="labels">Product Color</label>
                        <input id="prodColor" placeholder="Enter product color" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Rating</label>
                        <select className="fields" id="prodRating">
                            <option select="true">Choose Product Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Description</label>
                        <textarea style={{height: "100px"}} id="prodDesc" placeholder="Enter product description" className="fields"></textarea>
                    </div>

                    <div className="input__div">
                        <button onClick={sendProduct} className="add__prodbtn">Update Product</button>
                    </div>

                </div>
            </div>
        </div>

        </>
    );
}

export default UpdateProduct;