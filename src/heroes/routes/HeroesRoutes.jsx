import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../design";
import { DcPage, MarvelPage, HereoPage, InicioPage } from "../pages";
export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="inicio" element={<InicioPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="heroe/:id" element={<HereoPage />} />
        <Route path="/*" element={<Navigate to={"/inicio"} />} />
      </Routes>
    </>
  );
};
