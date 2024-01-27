import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackgroundBlurSvg from "./components/HomeComponents/BackgroundBlurSvg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BackgroundBlurSvg/>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
