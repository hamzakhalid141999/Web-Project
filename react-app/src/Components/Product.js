import React from 'react';
import "./Product.css";
import { useHistory } from 'react-router';


var appendPath = "./IMG_DB/";

function Product({products}) {

    const history = useHistory();


        for (let i=0; i<products.length; i++){
            products[i].imagePath = appendPath + products[i].imagePath;
        }    
    
    console.table(products);

    return (
        <div className="product">
            {products.map(prod => 
                
                <div className="product__card">
                    <div className="img__cont">
                        <img src={prod.imagePath} className="img" alt="prod"/>
                    </div>
                    <p className="prodName">{prod.name}</p>
                    <p className="prodName">Rs. {prod.price}</p>
                    <button onClick={()=>{
                        history.push({
                            pathname: '/ProductView',
                            name: prod.name,
                            model: prod.model,
                            price: prod.price,
                            imagePath: prod.imagePath,
                            desc: prod.desc,
                            rating: prod.rating,
                            website: prod.website
                        })
                    }} className="prodBtn">Open Product</button>
                </div>
            )}
        </div>
    );
}

export default Product;