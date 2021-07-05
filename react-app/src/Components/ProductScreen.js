import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProductScreen.css"
import Products from "./Product";
import Pagination from "./Pagination";


var appendPath = "./IMG_DB/";

function ProductScreen() {


    const [products, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(2);

  const getProducts=()=>{
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

  useEffect(()=>{
    getProducts();
  },[])

  const indexOfLastProduct = currentPage * prodsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - prodsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


  const paginate = (pageNumber)=>{
      setCurrentPage(pageNumber)
  }
    return (
        <div className="products">
            <h1 className="heading">Trending Products</h1>
            <Products products={currentProducts}/>
            <Pagination prodsPerPage={prodsPerPage} totalProducts={products.length} paginate={paginate}/>
        </div>
    );
}

export default ProductScreen;