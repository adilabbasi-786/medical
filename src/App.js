import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import FAQ from "./pages/FAQ";
import Dasboardindex from "./pages/dashboard/index";
import AccountProfile from "./pages/dashboard/AccountProfile/AccountProfile";
import NotificationPrefernce from "./pages/dashboard/notification/NotificationPreference";
import Main from "./pages/dashboard/myteams/Main";
import SecurityPage from "./pages/dashboard/security/SecurityPage";
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
          <Route path="/dashboard/profile" element={<AccountProfile />} />
          <Route
            path="/dashboard/profile/notification"
            element={<NotificationPrefernce />}
          />
          <Route path="/dashboard/profile/myteams" element={<Main />} />
          <Route
            path="/dashboard/profile/security"
            element={<SecurityPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
