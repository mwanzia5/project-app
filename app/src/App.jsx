import React  from "react";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Order from "./pages/Order";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <div>
       
      
      
      <Navbar/>
      
         <Routes>
              <Route path="/" element={<Home/>}> </Route>
              
              <Route path="order" element={<Order/>}></Route>
         </Routes>
  
        
    </div>
  )
}



export default App;


