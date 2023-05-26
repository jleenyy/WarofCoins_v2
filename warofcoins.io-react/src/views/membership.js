import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './membership.css'

const Membership = (props) => {
  return (
    <div className="membership-container">
      <Helmet>
        <title>Membership - WarofCoins.io</title>
        <meta
          name="description"
          content="War of Coins membership levels and benefits - learn more about the War of Coins club and the different membership tiers!"
        />
        <meta property="og:title" content="Membership - WarofCoins.io" />
        <meta
          property="og:description"
          content="War of Coins membership levels and benefits - learn more about the War of Coins club and the different membership tiers!"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="membership-container01">
        <h1 className="membership-text">Membership</h1>
        <div className="membership-container02">
          <h1 className="membership-text01 Heading">Eligibility</h1>
          <span className="membership-text02">
            To be eligible for one of the five membership tiers, you must
            complete one of the qualifications listed under the desired tier. 
          </span>
        </div>
        <div className="membership-container03">
          <div className="membership-container04">
            <div className="membership-container05">
              <img
                alt="War_of_Coins_Captain_Teal"
                src="/membership%20card%20-%20teal-200w.png"
                className="membership-image"
              />
              <span className="membership-text03 Heading">
                <span>Captain Teal</span>
                <br></br>
              </span>
              <span className="membership-text06">L1</span>
              <div className="membership-container06">
                <span className="membership-text07">Costs:</span>
                <span className="membership-text08">100 USDT</span>
                <span className="membership-text09">OR</span>
                <span className="membership-text10">
                  Successfully recruiting 10 members
                </span>
                <span className="membership-text11">OR</span>
                <span className="membership-text12">
                  Community accumulation of 5000 USDT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button className="membership-button button">Learn More</button>
            </div>
            <div className="membership-container07">
              <img
                alt="War_of_Coins_Major_Silver"
                src="/membership%20card%20-%20silver-200w.png"
                className="membership-image1"
              />
              <span className="membership-text13 Heading">
                <span>Major Silver</span>
                <br></br>
              </span>
              <span className="membership-text16">L1-L2</span>
              <div className="membership-container08">
                <span className="membership-text17">Costs:</span>
                <span className="membership-text18">500 USDT</span>
                <span className="membership-text19">OR</span>
                <span className="membership-text20">
                  Successfully recruiting 50 members
                </span>
                <span className="membership-text21">OR</span>
                <span className="membership-text22">
                  Community accumulation of 10,000 USDT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button className="membership-button1 button">Learn More</button>
            </div>
            <div className="membership-container09">
              <img
                alt="War_of_Coins_Colonel_Gold"
                src="/membership%20card%20-%20gold-200w.png"
                className="membership-image2"
              />
              <span className="membership-text23 Heading">
                <span>Colonel Gold</span>
                <br></br>
              </span>
              <span className="membership-text26">L1-L4</span>
              <div className="membership-container10">
                <span className="membership-text27">Costs:</span>
                <span className="membership-text28">1000 USDT</span>
                <span className="membership-text29">OR</span>
                <span className="membership-text30">
                  Successfully recruiting 100 members
                </span>
                <span className="membership-text31">OR</span>
                <span className="membership-text32">
                  Community accumulation of 20,000 USDT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button className="membership-button2 button">Learn More</button>
            </div>
            <div className="membership-container11">
              <img
                alt="War_of_Coins_General_Rose"
                src="/membership%20card%20-%20rose%20-200w.png"
                className="membership-image3"
              />
              <span className="membership-text33 Heading">General Rose</span>
              <span className="membership-text34">L1-L6</span>
              <div className="membership-container12">
                <span className="membership-text35">Costs:</span>
                <span className="membership-text36">3000 USDT</span>
                <span className="membership-text37">OR</span>
                <span className="membership-text38">
                  Successfully recruiting 400 members
                </span>
                <span className="membership-text39">OR</span>
                <span className="membership-text40">
                  Community accumulation of 60,000 USDT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button className="membership-button3 button">Learn More</button>
            </div>
            <div className="membership-container13">
              <img
                alt="War_of_Coins_Admiral_Black"
                src="/membership%20card%20-%20black-200w.png"
                className="membership-image4"
              />
              <span className="membership-text41 Heading">Admiral Black</span>
              <span className="membership-text42">L1-L7</span>
              <div className="membership-container14">
                <span className="membership-text43">Costs:</span>
                <span className="membership-text44">5000 USDT</span>
                <span className="membership-text45">OR</span>
                <span className="membership-text46">
                  Successfully recruiting 800 members
                </span>
                <span className="membership-text47">OR</span>
                <span className="membership-text48">
                  Community accumulation of 120,000 USDT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button className="membership-button4 button">Learn More</button>
            </div>
          </div>
        </div>
        <div className="membership-container15">
          <h1 className="membership-text49 Heading">Membership levels</h1>
          <span className="membership-text50">
            <span>
              Every tier higher than Captain Teal will include level benefits
              from the previous tiers, with Admiral Black being the highest
              tier.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="membership-membership-levels"></div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Membership
