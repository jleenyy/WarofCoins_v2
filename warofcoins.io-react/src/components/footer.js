import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/" className="footer-navlink">
            <img
              alt={props.War_of_Coins_Logo1}
              src={props.War_of_Coins_Logo}
              className="footer-image"
            />
          </Link>
          <Link to="/" className="footer-navlink1">
            <img
              alt={props.War_of_Coins_Club_Logo1}
              src={props.War_of_Coins_Club_Logo}
              className="footer-image1"
            />
          </Link>
        </div>
        <div className="footer-container1">
          <div className="footer-about-war-of-coins-container">
            <span className="footer-text">{props.About_War_of_Coins}</span>
            <Link to="/what-is-war-of-coins" className="footer-navlink2">
              {props.What_is_War_of_Coins}
            </Link>
            <Link to="/membership" className="footer-navlink3">
              {props.Membership}
            </Link>
            <a
              href="https://www.warofcoins.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              {props.War_of_Coins_Game}
            </a>
          </div>
          <div className="footer-backend-container">
            <span className="footer-text1">{props.Backend}</span>
            <Link to="/options-engine" className="footer-navlink4">
              {props.Options_Engine}
            </Link>
            <Link to="/tokenomics" className="footer-navlink5">
              {props.Tokenomics}
            </Link>
            <Link to="/amm-and-liquidity-pool" className="footer-navlink6">
              {props.War_of_Coins_AMM_Liquidity}
            </Link>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-socials">
            <span className="footer-text2">{props.Connect_with_Us}</span>
            <div className="footer-container3">
              <div className="footer-icon-group">
                <a
                  href="https://twitter.com/warccoin"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="footer-icon"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                      className=""
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://discord.com/invite/7sUxu7Wu46"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <img
                    alt={props.Discord_Logo1}
                    src={props.Discord_Logo}
                    className="footer-image2"
                  />
                </a>
                <a
                  href="https://t.me/WARCcoin"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon2">
                    <path
                      d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"
                      className=""
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-separator"></div>
      <span className="footer-text3">© War of Coins, All Rights Reserved.</span>
    </footer>
  )
}

Footer.defaultProps = {
  War_of_Coins_AMM_Liquidity: 'AMM and Liquidity Pool',
  Backend: 'Backend',
  War_of_Coins_Logo: '/warofcoins%20logo-02-200h.png',
  Membership: 'Membership',
  Options_Engine: 'Options Engine',
  War_of_Coins_Club_Logo: '/warofcoins%20club%20name.svg',
  Tokenomics: 'Tokenomics',
  What_is_War_of_Coins: 'What is War of Coins?',
  Discord_Logo: '/discord-mark-white.svg',
  War_of_Coins_Game: 'War of Coins Game',
  War_of_Coins_Logo1: 'logo',
  Connect_with_Us: 'Connect with Us',
  Discord_Logo1: 'image',
  War_of_Coins_Club_Logo1: 'image',
  rootClassName: '',
  About_War_of_Coins: 'About War of Coins',
}

Footer.propTypes = {
  War_of_Coins_AMM_Liquidity: PropTypes.string,
  Backend: PropTypes.string,
  War_of_Coins_Logo: PropTypes.string,
  Membership: PropTypes.string,
  Options_Engine: PropTypes.string,
  War_of_Coins_Club_Logo: PropTypes.string,
  Tokenomics: PropTypes.string,
  What_is_War_of_Coins: PropTypes.string,
  Discord_Logo: PropTypes.string,
  War_of_Coins_Game: PropTypes.string,
  War_of_Coins_Logo1: PropTypes.string,
  Connect_with_Us: PropTypes.string,
  Discord_Logo1: PropTypes.string,
  War_of_Coins_Club_Logo1: PropTypes.string,
  rootClassName: PropTypes.string,
  About_War_of_Coins: PropTypes.string,
}

export default Footer
