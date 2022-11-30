import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Loginpage";
import Signup from "./components/Signuppage";
import Home from "./components/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/BarterSmarter/Loginpage" element={<Login />} />
      <Route path="/BarterSmarter/Signuppage" element={<Signup />} />
      <Route path="/BarterSmarter/Homepage" element={<Home />} />
    </>
  )
);
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
