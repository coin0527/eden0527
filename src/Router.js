import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./Home/Banner";
import { routes } from "./routes";
import { Aboutme } from "./Home/Aboutme";
import { Skills } from "./Home/Skills";
import { Archiving } from "./Home/Archiving";
import { Project } from "./Home/Project";
import { Career } from "./Home/Career";
import { License } from "./Home/License";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.ba} element={<Banner />} />
        <Route path={routes.ab} element={<Aboutme />} />
        <Route path={routes.sk} element={<Skills />} />
        <Route path={routes.ar} element={<Archiving />} />
        <Route path={routes.pr} element={<Project />} />
        <Route path={routes.ca} element={<Career />} />
        <Route path={routes.la} element={<License />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
