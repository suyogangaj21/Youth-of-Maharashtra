import { Route, Routes } from "react-router-dom";
import JoinUs from "./pages/joinus";
import MemberLogin from "./pages/MemberLogin";
import OrgLogin from "./pages/OrgLogin";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import Footprints from "./pages/Footprints";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/join-us" Component={JoinUs}></Route>

        <Route path="/FootPrints" Component={Footprints}></Route>
        <Route path="/Resources" Component={Resources}></Route>
        <Route path="/Events"></Route>
        <Route path="/ContactUs" Component={ContactUs}></Route>
        <Route path="/MemberLogin" Component={MemberLogin}></Route>
        <Route path="/OrgLogin" Component={OrgLogin}></Route>
      </Routes>
    </>
  );
};

export default App;
