import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import FAQ from "./pages/FAQ";
import Dasboardindex from "./pages/dashboard/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dashboard" element={<Dasboardindex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
