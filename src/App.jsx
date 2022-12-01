import './App.css'
import { Navbar, Footer } from './components'
import { RecipeContextProvider } from "./context/Context";
import MyRoutes from "./routes/Routes"
import { CartProvider } from 'react-use-cart';
import { Analytics } from '@vercel/analytics/react';

export default function App() {

  return (
    <div className="App">
      <RecipeContextProvider>
          <CartProvider>
            <Analytics />
              <header className="navbar navbar-expand-sm bg-second-color navbar-dark sm-fs">
                <Navbar/>
              </header>
              <main>
              <Analytics />
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