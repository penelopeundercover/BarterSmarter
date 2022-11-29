import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "./components/loginpage";
import "./components/signuppage";
import "./components/homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/BarterSmarter/loginpage" element={<Login />} />
      <Route path="/BarterSmarter/signuppage" element={<Signup />} />
      <Route path="/BarterSmarter/homepage" element={<Home />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <loginpage />
      <signuppage />
      <homepage />
    </div>
  );
}

export default App;
