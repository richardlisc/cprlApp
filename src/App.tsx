import React, { Component } from 'react';
import './App.css';
import logo from './logo47x50alpha.png';
const io = require('socket.io-client');

var navbarItems = [
  'Stock',
  'Machine Learning',
  'BlaBla'
]

interface yoRes {
  haha: string
}

class App extends Component {

  componentDidMount() {
    const socket = io('http://localhost:8000');
    socket.on('yo',(res: yoRes)=>{console.log(res)})
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="localhost:3000">
          <img src={logo} alt="logo"></img>
        </a>
        <ul className="navbar-nav">
          {
            navbarItems.map((navbarItem) => {
              return (
                <li className="nav-item">
                  <a className="nav-link" href="localhost:3000">{navbarItem}</a>
                </li>
              )
            })
          }
        </ul >
      </nav >
    );
  }
}

export default App;
