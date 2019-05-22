import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <>
        <section className="nav-section">
          <div className="nav-bar">
            <p>Sym</p>
            <p>Coin</p>
            <p>Current Price</p>
            <p>1hour</p>
            <p>24Hour</p>
            <p>7Day</p>
          </div>
        </section>
      </>
    )
  }
}

export default NavBar
