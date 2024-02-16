import React, { Component } from 'react';
import LivroLista from './component/LivroLista';
import LivroDados from './component/LivroDados';
import Nav from './component/Nav';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Router>
            <Nav/>
            <Routes>
              <Route path="/" element={<LivroLista />} />
              <Route path="/dados" element={<LivroDados />} />
            </Routes>
          </Router>
        </header>
      </div>
    )
  }
}




