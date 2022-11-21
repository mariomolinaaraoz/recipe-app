import './App.css'
import { Navbar, Footer } from './components'
import { RecipeContextProvider } from "./context/Context";
import MyRoutes from "./routes/Routes"
import { CartProvider } from 'react-use-cart';

export default function App() {

  return (
    <div className="App">
      <RecipeContextProvider>
          <CartProvider>
              <header className="navbar navbar-expand-sm bg-second-color navbar-dark sm-fs">
                <Navbar/>
              </header>
              <main>
                <MyRoutes/>
              </main>
              <footer>
                <Footer/>
              </footer>
          </CartProvider>
      </RecipeContextProvider>
    </div>
  );
}