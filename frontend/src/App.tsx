import { Route, Routes } from "react-router-dom";
import JoinUs from "./pages/joinus";
import MemberLogin from "./pages/MemberLogin";
import OrgLogin from "./pages/OrgLogin";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/joinus" Component={JoinUs} />
            
        
        <Route path="/FootPrints" />
        <Route path="/Resources" />
        <Route path="/Events" />
        <Route path="/ContextUs" />
        <Route path="/MemberLogin" Component={MemberLogin}/>
        <Route path="/OrgLogin" Component={OrgLogin}/>
      </Routes>
      
    </>
  );
};

export default App;