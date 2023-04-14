//import Main from '../../components/Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { BrowserRouter as Router } from "react-router-dom";
import Main from '../Main/Main';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
        <Main/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
