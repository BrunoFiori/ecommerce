import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../view/layouts/Layout";
import Login from "../view/pages/Login";
import Storages from "../view/pages/Storages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Storages />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>Nao Encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
