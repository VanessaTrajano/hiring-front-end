import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyle/>
        <Header/>
      </CartProvider>
    </Router>
  );
}

export default App;
