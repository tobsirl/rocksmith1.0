import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import TopTab from './Layouts/Tab';


class RocksmithApp extends Component {
  render() {
    return (
      <fragment className="App">
      <Header />
      <TopTab />
        <h1>Test</h1>
      <Footer />
      </fragment>
    );
  }
}

export default RocksmithApp;
