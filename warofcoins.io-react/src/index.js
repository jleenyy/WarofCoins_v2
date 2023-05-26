import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Tokenomics from './views/tokenomics'
import Membership from './views/membership'
import Page from './views/page'
import Home from './views/home'
import AMMAndLiquidityPool from './views/amm-and-liquidity-pool'
import WhatIsWarOfCoins from './views/what-is-war-of-coins'
import OptionsEngine from './views/options-engine'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Tokenomics} exact path="/tokenomics" />
        <Route component={Membership} exact path="/membership" />
        <Route component={Page} path="**" />
        <Route component={Home} exact path="/" />
        <Route
          component={AMMAndLiquidityPool}
          exact
          path="/amm-and-liquidity-pool"
        />
        <Route
          component={WhatIsWarOfCoins}
          exact
          path="/what-is-war-of-coins"
        />
        <Route component={OptionsEngine} exact path="/options-engine" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
