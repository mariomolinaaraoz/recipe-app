import './App.css'
import { Navbar, Footer } from './components'
import { RecipeContextProvider } from "./context/Context";
import MyRoutes from "./routes/Routes"
import { CartProvider } from 'react-use-cart';

export default function App() {

  return (
    <div className="App layout">
      <RecipeContextProvider>
          <CartProvider>
              <Navbar/>
              <MyRoutes/>
          </CartProvider>
          <Footer/>
      </RecipeContextProvider>
    </div>
  );
}