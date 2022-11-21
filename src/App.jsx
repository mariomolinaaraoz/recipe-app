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
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/5493813498284"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="aq bi bi-whatsapp"></i>
      </a>
    </div>
  );
}