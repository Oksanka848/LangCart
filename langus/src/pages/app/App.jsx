//import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { BrowserRouter as Router } from "react-router-dom";
import Main from '../../components/Main/Main';

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
