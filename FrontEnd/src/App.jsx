import { Toaster } from "react-hot-toast";
import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar.jsx";


function App() {
  

  return (
 
      <div>

     <Toaster position="top-right" />
     <Navbar/>
      
      <Outlet/>
     

      </div>       
  )
}

export default App
