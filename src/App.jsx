import "./GlobalStyles.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AuthLayout from "./pages/AuthLayout";

const App = () => {
  return (
    <div className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
