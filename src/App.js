import React from 'react';
import './App.css';
import MemoryGame from './Memorygame';
import Tictactoe from './Tictactoe';
import Puzzle from './Puzzle';
import Calculator from './Calculator';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Memory Game</Link>
            </li>
            <li>
              <Link to="/puzzle">Puzzle</Link>
            </li>
            <li>
              <Link to="/tictactoe">Kolko i krzyzyk</Link>
            </li>
            <li>
              <Link to="/calculator">Kalkulator i zmiana diva</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/puzzle">
            <Puzzle/>
          </Route>
          <Route path="/tictactoe">
            <Tictactoe/>
          </Route>
          <Route path="/calculator">
            <Calculator/>
          </Route>
          <Route path="/">
            <MemoryGame/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
