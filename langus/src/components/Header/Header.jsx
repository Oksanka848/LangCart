import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddWord from '../AddWord/AddWord';
import Cards from '../Cards/Cards';
import style from './style.module.scss';
import WordList from '../WordList/WordList';
import Slider from '../Slider/Slider';

export default function Header() {
  return (
    <>
    
    
    <Router>
    
    <div className={style.header_container}>
    <div className={style.header_wrapp}>
      
        <nav>
          <ul>
            <li>
              <Link to="/WordList">WordList</Link>
            </li>
            <li>
              <Link to="/Cards">Cards</Link>
            </li>
            <li>
              <Link to="/AddWord">AddWord</Link>
            </li>
            <li>
              <Link to="/Slider">Slider</Link>
            </li>
          </ul>
        </nav>
        </div>
        </div>
      
      
        <Routes>
          <Route path="/Cards" element={<Cards />} />
          <Route path="/WordList" element={<WordList />} />
          <Route path="/AddWord" element={<AddWord />} />
          <Route path="/Slider" element={<Slider />} />
        </Routes>
      
    </Router>
    
      
    </>
  );
}

/*function Home() {
  return <h2>Home</h2>;
}*/

/*function Cards() {
  return <h2>Cards</h2>;
}*/

/*function Users() {
  return <h2>Users</h2>;
}
*/
