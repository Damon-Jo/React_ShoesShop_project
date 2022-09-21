import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import  bg from './img/bg.png';
import {useState} from "react";
import data from "./data.js"
import { Routes, Route, Link } from "react-router-dom";

function App() {

  let [shoes] = useState(data)

  
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link> */}
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link" to="/detail">상세페이지</Link>

          </Nav>
        </Container>
      </Navbar>



    {/* to create 2 page -->by using Route */}
    <Routes>
      <Route path="/" element={
        <>
          <div className="main-bg" style={{backgroundImage : 'url(' + bg +')'}}></div>

          <div className='container'>
            <div className='row'>
              {  
                shoes.map(function(a,i){
                  return(
                    <Card shoes = {shoes[i]} i={i}/>
                  )
                })
              }
            </div>
          </div>
        </>
        

      }/>
      <Route path="/detail" element={<div>상세페이지임</div>}/>

    </Routes>






      

    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" +(props.i +1 )+".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
