import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackgroundBlurSvg from "./components/HomeComponents/BackgroundBlurSvg";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import OurWork from "./pages/OurWork";
import ScrollToTop from "./components/ScrollToTop";
import Industry from "./pages/Industry";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <BackgroundBlurSvg/>
      <AnimatePresence>
      <Routes>
        <Route index element={<Home />}/>
        <Route path={"/Work/:case"} element={<OurWork />} />
        <Route path={"/industry"} element={<Industry />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
