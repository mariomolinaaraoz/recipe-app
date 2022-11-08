import { Home, Store, Dashboard, Login, Sign_Up, NotFound } from '../pages'
import { NewRecipe, ListRecipe } from '../components'
import Auth from "../auth/Auth";
import { Routes, Route } from "react-router-dom";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/sign_up" element={<Sign_Up/>} />
      <Route path="/dashboard/*" element={
          <Auth>
            <Dashboard />
          </Auth>
      }>
        <Route path="new_recipe" element={<NewRecipe/>} />
        <Route path="list_recipe" element={<ListRecipe/>} />
      </Route>

      <Route path="/store" element={
          <Store/>
          // <Cart/>
      } />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}