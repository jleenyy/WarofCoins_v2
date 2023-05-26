import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - WarofCoins.io</title>
        <meta name="description" content="War of Coins - Page Not Found" />
        <meta property="og:title" content="Page - WarofCoins.io" />
        <meta
          property="og:description"
          content="War of Coins - Page Not Found"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <div className="page-container1">
        <h1 className="page-text">Whoops!</h1>
        <div className="page-container2">
          <h1 className="page-text1 Heading">
            The page you were looking for does not exist.
          </h1>
          <div className="page-container3">
            <Link to="/" className="page-navlink button">
              Go big
            </Link>
            <span className="page-text2">OR</span>
            <Link to="/" className="page-navlink1 button">
              Go home
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Page
