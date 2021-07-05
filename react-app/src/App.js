import React from 'react';
import './App.css';
import './Screens/LoginComponent';
import HeaderComponent from "./Components/HeaderComponent";
import ProductScreen from "./Components/ProductScreen";
import AllProducts from "./Screens/AllProducts";
import Carousel from 'react-bootstrap/Carousel'
import pic from './assets/section01-header.jpg';
import pic2 from './assets/iPhone_11_Banner.png';
import pic3 from './assets/2016-Nikon-DSLR-camera-line.jpg';




function App() {

  const user = localStorage.getItem("isLoggedIn");
  console.log("Login Status",user);
  return (

    <>
      
    <div className="App">
      <HeaderComponent/>

      {/* <section className="app__banner">
        <div class="overlay">

        <div class="banner__content">
            <h1 className="product__name">Xiaomi Mi 11</h1>
            <p className="product__desc">108 MP, f/1.9, 26mm (wide), 1/1.33", 0.8µm, PDAF, OIS
13 MP, f/2.4, 123˚ (ultrawide), 1/3.06", 1.12µm
5 MP, f/2.4, (macro), 1/5.0", 1.12µm</p>
            <p className="product__price">Starting at $ 899.99</p>
        </div>
      </div>
      </section> */}

<Carousel style={{height: "500px"}}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
      style={{maxHeight: "450px"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
      style={{maxHeight: "450px"}}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
      style={{maxHeight: "450px"}}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      <ProductScreen/>
      <AllProducts/>
      
    </div>     
    </>
  );
}

export default App;
