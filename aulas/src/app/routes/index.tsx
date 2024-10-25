import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" Component={Dashboard} />

        <Route path="*" Component={() => <Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
