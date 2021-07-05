import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import "./ProductView.css";

function ProductView(props) {
    console.log(props.location.name);
    console.log(props.location.model);
    var name = props.location.name;
    var model = props.location.model;
    var price = props.location.price;
    var imagePath = props.location.imagePath;
    var desc = props.location.desc;
    var rating = props.location.rating;
    var website = props.location.website;

    return (

        <>
        <HeaderComponent/>
        <div className="productView">

            <h1 class="product__title">{name}</h1>

            <div className="prod__container">
                <div className="left__panel">
                    <div className="img__contSingle">
                    <img className="imgSingle" src={imagePath} alt="prod"/>
                    </div>
                    
                </div>
                <div className="right__panel">
                    <div className="feature__cont">
                    <table class="table table-striped">
                        
                        <tbody>
                            <tr>
                            <th scope="row">Name</th>
                                <td><p>{name}</p></td>
                   
                            </tr>
                            <tr>
                            <th scope="row">Model</th>
                                <td>{model}</td>
                            </tr>
                            <tr>
                            <th scope="row">Price</th>
                                <td>{price}</td>
                            </tr>
                            <tr>
                            <th scope="row">Description</th>
                                <td>{desc}</td>
                            </tr>
                            <tr>
                            <th scope="row">Rating</th>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                        </table>


                        <button className="website__btn"><a target="blank" href={website} style={{textDecoration: "none", color: "white"}}>Open Website</a></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductView;