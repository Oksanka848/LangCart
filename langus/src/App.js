
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
export default function App() {
  return (
    <>
    <div className='App'>
    <header>
      <Header/>
    </header>
    <main>
      <Main/>
     
    </main>
    <footer>
    <Footer/>
    </footer>
    </div>
  </>
  );
}


