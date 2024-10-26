//Importar as tecnologias
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

//Criar a exportação das rotas
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" Component={Login} />
        <Route path="/pagina-inicial" Component={Dashboard} />

        <Route path="*" Component={() => <Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
