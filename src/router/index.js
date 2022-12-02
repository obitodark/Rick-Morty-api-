import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { PageHome, PageEpisodos } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<PageHome to="/Character" replace />} />
          {/* <Route index path="/Character" element={<PageHome />} /> */}
          <Route path="/Episode" element={<PageEpisodos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

// rutas => https://dev.to/franklin030601/proteccion-de-rutas-con-react-router-dom-144j
