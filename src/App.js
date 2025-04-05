import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartContext";

const App = () => {
 return (
    
     <CartProvider>
     <Header/>
     <Meals/>
     </CartProvider>
     
   
  );
}

export default App;
