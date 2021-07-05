import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import "./AddProduct.css";
import axios from 'axios';


function sendProduct(){

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
    
    axios.post('http://localhost:4000/add-product', prod)
            .then(res =>{
                console.log(res);
                alert("Product: "+res.data.name+" added")
            });

}

function AddProduct() {


    return (
        <>
        <HeaderComponent/>
        <div className="addproduct">
           

            <h1>Add Product</h1>

            <div style={{width: "70%", display: "flex", flexDirection: "row"}} className="form__container">
                <div className = "form__left">

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
                            <option value="" select="true">Choose Product Type</option>
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
                            <option value="" select="true">Choose Product Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="input__div">
                        <label className="labels">Product Description</label>
                        <input style={{height: "100px"}} id="prodDesc" placeholder="Enter product description" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <button onClick={sendProduct} className="add__prodbtn">Add Product</button>
                    </div>

                </div>
            </div>
            
        </div>

        </>
    );
}

export default AddProduct;