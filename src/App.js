import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundBlurSvg from "./components/HomeComponents/BackgroundBlurSvg";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {

  const [ moveToEle , setMoveToEle] = React.useState(null);  
  
  return (
    <>
    <ScrollToTop/>
      <Header setMoveToEle={setMoveToEle}/>
      <BackgroundBlurSvg/>
      <AnimatePresence>
      <Routes>
        <Route index element={<Home moveToEle={moveToEle} setMoveToEle={setMoveToEle}/>}/>
        <Route path={"/Work/:case"} element={<OurWork />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
