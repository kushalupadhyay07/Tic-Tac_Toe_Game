import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Websitepages/Home";
import Docs from "./Websitepages/Docs";
import About from "./Websitepages/About";
import Navbar from "./Components/Navbar";
import ContextProvider from "./store/Context";

export default function App() {
  return (
    <div className="bg-red-500 ">
      <ContextProvider>
        <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/docs" element={<Docs></Docs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}
