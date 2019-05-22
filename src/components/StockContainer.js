import React, { Component } from 'react'
import StockImage from './StockImage'

class StockContainer extends Component {
  render() {
    return (
      <>
        <section className="stock-container">
          <h1>{this.props.num}</h1>
          <StockImage id={this.props.id} />

          <h2>{this.props.symbol}</h2>
          <h3>{this.props.name}</h3>

          <p>{this.props.price}</p>
          <p>{this.props.percent1hr}</p>
          <p>{this.props.percent24hr}</p>
          <p>{this.props.percent7day}</p>
        </section>
      </>
    )
  }
}

export default StockContainer
