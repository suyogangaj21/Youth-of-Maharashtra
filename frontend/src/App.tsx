import { Route, Routes } from "react-router-dom";
import JoinUs from "./pages/joinus";
import MemberLogin from "./pages/MemberLogin";
import OrgLogin from "./pages/OrgLogin";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/join-us" Component={JoinUs}></Route>

        <Route path="/FootPrints"></Route>
        <Route path="/Resources"></Route>
        <Route path="/Events"></Route>
        <Route path="/ContextUs"></Route>
        <Route path="/MemberLogin" Component={MemberLogin}></Route>
        <Route path="/OrgLogin" Component={OrgLogin}></Route>
      </Routes>
    </>
  );
};

export default App;
