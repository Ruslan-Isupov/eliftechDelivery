import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
