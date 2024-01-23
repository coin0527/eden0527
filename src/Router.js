import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
