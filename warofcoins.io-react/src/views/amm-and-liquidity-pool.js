import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './amm-and-liquidity-pool.css'

const AMMAndLiquidityPool = (props) => {
  return (
    <div className="am-and-liquidity-pool-container">
      <Helmet>
        <title>AMM-and-Liquidity-Pool - WarofCoins.io</title>
        <meta
          name="description"
          content="War of Coins AMM, liquidity pool, risk management strategy, and fund allocation information."
        />
        <meta
          property="og:title"
          content="AMM-and-Liquidity-Pool - WarofCoins.io"
        />
        <meta
          property="og:description"
          content="War of Coins AMM, liquidity pool, risk management strategy, and fund allocation information."
        />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="am-and-liquidity-pool-container01">
        <h1 className="am-and-liquidity-pool-text">AMM and Liquidity Pool</h1>
        <div className="am-and-liquidity-pool-container02">
          <span className="am-and-liquidity-pool-text01">
            War of Coins is a DeFi product that utilizes the Automatic Market
            Making (AMM) protocol. The AMM functions rely on liquidity pools,
            liquidity providers, and risk management.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="am-and-liquidity-pool-container03">
          <h1 className="am-and-liquidity-pool-text02 Heading">
            Liquidity Pool
          </h1>
          <span className="am-and-liquidity-pool-text03">
            <span>
              War of Coins implemented mechanisms to create and maintain
              liquidity pools which guarantees the system’s liquidity to always
              have enough funds to pay the user at the time of option maturity.
              There are separate pools corresponding to each option’s underlying
              asset, i.e., LP for ETH, LP for Bitcoin, etc.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Initially, War of Coins will only support liquidity pools composed
              of stablecoins like Tether (USDT), which means users who purchase
              options with USDT will get paid in USDT, regardless of the
              option&apos;s underlying asset type.
            </span>
            <br className="Content"></br>
          </span>
        </div>
        <div className="am-and-liquidity-pool-container04">
          <h1 className="am-and-liquidity-pool-text09 Heading">
            Fund allocation
          </h1>
          <span className="am-and-liquidity-pool-text10">
            <span>
              Generally, the liquidity pool is never exposed to risk at any
              time. Rather, only a portion of the total funds in the liquidity
              pool is allocated for current active sessions. On one hand, it
              reduces the available liquidity for each session, on the other
              hand, it guarantees continuous operation even when one of sessions
              encounters the maximum payout.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
          </span>
        </div>
        <div className="am-and-liquidity-pool-container05">
          <h1 className="am-and-liquidity-pool-text13 Heading">
            Risk management strategy and slots-like risk exposure
          </h1>
          <ol className="am-and-liquidity-pool-ul list">
            <li className="list-item">
              <span>
                {' '}
                The allocated fund for each session consists of several slots
                which corresponds to various maximum payout levels (100x, 50x,
                20x, 10x, 5x, 2x). The value of the slots should be proportional
                to the maximum payout level. If 100x part contains 1 million
                USDT, then 50x part should contain 0.5 million, and 2x part
                should contain 0.02 million. Each slot can accept orders up to a
                total amount of 10K USDT.
              </span>
            </li>
            <li className="list-item">
              <span>
                System operation starts with the 100x slot being active.
              </span>
            </li>
            <li className="list-item">
              <span>
                Once the total of purchase placed on current slot is exhausted,
                the system will switch to a lower payout slot corresponding to a
                new maximum payout level. For example, when the 100x slot of the
                session fund is exhausted, the system will switch to the 50x
                slot and maximum payout become 50x for the new purchase.
              </span>
            </li>
            <li className="list-item">
              <span>
                The maximum allowed single and total purchase amount is applied
                to each user for each session. The exact amount is configurable
                depend on session&apos;s fund size.
              </span>
            </li>
            <li className="list-item">
              <span>
                The system constantly monitors extreme volatility and sudden
                price movement. Both cases will indicate an anomaly of the price
                movement from the engine model’s perspective, and as a
                consequence, purchases will be halted to protect both users and
                LP’s when it happens.
              </span>
            </li>
          </ol>
        </div>
        <div className="am-and-liquidity-pool-container06">
          <h1 className="am-and-liquidity-pool-text19 Heading">
            Liquidity pool fund allocation example
          </h1>
          <div className="am-and-liquidity-pool-container07">
            <div className="am-and-liquidity-pool-container08">
              <div className="am-and-liquidity-pool-container09">
                <span className="am-and-liquidity-pool-text20">LP Size</span>
              </div>
              <div className="am-and-liquidity-pool-container10">
                <span className="am-and-liquidity-pool-text21 Content">
                  1,000,000
                </span>
              </div>
            </div>
            <div className="am-and-liquidity-pool-container11">
              <div className="am-and-liquidity-pool-container12">
                <span className="am-and-liquidity-pool-text22">
                  Session fund
                </span>
              </div>
              <div className="am-and-liquidity-pool-container13">
                <span className="am-and-liquidity-pool-text23 Content">
                  200,000
                </span>
              </div>
            </div>
          </div>
          <div className="am-and-liquidity-pool-container14">
            <div className="am-and-liquidity-pool-container15">
              <div className="am-and-liquidity-pool-container16">
                <span className="am-and-liquidity-pool-text24">Slot</span>
              </div>
              <div className="am-and-liquidity-pool-container17">
                <span className="am-and-liquidity-pool-text25 Content">
                  100x
                </span>
              </div>
              <div className="am-and-liquidity-pool-container18">
                <span className="Content">50x</span>
              </div>
              <div className="am-and-liquidity-pool-container19">
                <span className="Content">20x</span>
              </div>
              <div className="am-and-liquidity-pool-container20">
                <span className="Content">10x</span>
              </div>
              <div className="am-and-liquidity-pool-container21">
                <span className="Content">5x</span>
              </div>
              <div className="am-and-liquidity-pool-container22">
                <span className="Content">2x</span>
              </div>
            </div>
            <div className="am-and-liquidity-pool-container23">
              <div className="am-and-liquidity-pool-container24">
                <span className="am-and-liquidity-pool-text31">
                  Allocated funds from liquidity pool
                </span>
              </div>
              <div className="am-and-liquidity-pool-container25">
                <span className="Content">100,000</span>
              </div>
              <div className="am-and-liquidity-pool-container26">
                <span className="Content">50,000</span>
              </div>
              <div className="am-and-liquidity-pool-container27">
                <span className="Content">20,000</span>
              </div>
              <div className="am-and-liquidity-pool-container28">
                <span className="Content">10,000</span>
              </div>
              <div className="am-and-liquidity-pool-container29">
                <span className="Content">5000</span>
              </div>
              <div className="am-and-liquidity-pool-container30">
                <span className="Content">15,000</span>
              </div>
            </div>
            <div className="am-and-liquidity-pool-container31">
              <div className="am-and-liquidity-pool-container32">
                <span className="am-and-liquidity-pool-text38">
                  Available units
                </span>
              </div>
              <div className="am-and-liquidity-pool-container33">
                <span className="Content">1000</span>
              </div>
              <div className="am-and-liquidity-pool-container34">
                <span className="Content">1000</span>
              </div>
              <div className="am-and-liquidity-pool-container35">
                <span className="Content">1000</span>
              </div>
              <div className="am-and-liquidity-pool-container36">
                <span className="Content">1000</span>
              </div>
              <div className="am-and-liquidity-pool-container37">
                <span className="Content">1000</span>
              </div>
              <div className="am-and-liquidity-pool-container38">
                <span className="Content">7500</span>
              </div>
            </div>
          </div>
          <div className="am-and-liquidity-pool-container39">
            <div className="am-and-liquidity-pool-container40">
              <div className="am-and-liquidity-pool-container41">
                <span className="am-and-liquidity-pool-text45">
                  Total units for each direction:
                </span>
              </div>
              <div className="am-and-liquidity-pool-container42">
                <span className="am-and-liquidity-pool-text46 Content">
                  12,500
                </span>
              </div>
            </div>
            <div className="am-and-liquidity-pool-container43">
              <div className="am-and-liquidity-pool-container44">
                <span className="am-and-liquidity-pool-text47">
                  Maximum session win:
                </span>
              </div>
              <div className="am-and-liquidity-pool-container45">
                <span className="am-and-liquidity-pool-text48 Content">
                  25,000
                </span>
              </div>
            </div>
            <div className="am-and-liquidity-pool-container46">
              <div className="am-and-liquidity-pool-container47">
                <span className="am-and-liquidity-pool-text49">
                  Maximum session loss:
                </span>
              </div>
              <div className="am-and-liquidity-pool-container48">
                <span className="am-and-liquidity-pool-text50 Content">
                  187,500
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default AMMAndLiquidityPool
