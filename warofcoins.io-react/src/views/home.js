import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>War of Coins Club - Home - Membership Portal</title>
        <meta
          name="description"
          content="War of Coins club membership portal. Earn rewards for staking! Learn about WARC engine, tokenomics, AMM, liquidity pool, and membership benefits!"
        />
        <meta
          property="og:title"
          content="War of Coins Club - Home - Membership Portal"
        />
        <meta
          property="og:description"
          content="War of Coins club membership portal. Earn rewards for staking! Learn about WARC engine, tokenomics, AMM, liquidity pool, and membership benefits!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6e7157f-ac70-4999-bd5b-bc0dfff01c3c/902d1262-e518-4775-8376-120ffd1fe11f?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <Hero rootClassName="hero-root-class-name"></Hero>
      <div className="home-container1">
        <div className="home-container2">
          <img
            alt="War of Coins Sample Dashboard"
            src="/warc%20passive%20income-01.svg"
            className="home-image"
          />
          <div className="home-container3">
            <h1 className="home-text">
              <span className="home-text1">
                Earn rewards and passive income!
              </span>
              <br className="home-text2"></br>
            </h1>
            <span className="home-text3">
              Crypto staking lets you earn cryptocurrency as a reward for using
              your existing holdings to help provide War of Coins liquidity.
            </span>
          </div>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <div className="home-container6">
            <h1 className="home-text4">
              <span className="home-text5">Invite your friends!</span>
              <br className="home-text6"></br>
            </h1>
            <span className="home-text7">
              Join the War of Coins club membership to gain access to even more
              rewards! We have 5 membership levels to choose from.
            </span>
            <Link to="/membership" className="home-navlink button">
              View memberships
            </Link>
          </div>
          <img
            alt="War of Coins club connections"
            src="/warc%20club%20network.svg"
            className="home-image1"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
