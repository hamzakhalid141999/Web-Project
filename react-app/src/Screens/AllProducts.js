import React, {useState, useEffect} from 'react';
import "./AllProducts.css";
import RenderFilteredProds from '../Components/RenderFilteredProds';
import axios from "axios";



function AllProducts() {

    // const [gprice, setGreaterPrice] = useState(null);
    // const [lprice, setLesserPrice] = useState(null);
    // const [search, setSearchProd] = useState (null);
    const [products, setProduct] = useState([]);

    
        


    // function sendFilters(){    
    //     setSearched(true);
    //     // setSearchProd(searchProd.value);
    // }

    function renderByFilter(){

        var greaterP = document.getElementById("searchGreater");
        // setGreaterPrice(greaterP.value);
    
        var lesserP = document.getElementById("searchLess");
        // setLesserPrice(lesserP.value);

        var searchProd = document.getElementById("searchProd");

        if (lesserP.value!=="none"){
            var lprice = lesserP.value;
            axios.get('http://localhost:4000/search-product-by-price-less/'+lprice)
            .then(response => {
            if(!response.data){
        
            }else{      
                setProduct(response.data);

            }         
            })
        
            .catch(function (error){
            console.log(error);
            })
        }
    
        else if (greaterP.value!=="none"){
            var gprice = greaterP.value;
            axios.get('http://localhost:4000/search-product-by-price-greater/'+gprice)
            .then(response => {
            if(!response.data){
        
            }else{      
                setProduct(response.data);
            }         
            })
        
            .catch(function (error){
            console.log(error);
            })
        }
    
        else if ((lesserP.value==="none")&&(greaterP.value==="none")&&(searchProd.value==="")){
            axios.get('http://localhost:4000/product-list')
            .then(response => {
            if(!response.data){
        
            }else{      
                setProduct(response.data);
            }         
            })
        
            .catch(function (error){
            console.log(error);
            })
        }

        else if (searchProd!==""){
            var product = searchProd.value;
            axios.get('http://localhost:4000/search-product-name/'+product)
            .then(response => {
            if(!response.data){
        
            }else{      
                setProduct(response.data);
            }         
            })
        
            .catch(function (error){
            console.log(error);
            })
        }
    }
    
    return (
        <div className="allproducts">
            <h1>Search Products</h1>
            <div className="filters">
                <input className="input" id="searchProd" placeholder="Enter product name"/>

                <select className="input" id="searchLess">
                    <option value="none" select="true">Search Less than</option>
                    <option value="40000">Rs.40,000</option>
                    <option value="50000">Rs.50,000</option>
                    <option value="60000">Rs.60,000</option>
                    <option value="70000">Rs.70,000</option>
                    <option value="80000">Rs.80,000</option>
                    <option value="90000">Rs.90,000</option>
                    <option value="100000">Rs.100,000</option>
                </select>

                <select className="input" id="searchGreater">
                    <option value="none" select="true">Search Greater than</option>
                    <option value="40000">Rs.40,000</option>
                    <option value="50000">Rs.50,000</option>
                    <option value="60000">Rs.60,000</option>
                    <option value="70000">Rs.70,000</option>
                    <option value="80000">Rs.80,000</option>
                    <option value="90000">Rs.90,000</option>
                    <option value="100000">Rs.100,000</option>
                </select>

                <button className="search__btn" onClick={renderByFilter}>Search</button>
            </div>

        {products.length>0? <RenderFilteredProds products={products}/> : <p>Products will be shown here</p>}
            
        </div>
    );
}

export default AllProducts;