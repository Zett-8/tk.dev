import React from 'react'
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const header = props => {
  return (
    <React.Fragment>
      <div className="menu" style={props.menuIsOpen ? null : { display: 'none', height: '0', marginTop: '-50px' }}>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#top">Top</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#about">About</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#works">Works</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#SR">Skills</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#contact">Contact</AnchorLink></p>
      </div>

      <div role="button" aria-label="menu open button" className={props.menuIsOpen ? 'button_C' : 'button_N'} onClick={() => props.hamburgerClicked()}>
        <span className="button_Hum" />
      </div>
    </React.Fragment>
  )
}

header.propTypes = {
  menuIsOpen: PropTypes.bool,
  hamburgerClicked: PropTypes.func,
}

export default header
