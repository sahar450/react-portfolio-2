import React, { Component } from 'react';
import Header from './header/Header'
import './App.css';
import Lind from './linding/lind';
import About from './about/About';
import Txtbox from './boxtxt/txtbox';
import Footer from './footer/footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Lind></Lind>
        <About></About>
        <Txtbox></Txtbox>
        <Footer></Footer>
      </div>
    );
  }
}

export default App; // این خط را بررسی کنید


