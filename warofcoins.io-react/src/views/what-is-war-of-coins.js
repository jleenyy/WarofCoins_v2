import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './what-is-war-of-coins.css'

const WhatIsWarOfCoins = (props) => {
  return (
    <div className="what-is-war-of-coins-container">
      <Helmet>
        <title>What-is-War-of-Coins - WarofCoins.io</title>
        <meta name="description" content="Learn more about War of Coins!" />
        <meta
          property="og:title"
          content="What-is-War-of-Coins - WarofCoins.io"
        />
        <meta
          property="og:description"
          content="Learn more about War of Coins!"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <div className="what-is-war-of-coins-container1">
        <h1 className="what-is-war-of-coins-text">What is War of Coins?</h1>
        <div className="what-is-war-of-coins-container2">
          <h1 className="what-is-war-of-coins-text01 Heading">
            War of Coins is a gamified trading app.
          </h1>
          <span className="what-is-war-of-coins-text02">
            <span>
              War of Coins is extremely simple to use. You only need to choose
              the direction of the cryptocurrency price - whether it will go up
              or down. The further the price goes in the direction you choose,
              the higher the payout - up to 100 times the amount of purchase.
              For more information about the game, please visit
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.warofcoins.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="what-is-war-of-coins-link"
            >
              our game page
            </a>
            <span>.</span>
          </span>
        </div>
        <div className="what-is-war-of-coins-container3">
          <h1 className="what-is-war-of-coins-text05 Heading">
            Under the hood
          </h1>
          <span className="what-is-war-of-coins-text06">
            <span className="what-is-war-of-coins-text07">
              War of Coins is powered by an option pricing model that has been
              developed and extensively tested by the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>War of Coins </span>
            <span className="what-is-war-of-coins-text09">
              team. The pricing model translates historic variations in
              cryptocurrency prices into price ladders for the payout table.
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="what-is-war-of-coins-text12">
              The system is fed by a price oracle that collects quotes directly
              from major crypto currency exchanges.
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="what-is-war-of-coins-text15">
              All transactions are handled by a smart contract working on a
              public blockchain. The conditions of the purchase (such as amount
              and price ladder at the moment of purchase) are recorded on the
              blockchain and cannot be altered, erased, or forgotten. Upon
              maturity time, the smart contracts record the prices at maturity
              and calculates payouts for all recorded transactions for this
              maturity time.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="what-is-war-of-coins-text18">
              Smart contracts also implement risk management policy and rules.
              All purchases are guaranteed by the liquidity pool, and the
              contract will not accept purchases that can, in the worst-case
              scenario, require payouts that will exceed the amount of funds
              allocated from liquidity pool for the session. The max payout for
              each purchase is determined by smart contract based on risk
              exposure status ranging from 2X to 100X.
            </span>
            <br className="Content"></br>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default WhatIsWarOfCoins
