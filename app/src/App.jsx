import React  from "react";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Order from "./pages/Order";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <div>
       
      
      
      <Navbar/>
      
      <Box backgroundImage= 'https://imgs.search.brave.com/TXbXuAGLOaJUxGByUUOlQfDHAoCnVzBmxRXpVS6uWf0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jMC53/YWxscGFwZXJmbGFy/ZS5jb20vcHJldmll/dy84OTIvMzc2Lzkx/My93ZWRkaW5nLWNh/a2UtZmxvd2Vycy1j/YWtlLXN3ZWV0Lmpw/Zw'
      
      style={{height:'100vh'}}>
         <Routes>
              <Route path="/" element={<Home/>}> </Route>
              
              <Route path="order" element={<Order/>}></Route>
         </Routes>
    </Box>
        
    </div>
  )
}



export default App;


