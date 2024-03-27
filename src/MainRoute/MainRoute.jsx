import { Route, Routes } from "react-router";
// import Home from "../Pages/DashBoard";
// import Login from "../Pages/Login";
import DashBoard from "../Pages/DashBoard";
import HOME from "../Pages/Home";
import Login from "../Pages/Login";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default MainRoute;
