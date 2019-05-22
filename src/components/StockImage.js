import React, { Component } from 'react'

class StockImage extends Component {
  render() {
    return (
      <img
        src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${
          this.props.id
        }.png`}
      />
    )
  }
}

export default StockImage
