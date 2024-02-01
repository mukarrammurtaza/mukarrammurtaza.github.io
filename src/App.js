import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackgroundBlurSvg from "./components/HomeComponents/BackgroundBlurSvg";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <>
      <Header />
      <BackgroundBlurSvg/>
      <AnimatePresence>
      <Routes>
        <Route index element={<Home />}/>
        <Route path={"/Work"} element={<OurWork />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
