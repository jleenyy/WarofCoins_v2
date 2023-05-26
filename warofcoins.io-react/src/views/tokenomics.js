import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './tokenomics.css'

const Tokenomics = (props) => {
  return (
    <div className="tokenomics-container">
      <Helmet>
        <title>Tokenomics - WarofCoins.io</title>
        <meta
          name="description"
          content="Learn more about War of Coin's tokenomics, liquidity pool, and staking policies."
        />
        <meta property="og:title" content="Tokenomics - WarofCoins.io" />
        <meta
          property="og:description"
          content="Learn more about War of Coin's tokenomics, liquidity pool, and staking policies."
        />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="tokenomics-container1">
        <h1 className="tokenomics-text">Tokenomics</h1>
        <div className="tokenomics-container2">
          <div className="tokenomics-stat">
            <span className="tokenomics-text01">Token Name</span>
            <h1 className="tokenomics-text02">WARC</h1>
          </div>
          <div className="tokenomics-stat1">
            <span className="tokenomics-text03">Total Supply</span>
            <h1 className="tokenomics-text04">1B</h1>
          </div>
        </div>
        <div className="tokenomics-container3">
          <div className="tokenomics-stat2">
            <h1 className="tokenomics-text05">60%</h1>
            <span className="tokenomics-text06">Reserved for Mining</span>
            <span className="tokenomics-text07">Action mining</span>
          </div>
          <div className="tokenomics-stat3">
            <h1 className="tokenomics-text08">20%</h1>
            <span className="tokenomics-text09">Community and Rewards</span>
            <span className="tokenomics-text10">
              Membership rewards, community activities, etc.
            </span>
          </div>
          <div className="tokenomics-stat4">
            <h1 className="tokenomics-text11">8%</h1>
            <span className="tokenomics-text12">Operations</span>
            <span className="tokenomics-text13">
              Reserved for operation usage, LP staking, WARC staking interest
              payments, etc.
            </span>
          </div>
          <div className="tokenomics-stat5">
            <h1 className="tokenomics-text14">12%</h1>
            <span className="tokenomics-text15">
              <span>WARC Team</span>
              <br></br>
            </span>
            <span className="tokenomics-text18">
              Stakeholders, internal team members, etc.
            </span>
          </div>
        </div>
        <div className="tokenomics-container4">
          <h1 className="tokenomics-text19 Heading">Token unlocking policy</h1>
          <span className="tokenomics-text20 Content">
            <span>
              Tokens owned by War of Coins team members and rewarded to members
              are unlocked with the following terms:
            </span>
            <br></br>
            <span>
              Starting from unlocking date, tokens are released proportional
              weekly, over the course of 1 year.
            </span>
          </span>
        </div>
        <div className="tokenomics-container5">
          <h1 className="tokenomics-text24 Heading">Action mining</h1>
          <span className="tokenomics-text25">
            <span className="Content">
              Users who make option purchases will get WARC rewards with
              following mining parameters:
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="Content">
              1) Maximum rewards per session.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <span className="Content">Example: 10000</span>
            <br className="Content"></br>
            <span className="Content">
              Given the total WARC for mining is 600 million, 24 sessions a day,
              rewards will last for 600M/24/10000 = 2500 days
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="Content">2) WARC reward ratio table:</span>
            <br className="Content"></br>
            <span className="Content">Example:</span>
            <br className="Content"></br>
            <span className="Content">
              The first 20,000 USDT purchase: 20% ratio, total 4000 WARC.
            </span>
            <br className="Content"></br>
            <span className="Content">Purchase from 20,001 U</span>
            <span>SDT</span>
            <span className="Content"> to 50,000 U</span>
            <span>SDT</span>
            <span className="Content">: 10% ratio, total 3000 WARC.</span>
            <br className="Content"></br>
            <span className="Content">Purchase from 50,000 U</span>
            <span>SDT</span>
            <span className="Content"> to 110,000 U</span>
            <span>SDT</span>
            <span className="Content">: 5% ratio, total 3000 WARC.</span>
            <br className="Content"></br>
            <span className="Content">Purchase from 110,000 U</span>
            <span>SDT</span>
            <span className="Content">: no reward.</span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span className="Content">
              3) Both parameters are subject to adjustment according to the
              operation status.
            </span>
            <br className="Content"></br>
          </span>
        </div>
        <div className="tokenomics-container6">
          <h1 className="tokenomics-text61 Heading">Liquidity pool</h1>
          <span className="tokenomics-text62">
            <span className="Content">
              Liquidity providers need to stake WARC to join the liquidity pool.
            </span>
            <br className="Content"></br>
            <span className="Content">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <span className="Content">
              For example, given the staking ratio of 1, user will need to stake
              10,000 WARC to be qualified to deposit 10,000 U
            </span>
            <span>SDT</span>
            <span className="Content"> into the liquidity pool.</span>
            <br className="Content"></br>
            <span className="Content">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <span className="Content">
              The future ratio adjustment depends on mainly 2 factors, the size
              of the liquidity pool and the price of WARC.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
          </span>
        </div>
        <div className="tokenomics-container7">
          <h1 className="tokenomics-text75 Heading">WARC Staking</h1>
          <span className="tokenomics-text76 Content">
            <span>
              Staked WARC also earn interest returns in WARC like money in a
              savings account. The interest comes from the WARC operations pool.
            </span>
            <br></br>
            <br></br>
            <span>
              For example, initial interest rate is set to 0.02% daily, roughly
              7.3% annually.
            </span>
          </span>
        </div>
        <div className="tokenomics-container8">
          <h1 className="tokenomics-text81 Heading">What is staking?</h1>
          <span className="tokenomics-text82">
            <span className="tokenomics-text83">
              Staking is when investors lock up some of their crypto holdings to
              participate in a project in some way - and there are usually
              rewards or benefits to investors if they choose to stake. Some
              projects use staked resources to approve and verify transactions
              on a blockchain. In War of Coins case, we use staked resources to
              provide liquidity for our users. 
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Tokenomics
