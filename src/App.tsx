import { Route, Routes } from "react-router-dom";
// import { Login } from "./pages/auth/login";
import AppLayout from "./layout/layout";
import { ProductsTable } from "./pages/productsTable/products.table";
import { AddProduct } from "./pages/add/add.product";
import Dashboart from "./pages/dashboard/dashboart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboart />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="products" element={<ProductsTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
