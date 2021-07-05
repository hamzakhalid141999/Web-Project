import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginComponent from "./Screens/LoginComponent"
import SignupComponent from "./Screens/SignupComponent"
import AddProduct from "./Screens/AddProduct";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminScreen from './Screens/AdminScreen';
import ProductView from './Screens/ProductView';
import DeleteProduct from './Screens/DeleteProduct';
import UpdateProduct from './Screens/UpdateProduct';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/ProductView" component={ProductView}/>
    <Route exact path="/AdminScreen" component={AdminScreen}/>
    <Route exact path="/Login" component={LoginComponent}/>
    <Route exact path="/Signup" component={SignupComponent}/>
    <Route exact path="/AdminScreen/AddProduct" component={AddProduct}/>
    <Route exact path="/AdminScreen/DeleteProduct" component={DeleteProduct}/>
    <Route exact path="/AdminScreen/UpdateProduct" component={UpdateProduct}/>


  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
