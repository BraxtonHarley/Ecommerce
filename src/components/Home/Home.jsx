import React from "react";
import Styles from './styles'
import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron"
import { Container, Row, Col, Image, Carousel } from "react-bootstrap"


const Home = () => (
  <React.Fragment>
    {/* <Jumbotron /> */}
    <Container className="background">
      <h1>Welcome</h1>
      <p>
        <div>
          Welcome to Literally River Water In A Jar. We are the only resource (that we
          know of) where you can literelly buy river water in a jar, and have it
          shipped straight to you for a fee. Now we know you know what rivers are.
          And we know you know what river water is.
        </div>
        <br />
        <h3 className="center">"the only resource (that we know of)"</h3>
        <br />
        So get this. You could just go to any old river and bring a jar and fill it with water.
        Great! Now you have that river water in a jar that you've always wanted. But what if
        you wanted that same river water in jar, but you want to BUY it? Well, that's
        where we come in. Learn more <Link className="here" to="/about"><strong>here</strong></Link>.
      </p>

      <Carousel interval="4000" fade="true" >
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="../../pictures/river1 Cropped.jpg"
            alt="First slide"
           
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../pictures/river2 Cropped.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../pictures/river3 Cropped.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>

      <br />

      <Link to="/products" className="ready"><h1 className="ready">Ready For Yours?</h1></Link>
      <div></div>
     <br/>
      <br />
    </Container>
  </React.Fragment>
);

export default Home;
