import { Route, Routes } from "react-router-dom"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import { ToastContainer } from "react-toastify"
import CategoryLayout from "./app/cases/categories/layout"
import { CategoryCreate } from "./app/cases/categories/create"
import { CategoryEdit } from "./app/cases/categories/edit"
import ProductBrandLayout from "./app/cases/product-brand/layout"
import { ProductBrandCreate } from "./app/cases/product-brand/create"
import { ProductBrandEdit } from "./app/cases/product-brand/edit"
import ProductLayout from "./app/cases/products/layout"
import { ProductCreate } from "./app/cases/products/create"
import { ProductEdit } from "./app/cases/products/edit"
import UserLayout from "./app/cases/users/layout"
import { UserCreate } from "./app/cases/users/create"
import { UserEdit } from "./app/cases/users/edit"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/categories" element={ <CategoryLayout /> }>
              <Route path="new" element={<CategoryCreate />} />
              <Route path=":id" element={<CategoryEdit />} />
          </Route>
          <Route path="/brands" element={ <ProductBrandLayout /> }>
              <Route path="new" element={<ProductBrandCreate />} />
              <Route path=":id" element={<ProductBrandEdit />} />
          </Route>
          <Route path="/products" element={ <ProductLayout /> }>
              <Route path="new" element={<ProductCreate />} />
              <Route path=":id" element={<ProductEdit />} />
          </Route>
          <Route path="/users" element={ <UserLayout /> }>
              <Route path="new" element={<UserCreate />} />
              <Route path=":id" element={<UserEdit />} />
          </Route>
        </Routes>
        
      </main>
      <ToastContainer />
    </div>
  )
}

export default App