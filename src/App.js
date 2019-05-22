import React, { Component } from 'react'
import Header from './components/Header'
import StockPrice from './components/StockPrice'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
        <StockPrice />
      </>
    )
  }
}

export default App
