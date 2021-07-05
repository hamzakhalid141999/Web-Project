import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import "./DeleteProduct.css";
import axios from "axios";


function delProduct(){
    var id = document.getElementById("prodID");
    var idjson={id:id.value};

    console.log("ID:",id.value==='7');
    axios.post('http://localhost:4000/delete-product', idjson)
    .then(res => console.log(res));



    // axios.get('http://localhost:4000/delete-product/'+7)
    // .then(response => {
    //     console.log('prodd-del!!');
    //     if(response.data.message===1){
    //         console.log("success");

    //     }else{
    //         console.log(response.data);
    //     }
       
    // })
    // .catch(function (error){
    //     console.log(error);
    // })

}

//     axios.get('http://localhost:4000/delete-product/'+id.value)
//             .then(res => console.log(res));

// }

function DeleteProduct() {

    return (
        <div className="deleteproduct">
            <HeaderComponent/>
            <h1>Delete Product</h1>

            <div className="form__container">

                    <div className="input__div">
                        <label className="labels">Product Model</label>
                        <input id="prodID" placeholder="Enter product ID" className="fields"></input>
                    </div>

                    <div className="input__div">
                        <button onClick={delProduct} className="add__prodbtn">Delete Product</button>
                    </div>               
            </div>
        </div>
    );
}

export default DeleteProduct;