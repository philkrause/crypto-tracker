import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-class">
          <i className="fas fa-clock" />
          <span>
            <h1>Crypto Tracker</h1>
          </span>
        </div>
      </>
    )
  }
}

export default Header
