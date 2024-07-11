import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterC from "./components/Footer";



function App() {
  return (
     <div>
       <Navbar/>
       <Outlet/>
       <FooterC/>
     </div>
  )
}

export default App;
