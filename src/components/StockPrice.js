import React, { Component } from 'react'
import StockContainer from './StockContainer'

class StockPrice extends Component {
  state = {
    stocks: [],
    price: ''
  }

  componentDidMount() {
    console.log('component mounted')
    this.getStockApi()
    setInterval(this.getStockApi, 60000)
  }

  getStockApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log({ json })
        this.setState({
          stocks: Object.values(json.data)
        })
      })
  }

  render() {
    console.log('rendering new price')
    return (
      <>
        <main className="main-container">
          {this.state.stocks.map((stock, index) => {
            return (
              <>
                <StockContainer
                  num={index}
                  id={stock.id}
                  name={stock.name}
                  symbol={stock.symbol}
                  price={stock.quotes.USD.price.toFixed(2)}
                  percent1hr={stock.quotes.USD.percent_change_1h}
                  percent24hr={stock.quotes.USD.percent_change_24h}
                  percent7day={stock.quotes.USD.percent_change_7d}
                />
              </>
            )
          })}
        </main>
      </>
    )
  }
}

export default StockPrice
