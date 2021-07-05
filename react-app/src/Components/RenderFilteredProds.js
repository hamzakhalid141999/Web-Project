import React from 'react';
import "./RenderFilteredProds.css"
import { useHistory } from 'react-router';



var appendPath = "./IMG_DB/";

function RenderFilteredProds(props) {

    const {products} = props;

    const history = useHistory();

    console.log("PROPSSSS",props);

    for (let i=0; i<products.length; i++){
        products[i].imagePath = appendPath + products[i].imagePath;
    }   
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // function renderByFilter(){

    //     if (props.lesserPrice!=="none"){
    //         var lprice = props.lesserPrice;
    //         axios.get('http://localhost:4000/search-product-by-price-less/'+lprice)
    //         .then(response => {
    //         if(!response.data){
        
    //         }else{      
    //             setProduct(response.data);

    //         }         
    //         })
        
    //         .catch(function (error){
    //         console.log(error);
    //         })
    //     }
    
    //     else if (props.greaterPrice!=="none"){
    //         var gprice = props.greaterPrice;
    //         axios.get('http://localhost:4000/search-product-by-price-greater/'+gprice)
    //         .then(response => {
    //         if(!response.data){
        
    //         }else{      
    //             setProduct(response.data);
    //         }         
    //         })
        
    //         .catch(function (error){
    //         console.log(error);
    //         })
    //     }
    
    //     else if ((props.lesserPrice==="none")&&(props.greaterPrice==="none")&&(props.search==="")){
    //         axios.get('http://localhost:4000/product-list')
    //         .then(response => {
    //         if(!response.data){
        
    //         }else{      
    //             setProduct(response.data);
    //         }         
    //         })
        
    //         .catch(function (error){
    //         console.log(error);
    //         })
    //     }

    //     else if (props.search!==""){
    //         var product = props.search;
    //         axios.get('http://localhost:4000/search-product-name/'+product)
    //         .then(response => {
    //         if(!response.data){
        
    //         }else{      
    //             setProduct(response.data);
    //         }         
    //         })
        
    //         .catch(function (error){
    //         console.log(error);
    //         })
    //     }
    // }

    


    return (
        <div className="renderfiltered">
           <div className="row">
                {products.map(prod =>

                <div key={prod.id} className="col-md-3">
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
                 </div>

                )}
            </div>
        </div>
    );
}

export default RenderFilteredProds;