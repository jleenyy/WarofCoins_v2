import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-container ${props.rootClassName} `}>
      <img
        alt={props.War_of_Coins_Membership_Cards1}
        src={props.War_of_Coins_Membership_Cards}
        className="hero-image"
      />
      <img
        alt={props.War_of_Coins_Club_Logo}
        src={props.War_of_Coins_Club_Logo1}
        className="hero-image1"
      />
    </div>
  )
}

Hero.defaultProps = {
  War_of_Coins_Membership_Cards1: 'image',
  War_of_Coins_Membership_Cards: '/floating%20cards-1500h.png',
  War_of_Coins_Club_Logo1: '/warofcoins%20club%20name.svg',
  rootClassName: '',
  War_of_Coins_Club_Logo: 'image',
}

Hero.propTypes = {
  War_of_Coins_Membership_Cards1: PropTypes.string,
  War_of_Coins_Membership_Cards: PropTypes.string,
  War_of_Coins_Club_Logo1: PropTypes.string,
  rootClassName: PropTypes.string,
  War_of_Coins_Club_Logo: PropTypes.string,
}

export default Hero
