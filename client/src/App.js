// import Button from './components/'
import { Auth, Home } from "./pages";
import { LoginForm, RegisterForm } from "./modules";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/signin" />}
        ></Route>
        <Route path="/" element={<Auth />}>
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<RegisterForm />} />
          <Route path="/signup/verify" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
