import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>
    </Router>
  );
}

export default App;
